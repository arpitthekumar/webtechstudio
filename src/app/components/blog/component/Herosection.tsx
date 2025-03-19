"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Chip from "../../main/chip/chip";
import { useEffect, useState } from "react";

const blogs = [
    {
        id: 1,
        category: "Web Development",
        date: "December 28, 2024",
        title: "Essential Web Design Trends to Follow",
        image: "/mainpage/image.png",
        link: "/Blogs/essential-web-design-trends-to-follow",
      },
      {
        id: 2,
        category: "Web Development",
        date: "December 28, 2024",
        title: "Essential Web Development Trends to Win for Business",
        image: "/mainpage/image1.png",
        link: "/Blogs/essential-web-development-trends-to-win-for-business",
      },
      {
        id: 3,
        category: "UI/UX Design",
        date: "January 5, 2025",
        title: "Top UI/UX Practices for a Better User Experience",
        image: "/mainpage/image2.png",
        link: "/Blogs/top-ui-ux-practices-for-better-user-experience",
      },
      {
        id: 4,
        category: "SEO",
        date: "January 12, 2025",
        title: "SEO Strategies to Rank Higher in 2025",
        image: "/mainpage/image3.png",
        link: "/Blogs/seo-strategies-to-rank-higher-in-2025",
      },
      {
        id: 5,
        category: "E-Commerce",
        date: "January 20, 2025",
        title: "Best E-Commerce Platforms for Your Online Store",
        image: "/mainpage/image6.png",
        link: "/Blogs/best-ecommerce-platforms-for-online-store",
      },
      {
        id: 6,
        category: "Performance Optimization",
        date: "January 28, 2025",
        title: "How to Optimize Your Website for Speed and Performance",
        image: "/mainpage/image7.png",
        link: "/Blogs/optimize-website-speed-performance",
      },
];

export default function HeroSection() {
      const [hasAnimated, setHasAnimated] = useState(false);
    
      useEffect(() => {
        setHasAnimated(true);
      }, []);
    
  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-6 md:px-20 max-w-9xl">
        <motion.div
              key={hasAnimated ? "Prising-section" : ""}

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

        {/* Blog List */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[linear-gradient(#181823,#101017)] rounded-4xl group  border border-transparent hover:border-[var(--acua-marine)] overflow-hidden"
            >
              <div className="p-6">
                <div className="relative w-full h-[600px] overflow-hidden rounded-4xl">
                  <Image
                    src={blog.image}
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
                  href={blog.link}
                  className="text-acua-marine font-bold text-lg mt-2 inline-block"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
