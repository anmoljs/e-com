'use client'
import React, { useState } from "react";
import Link from 'next/link';
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="md:h-[90px] md:w-full bg-white text-black flex items-center justify-between px-4 md:px-16 md:mt-0 mt-2 relative sm:space-x-36">
      {/* Logo Section */}
      <div className="flex items-center md:space-x-4">
        <img src="logo.png" alt="Logo" className="md:h-12 md:w-12 mr-2 object-contain h-10 w-10" />
        <h1 className="md:text-3xl text-xl mr-4">Furniro</h1>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex md:space-x-16 ">
        <Link href="/" prefetch={true} className="text-lg hover:text-gray-600 hover:underline ">Home</Link>
        <Link href="/shop" prefetch={true} className="text-lg hover:text-gray-600 hover:underline ">Shop</Link>
        <Link href="/about" prefetch={true} className="text-lg hover:text-gray-600 hover:underline ">About</Link>
        <Link href="/contact" prefetch={true} className="text-lg hover:text-gray-600 hover:underline ">Contact</Link>
      </div>

      {/* Icon Section */}
      <div className="flex items-center md:space-x-12 space-x-2 ">
        <Link href="/profile" prefetch={true}>
          <img src="user.png" alt="Profile" className="md:h-7 md:w-7 h-4 w-4" />
        </Link>
        <Link href="/wishlist" prefetch={true}>
          <img src="heart(1).png" alt="Favorites" className="md:h-7 md:w-7 h-4 w-4" />
        </Link>
        <Link href="/search" prefetch={true}>
          <img src="search.png" alt="Search" className="md:h-8 md:w-8 h-5 w-5" />
        </Link>
        <Link href="/cart" prefetch={true}>
          <img src="trolley.png" alt="Cart" className="md:h-8 md:w-8 h-5 w-5" />
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-[120px] h-[290px] bg-white z-50 md:hidden p-12">
          <ul className="flex flex-col items-center space-y-8 py-6">
            <li><Link href="/" className="text-lg hover:text-gray-600">Home</Link></li>
            <li><Link href="/about" className="text-lg hover:text-gray-600">About</Link></li>
            <li><Link href="/contact" className="text-lg hover:text-gray-600">Contact</Link></li>
            <li><Link href="/shop" className="text-lg hover:text-gray-600">Shop</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
