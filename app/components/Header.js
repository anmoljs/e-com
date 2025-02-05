function Header() {
    return (
      <div
        className=" md:flex items-center md:justify-center md:w-full md:h-screen md:bg-cover bg-center "
        style= {{ backgroundImage: "url(background.png)" }}
      >
        {/* Content Container */}
        <div className=" md:absolute md:right-20 md:bottom-2 md:flex flex-col md:justify-between md:w-[653.18px] md:h-[445.45px] bg-[#FFF3E3]  p-12  shadow-lg rounded-lg w-[420.18px] h-[445px]">
          <div>
            <h1 className="text-xl font-normal text-gray-800 capitalize mt-4">New Arrival</h1>
            <h2 className="text-5xl font-bold text-[#B88E2F] mt-4 capitalize">Discover our</h2>
            <h2 className="text-5xl font-bold text-[#B88E2F] mt-4 capitalize  " > new collection</h2>
            <p className="text-gray-600 mt-4 font-normal text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum leo at est vulputate fringilla.
             
            </p>
          </div>
          <div>
          <button className=" h-[74px] w-[222px] bg-[#B88E2F] text-white font-semibold ">
            Buy Now
          </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  
  