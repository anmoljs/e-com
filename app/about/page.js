'use client'
import Link from "next/link";
import Navbar from "../components/Navbar";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Navbar />
      <section>
        {/* Hero Section */}
        <div className="relative">
          <img src="/minh.jpg" alt="Shop Decoration" className="w-full h-[216px] object-cover" />
          
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl font-normal px-6 py-3 rounded-lg">
            About
          </p>

          <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-black text-lg px-4 py-2">
            <span>Home</span>
            <FaArrowRight className="h-5 w-5" />
            <span className="font-normal">About</span>
          </div>
        </div>

        {/* Blog Sections */}
        {[
          { img: "computer.png", title: "Going All In with Millennial Design", link: "/read" },
          { img: "hand.png", title: "Exploring New Ways of Decorating", link: "/read" },
          { img: "crafting.png", title: "Hand-Made Designs That Took Time to Make", link :"/read" },
        ].map((post, index) => (
          <div key={index} className="max-w-4xl mx-auto p-8">
            {/* Main Image */}
            <div className="flex justify-center ">
              <img src={post.img} alt={post.title} className="md:h-[500px] md:w-[817px] object-cover rounded-lg" />
            </div>

            {/* Metadata Section */}
            <div className="flex items-center gap-6 mt-6 text-gray-700">
              <div className="flex items-center space-x-2">
                <img src="admin.png" alt="Admin Icon" className="h-5 w-5" />
                <h1 className="font-medium">Admin</h1>
              </div>

              <div className="flex items-center space-x-2">
                <img src="date.png" alt="Date Icon" className="h-5 w-5" />
                <h1 className="font-medium">14 Oct 2022</h1>
              </div>

              <div className="flex items-center space-x-2">
                <img src="link.png" alt="Category Icon" className="h-5 w-5" />
                <h1 className="font-medium">Wood</h1>
              </div>
            </div>

            {/* Title & Description */}
            <div className="mt-6">
              <h1 className="text-3xl font-bold text-gray-900 capitalize">{post.title}</h1>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              {post.link && (
                <div className="mt-4">
                  <Link href={post.link} className="text-blue-500 hover:underline">
                    Read more
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
      <Footer/>
    </div>
  );
}

export default About;
