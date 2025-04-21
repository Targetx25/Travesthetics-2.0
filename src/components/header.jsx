import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  hidden: { height: 0, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-white font-livvic border-gray-200 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <img src="/travel-101.svg" className="size-10" alt="My Logo" />

          <div
            className="text-2xl font-bold ml-2 pb-2 text-gray-800 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Travesthetics
          </div>
        </div>

        <nav>
          <ul className="hidden md:flex space-x-4">
            <li className="text-gray-700 hover:text-gray-900">
              <a href="/">Home</a>
            </li>
            <li className="text-gray-700 hover:text-gray-900">
              <a href="/about">About</a>
            </li>
            <li className="text-gray-700 hover:text-gray-900">
              <a href="https://telegram.me/Target_X25">Contact</a>
            </li>
          </ul>

          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu with smooth height & opacity animation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden overflow-hidden bg-white border-t border-gray-200"
          >
            <ul className="flex flex-col p-4 space-y-2">
              <li className="text-gray-700 hover:text-gray-900">
                <a href="/">Home</a>
              </li>
              <li className="text-gray-700 hover:text-gray-900">
                <a href="/about">About</a>
              </li>
              <li className="text-gray-700 hover:text-gray-900">
                <a href="#">Contact</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
