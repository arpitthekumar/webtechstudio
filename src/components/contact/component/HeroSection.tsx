"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Chip from "../../home/main/chip/chip";
import { gtag_report_conversions } from "@/lib/gtag";

export default function HeroSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const gtag_report_conversion = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-16974052698/ZDR1CLjT78kaENr67Z0_",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        gtag_report_conversions("AW-16974052698/ZDR1CLjT78kaENr67Z0_");
        gtag_report_conversion();
        setMessage({ type: "success", text: "Message sent successfully! 🎉" });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(data.error || "Something went wrong.");
      }
    } catch (error: any) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <motion.div
        key={hasAnimated ? "hero-section" : ""}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-9xl mx-auto"
      >
        {/* ✅ Header */}
        <div className="flex flex-col space-y-6 md:space-y-6 text-left">
          <Chip text="Contact Us" isDark={true} />
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
            Let's Bring Your Vision to Life
          </h1>
          <p className="text-bluish-gray mt-4 text-base md:text-lg max-w-7xl">
            Have a project in mind or need help with design and development?
            Reach out to us, and let's get started.
          </p>
        </div>

        {/* ✅ Contact & Form Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 md:mt-20">
          <div className="space-y-6">
            {[
              {
                title: "Address",
                value: "Agra, India",
                href: null,
              },
              {
                title: "Email",
                value: "webtechstudio37@gmail.com",
                href: "mailto:webtechstudio37@gmail.com",
              },
              {
                title: "Phone Number",
                value: [
                  { number: "+91 92594 93075", href: "tel:+919259493075" },
                  { number: "+91 63982 17416", href: "tel:+916398217416" },
                ],
              },
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
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 text-base md:text-lg text-gray-400 break-words">
                  {Array.isArray(item.value) ? (
                    item.value.map((phone, i) => (
                      <a key={i} href={phone.href} className="hover:underline">
                        {phone.number}
                      </a>
                    ))
                  ) : item.href ? (
                    <a href={item.href} className="hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black text-white w-full px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-[#50fa7b]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black text-white w-full px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-[#50fa7b]"
                  required
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-black text-white w-full px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-[#50fa7b]"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-black text-white w-full px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:border-[#50fa7b]"
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className={`bg-acua-marine text-black font-bold px-4 py-3 rounded-xl transition-transform transform hover:scale-105 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Success/Error Message */}
            {message && (
              <p
                className={`mt-4 text-${
                  message.type === "success" ? "green-500" : "red-500"
                }`}
              >
                {message.text}
              </p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
