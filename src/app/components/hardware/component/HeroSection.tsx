"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Chip from "@/app/components/main/chip/chip";
import Button from "@/app/components/main/button/Button";
import { hardwareData } from "@/app/lib/hardware";

const HeroSection = () => {
  const products = hardwareData.products;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      {/* ✅ Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8 lg:space-x-24"
      >
        <Chip text="Hardware" isDark={true} />

        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Explore Our POS Hardware
          </h2>
          <p className="text-bluish-gray max-w-lg text-sm md:text-base mt-4">
            Discover our range of high-performance POS hardware designed to enhance your business operations.
            From barcode scanners to complete kits — we’ve got it covered.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 md:absolute md:bottom-0 md:right-0"
        >
          <Button text="View All" mode="light" href="/HardWare" />
        </motion.div>
      </motion.div>

      {/* ✅ Grid Showcase */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-12 max-w-9xl mx-auto"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          >
            <Link
              href={`/Hardware/${product.id}`}
              className="block rounded-4xl overflow-hidden group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={450}
                className="w-full h-[320px] object-cover rounded-3xl border border-gray-800"
              />
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={
                  hoveredIndex === index
                    ? { y: "0%", opacity: 1 }
                    : { y: "100%", opacity: 0 }
                }
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] flex flex-col items-center backdrop-blur-lg bg-black/50 rounded-2xl px-4 py-5"
              >
                <p className="text-xs sm:text-sm text-white border border-acua-marine rounded-full px-3 py-1">
                  {product.name}
                </p>
                <p className="text-white text-lg font-semibold mt-2">
                  {product.price}
                </p>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;