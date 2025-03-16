"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./button/Button";
import Chip from "./chip/chip";

const AboutSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-section-bg text-white  py-20 md:px-20 px-6 flex flex-col md:flex-row items-center gap-10 overflow-hidden">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex-1"
      >
                <Chip text="Who We Are" isDark={true} />
        

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg mb-4"
        >
          At
          <span className="font-bold text-2xl"> WebTechStudio</span>, we provide custom digital
          solutions designed to help agencies grow. Our team blends creativity,
          innovation, and expertise to deliver exceptional results, empowering
          brands to succeed in a rapidly evolving digital world.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex space-x-10 mb-6"
        >
          {[
            { value: "700+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "10+", label: "Industry Experience" },
          ].map((item, index) => (
            <motion.div key={index} className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold"
              >
                {item.value}
              </motion.h3>
              <p className="text-acua-marine">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <Button text="Discover Our Story" mode="light" href="/contact" />
        </motion.div>
      </motion.div>

      {/* Right Side (Clickable Video) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="flex-1 relative cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          width={800}
          height={800}
          src="/mainpage/image.png"
          alt="Video"
          className="rounded-2xl shadow-lg"
        />
        <div className="absolute inset-0 flex justify-center items-center cursor-pointer">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-24 rounded-full bg-white/40 absolute"
          ></motion.div>
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-acua-marine text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg relative"
          >
            ▶
          </motion.button>
        </div>
      </motion.div>

      {/* Video Modal (Popup) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl z-50"
          >
            ✖
          </button>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl"
          >
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default AboutSection;
