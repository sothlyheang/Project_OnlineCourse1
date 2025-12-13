import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  if (!product) return null;

  const addToCart = (e) => {
    e.stopPropagation(); // Prevent click from navigating when clicking Add to Cart
    setCart([...cart, product]);
  };

  const renderStars = (rating) => {
    if (!rating || isNaN(rating)) rating = 0;
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    if (hasHalfStar) stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    while (stars.length < 5) stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-yellow-500" />);
    return stars;
  };

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white flex flex-col hover:shadow-xl transition">
      
      {/* Image & Title clickable */}
      <Link to={`/courses/${product.id}`} className="cursor-pointer">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="font-bold text-lg mt-2">{product.title}</h2>
      </Link>

      {/* Price */}
      <p className="mt-1 text-gray-600 font-medium">${product.price}</p>

      {/* ⭐ Rating */}
      <div className="flex items-center mt-2">
        {renderStars(product.rating)}
        <span className="ml-2 text-gray-700 font-medium">{product.rating}</span>
      </div>

      {/* Add to Cart button */}
      <button
        onClick={addToCart}
        className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 flex items-center gap-2 justify-center"
      >
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
