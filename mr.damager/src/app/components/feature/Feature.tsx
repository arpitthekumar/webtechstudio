import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FeatureSection = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animation for the progress bar
    const handleScroll = () => {
      const section = progressRef.current;
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      const progress = Math.min(Math.max((window.innerHeight - top) / height, 0), 1);

      gsap.to(".progress-bar", {
        scaleX: progress,
        transformOrigin: "left",
        ease: "none",
        duration: 0.1,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={progressRef}
      className="feature-section py-32 bg-wwrcolor text-white relative overflow-auto"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-2 text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
            Working Process
          </div>
          <h2 className="feature-title text-4xl md:text-5xl font-bold mt-4 leading-tight">
            How We Bring Your <br /> Vision To Life
          </h2>
        </motion.div>

        {/* Feature Timeline */}
        <div className="relative flex flex-col md:flex-row items-center justify-between">
          {/* Timeline Line */}
          <div className="absolute w-full h-1 bg-gray-700 top-10 md:top-5 transform -translate-y-1/2 hidden md:block"></div>

          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center mx-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Feature Number */}
              <motion.div
                className="feature-number bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl font-bold rounded-3xl mt-10 md:mt-0 w-12 h-12 flex items-center justify-center z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {feature.number}
              </motion.div>

              {/* Text Below */}
              <div className="mt-10">
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const featureData = [
  {
    number: "01",
    title: "Our Strategic Approach",
    description:
      "We combine data-driven insights, creative strategies, and innovative solutions to drive.",
  },
  {
    number: "02",
    title: "From Idea to Impact",
    description:
      "Transforming your ideas into powerful strategies that drive real, lasting impact for your business.",
  },
  {
    number: "03",
    title: "Insight into Action",
    description:
      "Turning valuable insights into actionable strategies that deliver tangible results and business growth.",
  },
];

export default FeatureSection;
