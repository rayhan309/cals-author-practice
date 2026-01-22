"use client";

import React from "react";
import { FaShieldAlt, FaUsers, FaTachometerAlt, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    title: "Role-Based Access",
    description:
      "Manage users effortlessly with flexible roles and permissions. Admins control, users see only what they should.",
    icon: <FaShieldAlt className="text-blue-600 w-8 h-8" />,
  },
  {
    title: "Real-Time Dashboards",
    description:
      "Stay up-to-date with live data and interactive analytics for better decision-making.",
    icon: <FaTachometerAlt className="text-green-500 w-8 h-8" />,
  },
  {
    title: "Team Collaboration",
    description:
      "Invite team members, assign roles, and collaborate seamlessly within your workspace.",
    icon: <FaUsers className="text-purple-600 w-8 h-8" />,
  },
  {
    title: "High Performance",
    description:
      "Fast, reliable, and optimized for all devices. DashForge scales with your team.",
    icon: <FaBolt className="text-yellow-500 w-8 h-8" />,
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

const Features = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center space-y-12">
        {/* Section Title */}
        <div>
          <span className="text-4xl font-extrabold text-secondary">Key Features & Benefits</span>
          <p className="text-secondary/80 mt-4 max-w-2xl mx-auto">
            DashForge empowers your team with secure, efficient, and easy-to-use dashboards. Explore the powerful features that make workflow smooth and scalable.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center gap-4 cursor-pointer"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <div className="p-4 bg-gray-100 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-secondary">{feature.title}</h3>
              <p className="text-secondary/80 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
