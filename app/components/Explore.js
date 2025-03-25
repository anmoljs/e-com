"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Explore() {
  const images = [
    "rectangle 24.png",
    "newone.jpg",
    "unsplash.jpg",
    "respira.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-4 rounded-full  bg-[#B88E2F] transition-all duration-300 z-10"
      onClick={onClick}
    >
      ▶
    </button>
  );

  // Custom Prev Arrow
  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-4 text-white p-4 rounded-full  bg-[#B88E2F] transition-all duration-300 z-10"
      onClick={onClick}
    >
      ◀
    </button>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-8 mt-24 ml-12">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-4 h-4 rounded-full bg-[#B88E2F] transition-all duration-300 hover:opacity-100 slick-active:bg-[#B88E2F]" />
    ),
  };

  return (
    <div className="w-full h-[670px] bg-[#FAF3EA] mt-16 flex flex-col md:flex-row items-center justify-between px-12 py-10">
      {/* Left Side: Text Section */}
      <div className="md:w-1/3 w-full md:text-left text-center">
        <h1 className="font-bold text-3xl mb-4 capitalize tracking-wide">
          50+ Beautiful Rooms Inspirations
        </h1>
        <h2 className="text-gray-700 text-normal tracking-normal">
          Our designers have already created a variety of beautiful room
          prototypes to inspire you.
        </h2>
        <button className="h-[48px] w-[176px] bg-[#B88E2F] text-white capitalize mt-8 rounded-lg hover:bg-[#A77D1D] transition">
          Explore More
        </button>
      </div>

      {/* Right Side: Image Slider */}
      <div className="md:w-2/3 w-full">
        <Slider {...sliderSettings} className="w-full mx-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className={`flex justify-center transition-all duration-500 ${
                activeIndex === index ? "scale-105 space-x-12" : "opacity-80"
                
              }`}
            >
              
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="md:h-[482px] md:w-[404px] h-[250px] object-cover ml-12"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Explore;
