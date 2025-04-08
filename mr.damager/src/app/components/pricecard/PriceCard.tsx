
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import Button from "../button/Button";

const PriceCard = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly"
  );

  useEffect(() => {
    gsap.fromTo(
      ".price-card",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    );
  }, []);

  const plans = [
    {
      title: "Starter",
      monthlyPrice: "$59",
      annualPrice: "$49",
      features: [
        "Access To Basic Tools",
        "Single-User License",
        "10 GB Cloud Storage",
      ],
    },
    {
      title: "Standard",
      monthlyPrice: "$99",
      annualPrice: "$79",
      features: ["24/7 Support", "All Pro Features", "Unlimited Cloud Storage"],
    },
    {
      title: "Premium",
      monthlyPrice: "$139",
      annualPrice: "$119",
      features: ["Core Features", "5 User Reports/Month", "Standard Templates"],
    },
  ];

  return (
    <section className="price-card-section text-white py-16 px-6 overflow-auto md:px-12 lg:px-40">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
          Price Plan
        </div>
        <h2 className="text-4xl font-extrabold leading-tight mt-4">
          Flexible Pricing Plans Tailored <br /> To Meet Your Needs
        </h2>
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-3xl font-semibold transition-all duration-300 ${
              billingCycle === "monthly"
                ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annually")}
            className={`px-6 py-2 rounded-3xl font-semibold transition-all duration-300 ${
              billingCycle === "annually"
                ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Annually
          </button>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`price-card relative rounded-3xl shadow-lg ${
              index === 1 ? "p-[2px]" : "bg-wwrcolor"
            }`}
            style={
              index === 1
                ? {
                    background: "linear-gradient(to right, #34D399, #3B82F6)",
                  }
                : {}
            }
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Card Content */}
            <div
              className={`relative z-10 bg-wwrcolor  rounded-3xl p-8 ${
                index === 1 ? "border-0" : "border border-gray-700"
              }`}
            >
              {/* Icon and Title */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500">
                  {plan.title === "Starter" && <span>■</span>}
                  {plan.title === "Standard" && <span>●</span>}
                  {plan.title === "Premium" && <span>▲</span>}
                </div>
                <p className="px-4 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-3xl font-medium text-lg">
                  {plan.title}
                </p>
              </div>

              {/* Pricing */}
              <h3 className="text-5xl text-left font-bold mb-2">
                {billingCycle === "monthly"
                  ? plan.monthlyPrice
                  : plan.annualPrice}
                <span className="text-base font-normal">/month</span>
              </h3>

              {/* Plan Features Header */}
              <h4 className="text-xl text-left font-semibold mt-4 mb-2">
                Plan Features
              </h4>
              <p className="text-gray-400 text-left mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              {/* Features List */}
              <ul className="mb-6 space-y-4 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm flex items-center space-x-2">
                    <span className="text-green-400">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Discover More Button */}
              <Button
                text="Discover More"
                href="/about"
                icon="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/6727128b273f00c151622b3e_button-arrow.png"
                hoverColor="#242629"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PriceCard;
