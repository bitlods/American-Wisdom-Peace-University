import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Hero() {
  return (
 <section
  id="home"
  className="h-screen flex flex-col justify-center items-center text-center text-white relative bg-cover bg-center"
  style={{ backgroundImage: "url('/_DSC0337.JPG')" }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/60"></div>

<motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative text-5xl md:text-6xl font-extrabold drop-shadow-lg z-10" > American Wisdom Peace University </motion.h1>
<motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="relative text-xl md:text-2xl mt-6 max-w-2xl leading-relaxed z-10"
  >
    <span className="font-bold text-gold "> Associated with </span>

  </motion.p>
  {/* Content */}
  <motion.h3
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative text-4xl md:text-5xl font-extrabold drop-shadow-lg z-10">
    Asia International Culture Academy
  </motion.h3>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="relative text-xl md:text-2xl mt-6 max-w-2xl leading-relaxed z-10"
  >
    Celebrating <span className="font-bold">Social Service</span>, 
    <span className="font-bold"> Arts</span>, 
    <span className="font-bold"> Singing</span>, 
    <span className="font-bold"> Dancing & Culture</span> 
  </motion.p>

  <motion.a
    href="#contact"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="relative mt-10 px-6 py-3 bg-white text-indigo-700 font-semibold 
               rounded-full shadow-lg hover:bg-gray-200 transition z-10"
  >
    Join Us
  </motion.a>
      {/* Decorative Circle Effect */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-pink-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-52 h-52 bg-indigo-400/30 rounded-full blur-3xl"></div>
    </section>
  );
}
