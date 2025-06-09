// import React from 'react';
// import { motion } from 'framer-motion';
// import { SiTailwindcss, SiReact, SiVite } from 'react-icons/si';

// export default function Hero() {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white min-h-screen">
//       {/* Left side text */}
//       <motion.div
//         className="max-w-lg mb-10 md:mb-0"
//         initial={{ x: -50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-4xl sm:text-5xl font-bold mb-4">
//           We Build Amazing Software
//         </h1>
//         <p className="text-lg mb-6">
//           Cutting-edge solutions with React, Vite & TailwindCSS. Scroll down to discover more.
//         </p>
//         <div className="flex space-x-4">
//           <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
//             Get Started
//           </button>
//           <button className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition">
//             Learn More
//           </button>
//         </div>
//         <div className="mt-8 flex space-x-6 text-3xl">
//           <SiReact title="React" />
//           <SiVite title="Vite" />
//           <SiTailwindcss title="TailwindCSS" />
//         </div>
//       </motion.div>

//       {/* Right side image / illustration */}
//       <div className="w-full md:w-1/2">
//         <div className="w-full h-64 bg-white/20 rounded-xl shadow-inner flex items-center justify-center">
//           <span className="text-2xl"></span>
//         </div>
//       </div>
//     </section>
//   );
// }