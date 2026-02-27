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
            inDriver Clone for Various Platforms
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 leading-snug">
            Unlock Your{" "}
            <span className="text-[#5aa114]">
              Business Potential
            </span>{" "}
            Across All Platforms with inDriver Clone Script
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">
            Our feature-rich inDriver Clone Script works seamlessly across
            mobile and web platforms.
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
              iOS & Android
            </h3>

            <p className="text-white/90 leading-relaxed max-w-md">
              We offer a ready-to-use inDriver like app that allows you to
              provide your services seamlessly across both iOS and Android
              platforms. Fully customizable, scalable, and optimized to help
              you scale effortlessly.
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
              Feature-Rich Web Solution
            </h3>

            <p className="text-white/90 leading-relaxed max-w-md">
              Deliver a smooth and efficient experience to users and service
              providers across web browsers. Packed with essential features,
              it enhances the overall user experience.
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