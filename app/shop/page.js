'use client'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OurProducts from "../components/OurProducts";
import { FaArrowRight } from "react-icons/fa";

function Shop() {
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
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl font-normal px-6 py-3 rounded-lg">
            Shop
          </p>

          {/* Breadcrumb Navigation */}
          <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-black text-lg  px-4 py-2">
            <span>Home</span>
            <FaArrowRight className="h-5 w-5" alt="Arrow" />
            <span className="font-normal">Shop</span>
          </div>
        </div>

        {/* Filter & Sorting Section */}
        <div className="flex items-center justify-between p-4 bg-[#F9F1E7]  mb-4 h-[100px]">
          {/* Filter Button */}
          <div className="flex items-center space-x-4">
            <img src="filter.png" className="h-6 w-6 " alt="Filter Icon" />
            <h1 className="text-lg font-medium">Filter</h1>
          </div>

          {/* View Mode Options */}
          <div className="flex items-center space-x-4">
            <img src="grid.png" className="h-6 w-6 cursor-pointer" alt="Grid View" />
            <img src="viewlist.png" className="h-6 w-6 cursor-pointer" alt="List View" />
          </div>

          {/* Sorting Option */}
          <p className="text-lg">Sort by: <span className="font-semibold">Default</span></p>
        </div>
        <OurProducts showHeading={false} hideExtraRows={true}/>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center p-24 bg-[#F9F1E7] mt-12 h-[270px]">
  {/* High Quality */}
  <div className="flex flex-col items-center space-y-2">
    <img src="trophy 1.png" alt="High Quality" className="h-16 w-16" />
    <h1 className="text-lg font-semibold">High Quality</h1>
    <p>crafted from top materials</p>
  </div>

  {/* Warranty Protection */}
  <div className="flex flex-col items-center space-y-2">
    <img src="guarantee.png" alt="Warranty Protection" className="h-16 w-16" />
    <h1 className="text-lg font-semibold">Warranty Protection</h1>
    <p>over 2 years</p>
  </div>

  {/* Free Shipping */}
  <div className="flex flex-col items-center space-y-2">
    <img src="shipping.png" alt="Free Shipping" className="h-16 w-16" />
    <h1 className="text-lg font-semibold">Free Shipping</h1>
    <p>order over 150$</p>
  </div>

  {/* 24/7 Support */}
  <div className="flex flex-col items-center space-y-2">
    <img src="customer-support.png" alt="24/7 Support" className="h-16 w-16" />
    <h1 className="text-lg font-semibold">24/7 Support</h1>
    <p>dedicated support</p>
  </div>
</div>
<Footer/>

      </section>
    </div>
  );
}

export default Shop;
