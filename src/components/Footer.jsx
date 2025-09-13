import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-bold">Asia International Culture Academy</h2>
          <p className="mt-3 text-gray-300">
            Empowering culture, arts & social services through community, learning and events.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#events" className="hover:text-yellow-400">Events</a></li>
            <li><a href="#gallery" className="hover:text-yellow-400">Gallery</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Bangalore, India</li>
            <li>+91 78921 49986</li>
            <li>infoacademy43@gmail.com</li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }} viewport={{ once: true }}>
          <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
          {submitted ? (
            <p className="text-green-400 font-medium mb-4">🎉 Thanks for subscribing!</p>
          ) : (
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="flex items-center bg-white rounded-full overflow-hidden shadow-md mb-4"
            >
              {/* Required Web3Forms Access Key */}
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY}/>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-grow px-4 py-3 text-black text-sm focus:outline-none"
              />
              <button type="submit" className="bg-yellow-400 px-2 py-3 text-black font-semibold hover:bg-yellow-500 transition">
                Subscribe
              </button>
            </form>
          )}

          <div className="flex gap-4 mt-3">
            <a href="#"><Facebook size={22} /></a>
            <a href="#"><Instagram size={22} /></a>
            <a href="#"><Youtube size={22} /></a>
            <a href="#"><Linkedin size={22} /></a>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Asia International Culture Academy. All rights reserved.
      </div>
    </footer>
  );
}
