// Hero Component
import React from "react";
import { ArrowRight, Globe, TrendingUp, Shield } from "lucide-react";

const Hero = () => {
  const handleLiveDemo = () => {
    window.open("http://preview.codecanyon.net/item/modern-news-ticker/full_screen_preview/2347950", "_blank");
  };

  return (
    <section className="relative bg-[#050505] px-6 md:px-16 py-16 md:py-20 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl"></div>

        {/* subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e15_1px,transparent_1px),linear-gradient(to_bottom,#22c55e15_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-green-500/20 px-3 py-1.5 rounded-full">
            <Globe className="text-green-400 w-4 h-4" />
            <span className="text-xs text-gray-300">
              Global Business Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-white">Powering</span>{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
              Global Growth
            </span>
          </h1>

          {/* Desc */}
          <p className="text-gray-400 text-base max-w-lg">
            Data-driven insights and scalable solutions to expand your business across global markets.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={handleLiveDemo}
              className="group flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2.5 rounded-lg font-medium hover:scale-105 transition"
            >
              Live Demo
              <ArrowRight className="group-hover:translate-x-1 transition" size={16} />
            </button>
          </div>

          {/* Small Stats */}
          <div className="flex gap-6 pt-2 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Shield size={14} className="text-green-400" />
              Secure
            </span>
            <span className="flex items-center gap-1">
              <TrendingUp size={14} className="text-green-400" />
              Scalable
            </span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
            alt="business"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;