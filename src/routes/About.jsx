import React from 'react';
import { FaUsers, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 w-full py-8 sm:py-20 px-3 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-6 sm:gap-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-2 sm:mb-4">About Us</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            We are dedicated to helping thousands of learners worldwide achieve their goals through high-quality online courses.
          </p>
        </div>

        {/* Mission / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="flex flex-col items-center bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow hover:shadow-lg transition">
            <FaUsers size={30} className="text-blue-600 mb-3 sm:mb-4 sm:size-40" />
            <h3 className="text-lg sm:text-xl font-bold mb-2">Our Community</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Join a global community of passionate learners and professionals sharing knowledge and growth.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow hover:shadow-lg transition">
            <FaLaptopCode size={30} className="text-blue-600 mb-3 sm:mb-4 sm:size-40" />
            <h3 className="text-lg sm:text-xl font-bold mb-2">Expert Instructors</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Learn from industry experts with real-world experience and hands-on guidance.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow hover:shadow-lg transition">
            <FaGraduationCap size={30} className="text-blue-600 mb-3 sm:mb-4 sm:size-40" />
            <h3 className="text-lg sm:text-xl font-bold mb-2">Career-Focused Learning</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Acquire skills that matter and boost your career opportunities with practical, project-based courses.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white p-4 sm:p-8 rounded-lg sm:rounded-xl shadow text-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Story</h2>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
            We started with a mission to make tech education accessible to everyone, everywhere. Over the years, we've grown into a platform that empowers thousands of learners to upskill, reskill, and achieve their professional dreams.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            Our courses are carefully designed to combine theory with practical applications, ensuring students not only learn but can also implement their knowledge in real-world scenarios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
