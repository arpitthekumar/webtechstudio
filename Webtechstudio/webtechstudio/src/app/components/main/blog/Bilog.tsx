"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Chip from "../chip/chip";
import Button from "../button/Button";

const blogs = [
  {
    id: 1,
    category: "Web Development",
    date: "December 28, 2024",
    title: "Mastering Next.js Performance Optimization",
    image: "/mainpage/image.png",
    link: "/Blog/nextjs-performance-optimization",
  },
  {
    id: 2,
    category: "Animations",
    date: "December 28, 2024",
    title: "Mastering Animations with Framer Motion and GSAP",
    image: "/mainpage/image1.png",
    link: "/Blog/animation-framer-motion-gsap",
  },
  
];

export default function BlogSection() {
  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-6 md:px-20 max-w-9xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center text-left space-y-6 md:space-y-0 md:space-x-8 lg:space-x-24 relative"
        >
          <Chip text="Our Work" isDark={true} />

          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Stay Informed with Latest Blogs
            </h1>
            <p className="text-gray-400 max-w-lg text-sm md:text-base">
              Explore expert tips, industry insights, and the latest trends in
              web development, UI/UX design, and branding.
            </p>
          </div>

          {/* ✅ Button Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 md:absolute md:bottom-0 md:right-0"
          >
            <Button text="See All Blogs" mode="light" href="/Blog" />
          </motion.div>
        </motion.div>

        {/* Blog List */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
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
