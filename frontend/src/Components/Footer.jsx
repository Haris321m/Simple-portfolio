import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 py-12 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-red-500 text-xl font-semibold mb-4">Haris Dev</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate web developer creating modern and responsive web applications 
              with cutting-edge technologies.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white text-lg font-medium mb-4">Contact</h4>
            <div className="flex items-center space-x-3 text-gray-400">
              <FaEnvelope className="text-red-500" />
              <span>haris@example.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <FaPhone className="text-red-500" />
              <span>+92 3XX XXXXXXX</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white text-lg font-medium mb-4">Follow Me</h4>
            <div className="flex space-x-6">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#ffffff0d] pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Muhammad Haris. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}