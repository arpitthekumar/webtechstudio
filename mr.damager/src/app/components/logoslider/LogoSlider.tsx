
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const logos = [
  "https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/67230068b8617a6a9ae9e35b_client-logo.png",
  "https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/675977a4c4a3febd0ee22b69_innovex%20logo.svg",
  "https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/67583f389a41c5b754e023a1_client%20logo.png",
  "https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/67230068f36e12f0dcdedc0b_client-logo-2.png",
  "https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/67583f4896e514b001871bf0_client-logo-two.png",
];

const LogoSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const wrapWidth = slider.scrollWidth / 2; // Calculate width for one cycle
    gsap.to(slider, {
      x: `-${wrapWidth}px`,
      duration: 10,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % wrapWidth), // Wrap around seamlessly
      },
    });
  }, []);

  return (
    <section className="logo-slider-section overflow-hidden py-8">
      <div
        ref={sliderRef}
        className="flex gap-24 whitespace-nowrap will-change-transform"
      >
        {/* Render logos twice for seamless looping */}
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="slider-logo w-56 h-auto object-contain"
          />
        ))}
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="slider-logo w-56 h-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default LogoSlider;
