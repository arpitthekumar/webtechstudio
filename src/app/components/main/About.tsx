"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./button/Button";

const AboutSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-section-bg text-white h-screen py-20 md:px-20 px-2 flex flex-col md:flex-row items-center gap-10">
      {/* Left Side */}
      <div className="flex-1 ">
        <div className="text-sm flex bg-white/30 text-white px-4 py-2 rounded-full mb-4 w-fit">
          <div className="h-2 w-2 mt-1 mr-2 rounded-full bg-acua-marine"></div>
          Who We Are
        </div>
        <p className="text-lg mb-4">
          At <span className="font-bold">Kairos</span>, we provide custom
          digital solutions designed to help agencies grow. Our team blends
          creativity, innovation, and expertise to deliver exceptional results,
          empowering brands to succeed in a rapidly evolving digital world.
        </p>

        <div className="flex space-x-10 mb-6">
          <div className="text-center">
            <h3 className="text-4xl font-bold">700+</h3>
            <p className="text-acua-marine">Projects Delivered</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="text-acua-marine">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="text-acua-marine">Industry Experience</p>
          </div>
        </div>

        <p className="text-gray-400 mb-6">
          With a commitment to excellence, we have successfully helped over 100
          brands enhance their digital presence. Our tailored approach ensures
          impactful results for every client.
        </p>
        <Button text="Discover Our Story" mode="light" href="/contact" />
      </div>

      {/* Right Side (Clickable Video) */}
      <div className="flex-1 relative cursor-pointer" onClick={() => setIsOpen(true)}>
        <Image
          width={800}
          height={800}
          src="/mainpage/image.png"
          alt="Video"
          className="rounded-2xl shadow-lg"
        />
        {/* Play Button with Background Effect */}
        <div className="absolute inset-0 flex justify-center items-center cursor-pointe">
          <div className="w-24 h-24 rounded-full bg-white/40 absolute cursor-pointe "></div>
          <button className="bg-acua-marine text-white cursor-pointe w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg relative">
            ▶
          </button>
        </div>
      </div>

      {/* Video Modal (Popup) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-80 flex items-center justify-center z-50">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text- text-3xl z-50"
            >
              ✖
            </button>
          <div className="relative w-full max-w-3xl">
            {/* Close Button */}

            {/* Video */}
            <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
