"use client";

import { motion } from "framer-motion";

interface ChipProps {
  text: string;
  isDark?: boolean; // Toggle between dark and light mode
  className?: string; // Additional custom classes
}

export default function Chip({ text, isDark = true, className = "" }: ChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className={`text-sm flex px-4 py-2 rounded-full mb-4 w-fit ${
        isDark ? "bg-text-bg text-white" : " border-2 border-white text-white"
      } ${className}`}
    >
      <div className="h-2 w-2 mt-1 mr-2 rounded-full bg-acua-marine"></div>
      {text}
    </motion.div>
  );
}
