import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section className="video-section text-white py-12">
      <div
        ref={containerRef}
        className="container mx-auto flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="video-layout relative w-full max-w-4xl"
        >
          <motion.div
            className="background-video relative w-full group h-full overflow-hidden rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807%2F674fd19603d03dfcffd8ee35_marketing-poster-00001.jpg"
            >
              <source
                src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807%2F674fd19603d03dfcffd8ee35_marketing-transcode.mp4"
                type="video/mp4"
              />
              <source
                src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807%2F674fd19603d03dfcffd8ee35_marketing-transcode.webm"
                type="video/webm"
              />
            </video>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              aria-live="polite"
            >
              <button
                type="button"
                onClick={() => {
                  if (videoRef.current) {
                    if (videoRef.current.paused) {
                      videoRef.current.play();
                    } else {
                      videoRef.current.pause();
                    }
                  }
                }}
                className="play-pause-button bg-white bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-full p-2"
              >
                <img
                  src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/674d8cf24e9f9c936fe0659a_play.png"
                  alt="Play video"
                  className="h-6 w-6"
                />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
