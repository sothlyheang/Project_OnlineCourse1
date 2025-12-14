import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner1.2.webp";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

import ProductCard from "../components/ProductCard";
import products from "../data/product";

import {FaCode, FaLaptopCode, FaDatabase, FaShieldAlt,FaBrain, FaCloud, FaMobileAlt, FaGamepad} from "react-icons/fa";

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
      onClick={onClick} className={`absolute top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 ${
        direction === "left" ? "left-5" : "right-5"
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
            <img key={i} src={src} className="w-full h-[620px] object-fill shrink-0" alt={`Slide ${i + 1}`} />
          ))}
        </div>

        <Arrow direction="left" onClick={prevSlide} />
        <Arrow direction="right" onClick={nextSlide} />

        {/* HERO OVERLAY */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-6 max-w-3xl">
          <div className="bg-black/85 p-8 rounded-xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              Upgrade Your Skills Today
            </h1>
            <p className="text-lg md:text-xl mt-4 text-white opacity-90">
              Join thousands of learners mastering new tech skills with high-quality online courses.
            </p>

            <div className="mt-6">
              <Link
                to="/courses"
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition"
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
      <section ref={featuredRef} className="container mx-auto px-6 mt-3">
        <h2 className="text-3xl font-bold mb-6 text-center text-slate-800">
          Featured Courses
        </h2>
        <hr className="pb-4" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="container mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-slate-800">
          Popular Categories
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categoryIcons.map(({ name, icon }, i) => (
            <Link
              key={i}
              to={`/courses?category=${name}`}
              className="bg-white hover:bg-blue-50 border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-center flex flex-col items-center"
            >
              <div className="text-blue-600 mb-3">{icon}</div>
              <p className="font-semibold text-slate-700">{name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container mx-auto px-6 mt-20 mb-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-slate-800">
          Why Choose Us?
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Top-Rated Content</h3>
            <p className="text-gray-600">Expert instructors & industry-ready curriculum.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Career-Focused Skills</h3>
            <p className="text-gray-600">Build skills that employers look for.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Learn at Your Pace</h3>
            <p className="text-gray-600">Study anytime, anywhere with lifetime access.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
