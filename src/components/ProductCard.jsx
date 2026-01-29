import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart, FaCheck, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Notification from "./Notification";

const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const [showNotification, setShowNotification] = useState(false);
  const [isAddingInProgress, setIsAddingInProgress] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  if (!product) return null;

  // Check if product is already in cart
  const isInCart = cart.some((item) => item.id === product.id);

  // Countdown effect
  useEffect(() => {
    if (!isAddingInProgress) return;

    if (countdown === 0) {
      setIsAddingInProgress(false);
      setCountdown(3);
      setIsButtonDisabled(false);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, isAddingInProgress]);

  const addToCart = (e) => {
    e.stopPropagation();

    // Prevent multiple rapid clicks
    if (isButtonDisabled || isInCart) return;

    // Check if already in cart (prevent duplicates)
    if (cart.some((item) => item.id === product.id)) {
      return;
    }

    // Start countdown
    setIsAddingInProgress(true);
    setCountdown(3);
    setIsButtonDisabled(true);
    setShowNotification(true);

    // Auto-confirm after 3 seconds
    const autoConfirmTimer = setTimeout(() => {
      confirmAdd();
    }, 20);

    // Store timeout ID for potential cancellation
    window.pendingAddTimer = autoConfirmTimer;
  };

  const confirmAdd = () => {
    if (isInCart) return; // Prevent adding if already in cart
    setCart([...cart, product]);
    setIsAddingInProgress(false);
    setCountdown(3);
    setIsButtonDisabled(false);
  };

  const cancelAdd = () => {
    clearTimeout(window.pendingAddTimer);
    setIsAddingInProgress(false);
    setCountdown(3);
    setIsButtonDisabled(false);
    setShowNotification(false);
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
      {showNotification && !isAddingInProgress && <Notification message={`${product.title} added to Cart!`} />}
      <div className="border rounded-lg sm:rounded-xl shadow-sm bg-white flex flex-col hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out h-full animate-fadeIn">
      
      {/* Image & Title */}
      <Link to={`/courses/${product.id}`} className="cursor-pointer relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-24 sm:h-32 md:h-40 object-cover rounded-t-lg sm:rounded-t-xl"
        />

        {/* Cart Icon Overlay - Mobile Only - REMOVED */}

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

        {/* Add to Cart or Go to Cart Button */}
        {isAddingInProgress ? (
          <div className="flex mt-2 sm:mt-3 mb-2 sm:mb-3 gap-2 items-center justify-center">
            {/* Countdown Circle around Confirm */}
            {/* <button
              onClick={confirmAdd}
              className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
            > */}
              {/* Animated Ring */}
              {/* <div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 border-r-green-500 transition-all duration-300"
                style={{
                  borderTopColor: `rgb(34, 197, 94)`,
                  borderRightColor: `rgb(34, 197, 94)`,
                  opacity: countdown / 3,
                }}
              /> */}
              {/* <div className="bg-green-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-xs sm:text-sm">
                {countdown}
              </div>
            </button> */}

            {/* Cancel Button */}
            {/* <button
              onClick={cancelAdd}
              className="bg-red-500 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center gap-1 text-xs sm:text-sm"
            >
              <FaTimes size={12} />
              Cancel
            </button> */}
          </div>
        ) : isInCart ? (
          <Link
            to="/cart"
            className="flex mt-2 sm:mt-3 mb-2 sm:mb-3 bg-blue-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-green-700 hover:scale-105 transition-transform duration-200 items-center gap-1.5 sm:gap-2 justify-center"
          >
            <FaCheck size={12} />
            Go to Cart
          </Link>
        ) : (
          <button
            onClick={addToCart}
            disabled={isButtonDisabled}
            className={`flex mt-2 sm:mt-3 mb-2 sm:mb-3 text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:scale-105 transition-transform duration-200 items-center gap-1.5 sm:gap-2 justify-center ${
              isButtonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <FaShoppingCart size={12} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
    </>
  );
};

export default ProductCard;
