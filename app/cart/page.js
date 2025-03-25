"use client";

import { useState } from "react";
import { BsCartX } from "react-icons/bs";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Cart() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCartClick = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div>
        <Navbar/>
    <div className="max-w-3xl mx-auto p-16 bg-[#F9F1E7]">
      {/* Cart Heading */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-4xl font-normal text-center">Shopping Cart</h1>
        <BsCartX className="h-[35px] w-[35px] text-gray-500" />
      </div>

      {/* Divider Line */}
      <div className="border-t-2 border-gray-300 w-full my-6"></div>

      {/* Empty Cart Message */}
      <h1 className="text-center capitalize font-normal text-4xl mt-16">
        There is no product in your cart
      </h1>

      {/* Subtotal Section */}
      <div className="flex justify-center items-center text-center my-32 space-x-32 ">
        <p className="text-lg font-medium text-gray-700">Subtotal</p>
        <h1 className="text-2xl font-normal text-black">Rs. 0</h1>
      </div>

      {/* Divider Line */}
      <div className="border-b-2 border-gray-300 w-full my-6"></div>

      {/* Buttons */}
      <div className="flex justify-center space-x-6">
        <button
          className="px-16 py-4 bg-gray-700 text-white font-normal rounded-[10px]"
          onClick={handleCartClick}
        >
          Cart
        </button>
        <button className="px-16 py-4 bg-[#B88E2F] text-white font-normal rounded-[10px]">
          Checkout
        </button>
      </div>

      {/* Toggle Content */}
      {isCartVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 20 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-4 border border-gray-300 rounded-lg text-center"
        >
          <p className="text-gray-700">Your cart is currently empty.</p>
        </motion.div>
      )}
      
    </div>
    
    <Footer/>
    </div>
  );
}

export default Cart;
