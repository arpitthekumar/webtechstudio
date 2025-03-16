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
      question: "What services does Kairos offer?",
      answer:
        "Kairos offers web development, UI/UX design, branding, and more.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "The project timeline varies depending on the scope and complexity.",
    },
    {
      question: "Can I customize my pricing plan?",
      answer: "Yes, we offer flexible pricing plans.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer ongoing support and maintenance.",
    },
    {
      question: "What makes Kairos different from other agencies?",
      answer: "Kairos focuses on tailored solutions and high-quality delivery.",
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
