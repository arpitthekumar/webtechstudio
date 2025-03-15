"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./button/Button";
import Chip from "./chip/chip";

const projects = [
  {
    image: "/mainpage/image8.png",
    category: "Web Development",
    title: "Zenithox – Elevating Marketing Agency Experience",
    link: "/projects/zenithox",
  },
  {
    image: "/mainpage/image7.png",
    category: "Branding",
    title: "NeonTech – Revolutionizing AI Solutions",
    link: "/projects/neontech",
  },
  {
    image: "/mainpage/image6.png",
    category: "E-commerce",
    title: "ShopEase – Modern Shopping Experience",
    link: "/projects/shopease",
  },
  {
    image: "/mainpage/image9.png",
    category: "SaaS Platform",
    title: "CloudSync – Efficient Data Management",
    link: "/projects/cloudsync",
  },
];

const ShowcaseExpertise = () => {
  return (
    <div className="bg-black text-white py-20 px-20">
      <div className="flex mx-auto text-center space-x-24 relative">
        {/* ✅ Left Side - Chip & Text */}
        <div>
          <Chip text="Our Work" isDark={true} />
        </div>

        <div className="flex-1">
          <h1 className="text-6xl font-bold text-left leading-tight">
            Showcasing Our Expertise
          </h1>
          <p className="text-bluish-gray max-w-lg text-sm text-left">
            Explore some of our recent projects where we’ve transformed ideas into powerful digital experiences. From web development to branding, our work speaks for itself.
          </p>
        </div>

        {/* ✅ Bottom Right - Button */}
        <div className="absolute bottom-0 right-0">
          <Button text="View All Projects" mode="light" href="/contact" />
        </div>
      </div>

      {/* ✅ Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-7xl mx-auto">
        {projects.map((project, index) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <Link key={index} href={project.link} className="relative block rounded-4xl  overflow-hidden group">
              {/* ✅ Image (Stays Still) */}
              <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={550}
                  className="w-full h-[550px] object-cover"
                />

                {/* ✅ Box that slides up on hover */}
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={isHovered ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[85%] flex flex-col items-cter justify-center gap-6 backdrop-blur-lg bg-black/20 rounded-3xl px-5 py-8 "
                >
                  <p className="text-sm border-2 rounded-4xl px-3 py-3 w-fit   text-white border-[var(--acua-marine)] hover:bg-[var(--acua-marine)]">{project.category}</p>
                  <div className="flex  items-center justify-center gap-2">

                  <h3 className="text-2xl font-semibold underline">{project.title}</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 32" fill="none" className="h-8 w-8 overflow-hidden"><path d="M3.11924 19.4526C1.93134 15.0043 3.08225 10.0615 6.57198 6.57175C11.779 1.36476 20.2212 1.36476 25.4282 6.57175C30.6351 11.7787 30.6351 20.2209 25.4282 25.4279C21.9384 28.9177 16.9956 30.0686 12.5473 28.8807M20.0002 20V12M20.0002 12H12.0002M20.0002 12L6.66667 25.3332" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ShowcaseExpertise;
