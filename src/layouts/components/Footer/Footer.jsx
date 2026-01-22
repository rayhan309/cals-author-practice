"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-200 border-t border-gray-300">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Logo & Tagline */}
        <div className="flex flex-col items-start space-y-2">
           {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <div className="w-9 h-9 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              🚀
            </div>
            DashForge
          </Link>
          <p className="text-gray-300">Build. Control. Scale.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-700 text-xl">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <FaTwitter />
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-6 py-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} DashForge. All rights reserved. Developed by Rayhan
      </div>
    </footer>
  );
};

export default Footer;
