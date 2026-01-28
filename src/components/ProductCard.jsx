import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Notification from "./Notification";

const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const [showNotification, setShowNotification] = useState(false);

  if (!product) return null;

  const addToCart = (e) => {
    e.stopPropagation();
    setCart([...cart, product]);
    setShowNotification(true);
  };

  const renderStars = (rating) => {
    if (!rating || isNaN(rating)) rating = 0;
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++)
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500 text-xs sm:text-sm" size={12} />);
    if (hasHalfStar)
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500 text-xs sm:text-sm" size={12} />);
    while (stars.length < 5)
      stars.push(
        <FaRegStar key={`empty-${stars.length}`} className="text-yellow-500 text-xs sm:text-sm" size={12} />
      );

    return stars;
  };

  return (
    <>
      {showNotification && <Notification message={`${product.title} added to Cart!`} />}
      <div className="border rounded-lg sm:rounded-xl shadow-sm bg-white flex flex-col hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out h-full animate-fadeIn">
      
      {/* Image & Title */}
      <Link to={`/courses/${product.id}`} className="cursor-pointer relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-24 sm:h-32 md:h-40 object-cover rounded-t-lg sm:rounded-t-xl"
        />

        {/* Cart Icon Overlay - Mobile Only */}
        <button
          onClick={addToCart}
          className="sm:hidden absolute bottom-1.5 right-1.5 bg-blue-600 text-white p-1.5 rounded-md hover:bg-blue-700 transition-transform duration-200 shadow-lg"
          title="Add to Cart"
        >
          <FaShoppingCart size={14} />
        </button>

        <h2 className="font-bold text-xs sm:text-sm md:text-base mt-2 px-2 sm:px-3 line-clamp-2 transition-colors duration-300 hover:text-blue-600">
          {product.title}
        </h2>
      </Link>

      <div className="px-2 sm:px-3 flex-1 flex flex-col justify-between">
        {/* Price */}
        <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-600 font-medium transition-colors duration-300 hover:text-gray-800">
          ${product.price}
        </p>

        {/* ⭐ Rating */}
        <div className="flex items-center mt-1 text-xs sm:text-xs md:text-sm gap-0.5">
          <div className="flex gap-0.5">
            {renderStars(product.rating)}
          </div>
          <span className="ml-1 text-gray-700 font-medium text-xs">{product.rating}</span>
        </div>

        {/* Add to Cart - Desktop Only */}
        <button
          onClick={addToCart}
          className="hidden sm:flex mt-2 sm:mt-3 mb-2 sm:mb-3 bg-blue-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-200 items-center gap-1.5 sm:gap-2 justify-center"
        >
          <FaShoppingCart size={12} />
          Add to Cart
        </button>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
