"use client";

import React from "react"; // ✅ Import React
import { FaAtom, FaBrain, FaRocket } from "react-icons/fa";
import Chip from "../chip/chip";

const steps = [
  {
    icon: <FaAtom />,
    title: "Understanding Your Needs",
    description:
      "We begin by thoroughly understanding your business goals and challenges, ensuring that our solutions are tailored to meet your specific needs.",
    stepNumber: "01",
  },
  {
    icon: <FaBrain />,
    title: "Crafting the Right Plan",
    description:
      "We meticulously design a strategic plan that aligns with your objectives, ensuring every step is purposeful and effective.",
    stepNumber: "02",
  },
  {
    icon: <FaRocket />,
    title: "Bringing Ideas to Life",
    description:
      "We transform your vision into reality by implementing innovative solutions that drive growth and success.",
    stepNumber: "03",
  },
];

// ✅ Explicitly define JSX.Element type for the icon prop
const ProcessCard: React.FC<{ icon: React.ReactNode; title: string; description: string; stepNumber: string }> = ({
  icon,
  title,
  description,
  stepNumber,
}) => (
  <div className="bg-[#121212] rounded-2xl p-6 flex flex-col space-y-4 shadow-lg relative">
    <div className="text-green-400 text-4xl">{icon}</div>
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-gray-400 text-sm">{description}</p>
    <div className="text-gray-600 text-4xl font-bold absolute bottom-4 right-4 opacity-20">{stepNumber}</div>
  </div>
);

const ProcessSection: React.FC = () => {
  return (
    <div className="text-white py-20 px-6">
      <Chip text="Our Work" isDark={true} />

      {/* ✅ Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <ProcessCard key={index} {...step} />
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
