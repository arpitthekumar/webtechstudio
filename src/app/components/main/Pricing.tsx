"use client";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import Chip from "./chip/chip";
import Button from "./button/Button";

const FeatureItem = ({ text, included }: { text: string; included: boolean }) => (
  <motion.div 
    className="flex items-center space-x-3 bg-text-bg px-4 w-fit py-2 rounded-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
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
  const plans = [
    {
      title: "Essentials for Small Projects",
      price: "$499",
      plan: "Starter",
      features: [
        { text: "Custom Web Development", included: true },
        { text: "Basic UI/UX Design", included: true },
        { text: "Unlimited Revisions", included: false },
        { text: "Support", included: false },
        { text: "Branding Services", included: false },
      ],
    },
    {
      title: "Designed for Expanding Businesses",
      price: "$999",
      plan: "Growth",
      features: [
        { text: "Custom Web Development", included: true },
        { text: "Basic UI/UX Design", included: true },
        { text: "Unlimited Revisions", included: true },
        { text: "Support", included: false },
        { text: "Branding Services", included: false },
      ],
    },
    {
      title: "Advanced Features for Professionals",
      price: "$1499",
      plan: "Professional",
      features: [
        { text: "Custom Web Development", included: true },
        { text: "Basic UI/UX Design", included: true },
        { text: "Unlimited Revisions", included: true },
        { text: "Support", included: true },
        { text: "Branding Services", included: true },
      ],
    },
  ];

  return (
    <motion.div 
      className="bg-black text-white py-20 px-6 md:px-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center text-center">
        <Chip text="Our Plans" isDark={true} />
        <h1 className="text-3xl md:text-5xl font-bold pb-3">
          Flexible Pricing for Every Need
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base">
          Choose a plan that fits your project's scale and budget. Whether you
          need essential services or a complete digital solution, we've got you
          covered.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-12 max-w-8xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{ boxShadow: "0 20px 30px rgba(0,0,0,0.2)" }}
            className={`bg-gradient-to-b from-[#181823] to-[#101017] rounded-3xl p-6 md:p-8 py-8 md:py-12 flex flex-col space-y-6 md:space-y-8 shadow-lg border 
              ${index === 1 ? "border-green-400" : "border-gray-800 hover:border-green-400 transition-all"}`}
          >
            <motion.div 
              className="border text-lg md:text-xl border-[var(--acua-marine)] px-3 py-1 md:px-4 md:py-2 rounded-full w-fit"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {plan.plan}
            </motion.div>
            <h2 className="text-lg md:text-2xl font-semibold">{plan.title}</h2>
            <h3 className="text-lg md:text-xl font-bold">
              <motion.span 
                className="text-acua-marine text-4xl md:text-6xl"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {plan.price}
              </motion.span>
              /month
            </h3>

            <div className="space-y-3 md:space-y-4">
              {plan.features.map((feature, idx) => (
                <FeatureItem key={idx} text={feature.text} included={feature.included} />
              ))}
            </div>

            <Button text="Choose Plan" mode={index === 1 ? "light" : "dark"} href="/contact" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingPage;
