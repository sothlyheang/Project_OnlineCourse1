import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

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
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 animate-slideIn">
      <div className="bg-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg flex items-center gap-2 sm:gap-3">
        <FaCheckCircle size={20} className="shrink-0" />
        <span className="font-semibold text-sm sm:text-base">{message}</span>
      </div>
    </div>
  );
};

export default Notification;
