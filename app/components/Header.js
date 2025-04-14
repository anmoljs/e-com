function Header() {
  return (
    <div
      className="w-full h-auto md:h-screen bg-center bg-cover flex items-center justify-center md:justify-end md:mt-0 mt-4"
      style={{ backgroundImage: "url(background.png)" }}
    >
      {/* Content Container */}
      <div className="bg-[#FFF3E3] p-6 md:p-8 rounded-[10px] w-[90%] md:w-[653.18px] md:h-[445.45px] flex flex-col justify-between mt-6 md:mt-0 md:mr-20">
        <div>
          <h1 className="text-lg md:text-xl font-normal text-gray-800 capitalize">
            New Arrival
          </h1>

          <h2 className="mt-3 md:mt-4 capitalize text-[#B88E2F] text-2xl md:text-5xl font-semibold leading-tight">
            Discover our <span className="block md:inline">new collection</span>
          </h2>

          <p className="text-gray-600 mt-4 font-normal text-sm md:text-2xl leading-relaxed md:max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum leo at est vulputate fringilla.
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <button className="h-[44px] w-[111px] md:h-[74px] md:w-[222px] bg-[#B88E2F] text-white font-semibold">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
