"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./button/Button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = ["About", "Projects", "Services", "Pricing", "Blog","Hardware"];

  return (
    <nav className="sticky top-0 z-20 bg-black text-white p-6 px-6 md:px-20 flex justify-between items-center">
      {/* Logo */}
      <Link href="/">
      <div className="text-2xl font-bold">WebTechStudio</div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        {navItems.map((item, index) => {
          const href = `/${item}`;
          const isActive = pathname === href;
          return (
            <Link
              key={index}
              href={href}
              className={`px-4 pb-2 transition-all border-b-2 ${
                isActive ? "border-[var(--acua-marine)]" : "border-transparent hover:border-[var(--acua-marine)]"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <Button text="Let's Talk" mode="light" href="/Contact" />
      </div>

      {/* Hamburger Button (Mobile) */}
      <motion.button
        className="md:hidden text-acua-marine"
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-6 py-6 shadow-lg md:hidden"
          >
            {navItems.map((item, index) => {
              const href = `/${item}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={index}
                  href={href}
                  className={`${
                    isActive ? "text-[var(--acua-marine)]" : "hover:text-gray-400"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              );
            })}
            <Button text="Let's Talk" mode="light" href="/Contact" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
