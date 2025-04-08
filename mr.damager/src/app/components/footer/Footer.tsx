// components/Footer.tsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  useEffect(() => {
    // Animate rotation for the outer badge indefinitely
    gsap.to(".badge-outer", {
      rotation: 360,
      duration: 5,
      repeat: -1, // Infinite loop
      ease: "linear",
    });
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      className="bg-black text-white overflow-auto"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
      }}
    >
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <motion.div
          className="footer-left"
          variants={fadeIn}
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.a
            href="/"
            className="footer-logo-wrap block mb-8"
            whileHover={{ scale: 1.1 }}
          >
            <h1 className="bg-clip-text text-5xl sm:text-6xl font-bold leading-tight text-stroke bg-gradient-to-r from-green-400 to-blue-500">
              Mr.Damager
            </h1>
          </motion.a>
          <p className="footer-text text-base text-gray-300 leading-relaxed">
            Maxorin is a cutting-edge Webflow HTML template designed for dark
            marketing and bold brand strategies. Elevate your online presence
            with its sleek design and responsive layouts.
          </p>
          <div className="flex space-x-6 mt-6">
            <motion.a
              href="https://www.facebook.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-blue-500 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/accounts/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-pink-500 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://twitter.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-blue-700 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedinIn />
            </motion.a>
          </div>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          className="footer-middle hidden md:flex justify-center"
          variants={fadeIn}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="relative z-10">
            <div className="relative flex justify-center items-center">
              <img
                src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/674e9d6f5f091e516b57c5da_Group%201171275426.png"
                alt="Badge Outer"
                className="badge-outer w-20 sm:w-24 md:w-52"
              />
              <img
                src="/Mr.damager.png"
                alt="Badge Inner"
                className="absolute ml-5 mt-5 sm:ml-12 md:mt-12 inset-0 w-10 sm:w-12 md:w-28 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="footer-right grid grid-cols-2 gap-8"
          variants={fadeIn}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">Pages</h3>
            {["Home", "About Us", "Contact", "Blog", "Services"].map((page) => (
              <motion.a
                href={`/${page.toLowerCase().replace(/\s/g, "-")}`}
                className="block text-xl text-gray-300 hover:underline"
                key={page}
                whileHover={{ x: 5 }}
              >
                {page}
              </motion.a>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Utility</h3>
            {["Licenses", "Style Guide", "Changelog"].map((utility) => (
              <motion.a
                href={`/utility-page/${utility
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
                className="block text-xl text-gray-300 hover:underline"
                key={utility}
                whileHover={{ x: 5 }}
              >
                {utility}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="bg-wwrcolor py-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            ©2024 All Rights Reserved, Powered By{" "}
            <Link href="/" className="text-blue-400 hover:underline">
              Mr.damager
            </Link>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Licenses", "Style Guide", "Changelog"].map((link) => (
              <motion.a
                href={`/utility-page/${link.toLowerCase().replace(/\s/g, "-")}`}
                className="hover:underline"
                key={link}
                whileHover={{ scale: 1.1 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
