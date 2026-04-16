import React from "react";
import { ArrowRight, Zap, Shield, TrendingUp, Sparkles, CheckCircle } from "lucide-react";
import heroimg from "../../assets/IMS/hero.jpg";
const IMSHero = () => {
  const handleScroll = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-[90vh] w-full py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse delay-1000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-8 lg:pt-20 grid md:grid-cols-2 gap-14 items-center z-10">

        {/* LEFT CONTENT */}
        <div className="space-y-4">

          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex group">
            <div className="relative">
              <div className="relative inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[12px] font-medium tracking-[0.05em] uppercase bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  AI Powered Inventory System
                </span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
              </div>
            </div>
          </div>

          {/* H1 - Updated: text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] */}
          <h1 className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">
            <span className="text-white">Manage Inventory</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Smarter & Faster
            </span>
          </h1>

          {/* Description - Updated: text-[16px] md:text-[18px] font-normal leading-[1.6] */}
          <p className="text-gray-300 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-md">
            Real-time stock tracking, automation, and analytics — built to scale your business without complexity.
          </p>

          {/* CTA Buttons - Updated typography */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={handleScroll}
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-[14px] md:text-[15px] tracking-[0.01em]"
            >
              <span className="relative">Explore Products</span>
              <ArrowRight className="relative w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats Section - REMOVED */}
        </div>

        {/* RIGHT CONTENT - Dashboard Preview */}
        <div className="relative">
          {/* Main Dashboard Card */}
          <div className="relative group">
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl overflow-hidden">
              <div className="p-1">
                <img
                  src={heroimg}
                  alt="IMS Dashboard"
                  className="rounded-lg w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
};

export default IMSHero;