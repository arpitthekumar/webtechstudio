"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Chip from "../../main/chip/chip";
import { useEffect, useState } from "react";
import allBlogs from "@/app/lib/data"; // Update path if needed

export default function HeroSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setHasAnimated(true);
  }, []);
  const [imageError, setImageError] = useState(false);

  // Get unique categories from all blogs
  const categories = ["All", ...new Set(allBlogs.map((blog) => blog.category))];

  // Filter blogs based on selected category
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
        <motion.div
          key={hasAnimated ? "Hero-section" : ""}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center text-center">
            <Chip text="Our Plans" isDark={true} />
            <h1 className="text-3xl md:text-5xl font-bold pb-3">
              Flexible Pricing for Every Need
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-base">
              Choose a plan that fits your project's scale and budget. Whether
              you need essential services or a complete digital solution, we've
              got you covered.
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mt-10 mb-6">
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

        {/* Blog List */}
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
                    src={imageError ? "/mainpage/image.png" : blog.image}
                    alt={blog.title}
                    fill
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

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`w-8 h-8 rounded-full text-sm font-medium flex items-center justify-center transition-all ${
                  currentPage === i + 1
                    ? "bg-acua-marine text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-acua-marine hover:text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
