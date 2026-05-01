import React from "react";
import { Smartphone, Monitor, Play } from "lucide-react";

import mobileImg from "../../../assets/mobile.webp";
import webImg from "../../../assets/desktop.webp";

const PlatformsSection = () => {
  return (
    <section className="w-full py-24 bg-[#f5f6f7] flex justify-center">
      <div className="w-full max-w-7xl px-6">

        {/* Top Pill */}
        <div className="flex justify-center mb-6">
          <span className="
            inline-flex items-center gap-2
            text-sm font-medium
            text-[#5aa114]
            border border-[#cfe6a5]
            bg-white/80 backdrop-blur-sm
            px-4 py-1.5
            rounded-full
          ">
            <span className="w-2 h-2 bg-[#5aa114] rounded-full"></span>
            Vyom Drive Cross-Platform Suite
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 leading-snug">
            Maximize your{" "}
            <span className="text-[#5aa114]">
              Market Presence
            </span>{" "}
            with our Multi-Platform inDrive Solution
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">
            Our sophisticated inDrive clone framework operates flawlessly 
            throughout mobile and web ecosystems.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <div
            className="relative rounded-[28px] px-10 pt-10 pb-0 text-white overflow-hidden flex flex-col"
            style={{
              background:
                "linear-gradient(143.07deg, #7AA300 2.88%, #3E5300 95.66%, #567300 99.53%)",
            }}
          >
            {/* Icons */}
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center">
                <Smartphone size={20} />
              </div>
              <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center">
                <Play size={18} />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Native iOS & Android Apps
            </h3>

            <p className="text-white/90 leading-relaxed max-w-md">
              We deliver a production-ready inDriver-style application that enables 
              you to deploy your services across the complete mobile spectrum. 
              Highly adaptable, extensible, and engineered to support rapid growth.
            </p>

            {/* IMAGE */}
            <div className="flex justify-center items-end mt-12 h-[320px]">
              <img
                src={mobileImg}
                alt="Mobile Platform"
                className="max-h-full object-contain"
              />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className="relative rounded-[28px] px-10 pt-10 pb-0 text-white overflow-hidden flex flex-col"
            style={{
              background:
                "linear-gradient(143.07deg, #7AA300 2.88%, #3E5300 95.66%, #567300 99.53%)",
            }}
          >
            {/* Icon */}
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center">
                <Monitor size={20} />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Advanced Web Dashboard
            </h3>

            <p className="text-white/90 leading-relaxed max-w-md">
              Coordinate a frictionless experience for both riders and vendors 
              within modern web browsers. Loaded with professional utilities, 
              it elevates the total user interaction model.
            </p>

            {/* IMAGE */}
            <div className="flex justify-center items-end mt-12 h-[320px]">
              <img
                src={webImg}
                alt="Web Platform"
                className="max-h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;