// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const FadeInRight = ({
//   children,
//   className,
//   delay = 0,
//   x = 50,
//   duration = 0.6,
// }: {
//   children: React.ReactNode;
//   className?: string;
//   delay?: number;
//   x?: number;
//   duration?: number;
// }) => {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) return <div className={className}>{children}</div>;

//   return (
//     <motion.div
//       initial={{ opacity: 0, x }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration, delay, ease: "easeOut" }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default FadeInRight;
