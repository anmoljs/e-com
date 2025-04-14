'use client'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaArrowRight } from "react-icons/fa";

function wishlist(){
    return(
        <div>
            <Navbar/>
            <section>
                    <div className="relative">
                      {/* Background Image */}
                      <img
                        src="/minh.jpg"
                        alt="Shop Decoration"
                        className="w-full h-[216px] object-cover"
                      />
            
                      {/* Shop Now Text */}
                      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl font-bold px-6 py-3 rounded-lg">
                        WishList
                      </p>
            
                      {/* Breadcrumb Navigation */}
                      <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-black text-lg  px-4 py-2">
                        <span>Home</span>
                        <FaArrowRight className="h-5 w-5" alt="Arrow" />
                        <span className="font-normal text-lg">Wishlist</span>
                      </div>
                    </div>
                    <div>
                        <p className="capitalize text-4xl font-normal text-center md:p-24 p-4">there is no product in your wishlist</p>
                    </div>
                    </section>
                    <Footer/>
                    </div>
            
        

    )
}
export default wishlist;
    
