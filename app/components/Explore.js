'use client';
import { useState } from "react";

function Explore() {
  const [activeIndex, setActiveIndex] = useState(0); // Tracks the active image index
  const images = [
    "rectangle 24.png",
    "newone.jpg",
    "unsplash.jpg",
    "respira.png",
  ]; // List of images for the slider

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="md:w-full md:h-[670px] bg-[#FAF3EA] md:mt-16 items-center justify-center">
      <div className="text-start md:w-[322px] md:relative md:top-60 md:left-20">
        <h1 className="font-bold text-3xl mb-4 capitalize tracking-wide">
          50+ Beautiful Rooms Inspirations
        </h1>
        <h2 className="text-gray-700 text-normal md:w-[420px] tracking-normal">
          Our designers have already created a variety of beautiful room prototypes to inspire you.
        </h2>
        <button className="md:h-[48px] md:w-[176px] bg-[#B88E2F] text-white capitalize md:mt-8">
          Explore More
        </button>
      </div>

      <div className="relative flex flex-col md:items-center items-start duration-600">
        <img
          src={images[activeIndex]}
          alt="Room Display"
          className="md:relative left-0 bottom-40 md:h-[582px] md:w-[404px] md:ml-52 md:mr-52 h-[300px] resize object-contain"
        />
        {activeIndex === 0 && (
          <div className="md:h-[130px] md:w-[217px] bg-[rgba(58,58,58,0.7)] text-center absolute md:top-44 md:mr-32 mt-24">
            <h1 className="text-lg font-bold mt-8 text-[#B88E2F]">01____ Bedroom</h1>
            <h2 className="text-xl font-bold mt-4 capitalize tracking-normal">
              Inner Peace
            </h2>
          </div>
        )}
        {activeIndex === 0 && (
          <div
            className="h-[48px] w-[48px] py-4 px-2 bg-[#B88E2F] absolute top-44 ml-36 mt-44 mr-2 cursor-pointer"
            onClick={goToNext}
          >
            <img src="arrow.png" alt="Next" />
          </div>
        )}

        <img
          src="chairs.png"
          className="md:absolute md:right-40 md:bottom-72 md:mb-2 md:h-[472px] md:w-[372px] object-cover h-[300px] resize"
          alt="Chairs"
        />
        <img
          src="mirror.png"
          alt="Mirror"
          className="absolute right-10 bottom-72 mb-2 mr-4 h-[470px] w-[82px] object-cover resize"
        />
        <div
          className="h-[48px] w-[48px] border rounded-full bg-white absolute right-20 mr-14 top-20 flex items-center justify-center cursor-pointer"
          onClick={goToNext}
        >
          <img src="rightarrow.png" alt="Right Arrow" />
        </div>
        <div className="relative left-72 bottom-60 h-[27px] w-[120px] flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-[25px] h-[25px] rounded-full ${
                index === activeIndex
                  ? "border-2 border-[#B88E2F]"
                  : "border-2 border-gray-300"
              }`}
            >
              <button
                onClick={() => setActiveIndex(index)}
                className={`w-[10px] h-[10px] rounded-full ${
                  index === activeIndex ? "bg-[#B88E2F]" : "bg-gray-300"
                }`}
              ></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
