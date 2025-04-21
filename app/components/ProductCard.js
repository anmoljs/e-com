'use client';
import { useState, useEffect } from "react";

function ProductCard({ image, badgetext, title, subtitle, price }) {
  const [badgeColor, setBadgeColor] = useState(""); // Initialize an empty badge color

  useEffect(() => {
    // Dynamically set the badge color based on badgetext
    if (badgetext === "New") {
      setBadgeColor("bg-[#2EC1AC]");
    } 
     else {
      setBadgeColor("bg-[#E97171]");
    }
  }, [badgetext]); // Run this effect whenever badgetext changes

  return (
    <div className="text-start py-2 relative group">
      {/* Image with badge */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="max-h-[280px] w-[285px] object-cover"
        />
        {badgetext && (
          <div
            className={`absolute top-3 lg:right-10 md:mx-4 h-[40px] w-[40px] ${badgeColor} text-white text-sm font-normal flex items-center justify-center rounded-full capitalize`}
          >
            {badgetext}
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute h-[400px] w-[285px] inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Add to Cart Button */}
          <button className="capitalize h-[48px] w-[202px] bg-white text-[#B88E2F] font-normal text-lg mb-4">
            Add to Cart
          </button>

          {/* Share, Like, and Compare Icons in a Row */}
          <div className="md:flex space-x-2 text-white text-center flex space-x-1">
            <img src="share.png" alt="Share" className="h-4 w-4" />
            <span className="relative bottom-1">share</span>
            <img src="compare.png" alt="Compare" className="h-4 w-4" />
            <span className="relative bottom-1">compare</span>
            <img src="heart.png" alt="Like" className="h-4 w-4" />
            <span className="relative bottom-1">like</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="max-h-[125px] max-w-[285px] bg-gray-200 md:space-y-2 p-4 capitalize">
        <h1 className="text-lg font-semibold">{title}</h1>
        <h2 className="text-sm text-gray-600">{subtitle}</h2>
        <h3 className="text-md font-bold text-gray-800">{price}</h3>
      </div>
    </div>
  );
}

export default ProductCard;
