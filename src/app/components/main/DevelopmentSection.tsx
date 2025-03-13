"use client";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

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
    image: "/mainpage/image2.png",
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
    image: "/mainpage/image1.png",
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
    image: "/mainpage/image3.png",
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
    className="group flex flex-col md:flex-row items-center justify-between bg-section-bg text-white p-12 rounded-3xl mx-10 border border-transparent transition-all duration-300 hover:border-acua-marine"
  >
    {!reverse && (
      <div className="max-w-lg group space-y-6">
        <h2 className="text-4xl group font-bold ">{title}</h2>
        <p className="text-bluish-gray group">{description}</p>
        {features.map((item: string, index: number) => (
          <FeatureItem key={index} text={item} />
        ))}
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
        className="rounded-3xl group border border-gray-700/50 w-full h-100 object-cover"
      />
    </motion.div>

    {reverse && (
      <div className="max-w-lg group space-y-6">
        <h2 className="text-4xl group font-bold">{title}</h2>
        <p className="text-bluish-gray group">{description}</p>
        {features.map((item: string, index: number) => (
          <FeatureItem key={index} text={item} />
        ))}
      </div>
    )}
  </motion.section>
);

const DevelopmentSection = () => {
  return (
    <div className="bg-black text-white py-20 px-6 space-y-10">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group text-sm flex items-center bg-white/30 text-white px-4 py-2 rounded-full mb-4 w-fit border border-transparent hover:border-acua-marine transition-all"
        >
          <div className="h-2 w-2 mt-0 mr-2 rounded-full bg-acua-marine"></div>
          Who We Are
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-lg mb-4 text-bluish-gray"
        >
          Our expertise spans across development, UI/UX design, and branding, providing everything agencies need to thrive in the digital space.
        </motion.p>
      </div>

      {sections.map((section, index) => (
        <Section key={index} {...section} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
};

export default DevelopmentSection;
