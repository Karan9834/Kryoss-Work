import React from "react";
import { Play } from "lucide-react";

import heroImg from "../../../../../assets/Games-Product/stakehero.webp";

const StakeHero = () => {
  const handleDemo = () => {
    window.open("https://preview.codecanyon.net/item/stake-online-casino-gaming-platform-single-page-application/full_screen_preview/25370124", "_blank");
  };

  return (
    <section className="relative w-full py-16 md:py-24 flex items-center bg-gradient-to-br from-[#0a0705] via-[#0f0b08] to-[#0a0705] overflow-hidden">
      {/* Casino-style background elements */}
      <div className="absolute inset-0">
        {/* Subtle card pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 20v25L30 55L5 45V20L30 5z' fill='none' stroke='%23fbbf24' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '48px 48px'
        }}></div>
        
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-500/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-600/5 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center z-10">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Badge - 0.75rem (12px) / weight 400 */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/30 text-amber-400 px-3 py-1.5 rounded-full mb-5 text-xs font-normal tracking-wider uppercase">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
            Live Casino • Real Money
          </div>

          {/* Heading - mobile: 1.875rem (30px), desktop: 3rem (48px) / weight 700 */}
          <h1 className="text-[1.875rem] md:text-5xl font-bold leading-tight">
            <span className="text-white">Premium</span>
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent"> iGaming</span>
            <span className="text-white"> Experience</span>
          </h1>

          {/* Description - 1rem (16px) / weight 400 */}
          <p className="mt-5 text-gray-400 text-base font-normal leading-relaxed max-w-md">
            Launch your own real-money casino platform with powerful features, seamless gameplay, secure payments, and lightning-fast performance.
          </p>

          {/* Single Button - 1rem (16px) / weight 600 */}
          <div className="mt-8">
            <button
              onClick={handleDemo}
              className="group relative flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold text-base rounded-md shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <Play size={16} className="relative z-10 fill-black" /> 
              <span className="relative z-10">Live Demo</span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* Casino-style glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-amber-500/5 to-transparent blur-2xl rounded-full"></div>
          
          {/* Decorative corner elements */}
          <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-amber-500/40 rounded-tl-lg"></div>
          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-amber-500/40 rounded-br-lg"></div>

          <img
            src={heroImg}
            alt="Casino Gaming Platform"
            className="relative w-full max-w-md rounded-lg shadow-2xl shadow-black/50 border border-amber-500/30 hover:scale-102 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default StakeHero;