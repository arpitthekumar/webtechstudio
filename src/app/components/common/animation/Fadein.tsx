// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const FadeIn = ({
//   children,
//   className,
//   delay = 0,
//   y = 30,
//   duration = 0.6,
// }: {
//   children: React.ReactNode;
//   className?: string;
//   delay?: number;
//   y?: number;
//   duration?: number;
// }) => {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) return <div className={className}>{children}</div>; // SSR fallback

//   return (
//     <motion.div
//       initial={{ opacity: 0, y }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration, delay, ease: "easeOut" }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default FadeIn;
