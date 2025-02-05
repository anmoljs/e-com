function Setup() {
  return (
    <div className="max-w-full flex flex-col items-center justify-center py-12 px-6 max-h-[798px] mt-6">
      {/* Heading Section */}
      <div className="text-center mt-44">
        <h1 className="text-lg font-normal">Share your setup with</h1>
        <h2 className="text-xl font-bold px-2">#furnirofurniture</h2>
      </div>

      {/* Grid Section 1 */}
      <div className="md:flex grid-cols-5 gap-4 md:w-full relative bottom-10 ml-4 h-[778px]">
        <img
          src="Rectangle 36.png"
          alt="Setup 1"
          className="h-[375px] w-[78px] object-cover mt-12 "
        />
        <img
          src="Rectangle 38.png"
          alt="Setup 2"
          className="h-[312px] w-[451px] object-cover mt-28 "
        />
        <img
          src="Rectangle 40.png"
          alt="Setup 3"
          className="h-[392px] w-[295px] object-cover mt-40 "
        />
        <img
          src="Rectangle 43.png"
          alt="Setup 4"
          className="h-[348px] w-[290px] object-cover mt-24 "
        />
        <img
          src="Rectangle 45.png"
          alt="Setup 5"
          className="h-[433px] w-[262px] object-cover mt-2  "
        />
      </div>

      {/* Grid Section 2 */}
      <div className="grid grid-cols-4 gap-4 w-full   ml-4 ">
        <img
          src="Rectangle 37.png"
          alt="Setup 6"
          className="h-[321px] w-[185px] object-cover relative bottom-36  "
        />
        <img
          src="flowers.png"
          alt="Setup 7"
          className="h-[242px] w-[344px] object-cover relative right-44 bottom-40 mt-4 ml-2  "
        />
        <img
          src="frame.png"
          alt="Setup 8"
          className="h-[244px] w-[176px] object-cover relative left-32 bottom-32 ml-2   "
        />
        <img
          src="Rectangle 44.png"
          alt="Setup 9"
          className="h-[196px] w-[258px] object-cover relative bottom-32 right-10 "
        />
      </div>
    </div>
  );
}

export default Setup; 