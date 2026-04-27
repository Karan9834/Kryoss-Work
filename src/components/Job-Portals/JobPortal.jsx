import React from "react";
import { Briefcase, ArrowRight } from "lucide-react";
import jobhero from "../../assets/Job-Portals/jobhero.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white pt-24 pb-32 px-6 overflow-hidden">

      {/* ===== Background Orbs ===== */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>

      {/* ===== White Waves ===== */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,208C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-20">

        {/* ===== LEFT CONTENT ===== */}
        <div>
          {/* Hero H1 - Mobile: 30px, Tablet/Desktop: 48px, Large Desktop: 60px, weight: 700, line-height: 1.2, letter-spacing: -0.02em */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
            Find Your{" "}
            <span className="text-yellow-300">
              Dream Job
            </span>{" "}
            Today 🚀
          </h1>

          {/* Hero Description - Mobile: 16px, Tablet/Desktop: 18px, weight: 400, line-height: 1.6 */}
          <p className="mt-6 text-[16px] md:text-[18px] font-normal leading-[1.6] text-gray-200 max-w-lg">
            Discover thousands of premium opportunities with world-class companies.
            Your next career move starts here.
          </p>

          {/* ===== CTA BUTTON - Button Text: 16px, weight: 600, letter-spacing: 0.01em ===== */}
          <div className="mt-10">
            <button
              aria-label="Explore job opportunities"
              className="group bg-yellow-400 text-black font-semibold px-10 py-4 rounded-2xl shadow-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 active:scale-95 text-[16px] tracking-[0.01em]"
              onClick={() => document.getElementById('explore-job')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center gap-2">
                🚀 Explore Product
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="relative">
          {/* Main Illustration */}
          <img
            src={jobhero}
            alt="Job illustration"
            loading="eager"
            className="min-w-[500px] min-h-[500px] relative z-10"
          />

          {/* Floating Cards - Updated Stats Typography */}
          {/* <div className="absolute top-8 -left-4 md:-left-8 bg-white/95 backdrop-blur-lg p-4 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 -right-4 md:-right-8 bg-white/95 backdrop-blur-lg p-4 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;