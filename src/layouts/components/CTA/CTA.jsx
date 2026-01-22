"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}!`);
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-purple-500/80 via-pink-500/80 to-red-500/80 text-white py-24  mb-10">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Stay Updated with DashForge
        </h2>
        <p className="text-white/80 text-lg md:text-xl">
          Subscribe to our newsletter and never miss updates on new features, releases, and tips to manage your dashboards.
        </p>

        {/* Email Form */}
        <form
          onSubmit={handleSubscribe}
          className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full text-gray-900 w-full border-2 border-primary/30 focus:border-primary/80 sm:w-auto flex-1 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            <FaPaperPlane />
            Subscribe
          </button>
        </form>

        {/* Optional small note */}
        <p className="text-white/70 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default CTA;
