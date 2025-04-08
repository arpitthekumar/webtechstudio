"use client";
import { motion } from "framer-motion";
import Chip from "../../main/chip/chip";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []); // Runs only once when component mounts

  return (
    <>
      <div className="bg-black text-white py-20 px-6 md:px-20">
        <motion.div
          key={hasAnimated ? "hero-section" : ""}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col  items-start  text-left space-y-6 md:space-y-0 md:space-x-8 lg:space-x-24 relative"
        >
          <Chip text="Our Experties" isDark={true} />

          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold ">
            Crafting Tailored Solutions for Your Business Needs
            </h1>
            <p className="text-bluish-gray  mt-6 text-sm md:text-lg">
              At WebTechStudio, we specialize in providing comprehensive services that
              are designed to help your business thrive in today’s competitive
              landscape. From development to design and branding, we deliver
              results that exceed expectations.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 group"
        >
          <Image
            src="/Services/image.webp"
            alt="title"
            width={800}
            height={620}
            className="rounded-3xl group border border-gray-700/50 w-full h-[800px] object-cover"
          />
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
