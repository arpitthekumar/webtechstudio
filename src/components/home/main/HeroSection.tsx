"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./button/Button";
import Chip from "./chip/chip";
import Image from "next/image";

const HeroSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []); // Runs only once when component mounts

  return (
    <section
      // className="relative flex items-center"
      className="relative flex items-center h-[680px] overflow-hidden"
      // style={{
      //   backgroundImage: `url('/mainpage/image.png')`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   height: "680px",
      // }}
    >
      <Image
        src="/mainpage/image.png"
        alt="Background image"
        fill
        priority
        className="object-cover z-0"
      />
      {/* Dark overlay only on the background */}
      <div className="absolute inset-0 bg-black/15 z-0 pointer-events-none"></div>

      {/* Content */}
      <div className="relative  md:top-50 flex flex-col md:flex-row justify-center md:justify-between items-center text-white text-center md:text-left px-6 md:px-20 w-full">
        {/* Left Side */}
        <motion.div
          key={hasAnimated ? "hero-section" : ""}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-center md:items-start mb-6 md:mb-0"
        >
          <Chip
            text="Empowering Agencies"
            isDark={false}
            className="z-10 font-bold"
          />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Crafting Success
            <br />
            Elevating Brands
          </motion.h1>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col justify-center items-center md:items-start max-w-lg"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-6"
          >
            We deliver custom-crafted digital solutions that help agencies
            elevate their brands and achieve remarkable growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Button text="Let's Get Started" mode="light" href="/Contact" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
