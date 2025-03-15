"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface ButtonProps {
  text: string;
  mode?: "dark" | "light"; // Dark or Light mode
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  mode = "light",
  href = "#",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isDark = mode === "dark";

  return (
    <motion.a
      href={href}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{ scale: 0.9 }}
      animate={{
        backgroundColor: isHovered ? (isDark ? "#56dcad" : "#fff") : isDark ? "#fff" : "#56dcad",
        color: isHovered ? "#000" : "#000",
      }}
      className={`inline-flex items-center gap-3 px-6 py-3 group rounded-full transition-all duration-300 
        ${isDark ? "bg-white text-black" : "bg-acua-marine text-black"}
      `}
    >
      <span>{text}</span>
      <motion.div
        animate={{
          rotate: isHovered ? 50 : 0, // Rotate arrow on hover
          backgroundColor: isHovered ? (isDark ? "#000" : "#56dcad") : isDark ? "#56dcad" : "#000",
          color: isHovered ? (isDark ? "#fff" : "#000") : isDark ? "#000" : "#fff",
        }}
        whileTap={{ scale: 0.9 }}
        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 
          ${isDark ? "bg-acua-marine text-black" : "bg-black text-white"}
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 17 17"
          fill="none"
          className="rotate-[-45deg]"
        >
          <path
            d="M13.172 9.49998L0.999841 9.49998L0.999841 7.50028L13.1713 7.49957L7.80786 2.13617L9.22208 0.721956L17.0003 8.50013L9.22208 16.2783L7.80786 14.8641L13.172 9.49998V9.49998Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>
    </motion.a>
  );
};

export default Button;
