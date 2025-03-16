"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons from react-icons
import Button from "./button/Button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-20 bg-black text-white p-6 px-6 md:px-20 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">WebTechStudio</div>

      {/* Desktop Menu */}
      {/* border-bottom: 1px solid var(--transparent); */}
      <div className="hidden md:flex ">
  {["About", "Project", "Services", "Pricing", "Blog", "Shop"].map((item, index) => (
    <Link 
      key={index} 
      href="#" 
      className="border-b-2 border-transparent hover:border-[var(--acua-marine)] px-4 pb-2 transition-all"
    >
      {item}
    </Link>
  ))}
</div>


      {/* Desktop Button */}
      <div className="hidden md:block">
        <Button text="Let's Talk" mode="light" href="/contact" />
      </div>

      {/* Hamburger Button (Mobile) with Animation */}
      <motion.button
        className="md:hidden text-acua-marine"
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </motion.button>

      {/* Mobile Menu with Opening Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-6 py-6 shadow-lg md:hidden"
          >
            <Link href="#" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Project</Link>
            <Link href="#" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="#" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="#" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link href="#" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Shop</Link>
            <Button text="Let's Talk" mode="light" href="/contact" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
