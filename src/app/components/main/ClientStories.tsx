"use client";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import Chip from "./chip/chip";

const testimonials = [
  {
    text: "Working with Kairos was a game changer for us. They delivered a flawless website that surpassed our expectations. Their expertise in web development made our vision a reality with a seamless experience.",
    name: "Michael Lee",
    position: "Founder, BrandLift",
    image: "/mainpage/image.png",
  },
  {
    text: "Kairos’s UX design services improved our engagement by 50%. Their attention to detail is unmatched. The team took time to understand our brand and delivered a stunning, user-friendly design that boosted our conversions significantly.",
    name: "Sarah Collins",
    position: "CEO, DesignHub",
    image: "/mainpage/image.png",
  },
  {
    text: "The branding work Kairos did for us was incredible. They transformed our brand into something fresh and modern. Their ability to capture the essence of our company and translate it into a strong visual identity was outstanding.",
    name: "David Lee",
    position: "Marketing Head, SwiftCorp",
    image: "/mainpage/image.png",
  },
  {
    text: "Our platform now looks premium and user-friendly, boosting our sales by 70%. A highly professional team! Their design and development process was smooth, and they ensured every feature was perfectly aligned with our business goals.",
    name: "Anita Roy",
    position: "Product Manager, FlowTech",
    image: "/mainpage/image.png",
  },
  {
    text: "Kairos delivered an exceptional e-commerce platform for us. The UI is intuitive, fast, and beautifully designed. Our customer feedback has been overwhelmingly positive, and we’ve seen an increase in repeat purchases.",
    name: "James Carter",
    position: "CTO, ShopEase",
    image: "/mainpage/image.png",
  },
  {
    text: "Thanks to Kairos, our SaaS product now has a sleek, high-performance UI that’s intuitive and easy to navigate. Their design team was collaborative, and their attention to accessibility made a huge difference.",
    name: "Emily Watson",
    position: "Lead Developer, SoftCloud",
    image: "/mainpage/image.png",
  },
  {
    text: "The website Kairos developed for us helped increase our credibility and brand authority. Their creative approach to web design made a lasting impact, and we highly recommend their services to anyone looking for top-tier digital solutions.",
    name: "Robert Hughes",
    position: "COO, VisionTech",
    image: "/mainpage/image.png",
  },
  {
    text: "We needed a website that matched our premium brand, and Kairos delivered exactly that. The design is elegant, fast, and optimized for conversions. We’re beyond satisfied with their work and will continue to collaborate with them.",
    name: "Jessica Patel",
    position: "CMO, LuxeDesign",
    image: "/mainpage/image.png",
  },
  {
    text: "Working with Kairos was an absolute pleasure. Their expertise in UX and development resulted in a seamless product that our users love. Their ability to simplify complex processes into a smooth user experience was impressive.",
    name: "Liam Johnson",
    position: "Head of Product, NexaSoft",
    image: "/mainpage/image.png",
  },
  {
    text: "Kairos has completely transformed our online presence. Their design, development, and branding expertise took our business to new heights. We couldn’t be happier with the results!",
    name: "Sophia Martinez",
    position: "Founder, Elevate Studios",
    image: "/mainpage/image.png",
  },
];

const ClientSuccessStories = () => {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-20">
      {/* ✅ Section Header */}
      <div className="flex flex-col items-center text-center pb-12">
        <Chip text="What Our Clients Say" isDark={true} />

        <h2 className="text-5xl font-bold pb-3">Client Success Stories</h2>
        <p className="text-bluish-gray max-w-xl mx-auto">
          Hear from those who've experienced our Kairos firsthand.
        </p>
      </div>

      {/* ✅ Testimonials Box */}
      <div className="relative w-full max-w-9xl mx-auto overflow-hidden  rounded-4xl">
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[320px] bg-[linear-gradient(#181823,#101017)] p-6 rounded-4xl border border-transparent hover:border-[var(--acua-marine)]  flex-shrink-0"
            >
              {/* ✅ Quote Icon */}
              <FaQuoteLeft className="text-gray-500 opacity-25 text-3xl" />
              <p className="pt-6 text-bluish-gray">{testimonial.text}</p>

              {/* ✅ Author Section */}
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-700"
                />
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
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
