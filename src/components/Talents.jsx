import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HeartHandshake, Music, Mic2, Palette, Users, Award } from "lucide-react";

export default function Talents() {
  const talents = [
    {
      icon: <HeartHandshake className="w-10 h-10 text-pink-500" />,
      title: "Social Service",
      desc: "Empowering communities and helping those in need.",
    },
    {
      icon: <Music className="w-10 h-10 text-indigo-500" />,
      title: "Singing",
      desc: "Promoting melodious voices that inspire hearts.",
    },
    {
      icon: <Mic2 className="w-10 h-10 text-yellow-500" />,
      title: "Dancing",
      desc: "Celebrating life through rhythm and graceful moves.",
    },
    {
      icon: <Palette className="w-10 h-10 text-green-500" />,
      title: "Arts & Painting",
      desc: "Encouraging creativity and cultural expression.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Cultural Events",
      desc: "Uniting people through festivals, shows, and traditions.",
    },
    {
      icon: <Award className="w-10 h-10 text-purple-500" />,
      title: "Awards & Recognition",
      desc: "Honoring outstanding talents and contributions.",
    },
  ];

  return (
    <section id="talents" className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-indigo-700 mb-12"
        >
          Our Talents & Focus Areas
        </motion.h2>

        {/* Grid of Talents */}
        <div className="grid md:grid-cols-3 gap-10">
          {talents.map((talent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-4">{talent.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{talent.title}</h3>
              <p className="text-gray-600">{talent.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
