"use client";
import { motion } from "framer-motion";
import { FaCheck, FaTimes, FaArrowRight } from "react-icons/fa";
import Chip from "./chip/chip";
import Button from "./button/Button";

const FeatureItem = ({
  text,
  included,
}: {
  text: string;
  included: boolean;
}) => (
  <motion.div className="flex items-center space-x-3 bg-text-bg px-4 w-fit py-2 rounded-full">
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
    <div className="bg-black text-white py-20 px-6">
      <div className="flex flex-col items-center text-center">
        <Chip text="Our Plans" isDark={true} />
        <h1 className="text-5xl font-bold pb-3">
          Flexible Pricing for Every Need
        </h1>
        <p className="max-w-2xl mx-auto">
          Choose a plan that fits your project's scale and budget. Whether you
          need essential services or a complete digital solution, we've got you
          covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{
              boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
            }}
            className="bg-linear-gradient(#181823,#101017) rounded-4xl p-6 flex flex-col space-y-6 shadow-lg border border-gray-800 hover:border-green-400 transition-all"
          >
            <div className=" border text-xl border-[var(--acua-marine)] px-4 py-2 rounded-full w-fit">
              {plan.plan}
            </div>
            <h2 className="text-2xl font-semibold">{plan.title}</h2>
            <h3 className="text-xl font-bold">
              <span className="text-acua-marine text-6xl">{plan.price}</span>
              /month
            </h3>

            <div className="space-y-4">
              {plan.features.map((feature, idx) => (
                <FeatureItem
                  key={idx}
                  text={feature.text}
                  included={feature.included}
                />
              ))}
            </div>

            <Button text="Choose Plan" mode="light" href="/contact"  />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
