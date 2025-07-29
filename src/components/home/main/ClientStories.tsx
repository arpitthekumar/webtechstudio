"use client";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Chip from "./chip/chip";
import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  // Triguna Coaching Classes
  {
    text: "Web Tech Studio delivered a fast, responsive, and visually appealing website for our coaching center. The new design and structured content have significantly improved student inquiries.",
    name: "Ashish",
    position: "Founder, Triguna Coaching Classes",
    image: "/clientphoto/triguna.webp",
  },
  {
    text: "Their SEO strategy helped us reach a wider audience, and the smooth UX makes it easier for students to navigate. Highly recommend their expertise!",
    name: "Jagvendra",
    position: "Co-Founder, Triguna Coaching Classes",
    image: "/clientphoto/sir2.webp",
  },
  {
    text: "Web Tech Studio created an engaging platform that makes online learning simple and effective. Their UI/UX expertise is unmatched!",
    name: "Daksh Sharma",
    position: "CEO, Gurukul Skills",
    image: "/clientphoto/gurukul.webp",
  },
  {
    text: "From branding to development, everything was handled with professionalism. Our website now truly represents the excellence of our coaching institute.",
    name: "Rupesh Pachori",
    position: "Managing Director, Triguna Coaching Classes",
    image: "/clientphoto/sir4.webp",
  },

  // Gurukul Skills
  {
    text: "Their use of modern animations and seamless navigation makes our website feel premium. It's a game-changer for online education.",
    name: "Arpit Gupta",
    position: "Head of Operations, Gurukul Skills",
    image: "/clientphoto/gurukul.webp",
  },

  // Universal Taekwondo Academy
  {
    text: "The website now reflects the energy and discipline of Taekwondo. The bold, action-packed visuals are exactly what we needed!",
    name: "Aman Singh",
    position: "Co-Founder, Universal Taekwondo Academy",
    image: "/clientphoto/tkw.webp",
  },
  // ADSuper
  {
    text: "Web Tech Studio crafted a high-converting, SEO-optimized landing page for us. Since the launch, traffic and engagement have skyrocketed.",
    name: "Uday chauhan",
    position: "ADSuper",
    image: "/clientphoto/adsuper.webp",
  },
  {
    text: "My portfolio website is a true reflection of my brand. The GSAP and Locomotive Scroll animations bring my work to life! The site's smooth performance and interactive design have helped me stand out in the industry. Web Tech Studio nailed it!",
    name: "Arpit kumar(Mr.Damager)",
    position: "Web Developer & Influencer",
    image: "/clientphoto/Mr.damager.webp",
  },
  {
    text: "We saw a 60% increase in student enrollments after the redesign. Their team truly understands how to convert visitors into active users.",
    name: "Abhishek Singh",
    position: "Co-Founder, Gurukul Skills",
    image: "/clientphoto/gurukul.webp",
  },
  {
    text: "Our academy needed a strong digital presence, and Web Tech Studio delivered. The animations and fast load speed improved our user experience significantly.",
    name: "Universal Taekwondo Academy",
    position: "Head Instructor, Universal Taekwondo Academy",
    image: "/clientphoto/tkw.webp",
  },
];

const ClientSuccessStories = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const duplicatedTestimonials = isMobile
    ? [...testimonials, ...testimonials, ...testimonials] // More items for mobile
    : [...testimonials, ...testimonials, ...testimonials]; // Default for desktop
  return (
    <div className="bg-black text-white overflow-auto py-20 px-6 md:px-20">
      <div className="flex flex-col items-center text-center pb-12">
        <Chip text="What Our Clients Say" isDark={true} />

        <h2 className="text-5xl font-bold pb-3">Client Success Stories</h2>
        <p className="text-bluish-gray max-w-xl mx-auto">
          Hear from those who've experienced our Kairos firsthand.
        </p>
      </div>

      {/* ✅ Testimonials Box */}
      <div className="relative w-full max-w-9xl mx-auto overflow-hidden  rounded-4xl">
        <div className="absolute top-0 left-0 h-full w-12 md:w-96 bg-gradient-to-r from-black via-transparent to-transparent z-10 pointer-events-none" />

        {/* ✅ Right Gradient Shadow */}
        <div className="absolute top-0 right-0 h-full w-12 md:w-96 bg-gradient-to-l from-black via-transparent to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex space-x-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: isMobile ? 15 : 10,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[320px] bg-[linear-gradient(#181823,#101017)] p-6 rounded-4xl border border-transparent hover:border-[var(--acua-marine)]  flex-shrink-0"
            >
              <FaQuoteLeft className="text-gray-500 opacity-25 text-3xl" />
              <p className="pt-6 text-bluish-gray">{testimonial.text}</p>

              <div className="flex items-center gap-4 mt-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-gray-700 object-cover"
                />
                <div>
                  <h3 className="text-white font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-white text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientSuccessStories;
