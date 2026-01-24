import React, { useContext, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import products from "../data/product";
import { CartContext } from "../context/CartContext";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    // Simulate a small delay to ensure data is loaded
    const timer = setTimeout(() => {
      const foundCourse = products.find((p) => p.id === parseInt(id));
      setCourse(foundCourse);
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600">Loading course details...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate("/courses")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            ← Back to Courses
          </button>
        </div>
      </div>
    );
  }

  const addToCart = () => {
    if (!cart.find((item) => item.id === course.id)) {
      setCart([...cart, course]);
    }
  };

  const inCart = cart.find((item) => item.id === course.id);

  // Related courses (first 3 excluding current)
  const related = products.filter((p) => p.id !== course.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-20 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-10 bg-white p-4 sm:p-8 rounded-xl shadow-lg">
        {/* IMAGE */}
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 sm:h-72 md:h-96 object-cover rounded-lg"
        />

        {/* DETAILS */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{course.title}</h1>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{course.description}</p>

            <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={16}
                  className={`${i < course.rating ? "text-yellow-400" : "text-gray-300"}`}
                />
              ))}
              <span className="text-gray-600 ml-2 text-sm sm:text-base">{course.rating} / 5</span>
            </div>

            <p className="text-lg sm:text-xl font-semibold mb-2">Price: ${course.price}</p>
            <p className="text-sm sm:text-base text-gray-600 mb-2">Duration: {course.duration || "4h 30m"}</p>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Level: {course.level || "Beginner"}</p>
          </div>

          <div className="flex flex-col gap-2 sm:gap-3">
            <button
              onClick={addToCart}
              disabled={inCart}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base text-white font-semibold transition ${
                inCart ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {inCart ? "Already in Cart" : "Add to Cart"}
            </button>

            <Link to="/courses" className="text-blue-600 hover:underline text-center">
              ← Back to Courses
            </Link>
          </div>
        </div>
      </div>

      {/* RELATED COURSES */}
      {related.length > 0 && (
        <div className="max-w-6xl mx-auto mt-8 sm:mt-16 px-3 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Related Courses</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-1">${item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
