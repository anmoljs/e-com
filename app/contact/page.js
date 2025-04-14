'use client'
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaArrowRight } from "react-icons/fa";

function Contact() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section>
        <div className="relative md:mt-0 mt-4">
          {/* Background Image */}
          <img
            src="/minh.jpg"
            alt="Shop Decoration"
            className="w-full h-[216px] object-cover"
          />

          {/* Page Title */}
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl font-bold px-6 py-3 rounded-lg">
            Contact
          </p>

          {/* Breadcrumb Navigation */}
          <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-black text-lg px-4 py-2">
            <span>Home</span>
            <FaArrowRight className="h-5 w-5" alt="Arrow"/>
            <span>Contact</span>
          </div>
        </div>

        {/* Centered Heading & Subheading */}
        <div className="flex flex-col items-center justify-center text-center mt-12">
          <h2 className="text-4xl font-bold text-black">Get in Touch</h2>
          <p className="text-gray-600 text-lg mt-3 max-w-2xl">
            For more information about our products and services, feel free to drop us a message. 
            Our staff is always here to help you out. Don't hesitate!
          </p>
        </div>

        {/* Contact Section - Two Columns Layout */}
        <div className="max-w-6xl mx-auto mt-24 p-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Details */}
          <div className="space-y-12 ">
            {/* Address */}
            <div className="flex items-center space-x-4 ">
              <img src="pin.png" alt="Location Icon" className="h-8 w-8 mb-12" />
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-gray-600 capitalize text-wrap w-[212px]"> 236 5th SE avenue,new york NY10000,United states</p>
                 
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <img src="telephone.png" alt="Phone Icon" className="h-8 w-8 mb-12" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-600 capitalize"> mobile : +123 456 7890</p>
                <span className="text-gray-600 capitalize">hotline : +123 492 9805</span>
                <h1></h1>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-center space-x-4">
              <img src="watch2.png" alt="Working Time Icon" className="h-8 w-8 mb-12" />
              <div>
                <h3 className="text-xl font-semibold">Working Time</h3>
                <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <span className="text-gray-600 capitalize">sat - sun: 9:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-lg font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full h-[75px] p-3 border rounded-[10px]"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-lg font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full h-[75px] p-3 border rounded-[10px]"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium">subject</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="This is optional"
                  className="w-full h-[75px] p-3 border rounded-[10px]"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-lg font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full h-[120px] p-3 border rounded-[10px]"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-[237px] h-[55px] p-3 bg-[#B88E2F] text-white text-lg font-semibold rounded-[10px]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:p-24 p-12 bg-[#F9F1E7] mt-12 ">
  {/* High Quality */}
  <div className="flex flex-col items-center space-y-2">
    <img src="trophy 1.png" alt="High Quality" className="md:h-16 md:w-16 h-10 w-10" />
    <h1 className="text-lg font-semibold">High Quality</h1>
    <p>crafted from top materials</p>
  </div>

  {/* Warranty Protection */}
  <div className="flex flex-col items-center space-y-2">
    <img src="guarantee.png" alt="Warranty Protection" className="md:h-16 md:w-16 h-10 w-10" />
    <h1 className="text-lg font-semibold">Warranty Protection</h1>
    <p>over 2 years</p>
  </div>

  {/* Free Shipping */}
  <div className="flex flex-col items-center space-y-2">
    <img src="shipping.png" alt="Free Shipping" className="md:h-16 md:w-16 h-10 w-10" />
    <h1 className="text-lg font-semibold">Free Shipping</h1>
    <p>order over 150$</p>
  </div>

  {/* 24/7 Support */}
  <div className="flex flex-col items-center space-y-2">
    <img src="customer-support.png" alt="24/7 Support" className="md:h-16 md:w-16 h-10 w-10" />
    <h1 className="text-lg font-semibold">24/7 Support</h1>
    <p>dedicated support</p>
  </div>
</div>
<Footer/>
      </section>
    </div>
  );
}

export default Contact;
