import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const features = [
  {
    id: 1,
    title: "Efficient Resource Allocation",
    description: "Optimize tools, time, and effort.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h11M9 21V3m9 10h3m-3 4h3m-3-8h3"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Data-Driven Insights",
    description: "Gain actionable strategies analytics.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 14l6-6m0 0l-6-6m6 6H3"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Automated Workflows",
    description: "Optimize tasks with automation.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const DataAnalizeSection: React.FC = () => {
  const featureListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const featureList = featureListRef.current;

    if (featureList) {
      const items = featureList.querySelectorAll(".feature-item");

      // Create a GSAP timeline for the animation
      const tl = gsap.timeline({ repeat: -1 });

      // Animate each item sequentially with better timing
      items.forEach((item, index) => {
        tl.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.5, // Add a slight delay for each item
          }
        ).to(
          item,
          {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power3.in",
          },
          "+=1" // Delay before the item disappears
        );
      });
    }
  }, []);

  return (
    <section
      className="data-analize-section bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-20"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Streamlined Operations <br /> Connectivity
          </motion.h2>
          <div
            ref={featureListRef}
            className="space-y-4 overflow-hidden h-60 relative"
          >
            {features.map((feature) => (
              <div
                key={feature.id}
                className="feature-item flex items-center bg-gray-800 rounded-lg p-4 gap-4 absolute w-full"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
            </div>
            <div className="flex -space-x-2">
              <img
                src="/avatar1.jpg"
                alt="Avatar 1"
                className="w-8 h-8 rounded-full border-2 border-gray-900"
              />
              <img
                src="/avatar2.jpg"
                alt="Avatar 2"
                className="w-8 h-8 rounded-full border-2 border-gray-900"
              />
              <img
                src="/avatar3.jpg"
                alt="Avatar 3"
                className="w-8 h-8 rounded-full border-2 border-gray-900"
              />
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white border-2 border-gray-900">
                +
              </div>
            </div>
          </div>
          <h4 className="text-lg font-semibold mb-4">
            Strategies For Getting More Done
          </h4>
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-sm text-gray-400">Data Analysis</h5>
              <div className="w-20 h-24 bg-white rounded-lg mt-2"></div>
            </div>
            <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white">
              <span className="text-xl font-bold">90%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalizeSection;
