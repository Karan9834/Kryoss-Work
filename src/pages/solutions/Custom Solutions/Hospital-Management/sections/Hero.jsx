import React from "react";
import hero from "../../../../../assets/Hospital-Manage/hero.png";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden font-['Inter'] bg-[#f8fafc]">
      {/* 🔥 SVG BACKGROUND SHAPE */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1440 600"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 C300,100 600,300 900,180 C1200,80 1400,200 1440,250 L1440,0 L0,0 Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-block bg-white/80 backdrop-blur-md text-blue-700 px-4 py-1.5 rounded-full text-sm mb-5 border border-white/40 shadow-sm">
            Smart Healthcare Platform
          </div>

          {/* Heading */}
          <h1 className="text-gray-900 mb-6 text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">
            Modern Hospital <br />
            <span className="leading-[1.2] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">
              Management System
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-8 mx-auto lg:mx-0 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">
            Digitize your hospital operations with AI-powered workflows,
            real-time analytics, and seamless patient management.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition text-[16px] font-semibold tracking-[0.01em] normal-case">
              Explore Product
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center relative">
          {/* Glow effect */}
          <div className="absolute w-[300px] h-[300px] bg-blue-400/20 blur-3xl rounded-full"></div>

          {/* Glass Card */}
          <div className="relative bg-white/60 backdrop-blur-xl p-3 rounded-2xl shadow-2xl border border-white/40">
            <img
              src={hero}
              alt="Hospital Dashboard"
              className="w-full max-w-[500px] rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* 🔥 BOTTOM SMOOTH WAVE */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C300,120 900,0 1440,60 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
