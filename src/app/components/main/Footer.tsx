"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const links = [
    {
      title: "Company",
      items: [
        { name: "Home", href: "/" },
        { name: "About", href: "/About" },
        { name: "Blog", href: "/Blog" },
        { name: "Contact", href: "/Contact" },
        { name: "Project", href: "/Projects" },
      ],
    },
    {
      title: "Utility",
      items: [
        // { name: "Styleguide", href: "/Styleguide" },
        // { name: "Changelog", href: "/Changelog" },
        { name: "Privacy Policy", href: "/PrivacyPolicy" },
        { name: "License", href: "/License" },
        // { name: "YouTube", href: "https://youtube.com" },
      ],
    },
    {
      title: "Social Media",
      items: [
        { name: "Facebook", href: "https://facebook.com" },
        { name: "Instagram", href: "https://instagram.com" },
        { name: "YouTube", href: "https://youtube.com" },
        { name: "Twitter", href: "https://twitter.com" },
        { name: "LinkedIn", href: "https://linkedin.com" },
      ],
    },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
    { icon: <FaXTwitter />, href: "https://twitter.com" },
  ];

  return (
    <motion.footer
      className="bg-acua-marine text-black py-12 px-6 md:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="max-w-9xl mx-auto grid gap-6 md:gap-24 grid-cols-1 md:grid-cols-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* ✅ Brand Section */}
        <motion.div
          className="md:col-span-2 md:text-left"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-black">WebTechStudio</h2>
          <p className="text-sm text-gray-900 mt-4 md:mt-8 max-w-md mx-auto md:mx-0">
            We deliver custom-crafted digital solutions that help agencies elevate their brands and achieve remarkable growth.
          </p>
          <motion.div
            className="flex justify-start gap-4 mt-6"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
            }}
          >
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-2xl"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ✅ Dynamic Link Sections */}
        {links.map((section, index) => (
          <motion.div
            key={index}
            className="text-left"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-xl font-bold">{section.title}</h3>
            <hr className="my-3" />
            <ul className="text-lg md:text-sm space-y-3 md:space-y-5 mt-2">
              {section.items.map((link, i) => (
                <motion.li
                  key={i}
                  className="transition cursor-pointer hover:translate-x-1"
                  variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                  whileHover={{ scale: 1.05, x: 3 }}
                >
                  <Link href={link.href} target={link.href.startsWith("http") ? "_blank" : "_self"}>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="text-2xl mt-8 md:min-w-2xl md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        All Rights Reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
