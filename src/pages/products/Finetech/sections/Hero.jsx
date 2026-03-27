import React from "react";
import { ArrowRight, TrendingUp, Shield, BarChart3, Play } from "lucide-react";

const Hero = () => {
  const handleLiveDemo = () => {
    window.open(
      "https://preview.codecanyon.net/item/ekattor-8-finance-addon-bundle/full_screen_preview/39847504",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleGetStarted = () => {
    // Add your own "Get Started" logic (e.g., navigate to signup)
    console.log("Get Started clicked");
  };

  return (
    <section className="relative bg-[#050505] px-6 md:px-16 py-20 md:py-24 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        {/* subtle yellow glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl"></div>

        {/* grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#eab30815_1px,transparent_1px),linear-gradient(to_bottom,#eab30815_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-yellow-500/20 px-4 py-2 rounded-full">
            <BarChart3 className="text-yellow-400 w-4 h-4" />
            <span className="text-sm text-gray-300">
              Fintech Analytics Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Smart Insights for</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Financial Growth
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-xl">
            Leverage real-time data, predictive analytics, and intelligent dashboards 
            to make smarter financial decisions and scale your business globally.
          </p>

          {/* Stats */}
          <div className="flex gap-8 pt-2">
            <div>
              <div className="text-2xl font-bold text-white">120+</div>
              <div className="text-sm text-gray-500">Markets</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">$10B+</div>
              <div className="text-sm text-gray-500">Transactions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-sm text-gray-500">Accuracy</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            
            {/* LIVE DEMO BUTTON - FIXED */}
            <button 
              onClick={handleLiveDemo}
              className="group flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-7 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg hover:shadow-yellow-500/30"
            >
              Live Demo
              <Play className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>

          </div>

          {/* Trust */}
          <div className="flex gap-6 text-sm text-gray-500 pt-2">
            <span className="flex items-center gap-2">
              <Shield size={14} className="text-yellow-400" />
              Secure Data
            </span>
            <span className="flex items-center gap-2">
              <TrendingUp size={14} className="text-yellow-400" />
              High Performance
            </span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative w-full">
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80"
              alt="financial analytics dashboard"
              className="w-full h-[320px] md:h-[420px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* floating card */}
          <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-md border border-yellow-500/20 rounded-xl p-4">
            <p className="text-xs text-gray-400">Growth Rate</p>
            <p className="text-lg font-bold text-yellow-400">+28.5%</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;