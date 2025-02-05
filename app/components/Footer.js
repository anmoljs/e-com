function Footer() {
    return (
      <footer className=" md:max-w-full  border-t-2 border-gray-300 mt-12 md:py-8">
        <div className="max-w-[1240px] h-[505px] mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-12 ">
            {/* Column 1: Logo */}
            <div>
              <h1 className="text-4xl font-bold mb-4 capitalize">funiro.</h1>
              <p className="text-gray-700 font-normal text-bold capitalize">
                400 universities drive suite 200 coral gables 
              </p>
              <h1 className="capitalize text-gray-700 font-normal text-bold mt-2 ">fl 33134 USA</h1>
            </div>
  
            {/* Column 2: Links */}
            <div className="md:ml-16">
              <h2 className="text-xl font-semibold mb-4 ">Links</h2>
              <ul className="space-y-8 mt-12">
                <li>
                  <a href="#home" className=" hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className=" hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#shop" className=" hover:text-gray-900">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#contact" className=" hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Column 3: Help */}
            <div>
              <h2 className="text-xl font-semibold mb-4 ">Help</h2>
              <ul className="space-y-8 mt-12">
                <li>
                  <a href="#privacy" className=" hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#returns" className=" hover:text-gray-900">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#payment" className=" hover:text-gray-900">
                    Payment Options
                  </a>
                </li>
                
              </ul>
            </div>
  
            {/* Column 4: Newsletter */}
            <div>
              <h2 className="text-xl font-semibold mb-4 ">Newsletter</h2>
              
              <form className="flex flex-col md:flex-row items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full md:w-2/3 px-4 py-2 border-b-2 border-black capitalize mt-12 "
                />
                <button
                  type="submit"
                  className="px-6 py-2 border-b-2 border-black capitalize mt-12 "
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Bottom Section */}
          <hr className="my-8 border-gray-300" />
          <div className="text-start  text-sm mt-8">
            <p>&copy; {new Date().getFullYear()} Funiro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  