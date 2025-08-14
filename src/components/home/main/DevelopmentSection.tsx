"use client";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import Button from "./button/Button";
import Chip from "./chip/chip";

const sections = [
  {
    title: "Custom Web Development",
    description:
      "We build scalable and user-friendly websites tailored to your business needs.",
    features: [
      "Custom Web Development",
      "E-Commerce Solutions",
      "Responsive Design",
      "CMS Integration",
    ],
    image: "/mainpage/WebDevelopment.webp",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating stunning and user-friendly interfaces that engage and inspire.",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "UI Design",
      "UX Optimization",
    ],
    image: "/mainpage/ui.webp",
  },
  {
    title: "Branding & Identity",
    description:
      "We create powerful branding strategies that stand out in the market.",
    features: [
      "Brand Identity Design",
      "Logo Design",
      "Brand Strategy",
      "Marketing Collateral",
    ],
    image: "/mainpage/branding.webp",
  },
];

const FeatureItem = ({ text }: { text: string }) => (
  <motion.div className="flex items-center space-x-3 bg-text-bg px-4 w-fit py-2 rounded-full">
    <FaCheck className="text-acua-marine" />
    <span>{text}</span>
  </motion.div>
);

const Section = ({ title, description, features, image, reverse }: any) => (
  <motion.section
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="group flex flex-col md:flex-row items-center justify-between bg-section-bg text-white p-12 rounded-3xl md:mx-10 border border-transparent transition-all duration-300 hover:border-[var(--acua-marine)]"
  >
    {!reverse && (
      <div className="max-w-lg group space-y-6">
        <h2 className="text-4xl group font-bold ">{title}</h2>
        <p className="text-bluish-gray group">{description}</p>
        {features.map((item: string, index: number) => (
          <FeatureItem key={index} text={item} />
        ))}
        <Button text="Discover Our Story" mode="light" href="/Contact" />
      </div>
    )}

    <motion.div
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="md:w-1/2 my-5 group"
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={320}
        className="rounded-3xl group border border-gray-700/50 w-full h-100 "
      />
    </motion.div>

    {reverse && (
      <div className="max-w-lg group space-y-6">
        <h2 className="text-4xl group font-bold">{title}</h2>
        <p className="text-bluish-gray group">{description}</p>
        {features.map((item: string, index: number) => (
          <FeatureItem key={index} text={item} />
        ))}
        <Button text="Discover Our Story" mode="light" href="/Contact" />
      </div>
    )}
  </motion.section>
);

const DevelopmentSection = () => {
  return (
    <div className="bg-black text-white py-20 px-6 space-y-10">
      <div className="flex flex-col items-center text-center">
        <Chip text="Who We Are" isDark={true} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-lg mb-4 text-bluish-gray"
        >
          We specialize in development, UI/UX design, and branding—delivering
          everything agencies need to excel in the digital world.
        </motion.p>
      </div>

      {sections.map((section, index) => (
        <Section key={index} {...section} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
};

export default DevelopmentSection;
