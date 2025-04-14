function Product({ image, title }) {
    return (
      <div className="text-center">
        <img
          src={image}
          alt={title}
          className="md:w-[351px] md:h-[460px] md:object-cover rounded-lg "
        />
        <h2 className="p-4 text-lg font-bold text-gray-800">{title}</h2>
      </div>
    );
  }
  
  export default Product;
  