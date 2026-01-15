import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import products from "../data/product";
import ProductCard from "../components/ProductCard";

const Courses = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");

  const categories = ["All", ...new Set(products.map(p => p.category))];

  let filteredProducts = products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" ? true : p.category === category;
    return matchesSearch && matchesCategory;
  });

  if (sortBy === "price-low") filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  if (sortBy === "price-high") filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  if (sortBy === "rating") filteredProducts = filteredProducts.sort((a, b) => b.rating - a.rating);

  return (
    <div className="bg-slate-50 py-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">
          Explore Courses
        </h1>
        <p className="text-center text-slate-600 mb-6">
          Boost your career with top-rated courses.
        </p>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3 bg-white p-4 rounded-xl shadow-sm mb-4">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 border border-slate-300 rounded-lg px-4 py-2"
          />

          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="border border-slate-300 rounded-lg px-4 py-2 w-full md:w-auto"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="border border-slate-300 rounded-lg px-4 py-2 w-full md:w-auto"
          >
            <option value="">Sort</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <p className="text-slate-700 mb-4">
          Showing <strong>{filteredProducts.length}</strong> courses
        </p>

        {/* Courses Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full">No courses found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
