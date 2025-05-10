"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import Button from "@/components/home/main/button/Button";
import Chip from "@/components/home/main/chip/chip";
import Link from "next/link";

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

const GymPOSPricing = () => {
  const [billingCycle, setBillingCycle] = useState("month");
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const plans = [
    {
      title: "Basic Gym POS",
      price: "₹799",
      year: "	₹7,500",
      lifetime: "₹15,000",
      hardware: [],
      features: [
        { text: "Member Management", included: true },
        { text: "Trainer Management", included: true },
        { text: "Manual Attendance", included: true },
        { text: "Workout & Diet Plans", included: true },
        { text: "SMS Alerts", included: true },
        { text: "Sales & Expenses Tracking", included: true },
        { text: "Stock Management", included: true },
        { text: "Reports & Analytics", included: true },
        { text: "Staff Module (Owner Only Access)", included: true },
      ],
    },
    {
      title: "Pro Gym POS",
      price: "₹999",
      year: "₹10,000",
      lifetime: "₹20,000",
      hardware: [
        {
          name: "Basic Website Plan",
          link: "/Pricing",
        },
        {
          name: "Thermal Printer",
          link: "/Hardware/thermal-printer",
        },
      ],
      features: [
        { text: "All Basic Features", included: true },
        { text: "Unlimited Staff Access", included: true },
        { text: "Automated Attendance", included: true },
        { text: "Email & SMS Campaigns", included: true },
        { text: "Priority Support", included: true },
        { text: "Member Management", included: true },
        { text: "Trainer Management", included: true },
        { text: "Manual Attendance", included: true },
        { text: "Workout & Diet Plans", included: true },
        { text: "SMS Alerts", included: true },
        { text: "Sales & Expenses Tracking", included: true },
        { text: "Stock Management", included: true },
        { text: "Reports & Analytics", included: true },
        { text: "Staff Module (Owner Only Access)", included: true },
      ],
    },
    {
      title: "Elite Gym POS",
      price: "₹1,499",
      year: "₹15,000",
      lifetime: "₹30,000",
      hardware: [
        {
          name: "Modern Website",
          link: "/Pricing",
        },
        {
          name: "Thermal Printer",
          link: "/Hardware/thermal-printer",
        },
        {
          name: "Biometric Machine",
          link: "/Hardware/biometric-machine",
        },
      ],
      features: [
        { text: "All Pro Features", included: true },
        { text: "Biometric Integration", included: true },
        { text: "Full White-Labeling", included: true },
        { text: "Marketing Tools", included: true },
        { text: "Advanced Analytics", included: true },
        { text: "Dedicated Success Manager", included: true },
        { text: "Emergency Support", included: true },
        { text: "Member Management", included: true },
        { text: "Trainer Management", included: true },
        { text: "Manual Attendance", included: true },
        { text: "Workout & Diet Plans", included: true },
        { text: "SMS Alerts", included: true },
        { text: "Sales & Expenses Tracking", included: true },
        { text: "Stock Management", included: true },
        { text: "Reports & Analytics", included: true },
        { text: "Staff Module (Owner Only Access)", included: true },
      ],
    },
  ];
  

  return (
    <motion.div className="bg-black text-white py-20 px-6 md:px-20">
      <div className="flex flex-col items-center text-center">
        <Chip text="Gym POS Plans" isDark={true} />
        <h1 className="text-3xl md:text-5xl font-bold pb-3">
          Gym POS Subscriptions
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base">
          Powerful features to manage your gym efficiently — from member
          check-ins to full analytics.
        </p>
        <div className="flex mt-6 space-x-2 p-2 rounded-full">
          {["month", "year", "lifetime"].map((cycle) => (
            <button
              key={cycle}
              className={`px-4 py-2 rounded-full transition-all ${
                billingCycle === cycle
                  ? "bg-[var(--acua-marine)]"
                  : "bg-text-bg"
              }`}
              onClick={() => setBillingCycle(cycle)}
            >
              {cycle === "month"
                ? "Monthly"
                : cycle === "year"
                ? "Yearly (20% off)"
                : "Lifetime"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-12 max-w-8xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
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
                {billingCycle === "month"
                  ? plan.price
                  : billingCycle === "year"
                  ? plan.year
                  : plan.lifetime}
              </motion.span>
              {billingCycle === "lifetime" ? " one-time" : `/${billingCycle}`}
            </h3>

            {/* Hardware Tags */}
            {plan.hardware && plan.hardware.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {plan.hardware.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.link}
                    className="bg-acua-marine/10 text-acua-marine border border-acua-marine px-3 py-1 rounded-full text-sm hover:bg-acua-marine/20 transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-gray-400 pl-3 text-sm italic">
                No hardware provided
              </div>
            )}

            {/* Features */}
            <div className="space-y-3 md:space-y-4">
              {plan.features
                .slice(0, expanded === index ? plan.features.length : 7)
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
              text="Start Subscription"
              mode={index === 1 ? "light" : "dark"}
              href="/subscribe"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GymPOSPricing;
