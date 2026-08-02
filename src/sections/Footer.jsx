import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-black text-white py-12 px-6 border-t border-white/10 relative overflow-hidden"
      id="Footer"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Name Title */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
          Priyanshu Kumar
        </h2>

        {/* Subtitle / Tagline */}
        <p className="text-cyan-400 text-sm font-medium mt-2 tracking-wider uppercase">
          Data Analyst & BI Specialist
        </p>

        {/* Divider Line */}
        <div className="w-32 h-1 bg-gradient-to-r from-[#1cd8d2] via-[#00b8f8] to-[#302b63] shadow-[0_0_12px_rgba(0,184,248,0.5)] my-6 rounded-full" />

        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 my-2">
          <a
            href="https://github.com/priyanshukumargupta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-400 hover:scale-110 transition-all duration-300 text-gray-300 hover:text-cyan-400 shadow-md"
          >
            <FaGithub className="text-2xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/priyanshukumargupta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-400 hover:scale-110 transition-all duration-300 text-gray-300 hover:text-cyan-400 shadow-md"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs sm:text-sm mt-8">
          © {currentYear} Priyanshu Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;