"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Chip from "../../main/chip/chip";
import { useEffect, useState } from "react";
import allBlogs from "@/app/lib/data";
import Select from "react-select";

export default function HeroSection() {
  // Extract unique categories from your blogs
  const rawCategories = allBlogs.map((blog) => blog.category);
  const uniqueCategories = Array.from(new Set(rawCategories)).sort();
  // const categories = ["All", ...uniqueCategories];

  const categories = ["All", ...new Set(allBlogs.map((blog) => blog.category))];
  const categoryOptions = categories.map((cat) => ({
    value: cat,
    label: cat,
  }));
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setHasAnimated(true);
  }, []);


  const filteredBlogs =
    selectedCategory === "All"
      ? allBlogs
      : allBlogs.filter((blog) => blog.category === selectedCategory);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const visibleBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-6 md:px-20 max-w-9xl">
        {/* Header */}
        <motion.div
          key={hasAnimated ? "Hero-section" : ""}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
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

        {/* Filter Buttons */}
        <div className="md:flex flex-wrap gap-4 hidden  justify-center mt-10 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
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
          <Select
            options={categoryOptions}
            value={{ value: selectedCategory, label: selectedCategory }}
            onChange={(selected) => {
              const value = selected?.value || "All";
              setSelectedCategory(value);
              setCurrentPage(1);
            }}
            className="text-black"
            isSearchable
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: "#1f2937", // gray-800
                borderColor: "transparent",
                color: "white",
              }),
              singleValue: (base) => ({
                ...base,
                color: "white",
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: "#1f2937", // gray-800
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? "#56dcad" : "#1f2937", // acua-marine or gray-800
                color: "white",
              }),
            }}
          />
        </div>

        {/* Blog Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {visibleBlogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[linear-gradient(#181823,#101017)] rounded-4xl group border border-transparent hover:border-[var(--acua-marine)] overflow-hidden"
            >
              <div className="p-6">
                <div className="relative w-full h-[600px] overflow-hidden rounded-4xl">
                  <Image
                    src={
                      imageErrors[blog.slug]
                        ? "/mainpage/image.png"
                        : blog.image
                    }
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() =>
                      setImageErrors((prev) => ({ ...prev, [blog.slug]: true }))
                    }
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between text-bluish-gray text-lg mb-8">
                  <span className="bg-text-bg px-4 py-2 text-base rounded-4xl text-white">
                    {blog.category}
                  </span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <Link
                  href={`/Blog/${blog.slug}`}
                  className="text-acua-marine font-bold text-lg mt-2 inline-block"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              currentPage === 1
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-acua-marine"
            }`}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  currentPage === page
                    ? "bg-acua-marine text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-acua-marine hover:text-white"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              currentPage === totalPages
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-acua-marine"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
