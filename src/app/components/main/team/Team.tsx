"use client";
import { motion } from "framer-motion";

const Team: React.FC = () => {
    const teamMembers = [
        {
          name: "Sophia Garcia",
          role: "Lead Developer",
          image: "/mainpage/image1.png" ,
        },
        {
          name: "Alex Thompson",
          role: "Senior UI/UX Designer",
          image:"/mainpage/image2.png" ,
        },
        {
          name: "Michael Lee",
          role: "Project Manager",
          image: "/mainpage/image3.png",
        },
        {
          name: "Rachel Evans",
          role: "Branding Specialist",
          image: "/mainpage/image.png",
        },
      ];
    return (
      <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0,0,0,0.2)" }}
              className="bg-[#121212] rounded-2xl overflow-hidden shadow-lg transition-all duration-500"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </>
    );
};

export default Team;