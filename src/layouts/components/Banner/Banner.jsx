"use client";

import React from "react";
import Image from "next/image";
import { FaRocket } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative bg-gray-200 text-secondary">
      <div className="container mx-auto px-6 py-32 flex flex-col md:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to <span className="my-text">DashForge</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary/80">
            Forge powerful dashboards with secure role-based access. Build. Control. Scale.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow">
              <FaRocket />
              Get Started
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image / Logo */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <Image
            src="/logo.png" // Replace with your DashForge logo
            alt="DashForge Logo"
            width={300}
            height={300}
            className="w-auto h-auto"
            loading="eager"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
