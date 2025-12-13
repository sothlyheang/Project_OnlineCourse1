import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  // Remove item
  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0)
    return (
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-4">
          Looks like you haven't added any courses yet.
        </p>
        <Link
          to="/courses"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Browse Courses
        </Link>
      </div>
    );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* CART ITEMS */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover rounded-lg"
              />

              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 mt-1">${item.price}</p>
                </div>

                <button
                  onClick={() => removeItem(index)}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 mt-2"
                >
                  <FaTrash size={14} /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY CARD */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <h3 class="text-xl font-bold mb-4">Order Summary</h3>

          <div class="flex justify-between text-lg">
            <p>Subtotal</p>
            <p class="font-semibold">${subtotal.toFixed(2)}</p>
          </div>

          <hr class="my-4" />

          <button class="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Checkout
          </button>

          <Link
            to="/courses"
            className="block text-center mt-3 text-blue-600 hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
