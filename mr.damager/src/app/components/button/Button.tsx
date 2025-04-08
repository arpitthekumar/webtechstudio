import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: string; // Optional icon URL
  hoverColor?: string; // Dynamic hover background color
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  onClick,
  className = "",
  icon,
  hoverColor = "", // Default hover color if not provided
}) => {
  return (
    <motion.div
      className="relative inline-flex items-center justify-center rounded-full p-[2px] group"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Gradient Border Wrapper */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 1 },
        }}
      ></motion.div>

      {/* Inner Button */}
      {href ? (
        <a
          href={href}
          className={`relative z-10 flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 ${className}`}
          style={{
            background: "linear-gradient(to right, #34D399, #3B82F6)",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLDivElement;
            target.style.background = hoverColor; // Use the dynamic hoverColor
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLDivElement;
            target.style.background =
              "linear-gradient(to right, #34D399, #3B82F6)"; // Reset background to default gradient
          }}
        >
          <span>{text}</span>
          {icon && <img src={icon} alt="icon" className="ml-2 w-4 h-4" />}
        </a>
      ) : (
        <button
          onClick={onClick}
          className={`relative z-10 flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 ${className}`}
        >
          <span>{text}</span>
          {icon && <img src={icon} alt="icon" className="ml-2 w-4 h-4" />}
        </button>
      )}
    </motion.div>
  );
};

export default Button;
