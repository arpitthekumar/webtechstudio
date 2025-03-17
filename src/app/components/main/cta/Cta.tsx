"use client";
import { motion } from "framer-motion";
import Button from "../button/Button";
import Chip from "../chip/chip";

const Cta: React.FC = () => {
  return (
    <motion.div
      className="bg-[linear-gradient(#181823,#101017)] rounded-4xl text-center p-12 max-w-9xl my-20 mx-6 md:mx-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* ✅ Header + Chip */}
      <motion.div
        className="flex flex-col items-center text-center pb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <Chip text="What Our Clients Say" isDark={true} />
        </motion.div>
        <motion.h1
          className="text-6xl font-bold text-white mt-4"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Ready to Elevate Your Digital Presence?
        </motion.h1>
        <motion.p
          className="text-bluish-gray mt-4 max-w-xl"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Partner with us to bring your vision to life. From websites to branding and design, we've got you covered.
        </motion.p>
      </motion.div>

      {/* ✅ Buttons */}
      <motion.div
        className="flex justify-center flex-col md:flex-row gap-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
          <Button text="Get Started" mode="light" href="/contact" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
          <Button text="Get A Quote" mode="dark" href="/contact" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Cta;
