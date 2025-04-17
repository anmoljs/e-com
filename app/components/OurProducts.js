'use client'
import { useState } from "react";
import ProductCard from "./ProductCard";

function OurProducts({ showHeading = true, hideExtraRows = false }) {
  const [showAll, setShowAll] = useState(false);

  const products = [
    { image: "/syltherine.png", badgetext: "-30%", title: "Syltherine", subtitle: "Stylish cafe Chair", price: "Rp 2.500.000" },
    { image: "/pinkgy.png",  title: "pinkgy", subtitle: "Cute bed set", price: "Rp 2.500.000" },
    { image: "/potty.png", badgetext: "New", title: "potty", subtitle: "Minimalist flower pot", price: "Rp 2.500.000" },
    { image: "/muggo.png", title: "muggo", subtitle: "Small mug", price: "Rp 2.500.000" },
    { image: "/respira.png", badgetext: "-50%", title: "respira", subtitle: "Outdoor bar table and stool", price: "Rp 2.500.000" },
    { image: "/grifo.png", badgetext: "-50%", title: "grifo", subtitle: "Night lamp", price: "Rp 2.500.000" },
    { image: "/lolito.png", title: "lolito", subtitle: "Stylish Sofa Chair", price: "Rp 2.500.000" },
    { image: "/leviosa.jpg", badgetext: "New", title: "leviosa", subtitle: "Luxury big sofa", price: "Rp 2.500.000" },
  ];

  // Agar hideExtraRows true hai aur showAll false hai, toh sirf pehle 4 products show karo
  const displayedProducts = hideExtraRows && !showAll ? products.slice(0, 4) : products;

  return (
    <div className="text-center mx-auto">
      {/* Title Section */}
      {showHeading && <h1 className="text-3xl font-normal capitalize">Our Products</h1>}

      {/* Products Section */}
      <div className="md:grid grid-cols-4 md:gap-2 md:px-36 md:mx-0 mx-16">
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

      {/* See More Button (Only if hideExtraRows is true and showAll is false) */}
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="items-center justify-between h-[48px] w-[245px] border-[#B88E2F] bg-white border-2 capitalize font-semibold text-[#B88E2F] mt-8"
        >
          See More
        </button>
      )}
    </div>
  );
}

export default OurProducts;
