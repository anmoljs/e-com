"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";

function OurProducts({ showHeading = true }) {
  const [showAll, setShowAll] = useState(false);

  const products = [
    { image: "/syltherine.png", badgetext: "-30%", title: "Syltherine", subtitle: "Stylish cafe Chair", price: "Rp 2.500.000" },
    { image: "/pinkgy.png", title: "pinkgy", subtitle: "Cute bed set", price: "Rp 2.500.000" },
    { image: "/potty.png", badgetext: "New", title: "potty", subtitle: "Minimalist flower pot", price: "Rp 2.500.000" },
    { image: "/muggo.png", title: "muggo", subtitle: "Small mug", price: "Rp 2.500.000" },
    { image: "/respira.png", badgetext: "-50%", title: "respira", subtitle: "Outdoor bar table and stool", price: "Rp 2.500.000" },
    { image: "/grifo.png", badgetext: "-50%", title: "grifo", subtitle: "Night lamp", price: "Rp 2.500.000" },
    { image: "/lolito.png", title: "lolito", subtitle: "Stylish Sofa Chair", price: "Rp 2.500.000" },
    { image: "/leviosa.jpg", badgetext: "New", title: "leviosa", subtitle: "Luxury big sofa", price: "Rp 2.500.000" },
  ];

  const displayedProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className="text-center mx-auto px-4 md:px-12 lg:px-24 py-12">
      {showHeading && (
        <h1 className="text-3xl md:text-4xl font-semibold capitalize mb-8">Our Products</h1>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            badgetext={product.badgetext}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="h-12 w-60 border-2 border-[#B88E2F] bg-white text-[#B88E2F] font-semibold rounded-md transition hover:bg-[#f8f3e8]"
        >
          {showAll ? "Show Less" : "See More"}
        </button>
      </div>
    </div>
  );
}

export default OurProducts;
