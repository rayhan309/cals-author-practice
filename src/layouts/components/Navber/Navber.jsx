"use client";

import { useState } from "react";
import { FaHome, FaInfoCircle, FaUser, FaSignInAlt, FaBars, FaTimes, FaHammer } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navber = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-xl bg-secondary border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <FaHammer className="text-purple-500 w-6 h-6 animate-bounce" />
            <span className="my-text">
              
              DashForge
              </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-white">
            <NavItem href="/" icon={<FaHome />} label="Home" />
            <NavItem href="/about" icon={<FaInfoCircle />} label="About" />
            <NavItem href="/dashboard" icon={<FaUser />} label="Dashboard" />

            {/* AUTH BUTTON */}
            <button className="flex items-center gap-2 my-bg px-5 py-2 rounded-full hover:scale-105 transition-all shadow-lg">
              <FaSignInAlt />
              Login
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-gray-700 backdrop-blur-lg px-6 py-6 space-y-4 text-white">
            <MobileNavItem href="/" icon={<FaHome />} label="Home" />
            <MobileNavItem href="/about" icon={<FaInfoCircle />} label="About" />
            <MobileNavItem href="/dashboard" icon={<FaUser />} label="Dashboard" />

            <button className="w-full flex items-center justify-center gap-2 my-bg px-5 py-3 rounded-xl hover:scale-105 transition-all shadow-lg">
              <FaSignInAlt />
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavItem = ({ href, icon, label }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-white/80 hover:text-white transition-all hover:scale-110"
    >
      {icon}
      {label}
    </Link>
  );
};

const MobileNavItem = ({ href, icon, label }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 text-white text-lg hover:text-purple-400 transition-all"
    >
      {icon}
      {label}
    </Link>
  );
};

export default Navber;
