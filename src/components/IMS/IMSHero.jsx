import React from "react";
import { ArrowRight, Zap, Shield, TrendingUp, Sparkles, CheckCircle } from "lucide-react";

const IMSHero = () => {
  const handleScroll = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center z-10">
        
        {/* LEFT CONTENT */}
        <div className="space-y-4">
          
          {/* Badge */}
          <div className="inline-flex group">
            <div className="relative">
              <div className="relative inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  AI Powered Inventory System
                </span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-white">Manage Inventory</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Smarter & Faster
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base max-w-md">
            Real-time stock tracking, automation, and analytics — built to scale your business without complexity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={handleScroll}
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative text-sm">Explore Products</span>
              <ArrowRight className="relative w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300">
              <span className="text-sm">Watch Demo</span>
              <svg className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-green-400" />
              <span className="text-xs text-gray-400">Trusted by 100+ businesses</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-xs text-gray-400">Real-time sync</span>
            </div>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs text-gray-400">AI insights</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 pt-2">
            <div>
              <div className="text-xl font-bold text-white">99.9%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div>
              <div className="text-xl font-bold text-white">&lt;100ms</div>
              <div className="text-xs text-gray-400">Response</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div>
              <div className="text-xl font-bold text-white">24/7</div>
              <div className="text-xs text-gray-400">Support</div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT - Dashboard Preview */}
        <div className="relative">
          {/* Main Dashboard Card */}
          <div className="relative group">
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl overflow-hidden">
              <div className="p-1">
                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
                  alt="IMS Dashboard"
                  className="rounded-lg w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating Cards - Smaller */}
            <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-2 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">Stock Status</p>
                  <p className="text-xs font-bold text-gray-900">Synced ✓</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-2 animate-float-delayed">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 text-purple-600" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">AI Analytics</p>
                  <p className="text-xs font-bold text-gray-900">+45%</p>
                </div>
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