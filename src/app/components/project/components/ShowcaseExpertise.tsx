"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Chip from "../../main/chip/chip";
import { getBasicProjectCards } from "@/app/lib/projectAdapter";

const allProjects = getBasicProjectCards();

// 🧠 Extract unique categories from the projects dynamically
const uniqueCategories = [
  "All",
  ...new Set(allProjects.flatMap((project) => project.category)),
];

const ShowcaseExpertise = () => {
  const [activeCategory, setActiveCategory] = useState("SEO");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((project) =>
          project.category.includes(activeCategory)
        );

  return (
    <div className="bg-black text-white py-20 px-6 md:px-20">
      {/* ✅ Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center relative"
      >
        <Chip text="Our Work" isDark={true} />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Showcasing Our Expertise
        </h1>
        <p className="text-white max-w-3xl mt-3 text-sm md:text-base">
          Explore some of our recent projects where we’ve transformed ideas into
          powerful digital experiences. From web development to branding, our
          work speaks for itself.
        </p>
      </motion.div>

      {/* ✅ Categories */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {uniqueCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full border-2 ${
              activeCategory === category
                ? "bg-[var(--acua-marine)] text-black"
                : "border-gray-400 text-gray-400 hover:bg-gray-700"
            } transition-all`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ✅ Project Cards */}
      <motion.div
        key={activeCategory}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-12 max-w-9xl mx-auto"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href={project.link}
              className="relative block rounded-4xl overflow-hidden group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* ✅ Image */}
              <motion.div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={550}
                  className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] object-center"
                />

                {/* ✅ Hover Overlay */}
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={
                    hoveredIndex === index
                      ? { y: "0%", opacity: 1 }
                      : { y: "100%", opacity: 0 }
                  }
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[85%] flex flex-col justify-center gap-4 backdrop-blur-lg bg-black/40 rounded-2xl px-4 py-6"
                >
                  <p className="text-xs sm:text-sm border-2 rounded-4xl w-fit px-3 py-1 sm:py-2 text-white border-[var(--acua-marine)] hover:bg-[var(--acua-marine)]">
                    {project.Chip}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold underline">
                      {project.title}
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="h-6 sm:h-8 w-6 sm:w-8"
                    >
                      <path
                        d="M3.11924 19.4526C1.93134 15.0043 3.08225 10.0615 6.57198 6.57175C11.779 1.36476 20.2212 1.36476 25.4282 6.57175C30.6351 11.7787 30.6351 20.2209 25.4282 25.4279C21.9384 28.9177 16.9956 30.0686 12.5473 28.8807M20.0002 20V12M20.0002 12H12.0002M20.0002 12L6.66667 25.3332"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ShowcaseExpertise;
