import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-indigo-700 mb-6">
            About Our Academy
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            <span className="font-semibold">Asia International Culture Academy (AICA)</span> 
            is dedicated to celebrating and nurturing culture, arts, and humanity.  
            We bring together individuals who excel in{" "}
            <span className="font-semibold text-indigo-600">
              social service, singing, dancing, painting, and cultural activities
            </span>.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Our mission is to honor talents and encourage contributions that make 
            society brighter, more connected, and culturally enriched.
          </p>
          <a
            href="#talents"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition"
          >
            Explore Our Work
          </a>
        </motion.div>

        {/* Right Side - Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/_DSC0344.JPG" 
            alt="Culture Illustration"
            className="w-80 md:w-96 drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
