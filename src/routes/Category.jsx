import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaCode, FaDatabase, FaShieldAlt, FaBrain, FaCloud, FaMobileAlt, FaGamepad } from "react-icons/fa";

const Category = () => {
  const categories = [
    { name: "Web Development", icon: <FaLaptopCode size={36} /> },
    { name: "Programming", icon: <FaCode size={36} /> },
    { name: "Database", icon: <FaDatabase size={36} /> },
    { name: "Cyber Security", icon: <FaShieldAlt size={36} /> },
    { name: "AI & Machine Learning", icon: <FaBrain size={36} /> },
    { name: "Cloud & DevOps", icon: <FaCloud size={36} /> },
    { name: "Mobile Apps", icon: <FaMobileAlt size={36} /> },
    { name: "Game Development", icon: <FaGamepad size={36} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 text-center">Explore Categories</h1>
        <p className="text-center text-slate-600 max-w-2xl">
          Browse categories to find the perfect course for your skills and career growth.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 w-full">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={`/courses?category=${cat.name}`}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center justify-center text-center hover:bg-blue-50 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="text-blue-600 mb-4">{cat.icon}</div>
              <h2 className="font-bold text-lg text-slate-700">{cat.name}</h2>
              <p className="text-sm text-gray-500 mt-2">Explore top courses in {cat.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
