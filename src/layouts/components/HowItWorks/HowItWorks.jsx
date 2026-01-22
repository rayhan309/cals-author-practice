"use client";

import React from "react";
import { FaUserPlus, FaUsers, FaTachometerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Sign Up & Create Account",
    description: "Quickly create your DashForge account and get started in seconds.",
    icon: <FaUserPlus className="w-10 h-10 text-purple-500" />,
  },
  {
    title: "Add Users & Assign Roles",
    description: "Manage your team efficiently by assigning roles and permissions.",
    icon: <FaUsers className="w-10 h-10 text-pink-500" />,
  },
  {
    title: "Access Dashboards Securely",
    description: "View and manage real-time dashboards according to your role.",
    icon: <FaTachometerAlt className="w-10 h-10 text-blue-500" />,
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

const HowItWorks = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 text-center space-y-12">

        {/* Section Title */}
        <div>
          <span className="text-4xl font-extrabold text-secondary">
            How It Works
          </span>
          <p className="mt-4 max-w-2xl mx-auto text-secondary/80">
            DashForge makes managing dashboards, users, and permissions simple and efficient. Follow these easy steps to get started.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-8 rounded-xl shadow-lg flex flex-col items-center gap-4 cursor-pointer hover:shadow-2xl transition-shadow"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="p-4 bg-white rounded-full shadow">{step.icon}</div>
              <h3 className="text-xl font-bold text-secondary">{step.title}</h3>
              <p className="text-secondary/80 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
