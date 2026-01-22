"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Product Manager",
    quote:
      "DashForge has transformed the way our team manages dashboards. Secure, fast, and easy to use!",
  },
  {
    name: "Ali R.",
    role: "Lead Developer",
    quote:
      "The role-based access system is perfect. It saves us hours of manual work every week.",
  },
  {
    name: "Maya K.",
    role: "Team Lead",
    quote:
      "Our dashboards have never been more organized. DashForge is truly a game-changer.",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-12">

        {/* Section Title */}
        <div>
          <h2 className="text-4xl font-extrabold text-secondary">
            What Our Users Say
          </h2>
          <p className="text-secondary/80 mt-4 max-w-2xl mx-auto">
            DashForge empowers teams with secure dashboards. See why our users love it!
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center gap-4 hover:shadow-2xl transition-shadow"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <p className="text-secondary/80 italic">{testimonial.quote}</p>
              <h3 className="font-semibold text-lg text-secondary">{testimonial.name}</h3>
              <p className="text-secondary/80 text-sm">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Optional Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
          {[
            "https://i.ibb.co.com/RpqSdtQv/Screenshot-2026-01-22-173017.png",
            "https://i.ibb.co.com/RpqSdtQv/Screenshot-2026-01-22-173017.png",
            "https://i.ibb.co.com/RpqSdtQv/Screenshot-2026-01-22-173017.png",
            "https://i.ibb.co.com/RpqSdtQv/Screenshot-2026-01-22-173017.png",
          ].map((logo, idx) => (
            <Image key={idx} width={200} height={200} src={logo} alt={`Company ${idx + 1}`} className="h-12 grayscale hover:grayscale-0 transition-all"/>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
