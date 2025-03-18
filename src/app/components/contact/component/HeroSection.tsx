"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Chip from "../../main/chip/chip";

export default function HeroSection() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <motion.div
        key={hasAnimated ? "hero-section" : ""}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* ✅ Header */}
        <div className="flex flex-col space-y-6 md:space-y-6 text-left">
          <Chip text="Contact Us" isDark={true} />
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
            Let's Bring Your Vision to Life
          </h1>
          <p className="text-bluish-gray mt-4  text-base md:text-lg max-w-7xl">
            Have a project in mind or need help with design and development?
            We're here to answer your questions, discuss your ideas, and create
            something amazing together. Reach out to us, and let's get started.
          </p>
        </div>

        {/* ✅ Contact & Form Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 md:mt-20">
          {/* Left - Contact Details */}
          <div className="space-y-6">
            {[
              { title: "Office Address", value: "123 Creative Street, Innovation City, 56789" },
              { title: "Phone Number", value: "+1 (123) 456-7890" },
              { title: "Email Address", value: "hello@mail.com" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-4 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Chip text={item.title} isDark={true} />
                <p className="text-lg text-gray-400">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Right - Contact Form */}
          <motion.div
            className="bg-section-bg rounded-4xl p-6 md:p-10 w-full max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  aria-label="Full Name"
                  className="bg-black text-white w-full px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-[#50fa7b]"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  className="bg-black text-white w-full px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-[#50fa7b]"
                  onChange={handleChange}
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                aria-label="Phone Number"
                className="bg-black text-white w-full px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-[#50fa7b]"
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                aria-label="Message"
                rows={4}
                className="bg-black text-white w-full px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-[#50fa7b]"
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="bg-acua-marine text-black font-bold px-4 py-3 rounded-xl transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
