import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner1.2.webp";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

import ProductCard from "../components/ProductCard";
import products from "../data/product";

import { FaCode, FaLaptopCode, FaDatabase, FaShieldAlt, FaBrain, FaCloud, FaMobileAlt, FaGamepad } from "react-icons/fa";

const HomePage = () => {
  const images = [banner1, banner2, banner3, banner4];
  const featuredRef = useRef(null);

  const scrollToCourses = () => {
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Arrow = ({ direction = "left", onClick }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition duration-300 ${
        direction === "left" ? "left-2 sm:left-5" : "right-2 sm:right-5"
      }`}
    >
      {direction === "left" ? "<" : ">"}
    </button>
  );

  const Carousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => setCurrent((prev) => (prev + 1) % images.length), 5000);
      return () => clearInterval(interval);
    }, []);

    const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
    const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

    return (
      <div className="w-full overflow-hidden relative bg-slate-900">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[620px] object-cover shrink-0"
              alt={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <Arrow direction="left" onClick={prevSlide} />
        <Arrow direction="right" onClick={nextSlide} />

        {/* HERO OVERLAY */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4 sm:px-6 max-w-xl w-full">
          <div className="bg-black/85 p-4 sm:p-8 rounded-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
              Upgrade Your Skills Today
            </h1>
            <p className="text-base sm:text-lg md:text-lg lg:text-xl mt-2 sm:mt-3 text-white opacity-90">
              Join thousands of learners mastering new tech skills with high-quality online courses.
            </p>

            <div className="mt-3 sm:mt-4">
              <Link
                to="/courses"
                className="bg-yellow-400 text-gray-900 px-5 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
              >
                Browse Courses →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const categoryIcons = [
    { name: "Web Development", icon: <FaLaptopCode size={32} /> },
    { name: "Programming", icon: <FaCode size={32} /> },
    { name: "Database", icon: <FaDatabase size={32} /> },
    { name: "Cyber Security", icon: <FaShieldAlt size={32} /> },
    { name: "AI & Machine Learning", icon: <FaBrain size={32} /> },
    { name: "Cloud & DevOps", icon: <FaCloud size={32} /> },
    { name: "Mobile Apps", icon: <FaMobileAlt size={32} /> },
    { name: "Game Development", icon: <FaGamepad size={32} /> },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-50">
      <Navbar scrollToCourses={scrollToCourses} />

      {/* CAROUSEL */}
      <Carousel />

      {/* FEATURED COURSES */}
      <section ref={featuredRef} className="container mx-auto px-4 sm:px-6 mt-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-slate-800">
          Featured Courses
        </h2>
        <hr className="pb-4" />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {products.slice(0, 12).map((product) => (
        <ProductCard key={product.id} product={product} />
        ))}
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="container mx-auto px-4 sm:px-6 mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-slate-800">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {categoryIcons.map(({ name, icon }, i) => (
            <Link
              key={i}
              to={`/courses?category=${name}`}
              className="bg-white hover:bg-blue-50 border border-slate-200 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 text-center flex flex-col items-center"
            >
              <div className="text-blue-600 mb-2 sm:mb-3">{icon}</div>
              <p className="font-semibold text-slate-700">{name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container mx-auto px-4 sm:px-6 mt-10 mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-slate-800">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
          <div className="p-4 sm:p-6 bg-white shadow rounded-xl hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">Top-Rated Content</h3>
            <p className="text-gray-600">Expert instructors & industry-ready curriculum.</p>
          </div>

          <div className="p-4 sm:p-6 bg-white shadow rounded-xl hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">Career-Focused Skills</h3>
            <p className="text-gray-600">Build skills that employers look for.</p>
          </div>

          <div className="p-4 sm:p-6 bg-white shadow rounded-xl hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2">Learn at Your Pace</h3>
            <p className="text-gray-600">Study anytime, anywhere with lifetime access.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
