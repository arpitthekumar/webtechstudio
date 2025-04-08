import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero1 from "../hero1/Hero1";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  useEffect(() => {
    // Check if the window width is greater than 768px (desktop view)
    const nameText = document.querySelectorAll(".split-text span");

    // Check if the screen is mobile (less than or equal to 768px)
    const isMobile = window.innerWidth <= 768;
    gsap.to(nameText[0], {
      x: -150,
      y: -100,
      rotationZ: -45,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 50%",
        end: "top",
        scrub: true,
      },
    });

    gsap.to(nameText[1], {
      y:  -150,  
      x: isMobile ? -70 : 0,    
      rotationZ: -10,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 50%",
        end: "top",
        scrub: true,
      },
    });

    gsap.to(nameText[2], {
      x: 150,
      y: -100,
      rotationZ: 45,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 50%",
        end: "top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="about"
      className="about-section container pt-40 pb-20 overflow-hidden mx-auto text-center"
    >
      <div className="text-section ">
        <h2 className="text-4xl font-bold mb-8">
          <span className="split-text inline-block">
            <span>👋 Hi, I&apos;m</span>
          </span>{" "}
          <span className="split-text inline-block">
            <span> Mr.damager</span>
          </span>{" "}
          <span className="split-text inline-block">
            <span>(Arpit Kumar)</span>
          </span>
        </h2>

        {/* Hero Section */}
      </div>
      <Hero1 />
    </section>
  );
};

export default About;
