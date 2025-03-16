"use client";
import { motion } from "framer-motion";
import { FaCheck, FaTimes, FaArrowRight } from "react-icons/fa";

const PricingPage = () => {
  const plans = [
    {
      title: "Essentials for Small Projects",
      price: "$499",
      plan: "Starter",
      features: [
        "Custom Web Development",
        "Basic UI/UX Design",
        null,
        null,
        null,
      ],
    },
    {
      title: "Designed for Expanding Businesses",
      price: "$999",
      plan: "Starter",
      features: [
        "Custom Web Development",
        "Basic UI/UX Design",
        "Unlimited Revisions",
        "Support",
        "Branding Services",
      ],
    },
    {
      title: "Advanced Features for Professionals",
      price: "$1499",
      plan: "Professional",
      features: [
        "Custom Web Development",
        "Basic UI/UX Design",
        "Unlimited Revisions",
        "Support",
        "Branding Services",
      ],
    },
  ];



  return (
    <div className="bg-black text-white py-20 px-6">
      {/* ✅ Pricing Section */}
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <span className="text-green-400 bg-gray-800 px-4 py-1 rounded-full text-sm">
          ● Our Plans
        </span>
        <h1 className="text-4xl font-bold">Flexible Pricing for Every Need</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Choose a plan that fits your project's scale and budget. Whether you
          need essential services or a complete digital solution, we've got you
          covered.
        </p>
      </div>

      {/* ✅ Pricing Cards with Animation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0,0,0,0.2)" }}
            className="bg-[#121212] rounded-2xl p-6 flex flex-col space-y-4 shadow-lg border border-gray-800 hover:border-green-400 transition-all"
          >
            <div className="text-green-400 text-sm font-semibold bg-gray-800 px-4 py-1 rounded-full w-fit">
              {plan.plan}
            </div>
            <h2 className="text-xl font-semibold">{plan.title}</h2>
            <h3 className="text-3xl font-bold">{plan.price}/month</h3>

            {/* ✅ Features List */}
            <div className="space-y-2">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  {feature ? (
                    <FaCheck className="text-green-400" />
                  ) : (
                    <FaTimes className="text-red-500" />
                  )}
                  <span>
                    {feature ? feature : "Not Included"}
                  </span>
                </div>
              ))}
            </div>

            {/* ✅ Choose Plan Button with Animation */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-green-400 text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-green-500 transition-all"
            >
              Choose Plan <FaArrowRight />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* ✅ Meet Our Team Section */}
      <div className="bg-black text-white py-20 px-6 mt-20">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <span className="text-green-400 bg-gray-800 px-4 py-1 rounded-full text-sm tracking-wide">
            ● Meet Our Team
          </span>
          <h1 className="text-4xl font-bold leading-tight">
            Meet Our Kairos Expertise
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our team is a diverse group of professionals, each bringing their
            unique skills to deliver exceptional results for your projects.
          </p>
        </div>

        {/* ✅ Team Cards with Smooth Hover Animation */}
        
      </div>
    </div>
  );
};

export default PricingPage;
