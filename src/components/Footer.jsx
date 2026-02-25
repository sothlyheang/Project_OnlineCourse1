import React from "react";
// import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/soth-l-674090284/", icon: <FaLinkedin size={22} /> },
    { name: "GitHub", url: "https://github.com/sothlyheang", icon: <FaGithub size={22} /> },
    { name: "Facebook", url: "https://web.facebook.com/SothLy.Heang.9279/", icon: <FaFacebook size={22} /> },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-6 sm:py-8">
      <div className="container mx-auto p-3 sm:p-6 text-center text-gray-300">
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 sm:mb-5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 hover:scale-110">
              {link.icon}
            </a>
          ))}
        </div>

        <hr className="w-20 sm:w-28 mx-auto border-gray-700 mb-3 sm:mb-4" />

        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          © {currentYear} Made by <span className="text-white font-semibold">SOTH LYHEANG</span>. All rights reserved.
          <br />
          Designed and built with <span className="text-white">React</span> & <span className="text-white">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;