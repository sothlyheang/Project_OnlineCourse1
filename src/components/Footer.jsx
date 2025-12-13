import React from "react";
// import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/zee-zee-596aa1363/", icon: <FaLinkedin size={22} /> },
    { name: "GitHub", url: "https://github.com/sothlyheang", icon: <FaGithub size={22} /> },
    { name: "Facebook", url: "https://web.facebook.com/SothLy.Heang.9279/", icon: <FaFacebook size={22} /> },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-8">
      <div className="container mx-auto p-6 text-center text-gray-300">
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <hr className="w-28 mx-auto border-gray-700 mb-4" />

        <p className="text-sm text-gray-500">
          © {currentYear} Made by <span className="text-white font-semibold">SOTH LYHEANG & HENG SOPHAPOR </span>. All rights reserved.
          <br />
          Designed and built with <span className="text-white">React</span> & <span className="text-white">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;