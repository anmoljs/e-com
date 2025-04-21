"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Explore() {
  const images = ["/muggo.png", "/newone.jpg", "/unsplash.jpg", "/respira.png"];
  const [activeIndex, setActiveIndex] = useState(0);

  // Custom Arrows
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-4 rounded-full bg-[#B88E2F] transition-all duration-300 z-10"
      onClick={onClick}
    >
      ▶
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-4 text-white p-4 rounded-full bg-[#B88E2F] transition-all duration-300 z-10"
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
    beforeChange: (_, newIndex) => setActiveIndex(newIndex),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center lg:space-x-8 lg:mt-24 lg:ml-12">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-4 h-4 rounded-full bg-[#B88E2F] transition-all duration-300 hover:opacity-100" />
    ),
  };

  return (
    <div className="w-full h-[670px] bg-[#FAF3EA] mt-16 flex flex-col md:flex-row items-center justify-between px-12 py-10">
      
      {/* Left Side: Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-1/3 w-full md:text-left text-center"
      >
        <h1 className="font-bold lg:text-3xl text-xl mb-4 capitalize tracking-wide">
          50+ Beautiful Rooms Inspirations
        </h1>
        <h2 className="text-gray-700 text-normal tracking-normal">
          Our designers have already created a variety of beautiful room
          prototypes to inspire you.
        </h2>
        <button className="h-[48px] w-[176px] bg-[#B88E2F] text-white capitalize md:mt-8 mt-2 rounded-lg hover:bg-[#A77D1D] transition">
          Explore More
        </button>
      </motion.div>

      {/* Right Side: Image Slider with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-2/3 w-full"
      >
        <Slider {...sliderSettings} className="w-full mx-auto">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className={`flex justify-center transition-all duration-500 ${
                activeIndex === index ? "scale-105 space-x-12" : "opacity-80"
              }`}
              initial={{ opacity: 0.6, scale: 0.95 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0.6,
                scale: activeIndex === index ? 1.05 : 0.95,
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={img}
                alt={`Slide ${index + 1}`}
                className="lg:h-[482px] lg:w-[404px] h-[350px] w-[304px] object-cover ml-12 rounded-lg shadow-md"
                whileHover={{ scale: 1.08 }}
              />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}

export default Explore;
