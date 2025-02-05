import ProductCard from "./ProductCard";

function OurProducts() {
  const products = [
    {
      image: "syltherine.png",
       badgetext: "-30% ",
      title: "Syltherine",
      subtitle: "Stylish cafe Chair",
      price: "Rp 2.500.000",
    
      
    },
    {
      image: "pinkgy.png",
      overlayImage: "Overlay.png",
      title: "pinkgy",
      subtitle: "cute bed set",
      price: "Rp 2.500.000",

    },
    {
      image: "potty.png",
      title: "potty",
      subtitle: "minimalist flower pot",
      price: "Rp 2.500.000",
      badgetext: "new",
    
    },
    {
      image: "muggo.png",
      title: "muggo",
      subtitle: "small mug",
      price: "Rp 2.500.000",
    },
    {
      image: "respira.png",
      title: "respira",
      subtitle: "outdoor bar table and stool",
      price: "Rp 2.500.000",
      badgetext: "-50%",
    },
    {
      image: "grifo.png",
      title: "grifo",
      subtitle: "night lamp",
      price: "Rp 2.500.000",
      badgetext: "-50% ",
    },
    {
        image: "lolito.png",
        title: "lolito",
        subtitle: "Stylish Sofa Chair",
        price: "Rp 2.500.000",
      },
      {
        image: "leviosa.jpg",
        title: "leviosa",
        subtitle: "luxury big sofa",
        price: "Rp 2.500.000",
        badgetext: "new",
      },
  ];

  return (
    <div className="text-center mx-auto ">
      {/* Title Section */}
      <div className="items-center justify-between text-center mb-4">
        <h1 className="text-3xl font-normal capitalize">Our Products</h1>
      </div>

      {/* Products Section */}
      <div className="md:grid grid-cols-4 md:gap-2 md:px-36 md:mx-0 mx-16 ">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            badgetext={product.badgetext}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
            hoveroverlay={product.hoveroverlay}
            
          
          />
        ))}
      </div>
      <button className="items-center justify-between h-[48px] w-[245px] border-[#B88E2F] bg-white border-2 capitalize font-semibold text-[#B88E2F] mt-8">see more</button>
    </div>
    
  );
};

export default OurProducts;
