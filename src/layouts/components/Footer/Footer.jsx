"use client";

import React from "react";
import { FaGithub, FaHammer, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-200 border-t border-gray-300">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Logo & Tagline */}
        <div className="flex flex-col items-start space-y-2">
           {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <FaHammer className="text-purple-500 w-6 h-6 animate-bounce" />
            <span className="my-text">DashForge</span>
          </Link>
          <p className="text-gray-300">Build. Control. Scale.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-400 text-xl">
          <a href="https://github.com/rayhan309" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/abu-rayhan-undefined-2514b5390/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
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
