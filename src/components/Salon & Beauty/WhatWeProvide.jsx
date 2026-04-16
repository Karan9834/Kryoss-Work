import React from "react";
import { Smartphone, Globe } from "lucide-react";
import { FaApple, FaAndroid } from "react-icons/fa";

const WhatWeProvide = () => {
  return (
    <section
      className="py-20 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(100.96deg, #3F2023 0.49%, #3A182E 25.37%, #2E1236 50.25%, #2E1236 75.12%, #3F2023 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm">
            <span className="w-2.5 h-2.5 bg-pink-500 rounded-full"></span>
            What We Provide
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
          Holistic Vyom Beauty{" "}
          <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">
            Architecture for Multi-Platform Deployment
          </span>
        </h2>

        {/* Description */}
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16">
          Modernize your conventional styling enterprise with our adaptable Vyom
          Beauty framework. Engineered for cross-platform utility, it facilitates
          professional on-demand aesthetic coordination.
        </p>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Platform Icons */}
            <div className="flex items-center gap-6 mb-6 text-white">

              <div className="flex items-center gap-2">
                <FaAndroid size={28} />
                <span>Android</span>
              </div>

              <div className="flex items-center gap-2">
                <FaApple size={28} />
                <span>iOS</span>
              </div>

              <div className="flex items-center gap-2">
                <Globe size={28} />
                <span>Web</span>
              </div>

            </div>

            {/* Platform Title */}
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">
              Android, iOS | Web Admin Panel
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-6">
              Our Uber for Beauty App is available on both iOS and Android,
              offering a scalable, customizable, and seamless experience.
            </p>

            {/* Features */}
            <ul className="space-y-3">
              {[
                "Participant Mobile Interfaces (iOS & Android)",
                "Specialist Practitioner Modules",
                "Centralized Governance Console",
                "Practitioner Management Portal",
                "Professional Digital Presence Site",
                "Integrated Fiscal Records System",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-pink-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mt-10 lg:absolute lg:right-0 lg:bottom-0 flex justify-center lg:justify-end">

            <img
              src="https://whitelabelfox.com/assets/images/uber-beauty-app/Fox-Beauty-what-we-provide-section-UI.webp"
              alt="Platform Solution"
              className="w-[320px] sm:w-[380px] md:w-[450px] lg:w-[620px] object-contain"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;