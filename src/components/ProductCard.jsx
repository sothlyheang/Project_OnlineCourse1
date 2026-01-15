import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  if (!product) return null;

  const addToCart = (e) => {
    e.stopPropagation();
    setCart([...cart, product]);
  };

  const renderStars = (rating) => {
    if (!rating || isNaN(rating)) rating = 0;
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++)
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    if (hasHalfStar)
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    while (stars.length < 5)
      stars.push(
        <FaRegStar key={`empty-${stars.length}`} className="text-yellow-500" />
      );

    return stars;
  };

  return (
    <div className="border rounded-xl shadow-sm bg-white flex flex-col hover:shadow-lg transition h-full">
      
      {/* Image & Title */}
      <Link to={`/courses/${product.id}`} className="cursor-pointer">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-32 sm:h-40 object-cover rounded-t-xl"
        />

        <h2 className="font-bold text-sm sm:text-base mt-2 px-3 line-clamp-2">
          {product.title}
        </h2>
      </Link>

      <div className="px-3 flex-1 flex flex-col justify-between">
        {/* Price */}
        <p className="mt-1 text-sm sm:text-base text-gray-600 font-medium">
          ${product.price}
        </p>

        {/* ⭐ Rating */}
        <div className="flex items-center mt-1 text-xs sm:text-sm">
          {renderStars(product.rating)}
          <span className="ml-1 text-gray-700 font-medium">
            {product.rating}
          </span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={addToCart}
          className="mt-3 mb-3 bg-blue-600 text-white text-sm px-3 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 justify-center"
        >
          <FaShoppingCart size={14} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
