'use client'
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="h-[90px] w-full bg-white text-black flex items-center justify-between px-6 md:px-16">
      {/* Logo Section */}
      <div className="flex items-center md:space-x-4 ">
        <img src="logo.png" alt="Logo" className="h-12 w-12  mr-2 object-contain" />
        <h1 className="text-3xl font-semibold mr-4">Furniro</h1>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex md:space-x-16">
        <a href="#home" className="text-lg hover:text-gray-600">Home</a>
        <a href="#about" className="text-lg hover:text-gray-600">About</a>
        <a href="#contact" className="text-lg hover:text-gray-600">Contact</a>
        <a href="#shop" className="text-lg hover:text-gray-600">Shop</a>
      </div>

      {/* Icon Section */}
      <div className="flex items-center md:space-x-12 space-x-2 ">
        <img src="profile.png" alt="Search" className="h-6 w-6" />
        <img src="vector(2).png" alt="Favorites" className="h-5 w-5" />
        <img src="cart.png" alt="Cart" className="h-6 w-6" />
        <img src="search.png" className="h-6 w-6"></img>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li><a href="#home" className="text-lg hover:text-gray-600">Home</a></li>
            <li><a href="#about" className="text-lg hover:text-gray-600">About</a></li>
            <li><a href="#contact" className="text-lg hover:text-gray-600">Contact</a></li>
            <li><a href="#shop" className="text-lg hover:text-gray-600">Shop</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;                                     