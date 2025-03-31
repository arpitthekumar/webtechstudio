"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import Button from "../button/Button";
import Chip from "../chip/chip";

const FeatureItem = ({
  text,
  included,
}: {
  text: string;
  included: boolean;
}) => (
  <motion.div
    className="flex items-center space-x-3 bg-text-bg px-4 w-fit py-2 rounded-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
    {included ? (
      <FaCheck className="text-green-400 text-2xl" />
    ) : (
      <FaTimes className="text-gray-400 text-2xl" />
    )}
    <span>{text}</span>
  </motion.div>
);

const MaintenancePricing = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index : number) => {
    const [expanded, setExpanded] = useState<number | null>(null);
};

  const plans = [
    {
      title: "Basic Maintenance",
      price: "₹999",
      features: [
        { text: "Security Updates", included: true },
        { text: "Bug Fixes (Up to 2 Fixes/Month)", included: true },
        { text: "Monthly Backup", included: true },
        { text: "Basic Performance Optimization", included: true },
        { text: "Content Updates (0 Updates/Month)", included: false },
        { text: "SEO Monitoring", included: false },
        { text: "Advanced Performance Optimization", included: false },
        { text: "Priority Support", included: false },
        { text: "Monthly Analytics & Reporting", included: false },
        { text: "Emergency Fixes", included: false },
      ],
    },
    {
      title: "Standard Maintenance",
      price: "₹1,999",
      features: [
        { text: "Security Updates", included: true },
        { text: "Bug Fixes (Up to 5 Fixes/Month)", included: true },
        { text: "Monthly Backup", included: true },
        { text: "Basic Performance Optimization", included: true },
        { text: "Content Updates (Up to 3 Updates/Month)", included: true },
        { text: "SEO Monitoring", included: true },
        { text: "Performance Boosting", included: true },
        { text: "Priority Support (Response in 24 Hours)", included: true },
        { text: "Monthly Analytics & Reporting", included: false },
        { text: "Emergency Fixes", included: false },
      ],
    },
    {
      title: "Premium Maintenance",
      price: "₹3,999",
      features: [
        { text: "Security Updates", included: true },
        { text: "Bug Fixes (Unlimited Fixes/Month)", included: true },
        { text: "Monthly Backup", included: true },
        { text: "Advanced Performance Optimization", included: true },
        { text: "Content Updates (Up to 10 Updates/Month)", included: true },
        { text: "SEO Monitoring & Advanced SEO Boosting", included: true },
        {
          text: "Performance Optimization (Max Speed & Efficiency)",
          included: true,
        },
        { text: "Priority Support (Response in 6 Hours)", included: true },
        { text: "Monthly Analytics & Reporting", included: true },
        { text: "Emergency Fixes (Immediate Response)", included: true },
      ],
    },
  ];

  return (
    <motion.div
      className="bg-black text-white py-20 px-6 md:px-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center text-center">
        <Chip text="Maintenance Plans" isDark={true} />
        <h1 className="text-3xl md:text-5xl font-bold pb-3">
          Website Maintenance Pricing
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base">
          Keep your website secure and optimized with our flexible maintenance
          plans.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-12  max-w-8xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{ boxShadow: "0 20px 30px rgba(0,0,0,0.2)" }}
            className={`bg-gradient-to-b from-[#181823] to-[#101017] rounded-3xl p-6 md:p-8 py-8 md:py-12 flex flex-col space-y-6 md:space-y-8 shadow-lg border 
              ${
                index === 1
                  ? "border-green-400"
                  : "border-gray-800 hover:border-green-400 transition-all"
              }`}
          >
            <h2 className="text-lg md:text-2xl font-semibold">{plan.title}</h2>
            <h3 className="text-lg md:text-xl font-bold">
              <motion.span
                className="text-acua-marine text-4xl md:text-6xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {plan.price}
              </motion.span>
              /month
            </h3>
            <div className="space-y-3 md:space-y-4">
              {plan.features
                .slice(0, expanded === index ? plan.features.length : 5)
                .map((feature, idx) => (
                  <FeatureItem
                    key={idx}
                    text={feature.text}
                    included={feature.included}
                  />
                ))}
            </div>
            <button
              className="text-[var(--acua-marine)] underline mt-2"
              onClick={() => toggleExpand(index)}
            >
              {expanded === index ? "Show Less" : "Read More"}
            </button>
            <Button
              text="Subscribe Now"
              mode={index === 1 ? "light" : "dark"}
              href="/Contact"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MaintenancePricing;
