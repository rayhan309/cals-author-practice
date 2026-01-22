"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-50">
      {/* Logo + Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-3 mb-6"
      >
        <FaSpinner className="w-10 h-10 text-purple-500 animate-spin" />
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          DashForge
        </h1>
      </motion.div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="text-gray-700 text-lg md:text-xl"
      >
        Loading, please wait...
      </motion.p>

      {/* Optional Animated Dots */}
      <div className="flex mt-4 space-x-2">
        {[...Array(3)].map((_, idx) => (
          <motion.span
            key={idx}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, delay: idx * 0.2 }}
            className="w-3 h-3 bg-purple-500 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
