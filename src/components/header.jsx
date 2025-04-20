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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plane-takeoff-icon lucide-plane-takeoff"
          >
            <path d="M2 22h20" />
            <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" />
          </svg>
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
