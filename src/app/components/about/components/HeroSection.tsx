"use client";

import { motion } from "framer-motion";
import Chip from "../../main/chip/chip";
import Button from "../../main/button/Button";


const HeroSection = () => {
  return (
    <section
      className="relative flex items-center"
      style={{
        backgroundImage: `url('/mainpage/image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "680px",
      }}
    >
      {/* Dark overlay only on the background */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row justify-center md:justify-between items-center text-white text-center md:top-50 md:text-left px-6 md:px-20 w-full">
        {/* Left Side */}
        <motion.div
          key="hero-section" // 👈 Forces animation reset when navigating back

          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-center md:items-start mb-6 md:mb-0"
        >
          
                  <Chip text="About Us" isDark={false} className="z-10 font-bold" />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
           Where Creativity 
            <br />
            Meets Strategy
          </motion.h1>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col justify-center items-center md:items-start max-w-lg"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-6"
          >
            At WebTechStudio, we blend creativity and technology to deliver powerful digital solutions. Our team is dedicated to helping brands stand out and succeed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Button text="Let's Get Started" mode="light" href="/contact" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
