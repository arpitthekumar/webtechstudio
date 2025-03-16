"use client";
import { motion } from "framer-motion";
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
      items: ["Home", "About", "Blog", "Contact", "Project"],
    },
    {
      title: "Utility",
      items: ["Styleguide", "Changelog", "Privacy Policy", "License", "YouTube"],
    },
    {
      title: "Social Media",
      items: ["Facebook", "Instagram", "YouTube", "Twitter", "LinkedIn"],
    },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
    { icon: <FaXTwitter />, href: "#" },
  ];

  return (
    <motion.footer
      className="bg-acua-marine text-black py-12 px-6 md:px-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-9xl mx-auto grid gap-6 md:gap-24 grid-cols-1 md:grid-cols-5">
        {/* ✅ Brand Section */}
        <div className="md:col-span-2 md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-black">WebTechStudio</h2>
          <p className="text-sm text-gray-900 mt-4 md:mt-8 max-w-md mx-auto md:mx-0">
            We deliver custom-crafted digital solutions that help agencies elevate their brands and achieve remarkable growth.
          </p>
          <div className="flex :justify-start gap-4 mt-6">
            {socialIcons.map((item, index) => (
              <a key={index} href={item.href} className="text-gray-900 text-2xl">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ✅ Dynamic Link Sections */}
        {links.map((section, index) => (
          <div key={index} className="text-left">
            <h3 className="text-xl font-bold">{section.title}</h3>
            <hr className="my-3" />
            <ul className="text-lg md:text-sm space-y-3 md:space-y-5 mt-2">
              {section.items.map((link, i) => (
                <li 
                  key={i} 
                  className="transition cursor-pointer hover:translate-x-1"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
<p className="text-2xl mt-8 md:min-w-2xl   md:text-4xl">All Rights Reserved.</p>
    </motion.footer>
  );
};

export default Footer;
