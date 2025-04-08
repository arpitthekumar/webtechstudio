import React from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";

const Hero1: React.FC = () => {
  React.useEffect(() => {
    // Animate rotation for the outer badge indefinitely
    gsap.to(".badge-outer", {
      rotation: 360,
      duration: 5,
      repeat: -1, // Infinite loop
      ease: "linear",
    });
  }, []);

  return (
    <div className="hero-container text-white px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center my-10 md:my-20"
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-7xl py-10 md:py-0 font-bold leading-tight">
          Your Path To{" "}
          <span className="bg-clip-text text-stroke bg-gradient-to-r from-green-400 to-blue-500">
            Marketing
          </span>{" "}
          Excellence Starts Here
        </h1>
      </motion.div>

      <div className="hero-section relative rounded-lg max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10">
        {/* Tilted Div */}
        <motion.div
          className="relative text-left md:my-16 h-auto w-full lg:w-1/2 mb-20 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[9deg] w-full h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl"></div>

          {/* Inner Black Box */}
          <div className="relative inset-1 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl">
            <h3 className="text-3xl sm:text-4xl md:text-6xl py-2 font-bold">
              20+
            </h3>
            <p className="text-xl sm:text-2xl md:text-3xl py-2 font-medium">
              Year Experience
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              With 20 Years Of Experience, We&apos;ve Earned Hundreds Of Awards
              And Certificates. We&apos;ve Earned Hundreds Of Awards.
            </p>
          </div>
        </motion.div>

        <div className="relative w-full h-full">
          <div className="absolute -top-10 right-10 z-10 block">
            <div className="relative flex justify-center items-center">
              <img
                src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/674e9d6f5f091e516b57c5da_Group%201171275426.png"
                alt="Badge Outer"
                className="badge-outer w-20 sm:w-24 md:w-32"
              />
              <img
                src="/Mr.damager.png"
                alt="Badge Inner"
                className="absolute ml-5 mt-5 sm:ml-8 md:mt-8 inset-0 w-10 sm:w-12 md:w-16 rounded-full"
              />
            </div>
          </div>
          <motion.div
            className="relative flex justify-center z-0 w-full bg-cover bg-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative group w-full">
              <Image
                width={500}
                height={500}
                src="/hero1/1.png"
                alt="Hero Image"
                className="rounded-3xl w-full max-w-md md:max-w-lg lg:max-w-full h-auto object-cover"
              />
              <img
                width={500}
                height={500}
                src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/67220ab90f3cb5ff30ebc5a4_hero-gradient.png"
                alt="Hero Gradient"
                className="rounded-3xl absolute w-full max-w-md top-0 opacity-0 group-hover:opacity-100 md:max-w-lg lg:max-w-full h-auto object-cover"
              />

              <div className="absolute bottom-10 left-0 w-full text-left p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-white z-10 text-xl font-semibold"
                >
                  Our innovative marketing strategies help businesses grow, and
                  achieve measurable results. Let us help you amplify your brand
                  and reach your goals.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
