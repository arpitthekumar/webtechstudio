"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Chip from "../chip/chip";

const teamMembers = [
  {
    name: "Arpit Kumar",
    role: "Lead Developer",
    image: "/mainpage/image1.png",
    socials: {
      github: "https://github.com/Arpitthedamager",
      instagram: "https://www.instagram.com/mr.damager",
      linkedin: "https://www.linkedin.com/in/arpit-kumar-467689356/",
    },
  },
  {
    name: "Uday chauhan",
    role: "Senior UI/UX Designer",
    image: "/mainpage/image2.png",
    socials: {
      github: "https://github.com/alex",
      instagram: "https://instagram.com/alex",
      linkedin: "https://linkedin.com/in/alex",
    },
  },
  {
    name: "Ansh Gupta",
    role: "Frontend Developer",
    image: "/mainpage/image.png",
    socials: {
      github: "https://github.com/Anshkumar1611",
      instagram: "https://instagram.com/rachel",
      linkedin: "https://www.linkedin.com/in/ansh-kumar-064b43198/",
    },
  },
  {
    name: "Ashwani Shing",
    role: "Frontend Developer",
    image: "/mainpage/image3.png",
    socials: {
      github: "https://github.com/aksingh-codes",
      instagram: "https://instagram.com/michael",
      linkedin: "https://www.linkedin.com/in/aksingh-codes/",
    },
  },
  {
    name: "Mohit Gupta",
    role: "Frontend Developer",
    image: "/mainpage/image.png",
    socials: {
      github: "https://github.com/mohitkumar7895",
      instagram: "https://instagram.com/rachel",
      linkedin: "https://linkedin.com/in/rachel",
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

      <div className="relative mt-12">
        <button
          onClick={() => {
            document
              .getElementById("carousel")
              ?.scrollBy({ left: -300, behavior: "smooth" });
          }}
          className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 z-10 h-16 w-10 items-center justify-center bg-black/60 hover:bg-black/80 transition-colors rounded-r-2xl"
        >
          <span className="text-2xl text-white">&#8592;</span>
        </button>

        {/* Scrollable container */}
        <div
          id="carousel"
          className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory gap-6 px-2 lg:px-10"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover="hover"
              transition={{ delay: index * 0.2 }}
              className="w-[360px] snap-start flex-shrink-0 relative bg-[#121212] rounded-4xl overflow-hidden shadow-lg transition-all border group border-gray-600/60 hover:border-[var(--acua-marine)] duration-300"
            >
              <div className="relative group">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={300}
                  className="w-full p-5 h-[400px] rounded-4xl group object-cover"
                />

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
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white rounded-full hover:text-[var(--acua-marine)]"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => {
            document
              .getElementById("carousel")
              ?.scrollBy({ left: 300, behavior: "smooth" });
          }}
          className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-0 z-10 h-16 w-10 items-center justify-center bg-black/60 hover:bg-black/80 transition-colors rounded-l-2xl"
        >
          <span className="text-2xl text-white">&#8594;</span>
        </button>
      </div>
    </motion.section>
  );
};

export default Team;
