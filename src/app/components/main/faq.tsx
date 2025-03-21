"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Chip from "./chip/chip";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "What services does WebTech Studio provide?",
      answer:
        "WebTech Studio specializes in web development, UI/UX design, branding, SEO optimization, and e-commerce solutions.",
    },
    {
      question: "How long does it take to develop a website with WebTech Studio?",
      answer:
        "Project timelines depend on complexity, but we typically deliver websites within 4 to 8 weeks. Custom solutions may take longer.",
    },
    {
      question: "Do you offer SEO-friendly website development?",
      answer:
        "Yes! All our websites are optimized for search engines, ensuring fast load speeds, mobile responsiveness, and high Google rankings.",
    },
    {
      question: "Can I request custom features for my website?",
      answer:
        "Absolutely! We offer custom web development tailored to your business needs, including unique functionalities and integrations.",
    },
    {
      question: "Do you provide website maintenance and support?",
      answer:
        "Yes, we offer ongoing website maintenance, updates, security checks, and performance optimizations to keep your site running smoothly.",
    },
    {
      question: "How can WebTech Studio help improve my online presence?",
      answer:
        "Our SEO experts optimize your site for better rankings, while our branding and UI/UX design enhance user engagement and conversions.",
    },
    {
      question: "Why should I choose WebTech Studio over other web agencies?",
      answer:
        "We focus on high-performance, SEO-friendly websites with modern design and user experience, ensuring business growth and ROI.",
    },
  ]);
  

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-black text-white py-20 px-6 md:px-20">
      <div className="flex flex-col items-center text-center pb-12">
        <Chip text="What Our Clients Say" isDark={true} />
        <motion.h1
          className="text-5xl font-bold text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Answers to Your Questions
        </motion.h1>
        <motion.p
          className="text-bluish-gray  max-w-2xl text-center mt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Find answers to common questions about our services, processes, and pricing. If you need further information, feel free to reach out.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-[linear-gradient(#181823,#101017)] rounded-3xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg">{faq.question}</h3>
              <motion.span
                className="text-2xl border border-bluish-gray rounded-full px-3 py-1"
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {activeIndex === index ? "−" : "+"}
              </motion.span>
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  className="text-gray-400 mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
