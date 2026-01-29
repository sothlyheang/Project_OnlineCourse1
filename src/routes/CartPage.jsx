import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash, FaCheckCircle, FaShoppingCart } from "react-icons/fa";
import Navbar from "../components/Navbar";

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);

  // Remove item (by id to remove all instances of that course)
  const removeItem = (itemId) => {
    const updated = cart.filter((item) => item.id !== itemId);
    setCart(updated);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Get unique items (one course per id)
  const uniqueItems = Array.from(
    new Map(cart.map((item) => [item.id, item])).values()
  );

  // Calculate subtotal based on unique items
  const subtotal = uniqueItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  if (cart.length === 0)
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="p-4 sm:p-10 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center border-2 border-slate-200">
              {/* Empty Cart Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-linear-to-br from-blue-100 to-blue-50 p-6 sm:p-8 rounded-full">
                  <FaShoppingCart size={60} className="text-blue-600" />
                </div>
              </div>
              <hr className="my-6 border-slate-300" />

              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-800">Your Cart is Empty</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                Looks like you haven't added any courses yet. Start exploring and add some amazing courses to your cart!
              </p>

              <Link
                to="/courses"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm sm:text-base font-semibold shadow-md hover:shadow-lg"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="p-3 sm:p-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold">Your Cart</h2>
          <span className="bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base font-semibold">
            {uniqueItems.length} item{uniqueItems.length !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-8">
          {/* CART ITEMS */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Header */}
              <div className="hidden sm:grid grid-cols-4 gap-4 bg-slate-100 p-4 font-semibold text-slate-700 text-sm">
                <div className="col-span-2">Product</div>
                <div>Price</div>
                <div>Action</div>
              </div>

              {/* Items */}
              <div className="divide-y">
                {uniqueItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 sm:p-4 hover:bg-slate-50 transition flex flex-col sm:grid sm:grid-cols-4 gap-3 sm:gap-4 items-start sm:items-center"
                  >
                    {/* Product Image & Title */}
                    <div className="col-span-2 flex gap-3 sm:gap-4 w-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base font-semibold line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-sm sm:text-base font-semibold text-slate-700">
                      ${item.price.toFixed(2)}
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition text-sm w-full sm:w-fit justify-center sm:justify-start"
                    >
                      <FaTrash size={14} /> Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="mt-4 w-full text-red-600 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg transition text-sm font-semibold"
            >
              Clear All Items
            </button>
          </div>

          {/* SUMMARY CARD */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg h-fit sticky top-4">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Order Summary</h3>

            <div className="space-y-3 border-b pb-4">
              <div className="flex justify-between text-sm sm:text-base">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-semibold">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <p className="text-gray-600">Tax (10%)</p>
                <p className="font-semibold">${tax.toFixed(2)}</p>
              </div>
            </div>

            <div className="flex justify-between text-lg sm:text-xl font-bold mt-4 mb-4">
              <p>Total</p>
              <p className="text-red-600">${total.toFixed(2)}</p>
            </div>

            <button className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base mb-3 flex items-center justify-center gap-2">
              <FaCheckCircle size={25} />
              Proceed to Checkout
            </button>

            <Link
              to="/courses"
              className="block text-center py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition text-sm sm:text-base font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
