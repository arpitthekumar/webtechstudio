"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";
import Chip from "../chip/chip";

const steps = [
  {
    icon: <FaReact />,
    title: "Understanding Your Needs",
    description:
      "We begin by thoroughly understanding your business goals and challenges, ensuring that our solutions are tailored to meet your specific needs.",
    stepNumber: "01",
  },
  {
    icon: <GiBrain />,
    title: "Crafting the Right Plan",
    description:
      "We meticulously design a strategic plan that aligns with your objectives, ensuring every step is purposeful and effective.",
    stepNumber: "02",
  },
  {
    icon: <IoRocketSharp />,
    title: "Bringing Ideas to Life",
    description:
      "We transform your vision into reality by implementing innovative solutions that drive growth and success.",
    stepNumber: "03",
  },
];

const ProcessCard: React.FC<{ icon: React.ReactNode; title: string; description: string; stepNumber: string; offset: string }> = ({
  icon,
  title,
  description,
  stepNumber,
  offset,
}) => (
  <motion.div
    className={`bg-[#c1d3ff14] rounded-2xl px-6 py-10 h-fit flex flex-col space-y-4 shadow-lg relative ${offset}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <div className="relative flex">
      <div className="text-acua-marine text-8xl">{icon}</div>
      <div className="text-bluish-gray text-6xl font-bold absolute top-4 right-4 opacity-20">{stepNumber}</div>
    </div>
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

const ProcessSection: React.FC = () => {
  return (
    <motion.div
      className="text-white py-20 px-6 md:px-20 bg-section-bg text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center text-center">
        <Chip text="How We Work" isDark={true} />
        <h2 className="text-4xl font-bold mt-4">Our Simple Process for Success</h2>
        <p className="text-gray-400 mt-2">
          We follow a streamlined, three-step approach to ensure every project's success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-8xl mx-auto">
        {steps.map((step, index) => (
          <ProcessCard
            key={index}
            {...step}
            offset={index === 1 ? "mt-10" : index === 2 ? "mt-20" : ""}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProcessSection;
