"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const whatsappNumber = "+2348161338820"; // Replace with your WhatsApp number
  const whatsappMessage = "Hello! I need assistance."; // Predefined message

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Icon */}
      <motion.div
        onClick={toggleChat}
        className="cursor-pointer rounded-full p-3 bg-green-500 text-white shadow-lg hover:bg-green-600"
        whileTap={{ scale: 0.9 }}
      >
        <Image
          src="/WhatsApp_icon.png.webp" 
          alt="WhatsApp Icon"
          width={40}
          height={40}
          className="object-contain"
        />
      </motion.div>

      {/* WhatsApp Chat Box (visible when open) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="bg-white p-4 rounded-lg shadow-lg mt-4"
        >
          <h3 className="text-lg font-semibold mb-2">Chat with us on WhatsApp</h3>
          <p className="text-sm mb-4">
            We are here to help you. Click the button below to start chatting with our team on WhatsApp.
          </p>
          <Link
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600"
          >
            Start Chat
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default WhatsAppChat;
