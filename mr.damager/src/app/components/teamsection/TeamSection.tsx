import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialLinks: { platform: string; url: string; icon: React.ReactNode }[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Mr. Williams",
    role: "Software Engineer",
    image: "/Mr.damager.png",
    socialLinks: [
      { platform: "Facebook", url: "#", icon: <FaFacebookF /> },
      { platform: "Instagram", url: "#", icon: <FaInstagram /> },
      { platform: "Twitter", url: "#", icon: <FaTwitter /> },
      { platform: "LinkedIn", url: "#", icon: <FaLinkedinIn /> },
    ],
  },
  {
    name: "Mr. Michael Thompson",
    role: "Senior Manager",
    image: "/Mr.damager.png",
    socialLinks: [
      { platform: "Facebook", url: "#", icon: <FaFacebookF /> },
      { platform: "Instagram", url: "#", icon: <FaInstagram /> },
      { platform: "Twitter", url: "#", icon: <FaTwitter /> },
      { platform: "LinkedIn", url: "#", icon: <FaLinkedinIn /> },
    ],
  },
  {
    name: "Mr. James Anderson",
    role: "Co-Founder",
    image: "/Mr.damager.png",
    socialLinks: [
      { platform: "Facebook", url: "#", icon: <FaFacebookF /> },
      { platform: "Instagram", url: "#", icon: <FaInstagram /> },
      { platform: "Twitter", url: "#", icon: <FaTwitter /> },
      { platform: "LinkedIn", url: "#", icon: <FaLinkedinIn /> },
    ],
  },
];

const TeamSection: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".team-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".our-team-section",
          start: "top center",
        },
      }
    );
  }, []);

  return (  
    <section className="our-team-section py-16 text-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-xl px-5 py-2 rounded-full">
            Our Team
          </span>
          <h1 className="text-4xl font-bold mt-4">
            The Faces Behind Our Success
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card relative group rounded-xl shadow-lg p-10 text-center flex flex-col items-center w-full md:max-w-[280px] max-w-[380px] mx-auto overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Background Image */}
              <img
                src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/6726f70851b60d8f623ecbb1_team-back-image.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
              {/* Profile Content */}
              <div className="relative z-10 flex flex-col items-center">
                <motion.div className="w-32 h-40 rounded-full overflow-hidden mb-4 transform transition-all duration-500 group-hover:scale-110">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400 text-lg">{member.role}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  {member.socialLinks.map((link, i) => (
                    <motion.a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary p-2 rounded-full hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-white text-lg">{link.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
              {/* Icon at Bottom Right */}
              <motion.div className="absolute bottom-0 right-1 opacity-100 transition-opacity duration-300 group-hover:opacity-100">
                <Link href="/about">
                  <div className="flex items-center justify-center w-10 h-10 bg-wwrcolor group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 rounded-full transition-all duration-300">
                    <p className="text-3xl text-center text-white">↗</p>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
