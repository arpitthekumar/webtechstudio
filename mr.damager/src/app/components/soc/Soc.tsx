// import React, { useEffect, useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import { gsap } from "gsap";

// const cards = [
//     { title: "Custom API Integrations", description: "Enhance Systems With API", icon: "🔗" },
//     { title: "Efficient Resource Allocation", description: "Optimize Tools, Time, And Effort.", icon: "⚙️" },
//     { title: "Data-Driven Insights", description: "Gain Actionable Strategies Analytics", icon: "📊" },
//     { title: "Business Continuity Planning", description: "Ensure your business runs smoothly", icon: "🔧" },
//     { title: "Custom API Integrations", description: "Enhance Systems With API", icon: "🔗" },
//     { title: "Efficient Resource Allocation", description: "Optimize Tools, Time, And Effort.", icon: "⚙️" },
//     { title: "Data-Driven Insights", description: "Gain Actionable Strategies Analytics", icon: "📊" },
//     { title: "Business Continuity Planning", description: "Ensure your business runs smoothly", icon: "🔧" },
//   ];
// const Soc = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//   // Loop through the cards
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//     }, 3000); // Change card every 3 seconds
//     return () => clearInterval(interval);
//   }, [cards.length]);
//   return (
//     <div className="py-52 z-10 overflow-auto text-white p-8">
//       <h1 className="text-7xl text-center mb-10 px-52 font-extrabold leading-tight ">
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
//           Streamlined
//         </span>{" "}
//         Operations Connectivity
//       </h1>
//       <div className="max-w-5xl mx-auto flex justify-between items-center gap-8">
        
//         {/* Left Section */}
//         <motion.div
      
//           className="space-y-6 md:w-1/2 overflow-hidden"
//           id="cards-container"
//         >
//           <div
//             className="space-y-6 h-96 overflow-hidden relative"
//           >
//           <motion.div
//             className="space-y-6"
//             animate={{ y: -currentIndex * 96 }} // Adjust height for each card (96px per card here)
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//           >
//             {cards.map((item, index) => (
//               <div
//                 key={index}
//                 className="card flex items-center gap-4 bg-gray-800 p-4 z-0 rounded-lg shadow-md"
//               >
//                 <div className="w-12 h-12 bg-purple-600 flex items-center justify-center rounded-full text-2xl">
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h2 className="font-semibold text-lg">{item.title}</h2>
//                   <p className="text-sm text-gray-400">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
          
//         </div>
//         </motion.div>

//         {/* Right Section */}
//         <motion.div
         
//           className="bg-gray-800 p-12 rounded-3xl md:w-1/2"
//         >
//           <div className="space-y-6 text-center">
//             <div className="flex items-center justify-between">
//               <img src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/6762af2ba6501ded0f6f00ef_round-image.png" />
//               <motion.div
//                 className="client-wrap justify-center md:justify-normal flex -space-x-4 mt-4"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <img
//                   src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/674da4b7e3965221b49e82fb_client-one.png"
//                   alt="client"
//                   className="client-image w-16 h-16 rounded-full"
//                 />
//                 <img
//                   src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/674da4b6f29da8f7e0651eda_client-two.png"
//                   alt="client"
//                   className="client-image-two w-16 h-16 rounded-full"
//                 />
//                 <img
//                   src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/672219e4d65aa99d9cb50c1a_client-image-2.png"
//                   alt="client"
//                   className="client-image-two w-16 h-16 rounded-full"
//                 />
//                 <div className="client-image w-16 h-16 rounded-full border border-white bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
//                   <p className="text-5xl">+</p>
//                 </div>
//               </motion.div>
//             </div>
//             <h2 className="font-semibold text-xl py-8 text-left">
//               Strategies For Getting More Done
//             </h2>
//             <div className="flex justify-around items-center gap-8 mt-6">
//               <div className="text-left">
//                 <p className="text-green-400 text-lg">Data Analysis</p>
//                 <div className="flex items-end gap-2">
//                   <div className="h-10 w-10 bg-white rounded-3xl"></div>
//                   <div className="h-20 w-10 bg-white rounded-3xl"></div>
//                   <div className="h-32 w-10 bg-white rounded-3xl"></div>
//                   <div className="h-40 w-10 bg-white rounded-3xl"></div>
//                 </div>
//               </div>
//               <div>
//                 <div className="w-32 h-32 rounded-full border-[20px] border-green-500 flex items-center justify-center">
//                   <p className="text-green-400 text-sm">Growth Rate</p>
//                   <span className="text-green-400 font-bold">90%</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Soc;
