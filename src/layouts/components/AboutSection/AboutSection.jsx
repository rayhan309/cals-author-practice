"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* About Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
            About DashForge
          </h2>
          <p className="text-secondary/80 text-lg md:text-xl">
            DashForge is a modern SaaS platform built to manage dashboards, users, and permissions effortlessly. We focus on simplicity, security, and scalability.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div
            className="md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-secondary">Our Mission</h3>
            <p className="text-secondary/80 text-lg">
              To empower teams with role-based dashboards, secure access controls, and actionable insights so they can focus on building their business, not managing permissions.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://i.ibb.co.com/RpqSdtQv/Screenshot-2026-01-22-173017.png"  // Replace with your image
              alt="Our Mission"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          <motion.div
            className="md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-secondary">Our Vision</h3>
            <p className="text-secondary/80 text-lg">
              To be the go-to platform for businesses looking to implement secure, flexible, and professional dashboards with minimal setup and maximum control.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
               src="https://i.ibb.co.com/PsN6KLhr/Screenshot-2026-01-22-172813.png" // Replace with your image
              alt="Our Vision"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="space-y-10 text-center">
          <h3 className="text-3xl font-bold text-secondary">Meet the Team</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { name: "Rayhan", role: "Founder & CEO", image: "https://i.ibb.co.com/23dHPhpy/Screenshot-2025-10-28-080357.png" },
              { name: "Efat Hosain", role: "Product Manager", image: "https://i.ibb.co.com/QFM0dYnH/Screenshot-2026-01-06-130712.png" },
              { name: "Tanvir", role: "Lead Developer", image: "https://i.ibb.co.com/v6HGv7zY/Screenshot-2026-01-22-172540.pngjpg" },
            ].map((member, idx) => (
              <div key={idx} className="w-60 flex flex-col items-center space-y-3">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full shadow-lg"
                />
                <h4 className="font-bold text-lg text-secondary">{member.name}</h4>
                <p className="text-secondary/80 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
