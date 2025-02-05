import Product from "./Product"; // Import the Product component

function ProductRange() {
  const products = [
    { image: "living.png", title: "Living" },
    { image: "dinning.png", title: "Dining" },
    { image: "bedroom.png", title: "Bedroom" },
  ];

  return (
    <div className="text-center p-2">
      <div className="mb-2">
        <h1 className="text-3xl font-bold text-gray-900 mt-12">Browse the Range</h1>
        <p className="text-gray-600 text-2xl mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="md:flex flex-row md:items-center md:gap-6 md:mx-48 md:justify-between md:my-16 mx-6 ">
        {products.map((product, index) => (
          <Product
            key={index} // Make sure to use a unique key for each mapped item
            image={product.image}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductRange;
