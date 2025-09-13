import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
export default function WhatsAppChat() {
  const whatsappNumber = "7892149986"; 

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:shadow-[0_0_20px_rgba(34,197,94,0.7)] transition-all relative"
        animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <MessageCircle size={28} className="text-white" />
      </motion.a>

      {/* Tooltip */}
      <span className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </div>
  );
}
