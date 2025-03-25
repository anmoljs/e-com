'use client'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Search() {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section>
        <div className="relative">
          {/* Background Image */}
          <img
            src="/minh.jpg"
            alt="Shop Decoration"
            className="w-full h-[216px] object-cover"
          />

          {/* Shop Now Text */}
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl font-semibold px-6 py-3 rounded-lg">
            Search
          </p>

          {/* Search Box */}
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-4/5 md:w-1/3  p-4  ">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full p-2 text-lg  rounded-xl text-center"
            />
            
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Search;
