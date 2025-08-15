"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Chip from "../../home/main/chip/chip";
import allBlogs from "@/lib/data";

export default function HeroSection() {
  const categories = ["All", ...new Set(allBlogs.map((b) => b.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleBlogs, setVisibleBlogs] = useState<any[]>([]);
  const [image, setImage] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [page, setPage] = useState(1);
  const [stopAutoLoad, setStopAutoLoad] = useState(false);

  const blogsPerPage = 4;

  const observer = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const filteredBlogs =
    selectedCategory === "All"
      ? allBlogs
      : allBlogs.filter((blog) => blog.category === selectedCategory);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const loadBlogs = useCallback(() => {
    const start = (page - 1) * blogsPerPage;
    const newBlogs = filteredBlogs.slice(start, start + blogsPerPage);
    setVisibleBlogs((prev) => [...prev, ...newBlogs]);
  }, [page, filteredBlogs]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      loadBlogs();
    }, 500);
  }, [page, selectedCategory]);

  useEffect(() => {
    setHasAnimated(true);
    setVisibleBlogs([]);
    setPage(1);
    setStopAutoLoad(false);
  }, [selectedCategory]);

  useEffect(() => {
    if (stopAutoLoad || !loadMoreRef.current) return;

    if (!observer.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            if (page < totalPages) {
              setPage((prev) => prev + 1);
            } else {
              setStopAutoLoad(true);
            }
          }
        },
        { threshold: 1 }
      );
    }

    const currentRef = loadMoreRef.current;
    observer.current.observe(currentRef);

    return () => {
      if (currentRef) observer.current?.unobserve(currentRef);
    };
  }, [loadMoreRef, stopAutoLoad, page, totalPages]);

  const handleManualLoad = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
      setStopAutoLoad(false);
    }
  };

  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-6 ">
        <motion.div
          key={hasAnimated ? "Hero-section" : ""}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center text-center">
            <Chip text="Our Blogs" isDark={true} />
            <h1 className="text-3xl md:text-5xl font-bold pb-3">
              Discover Insights, Tips & Trends
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-base">
              Stay updated with our latest articles on development, design,
              marketing, and more.
            </p>
          </div>
        </motion.div>

        <div className="hidden md:flex flex-wrap gap-4 justify-center mt-10 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-acua-marine text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-acua-marine hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-xs md:hidden mx-auto my-10">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-3 rounded-4xl bg-gray-800 text-white border-none shadow-lg focus:outline-none focus:ring-2 focus:ring-acua-marine transition-all duration-300 ease-in-out"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="bg-gray-800">
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {visibleBlogs.map((blog) => {
            const blogIndex =
              visibleBlogs.findIndex((b) => b.slug === blog.slug) + 1;

            return (
              <motion.div
                key={`${blog.slug}-${blogIndex}`}
                className="bg-[linear-gradient(#181823,#101017)] rounded-4xl group border border-transparent hover:border-[var(--acua-marine)] overflow-hidden"
              >
                <div className="p-6">
                  <div className="relative w-full h-[300px] md:h-[600px] overflow-hidden rounded-4xl">
                    {(() => {
                      const isExternal = /^https?:\/\//.test(blog.image);
                      const imageSrc =
                        image[blog.slug] || isExternal
                          ? "/mainpage/image.webp"
                          : blog.image;
                      return (
                        <Image
                          src={imageSrc}
                          alt={blog.title}
                          fill
                          onError={(e) => {
                            // Set the fallback image if the image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = "/mainpage/image.webp"; // Fallback image
                            setImage((prev) => ({
                              ...prev,
                              [blog.slug]: true,
                            }));
                          }}
                          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                      );
                    })()}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between text-bluish-gray text-lg mb-8">
                    <span className="bg-text-bg px-4 py-2 text-base rounded-4xl text-white">
                      {blog.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <div className="flex items-center justify-between mt-4 text-bluish-gray">
                    <Link
                      href={`/Blog/${blog.slug}`}
                      className="text-acua-marine font-bold text-lg mt-2 inline-block"
                    >
                      Read More →{/* {blogIndex} */}
                    </Link>
                    <span>{blog.date}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {loading &&
            page < totalPages &&
            Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse h-[650px] bg-gray-800 rounded-4xl"
              ></div>
            ))}
        </div>

        <div ref={loadMoreRef} className="h-12 mt-10" />

        {stopAutoLoad && page < totalPages && (
          <div className="text-center mt-10">
            <button
              onClick={handleManualLoad}
              className="text-acua-marine px-6 py-3 font-semibold"
            >
              Load More →
            </button>
          </div>
        )}

        {page >= totalPages && (
          <>
            <div className="text-center mt-10">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-acua-marine px-6 py-3 font-semibold"
              >
                Back to Top →
              </button>
            </div>

            <div className="text-center text-gray-400 mt-8">
              🎉 You’ve reached the end of the blog list.
            </div>
          </>
        )}
      </div>
    </section>
  );
}
