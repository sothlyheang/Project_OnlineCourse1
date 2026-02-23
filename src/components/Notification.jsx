import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

const Notification = ({ message = "Added to Cart!", duration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-50 animate-fadeInRight">
      <div className="bg-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg flex items-center gap-2 sm:gap-3 relative pr-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <FaCheckCircle size={20} className="shrink-0" />
          <span className="font-semibold text-sm sm:text-base">{message}</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-red-400 hover:text-red-600 transition-colors duration-200 shrink-0"
          aria-label="Close notification"
        >
          <FaTimes size={18} />
        </button>
      </div>
    </div>
  );
};

export default Notification;
