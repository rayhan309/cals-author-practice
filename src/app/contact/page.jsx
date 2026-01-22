"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        {/* Page Title */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-extrabold text-secondary">Contact BD</h2>
          <p className="text-secondary/80">
            Have a question or suggestion? Fill out the form below and we`ll get back to you shortly.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-xl shadow-lg space-y-6"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-secondary font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-secondary font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-secondary font-medium mb-2">Message</label>
            <textarea
              placeholder="Your message"
              className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              rows={5}
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 my-bg cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
          >
            <FaPaperPlane />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
