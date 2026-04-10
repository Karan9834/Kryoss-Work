import React from "react";
import { ArrowRight, TrendingUp, Shield, PieChart, Play, MessageCircle } from "lucide-react";

const WealthHero = () => {
  const handleLiveDemo = () => {
    window.open(
      "https://preview.codecanyon.net/item/taskhub-saas-project-management-tool-finance-crm-tool/full_screen_preview/31136032",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative bg-[#040608] px-6 md:px-16 py-20 md:py-24 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        {/* cyan glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d415_1px,transparent_1px),linear-gradient(to_bottom,#06b6d415_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-cyan-400/20 px-4 py-2 rounded-full">
            <PieChart className="text-cyan-400 w-4 h-4" />
            <span className="text-sm text-gray-300">
              Wealth Management Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Smart Wealth</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Management & Growth
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-xl">
            Manage, grow, and protect your wealth with intelligent insights, 
            real-time analytics, and data-driven investment strategies.
          </p>

          {/* Stats */}
          <div className="flex gap-8 pt-2">
            <div>
              <div className="text-2xl font-bold text-white">$25B+</div>
              <div className="text-sm text-gray-500">Assets Managed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">120K+</div>
              <div className="text-sm text-gray-500">Investors</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-sm text-gray-500">Satisfaction</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            {/* LIVE DEMO BUTTON */}
            <button 
              onClick={handleLiveDemo}
              className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-7 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg hover:shadow-cyan-500/30"
            >
              Live Demo
              <Play className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
            <a
              href="/company/contact"
              className="group flex items-center gap-2 bg-white/10 text-white border border-cyan-400/20 px-7 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Let's Discuss
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
          </div>

          {/* Trust */}
          <div className="flex gap-6 text-sm text-gray-500 pt-2">
            <span className="flex items-center gap-2">
              <Shield size={14} className="text-cyan-400" />
              Secure Investments
            </span>
            <span className="flex items-center gap-2">
              <TrendingUp size={14} className="text-cyan-400" />
              High Returns
            </span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80"
            alt="wealth dashboard"
            className="w-full h-[320px] md:h-[420px] object-cover rounded-2xl shadow-xl"
          />

          {/* floating card */}
          <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-md border border-cyan-400/20 rounded-xl p-4">
            <p className="text-xs text-gray-400">Portfolio Growth</p>
            <p className="text-lg font-bold text-cyan-400">+32.4%</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WealthHero;