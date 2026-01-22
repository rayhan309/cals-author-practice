"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic dashboard for small teams",
    features: [
      "Up to 3 users",
      "Basic dashboards",
      "Community support",
    ],
    gradient: "from-gray-300 to-gray-400",
  },
  {
    name: "Pro",
    price: "$29",
    description: "Advanced features for growing teams",
    features: [
      "Up to 20 users",
      "Role-based access",
      "Custom dashboards",
      "Priority support",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Enterprise",
    price: "Contact",
    description: "Full access & dedicated support",
    features: [
      "Unlimited users",
      "Custom roles & permissions",
      "Advanced analytics",
      "Dedicated account manager",
    ],
    gradient: "from-blue-500 to-green-500",
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

const Pricing = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-12">

        {/* Section Title */}
        <div>
          <h2 className="text-4xl font-extrabold text-secondary">
            Pricing Plans
          </h2>
          <p className="text-secondary/80 mt-4 max-w-2xl mx-auto">
            Choose a plan that suits your team. DashForge scales with your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`p-8 rounded-2xl shadow-lg flex flex-col items-center gap-6 cursor-pointer hover:shadow-2xl border border-gray-200`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {/* Plan Name */}
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                {plan.name}
              </h3>

              {/* Price */}
              <p className="text-4xl font-extrabold text-secondary">{plan.price}{plan.price !== "Contact" && "/mo"}</p>

              {/* Description */}
              <p className="text-gray-600 text-center">{plan.description}</p>

              {/* Features */}
              <ul className="text-secondary/80 space-y-2 mt-4 w-full text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-green-500 w-4 h-4" /> {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`mt-6 px-6 py-3 rounded-full cursor-pointer text-white font-semibold bg-gradient-to-r ${plan.gradient} hover:opacity-90 transition`}>
                {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
