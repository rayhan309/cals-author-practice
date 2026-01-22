"use client";

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-20">

        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">About DashForge</h1>
          <p className="text-gray-700 text-lg md:text-xl">
            DashForge is a modern SaaS platform built to manage dashboards, users, and permissions effortlessly. We focus on simplicity, security, and scalability.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              To empower teams with role-based dashboards, secure access controls, and actionable insights so they can focus on building their business, not managing permissions.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="https://i.ibb.co.com/RpqSdtQv/Screenshot-2026-01-22-173017.png" // Replace with your image
              alt="Our Mission"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-20">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-semibold">Our Vision</h2>
            <p className="text-gray-700 text-lg">
              To be the go-to platform for businesses looking to implement secure, flexible, and professional dashboards with minimal setup and maximum control.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="https://i.ibb.co.com/PsN6KLhr/Screenshot-2026-01-22-172813.png" // Replace with your image
              alt="Our Vision"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-10 text-center">
          <h2 className="text-3xl font-semibold">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { name: "Rayhan", role: "Founder & CEO", image: "https://i.ibb.co.com/23dHPhpy/Screenshot-2025-10-28-080357.png" },
              { name: "Tanvir", role: "Product Manager", image: "https://i.ibb.co.com/QFM0dYnH/Screenshot-2026-01-06-130712.png" },
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
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
