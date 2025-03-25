"use client";
import { motion } from "framer-motion";

function Setup() {
  return (
    <div className="max-w-screen-lg mx-auto py-6 overflow-hidden">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-lg font-normal">Share your setup with</h1>
        <h2 className="text-2xl font-bold">#FuniroFurniture</h2>
      </div>

      {/* Grid Layout - Continuous Animation */}
      <div className="grid grid-cols-1 gap-8">
        {/* First Row (Moves Left Continuously) */}
        <motion.div
          className="flex justify-center space-x-4"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          {[
            "decoration.jpg",
            "minh.jpg",
            "anoter.jpg",
            "Rectangle 45.png",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-full h-full object-cover rounded-lg"
              alt={`Setup ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Second Row (Moves Right Continuously) */}
        <motion.div
          className="flex justify-center space-x-4"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          {[
            "decoration.jpg",
            "minh.jpg",
            "anoter.jpg",
            "Rectangle 45.png",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-full h-full object-cover rounded-lg"
              alt={`Setup ${index + 5}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Setup;
