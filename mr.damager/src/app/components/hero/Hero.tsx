
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Button from "../button/Button";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const zoomRef = useRef(null);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const zoomElement = zoomRef.current;
    const containerElement = containerRef.current;
    const headerElement = headerRef.current;
    const footerElement = footerRef.current;
    const textElement = textRef.current;
    const buttonElement = buttonRef.current;

    if (zoomElement && containerElement) {
      const mm = gsap.matchMedia();

      mm.add(
        {
          // Mobile view
          isMobile: "(max-width: 768px)",
          // Desktop view
          isDesktop: "(min-width: 769px)",
        },
        (context: gsap.Context) => {
          const { isMobile, isDesktop } = context.conditions || {};

          // Zoom animation
          gsap.to(zoomElement, {
            scale: isMobile ? 37 : isDesktop ? 1650 : 20,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerElement,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
              pin: true,
              anticipatePin: 1,
            },
          });

          gsap.fromTo(
            [headerElement, footerElement, textElement, buttonElement],
            { opacity: 100, y: 100 }, // Start fully visible
            {
              opacity: 0, // Fade out
              y: 0, // Move slightly upward
              scrollTrigger: {
                trigger: containerElement,
                start: "top 20%", // Trigger starts at the top
                end: "bottom top", // Trigger ends at the bottom
                scrub: true, // Sync with scroll
                toggleActions: "play reverse play reverse", // Smooth reverse effect
                onLeaveBack: () => {
                  gsap.set(
                    [headerElement, footerElement, textElement, buttonElement],
                    {
                      opacity: 1,
                      y: 0,
                    }
                  );
                },
              },
            }
          );
        }
      );
      return () => {
        mm.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen flex flex-col overflow-hidden text-white"
    >
        <motion.div
        ref={headerRef}
        className="w-full flex flex-col md:flex-row top-0 items-center md:justify-between px-6 md:px-16 py-6 gap-4 md:gap-0"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Info */}
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12">
            <Image
              alt="logo(Mr.damagerimage)"
              src="/Mr.damager.jpg"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <p className="font-medium text-lg text-center md:text-left">
            Mr. Damager (Arpit Kumar)
          </p>
        </div>
        <div className="w-full flex md:flex-row items-center justify-between md:gap-0">
          {/* Location */}
          <p className="text-gray-400 text-sm md:text-lg text-center">
            Agra, India (2025)
          </p>

          {/* Contact Button */}
          <Button
            text="Let’s talk →"
            href="/contact"
            className="px-4 py-2 md:px-6 md:py-2 self-center md:self-auto"
            hoverColor="#0a0a0a"
          />
        </div>
      </motion.div>
      {/* Hero Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.h1
          ref={zoomRef}
          className="text-6xl md:text-9xl font-bold leading-tight"
          style={{ transformOrigin: "center" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Web{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Developer
          </span>
        </motion.h1>
        <motion.p
          ref={textRef}
          className="mt-8 mb-8 text-lg md:text-xl text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Crafting seamless websites with creativity and precision.
        </motion.p>
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            text="Let’s talk →"
            href="/contact"
            className="px-6 py-2"
            hoverColor="#0a0a0a"
          />
        </motion.div>
      </div>

      {/* Footer Section */}
      <motion.div
        ref={footerRef}
        className="relative w-full flex items-center justify-between px-6 md:px-16 pb-6 mt-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        {/* Play Button */}
        <motion.div
          className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          Play
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
