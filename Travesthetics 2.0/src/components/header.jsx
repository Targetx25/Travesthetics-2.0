// src/components/Header.js
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white  font-livvic border-gray-200 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane-takeoff-icon lucide-plane-takeoff"><path d="M2 22h20"/><path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"/></svg>
        <div className="text-2xl font-bold ml-2 pb-2 text-gray-800" onClick={()=> navigate("/")}>Travesthetics</div>
        </div>
        <nav>
          <ul className="hidden md:flex space-x-4">
            <li className="text-gray-700 hover:text-gray-900">
              <a href="/">Home</a>
            </li>
            <li className="text-gray-700 hover:text-gray-900">
              <a href="#">About</a>
            </li>
            <li className="text-gray-700 hover:text-gray-900">
              <a href="#">Contact</a>
            </li>
          </ul>
          {/* Hamburger icon for mobile */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            {isOpen ? (
              // Close Icon (X)
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
              // Hamburger Icon
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

      {/* Mobile Menu */}
      <div
  className={`md:hidden overflow-hidden transition-all duration-400 ease-in ${
    isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
  }`}
>
  <ul className="flex flex-col p-4 space-y-2 bg-white border-t border-gray-200">
    <li className="text-gray-700 hover:text-gray-900">
      <a href="/">Home</a>
    </li>
    <li className="text-gray-700 hover:text-gray-900">
      <a href="#">About</a>
    </li>
    <li className="text-gray-700 hover:text-gray-900">
      <a href="#">Contact</a>
    </li>
  </ul>
</div>

    </header>
  );
};

export default Header;
