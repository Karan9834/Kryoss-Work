import React from "react";
import p1 from "../../assets/DogWalking/Platform1.webp";
import p2 from "../../assets/DogWalking/platform2.webp";

const PlatformSection = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-[#032e1c] to-[#011f14] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-green-400 rounded-full px-4 py-1 text-sm text-green-300 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          What We Deliver
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-6 leading-snug">
          Expand Your Dog Walking Business Across Platforms with{" "}
          <span className="text-green-400">Fox-Dog Walking</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 mb-16">
          Our solution enables you to offer dog walking services seamlessly
          across iOS, Android, and web platforms. Reach more clients and grow
          your business with ease through an optimized, scalable system.
        </p>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT CARD */}
          <div className="bg-white/5 backdrop-blur-lg border border-green-800 rounded-3xl p-10 text-left">
            <h3 className="text-xl font-semibold mb-4">iOS and Android</h3>

            <p className="text-gray-300 mb-6">
              Our ready-to-use on-demand dog walking app ensures flawless
              performance on both iOS and Android platforms. Fully customizable
              and scalable, the app allows you to deliver a superior experience
              while expanding your reach effortlessly.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="border border-green-500 text-green-300 px-4 py-1 rounded-full text-sm">
                Customer Android + iOS Application
              </span>

              <span className="border border-green-500 text-green-300 px-4 py-1 rounded-full text-sm">
                Provider Android + iOS Application
              </span>
            </div>

            {/* Image Placeholder */}
            <img
              src={p1}
              alt="Mobile App Screens"
              className="w-full max-w-[420px] mx-auto rounded-2xl shadow-xl"
            />
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white/5 backdrop-blur-lg border border-green-800 rounded-3xl p-10 text-left">
            <h3 className="text-xl font-semibold mb-4">Web-Based Solution</h3>

            <p className="text-gray-300 mb-6">
              Enhance accessibility and user convenience with our feature-rich
              web solution. Designed to provide a seamless experience for both
              dog owners and service providers, optimized for all major web
              browsers.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="border border-green-500 text-green-300 px-4 py-1 rounded-full text-sm">
                Super Admin Web Panel
              </span>

              <span className="border border-green-500 text-green-300 px-4 py-1 rounded-full text-sm">
                Provider Admin Web Panel
              </span>
            </div>

            {/* Image Placeholder */}
            <img
              src={p2}
              alt="Admin Dashboard"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
