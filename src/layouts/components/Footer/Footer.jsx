"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 border-t border-gray-300">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Logo & Tagline */}
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">DashForge</h2>
          <p className="text-gray-600">Build. Control. Scale.</p>
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
      <div className="border-t border-gray-300 mt-6 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} DashForge. All rights reserved. Developed by Rayhan
      </div>
    </footer>
  );
};

export default Footer;
