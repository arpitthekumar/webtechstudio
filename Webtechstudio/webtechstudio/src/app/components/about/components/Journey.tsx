"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Chip from "../../main/chip/chip";
import Button from "../../main/button/Button";

const Journey = () => {
  return (
    <section className="w-full bg-section-bg py-20 px-6 md:px-20 flex justify-center">
      <div className="max-w-9xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <Chip text="Our Journey" isDark={true} className="z-10 font-bold" />

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Our Journey From Idea To Impact
          </h2>
          <p className="text-bluish-gray mt-4">
            Founded with a mission to help businesses succeed in the digital
            world, Kairos started as a small cre    ative studio. Over the years,
            we’ve grown into a full-service digital agency, partnering with
            clients across industries to build websites, brands, and experiences
            that matter. Our focus has always been on delivering value,
            fostering innovation, and creating long-term success for our
            clients.
          </p>
          <div className="mt-8">

          <Button text="Work With Us" mode="light" href="/Contact" />
          </div>

        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/mainpage/image3.png"
              alt="Our Journey"
              width={600}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
