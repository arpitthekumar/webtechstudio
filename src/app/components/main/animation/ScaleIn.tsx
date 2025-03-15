"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ScaleIn = ({
  children,
  className,
  delay = 0,
  scale = 0.8,
  duration = 0.6,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  scale?: number;
  duration?: number;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;
