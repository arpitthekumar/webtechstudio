"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import Chip from "../chip/chip";

const teamMembers = [
  {
    name: "Sophia Garcia",
    role: "Lead Developer",
    image: "/mainpage/image1.png",
    socials: {
      github: "https://github.com/sophia",
      instagram: "https://instagram.com/sophia",
      youtube: "https://youtube.com/sophia",
    },
  },
  {
    name: "Alex Thompson",
    role: "Senior UI/UX Designer",
    image: "/mainpage/image2.png",
    socials: {
      github: "https://github.com/alex",
      instagram: "https://instagram.com/alex",
      youtube: "https://youtube.com/alex",
    },
  },
  {
    name: "Michael Lee",
    role: "Project Manager",
    image: "/mainpage/image3.png",
    socials: {
      github: "https://github.com/michael",
      instagram: "https://instagram.com/michael",
      youtube: "https://youtube.com/michael",
    },
  },
  {
    name: "Rachel Evans",
    role: "Branding Specialist",
    image: "/mainpage/image.png",
    socials: {
      github: "https://github.com/rachel",
      instagram: "https://instagram.com/rachel",
      youtube: "https://youtube.com/rachel",
    },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" },
};

const Team: React.FC = () => {
  return (
    <motion.section
      className="max-w-9xl bg-black text-white mx-auto py-20 md:px-20 px-6 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Header */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Chip text="Meet Our Team" isDark={true} />
        <h2 className="text-5xl text-white font-bold">
          Meet Our WebTech Studio Expertise
        </h2>
        <p className="text-gray-200 max-w-xl mt-2">
          Our team is a diverse group of professionals, each bringing their
          unique skills to deliver exceptional results for your projects.
        </p>
      </motion.div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
            transition={{ delay: index * 0.2 }}
            className="relative bg-[#121212] rounded-4xl overflow-hidden shadow-lg transition-all border group border-gray-600/60 hover:border-[var(--acua-marine)] duration-300 group"
          >
            {/* Member Image */}
            <div className="relative group">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={300}
                className="w-full p-5 h-[400px] rounded-4xl group object-cover"
              />

              {/* Gradient Overlay (Appears on Hover) */}
              <div className="absolute inset-0 m-5 rounded-lg bg-[linear-gradient(#0000,#000)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="absolute top-32 left-29 w-full h-full inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex flex-col bg-[#121212] p-2 rounded-3xl gap-2">
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white rounded-full hover:text-[var(--acua-marine)]"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white rounded-full hover:text-[var(--acua-marine)]"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href={member.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white rounded-full hover:text-[var(--acua-marine)]"
                  >
                    <FaYoutube size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links (Appear on Hover) */}

            {/* Member Info */}
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Team;
