"use client";

import React, { useState } from "react";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    console.log("Login data:", data);
    setTimeout(() => {
      alert("Logged in successfully!");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="pb-24 pt-32 flex items-center justify-center bg-gray-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-10"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            DashForge
          </h1>
          <p className="text-gray-500 mt-2">Secure Role-Based Access Dashboard</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div className="flex items-center border rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-purple-500">
            <FaUser className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none text-gray-700"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Password */}
          <div className="flex items-center border rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-purple-500">
            <FaLock className="text-gray-400 w-5 h-5 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-gray-700"
              {...register("password", { required: "Password is required" })}
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            {loading ? "Logging in..." : <>
              <FaSignInAlt /> Login
            </>}
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>
            Don`t have an account?{" "}
            <a href="/register" className="text-purple-500 font-medium hover:underline">
              Sign Up
            </a>
          </p>
          <p className="mt-2">
            <a href="/forgot-password" className="hover:underline">Forgot Password?</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
