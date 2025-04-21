'use client';
import { useState, useEffect } from "react";

function ProductCard({ image, badgetext, title, subtitle, price }) {
  const [badgeColor, setBadgeColor] = useState("");

  useEffect(() => {
    if (badgetext === "New") {
      setBadgeColor("bg-[#2EC1AC]");
    } else {
      setBadgeColor("bg-[#E97171]");
    }
  }, [badgetext]);

  return (
    <div className="text-start py-2 relative group w-[285px]">
      <div className="relative w-full h-[280px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {badgetext && (
          <div
            className={`absolute top-3 right-3 h-[40px] w-[40px] ${badgeColor} text-white text-sm font-normal flex items-center justify-center rounded-full capitalize`}
          >
            {badgetext}
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="capitalize h-[48px] w-[202px] bg-white text-[#B88E2F] font-normal text-lg mb-4">
            Add to Cart
          </button>

          <div className="flex space-x-2 text-white text-center">
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
      <div className="bg-gray-200 space-y-2 p-4 capitalize">
        <h1 className="text-lg font-semibold">{title}</h1>
        <h2 className="text-sm text-gray-600">{subtitle}</h2>
        <h3 className="text-md font-bold text-gray-800">{price}</h3>
      </div>
    </div>
  );
}

export default ProductCard;
