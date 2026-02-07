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

        {/* Our Team */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow hover:shadow-lg transition">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-linear-to-br from-blue-400 to-blue-600 rounded-full mb-4 flex items-center justify-center">
                {/* <FaUsers size={50} className="text-white" /> */}
                <img className='rounded-2xl' src="/src/assets/PF.jpg" alt="heang" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">Soth Lyheang</h3>
              <p className="text-blue-600 font-semibold text-sm sm:text-base mb-3">Team Lead & Founder</p>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Leading the vision and strategy of the platform. Experienced in building scalable solutions and mentoring teams.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow hover:shadow-lg transition">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-linear-to-br from-green-400 to-green-600 rounded-full mb-4 flex items-center justify-center">
                <FaLaptopCode size={50} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">Teammate Name</h3>
              <p className="text-green-600 font-semibold text-sm sm:text-base mb-3">Tester</p>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Building robust backend and frontend solutions. Passionate about clean code and efficient architecture.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow hover:shadow-lg transition">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-linear-to-br from-purple-400 to-purple-600 rounded-full mb-4 flex items-center justify-center">
                <FaGraduationCap size={50} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">Teammate Name</h3>
              <p className="text-purple-600 font-semibold text-sm sm:text-base mb-3"> Instructor</p>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Designing engaging course content and ensuring quality education. Expert in explaining complex concepts.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col items-center bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow hover:shadow-lg transition">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-linear-to-br from-orange-400 to-orange-600 rounded-full mb-4 flex items-center justify-center">
                <FaUsers size={50} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">Teammate Name</h3>
              <p className="text-orange-600 font-semibold text-sm sm:text-base mb-3">UI/UX Designer</p>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Creating beautiful and intuitive user interfaces. Focused on user experience and design excellence.
              </p>
            </div>
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
