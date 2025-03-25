'use client'
import React, { useState } from "react";
import Link from 'next/link';
import { FaBars } from "react-icons/fa";



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="h-[90px] w-full bg-white text-black flex items-center justify-between px-6 md:px-16">
      {/* Logo Section */}
      <div className="flex items-center md:space-x-4">
        <img src="logo.png" alt="Logo" className="h-12 w-12 mr-2 object-contain" />
        <h1 className="text-3xl font-semibold mr-4">Furniro</h1>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex md:space-x-16 ">
        <Link href="/" prefetch={true} className="text-lg hover:text-gray-600 hover:underline ">Home</Link>
        <Link href="/shop"prefetch={true} className="text-lg hover:text-gray-600 hover:underline ">Shop</Link>
        <Link href="/about"prefetch={true} className="text-lg hover:text-gray-600 hover:underline ">About</Link>
        <Link href="/contact"prefetch={true} className="text-lg hover:text-gray-600 hover:underline  ">Contact</Link>
      </div>

      {/* Icon Section */}
      <div className="flex items-center md:space-x-12 space-x-2">
        <Link href="/profile" prefetch={true}>
        <img src="user.png" alt="Search" className="h-7 w-7" />
        </Link>
        <Link href="/wishlist" prefetch={true}>
        <img src="heart(1).png"  alt="Favorites" className="h-7 w-7" />
        </Link>
        
        <Link href="/search" prefetch={true}>
        <img src="search.png"  className="h-8 w-8" />
        </Link>
        <Link href="/cart" prefetch={true}>
        <img src="trolley.png"  alt="Cart" className="h-8 w-8" />
        </Link>

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
            <li><Link href="#home" className="text-lg hover:text-gray-600">Home</Link></li>
            <li><Link href="#about" className="text-lg hover:text-gray-600">About</Link></li>
            <li><Link href="#contact" className="text-lg hover:text-gray-600">Contact</Link></li>
            <li><Link href="#shop" className="text-lg hover:text-gray-600">Shop</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
