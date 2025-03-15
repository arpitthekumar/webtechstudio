"use client";

import { motion } from "framer-motion";
import Button from "./button/Button";
import Chip from "./chip/chip";

const projects = [
  {
    image: "/mainpage/image8.png",
    category: "Web Development",
    title: "Zenithox – Elevating Marketing Agency Experience",
  },
  {
    image: "/mainpage/image7.png",
    category: "Branding",
    title: "NeonTech – Revolutionizing AI Solutions",
  },
  {
    image: "/mainpage/image6.png",
    category: "E-commerce",
    title: "ShopEase – Modern Shopping Experience",
  },
  {
    image: "/mainpage/image9.png",
    category: "SaaS Platform",
    title: "CloudSync – Efficient Data Management",
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

        {/* ✅ Bottom Left - Button */}
        <div className="absolute bottom-0 right-0">
          <Button text="View All Projects" mode="light" href="/contact" />

        </div>
      </div>

      {/* ✅ Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-9xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="relative group rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[550px] object-cover transition-transform transform scale-100 group-hover:scale-105 duration-500"
            />
            
            {/* ✅ Project Card Content (Comes from Below) */}
            <motion.div
              initial={{ y: "150%", opacity: 0 }}
              whileHover={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-full p-6 bg-black bg-opacity-80 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            >
              <div className="text-sm text-acua-marine">{project.category}</div>
              <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 32 32"
                fill="none"
                className="mt-2 w-6 h-6 text-white"
              >
                <path
                  d="M3.11924 19.4526C1.93134 15.0043 3.08225 10.0615 6.57198 6.57175C11.779 1.36476 20.2212 1.36476 25.4282 6.57175C30.6351 11.7787 30.6351 20.2209 25.4282 25.4279C21.9384 28.9177 16.9956 30.0686 12.5473 28.8807M20.0002 20V12M20.0002 12H12.0002M20.0002 12L6.66667 25.3332"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseExpertise;
