"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"

const links = [
  { url: "/", title: "Home" },
  { url: "/services", title: "Services" },
  { url: "/about", title: "About" },
  { url: "/contact", title: "Contact" },
  { url: "/FAQ", title: "FAQ" },
  { url: "/careers", title: "Careers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Animation variants
  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };
  const listVariants = {
    closed: { x: "100vw" },
    opened: { x: 0, transition: { when: "beforeChildren", staggerChildren: 0.2 } },
  };
  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 mx-auto">
      <nav className="flex items-center justify-between px-[16px] py-[16px] bg-header-peach border border-black rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.jpg" alt="Tara Consulting Logo" className="h-10 w-28" width={32} height={32} />
        </div>

        {/* Hamburger menu for mobile */}
        <div className="sm:hidden ">
          <button onClick={toggleMenu} className="relative w-[40px] h-[32px] flex flex-col justify-between z-50 ">
            <motion.div 
              variants={topVariants}
              animate={isOpen ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={isOpen ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={isOpen ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
          </button>
        </div>

        {/* Nav Links for larger screens */}
        <div className="hidden sm:flex space-x-6">
          {links.map((link) => (
            <Link 
              key={link.title} 
              href={link.url}
              className={`text-text-color hover:text-amber-400 px-3 py-2 rounded ${
                pathname === link.url ? "bg-text-color text-white" : ""
              }`} // Step 3: Conditionally apply active class
            >
              {link.title}
            </Link>
          ))}
        </div>
          <Link href="/contact">
        <button className="hidden sm:block ml-6 px-4 py-2 bg-text-color text-white rounded hover:bg-button-hover">
          Get in Touch
        </button>
        </Link>
      </nav>

     {/* Dropdown Menu for mobile */}
     {isOpen && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="sm:hidden bg-black text-white fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 text-lg"
        >
          {links.map((link) => (
            <motion.div
              key={link.title}
              variants={listItemVariants}
            >
              <Link 
                href={link.url}
                className={`hover:text-amber-400 px-3 py-2 rounded ${
                  pathname === link.url ? "bg-text-color" : ""
                }`} // Step 3: Conditionally apply active class for mobile
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;