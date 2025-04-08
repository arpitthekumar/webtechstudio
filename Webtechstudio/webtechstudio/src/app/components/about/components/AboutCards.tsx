"use client";

import { motion } from "framer-motion";

const stats = [
  {
    id: 1,
    value: "50+",
    title: "Projects Delivered",
    description:
      "We’ve successfully completed over 500 digital projects, driving growth for startups and enterprises alike.",
  },
  {
    id: 2,
    value: "98%",
    title: "Client Satisfaction",
    description:
      "We’ve successfully completed over 500 digital projects, driving growth for startups and enterprises alike.",
  },
  {
    id: 3,
    value: "5+",
    title: "Industry Experience",
    description:
      "We’ve successfully completed over 500 digital projects, driving growth for startups and enterprises alike.",
  },
];

const AboutCards = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-black flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-9xl w-full">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[linear-gradient(#181823,#101017)] border border-transparent hover:border-[var(--acua-marine)] rounded-4xl p-6 text-left text-white shadow-lg"
          >
            <h2 className="text-5xl font-extrabold">{stat.value}</h2>
            <p className="text-4xl font-bold text-acua-marine mt-4">{stat.title}</p>
            <p className="text-bluish-gray text-lg mt-4">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutCards;
