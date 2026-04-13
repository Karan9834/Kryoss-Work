import React from "react";
import heroImg from "../../../../../assets/School-Manage/hero.png";

const SchoolHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white font-['Inter']">

      {/* 🔥 SVG BG (DESKTOP ONLY) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <svg
          viewBox="0 0 1440 600"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 C300,100 600,300 900,180 C1200,80 1400,200 1440,250 L1440,0 L0,0 Z"
            fill="url(#grad)"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 🔥 MOBILE BG */}
      <div className="absolute inset-0 z-0 md:hidden bg-gradient-to-br from-orange-50 to-cyan-50"></div>

      {/* 🔥 CONTENT (CENTERED + FIXED WIDTH) */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-6 md:gap-10">

        {/* 🔥 LEFT TEXT */}
        <div className="flex-1 max-w-[520px] text-center lg:text-left order-2 lg:order-1">

          {/* PILL */}
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-5 border border-orange-100 shadow-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-orange-500 to-cyan-500"></span>
            School Management System
          </div>

          {/* HEADING */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            Smart School <br className="hidden sm:block" />
            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">
              Management Solution
            </span>
          </h1>

          {/* TEXT */}
          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
            Simplify administration, enhance communication, and manage students,
            teachers, and operations seamlessly — all in one powerful platform.
          </p>

          {/* BUTTON */}
          <button className="bg-gradient-to-r from-orange-500 to-cyan-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition text-sm sm:text-base">
            Explore Product →
          </button>

        </div>

        {/* 🔥 RIGHT IMAGE */}
        <div className="flex-1 flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">

          {/* Glow */}
          <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] bg-orange-400/20 blur-2xl sm:blur-3xl rounded-full"></div>

          {/* Image Card */}
          <div className="relative bg-white/70 backdrop-blur-xl p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xl border border-white/40 max-w-[260px] sm:max-w-[360px] md:max-w-[480px]">
            <img
              src={heroImg}
              alt="School Dashboard"
              className="w-full h-auto rounded-lg sm:rounded-xl"
            />
          </div>

        </div>

      </div>

      {/* 🔥 BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[40px] sm:h-[60px] md:h-[80px] lg:h-[100px]"
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

export default SchoolHero;