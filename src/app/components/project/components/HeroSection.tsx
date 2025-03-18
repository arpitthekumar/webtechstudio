"use client";
import { motion } from "framer-motion";
import Button from "../../main/button/Button";
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
          <Chip text="Our Work" isDark={true} />

          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Innovative Projects, Real Results
            </h1>
          </div>

          {/* ✅ Button Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 md:absolute md:bottom-0 md:right-0"
          >
            <p className="text-bluish-gray max-w-lg mb-6 text-sm md:text-base">
              Explore our portfolio of impactful digital solutions. From
              websites to branding, each project showcases our dedication to
              quality and creativity.
            </p>
            <Button text="View All Projects" mode="light" href="/contact" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 group"
        >
          <Image
            src="/pricing/image.webp"
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
