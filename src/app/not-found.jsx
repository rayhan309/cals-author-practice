"use client";

import React from "react";
import Link from "next/link";
import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center px-6 text-center space-y-6">
      
      {/* Animated Error Code */}
      <motion.h1
        className="text-7xl md:text-9xl font-extrabold text-gray-900"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      {/* Error Message */}
      <motion.p
        className="text-gray-700 text-lg md:text-2xl max-w-xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Oops! The page you are looking for does not exist.
      </motion.p>

      {/* Suggestion */}
      <motion.p
        className="text-gray-500 text-sm md:text-base"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        It might have been removed, renamed, or never existed.
      </motion.p>

      {/* Back Home Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Link
          href="/"
          className="mt-4 inline-flex items-center gap-2 my-bg text-white px-6 py-3 rounded-full font-semibold transition"
        >
          <FaRocket />
          Back to Home
        </Link>
      </motion.div>

      {/* Optional Decorative */}
      <motion.div
        className="absolute bottom-10 opacity-10 text-9xl text-gray-500 -z-10 select-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        DashForge
      </motion.div>
    </div>
  );
};

export default NotFound;
