import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../button/Button";

const CtaSection: React.FC = () => {
  return (
    <section className="cta-section py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="cta-layout flex flex-col lg:flex-row items-center justify-between bg-wwrcolor p-8 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Section */}
          <motion.div
            className="cta-text-wrap text-center lg:text-left space-y-6 lg:w-2/3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready To Work With Us And Grow Your Business
            </h2>
            <div className="cta-button-wrap flex justify-center lg:justify-start space-x-4">
              <a
                href="/contact"
                className="relative inline-flex items-center justify-center p-[2px] rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white transition"
              >
                <div className="inline-flex items-center justify-center p-[2px] rounded-full bg-gradient-to-r from-wwrcolor to-wwrcolor hover:from-green-400 hover:to-blue-500">
                  <span className="relative text-white py-3 px-6 rounded-3xl">
                    Contact Us →
                  </span>
                </div>
              </a>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  text="Let’s talk →"
                  href="/contact"
                  className="px-6 py-2"
                  hoverColor="#242629"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="cta-right-wrap bg-primary text-white p-6 group rounded-3xl lg:w-1/3 shadow-md"
            initial={{ opacity: 0, x: 50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h6 className="text-lg font-semibold">
              Subscribe To Our Newsletter
            </h6>
            <p className="text-sm text-gray-400">
              Stay Updated With Exclusive Tips, Insights, And Special Offers
              Today!
            </p>
            <form className="form mt-4 flex items-center space-x-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="cta-input-field flex-1 border group border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bottom-0 right-1 opacity-100 transition-opacity duration-300 group-hover:opacity-100"
              >
                <Link href="/about">
                  <motion.div
                    className="group flex items-center justify-center w-10 h-10 bg-wwrcolor group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 rounded-full transition-all duration-300 transform group-hover:-rotate-45"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <p className="text-3xl text-center text-white">→</p>
                  </motion.div>
                </Link>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
