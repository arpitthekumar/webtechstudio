"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import Chip from "./chip/chip";
import Button from "./button/Button";

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

const PricingPage = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const plans = [
    {
      title: "Basic Plan",
      price: "₹14,999",
      plan: "Basic",
      features: [
        { text: "Free Domain & Subdomain", included: true },
        { text: "Hosting", included: true },
        { text: "Up to 5 Pages", included: true },
        { text: "Basic UI/UX Design", included: true },
        { text: "Payment Gateway Integration", included: false },
        { text: "WhatsApp Button Integration", included: false },
        { text: "Google Business Account Setup", included: false },
        { text: "Admin Access", included: false },
        { text: "SEO Level: Basic", included: true },
        { text: "3 Revisions", included: true },
        { text: "Maintenance: 3 Months", included: true },
        { text: "Ai Chat Bot Intrigation", included: false },
        { text: "Custom Features", included: false },
        { text: "Performance Optimization", included: false },
        { text: "Social Media Integration", included: false },
        { text: "Backup & Restore", included: false },

      ],
    },
    {
      title: "Moderate Plan",
      price: "₹19,999",
      plan: "Moderate",
      features: [
        { text: "Free Domain & Subdomain", included: true },
        { text: "Hosting", included: true },
        { text: "Up to 8 Pages", included: true },
        { text: "Advanced UI/UX Design", included: true },
        { text: "SEO Level: Standard", included: true },
        { text: "5 Revisions", included: true },
        { text: "Maintenance: 6 Months", included: true },
        { text: "WhatsApp Button Integration", included: true },
        { text: "Google Business Account Setup", included: true },
        { text: "Payment Gateway Integration", included: true },
        { text: "Admin Access", included: true },
        { text: "Ai Chat Bot Intrigation", included: false },
        { text: "Custom Features", included: true },
        { text: "Performance Optimization", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Backup & Restore", included: false },
        { text: "Priority Support", included: false },

      ],
    },
    {
      title: "High-End Plan",
      price: "₹24,999",
      plan: "High-End",
      features: [
        { text: "Free Domain & Subdomain", included: true },
        { text: "Free Hosting", included: true },
        { text: "Up to 12 Pages", included: true },
        { text: "Premium UI/UX Design", included: true },
        { text: "SEO Level: Advanced", included: true },
        { text: "7 Revisions", included: true },
        { text: "Maintenance: 1 Year", included: true },
        { text: "WhatsApp Button Integration", included: true },
        { text: "Payment Gateway Integration", included: true },
        { text: "Google Business Account Setup", included: true },
        { text: "Admin Access", included: true },
        { text: "Ai Chat Bot Intrigation", included: true },
        { text: "Custom Features", included: true },
        { text: "Priority Support", included: true },
        { text: "Performance Optimization", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Backup & Restore", included: true },
      ],
    },
  ];

  return (
    <motion.div
      className="bg-black text-white py-20 px-6 md:px-20"
      key={hasAnimated ? "Pricing-section" : ""}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center text-center">
        <Chip text="Our Plans" isDark={true} />
        <h1 className="text-3xl md:text-5xl font-bold pb-3">
          WebTech Studio Pricing
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base">
          Select the right plan for your business needs. Get top-tier web
          development, SEO, and design services tailored for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-12 max-w-8xl mx-auto">
        {plans.map((plan, index) => {
          // Sort features: included ones first
          const sortedFeatures = [
            ...plan.features.filter((f) => f.included),
            ...plan.features.filter((f) => !f.included),
          ];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              whileHover={{ boxShadow: "0 20px 30px rgba(0,0,0,0.2)" }}
              className={`bg-gradient-to-b from-[#181823] to-[#101017] rounded-3xl p-6 md:p-8 py-8 md:py-12 flex flex-col space-y-6 md:space-y-8 shadow-lg border 
                ${
                  index === 1
                    ? "border-green-400"
                    : "border-gray-800 hover:border-green-400 transition-all"
                }`}
            >
              <motion.div
                className="border text-lg md:text-xl border-[var(--acua-marine)] px-3 py-1 md:px-4 md:py-2 rounded-full w-fit"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {plan.plan}
              </motion.div>
              <h2 className="text-lg md:text-2xl font-semibold">
                {plan.title}
              </h2>
              <h3 className="text-lg md:text-xl font-bold">
                <motion.span
                  className="text-acua-marine text-4xl md:text-6xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  {plan.price}
                </motion.span>
                /one-time
              </h3>

              <div className="space-y-3 md:space-y-4">
                {sortedFeatures
                  .slice(0, expanded === index ? sortedFeatures.length : 7)
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
                text="Get Started"
                mode={index === 1 ? "light" : "dark"}
                href="/Contact"
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default PricingPage;
