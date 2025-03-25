'use client'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Profile() {
  return (
    <div className=" ">
      <Navbar />
      <section className="flex items-center justify-center min-h-screen bg-[#FFF3E3]">
        {/* Left Side (Image) */}
        
        {/* Right Side (Login Form) */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-white p-8  w-[500px] h-[550px] object-cover">
            <h2 className="text-4xl font-normal text-start mb-4">signup</h2>
            <form className="space-y-8">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xl font-normal text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-4 border rounded-[2px] "
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-xl font-normal text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full px-4 py-4 border rounded-[2px] "
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-xl font-normal text-gray-600">
                   Confirm Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="w-full px-4 py-4 border rounded-[2px] "
                  placeholder="Confirm your password"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#B88E2F] text-white rounded-[2px] font-normal text-xl "
              >
                SignUp
              </button>
            </form>
          </div>
        </div>
        
      </section>
      <Footer/>
    </div>
  );
}

export default Profile;
