'use client'
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
       <i><h1>Abdul Munim Arain</h1></i>
        {/* Hamburger Icon (Mobile) */}
        <button
          className="text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex md:items-center md:space-x-4 bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="text-center md:text-left">
            <a href="#about" className="block py-2 px-4 hover:text-gray-400">
              About
            </a>
          </li>
          <li className="text-center md:text-left">
            <a href="#projects" className="block py-2 px-4 hover:text-gray-400">
              Projects
            </a>
          </li>
          <li className="text-center md:text-left">
            <a href="#contact" className="block py-2 px-4 hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
