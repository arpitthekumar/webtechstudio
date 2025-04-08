import { motion } from "framer-motion";
import Button from "../button/Button";

const Wwr = () => {
  return (
    <div className="who-we-are--section wwrcolor py-24">
      <div className="container mx-auto px-8 md:px-12">
        <div className="who-layout grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="who-we-are-left-content-wrap relative">
              <motion.div
                className="who-section-first-image"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/674eaa2c9f77c492b90e347c_who-we%20are-image.png"
                  alt="who-we-are"
                  className="who-we-are-image w-full rounded-lg"
                />
              </motion.div>
              <motion.div
                className="client-wrap justify-center md:justify-normal flex -space-x-4 mt-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/674da4b7e3965221b49e82fb_client-one.png"
                  alt="client"
                  className="client-image w-16 h-16 rounded-full"
                />
                <img
                  src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/674da4b6f29da8f7e0651eda_client-two.png"
                  alt="client"
                  className="client-image-two w-16 h-16 rounded-full"
                />
                <img
                  src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/672219e4d65aa99d9cb50c1a_client-image-2.png"
                  alt="client"
                  className="client-image-two w-16 h-16 rounded-full"
                />
                <div className="client-image w-16 h-16 rounded-full border border-white bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                  <p className="text-5xl">+</p>
                </div>
              </motion.div>
              <motion.h3
                className="text-2xl text-center md:text-4xl font-semibold mt-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                40k+ Happy Clients
              </motion.h3>
            </div>
          </motion.div>

          {/* Middle Card */}
          <motion.div
            className="who-we-are-middle-card text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="who-we-are-middle-content-wrap">
              <motion.div
                className="text-sm uppercase font-semibold mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Who We Are
              </motion.div>
              <motion.h2
                className="who-we-are-title text-3xl font-bold leading-snug"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Passionate About <br />
                Growth
              </motion.h2>
              <motion.p
                className="who-we-are--text text-gray-500 mt-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                We are a passionate team of marketing committed to helping
                businesses thrive. With a focus on innovation, strategy, and
                results.
              </motion.p>
              <motion.div
                className="who-we-are-button-wrap mt-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Button
                  text="Discover More"
                  href="/about"
                  icon="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/6727128b273f00c151622b3e_button-arrow.png"
                  hoverColor="#242629" // Dynamic hover color
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/672219e664044956c8ce0844_who-right-image.png"
              alt="right"
              className="who-we-are-right-image w-full rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Wwr;
