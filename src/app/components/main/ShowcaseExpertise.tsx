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
            <Link key={index} href={project.link} className="relative block rounded-2xl overflow-hidden group">
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
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[85%] flex flex-col items-cter justify-center gap-6 backdrop-blur-lg bg-black/30 rounded-3xl px-5 py-8 "
                >
                  <p className="text-sm  text-acua-marine">{project.category}</p>
                  <h3 className="text-2xl font-semibold underline">{project.title}</h3>
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
