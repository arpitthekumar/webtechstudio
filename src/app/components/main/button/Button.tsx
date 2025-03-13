"use client";
import { motion } from "framer-motion";

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
  const isDark = mode === "dark";

  return (
    <motion.a
      href={href}
      whileHover={{
        backgroundColor: isDark ? "#56dcad" : "#fff", // Changes background to white for dark mode or acua for light mode
        color: isDark ? "#000" : "#000", // Changes text color to black for dark mode or white for light mode
      }}
      whileTap={{ scale: 0.2 }}
      className={`inline-flex items-center gap-3 px-6 py-3 group rounded-full transition-all duration-300 
        ${isDark ? "bg-white text-black" : "bg-acua-marine text-black"}
      `}
    >
      <span>{text}</span>
      <motion.div
        whileHover={{
            rotate:50,
          backgroundColor: isDark ? "#000" : "#56dcad", // Changes background to white for dark mode or acua for light mode
          color: isDark ? "#fff" : "#000", // Changes text color to black for dark mode or white for light mode
        }}
        whileTap={{ scale: 0.2 }}
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
