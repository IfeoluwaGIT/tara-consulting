"use client";
import Link from "next/link";

const WhatsAppChatSupport = () => {
  const phoneNumber = '234811338820'; // Replace with your company's phone number

  return (
    <div className="fixed bottom-4 right-4">
      <Link
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <img
          src="/WhatsApp_icon.png.webp" // Replace with a path to your WhatsApp icon
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </Link>
    </div>
  );
};

export default WhatsAppChatSupport;
