import React from "react";
import { ArrowRight, Sparkles, TrendingUp, Globe } from "lucide-react";

const NewsManagementHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white">
      
      {/* Animated Wave Background - Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative w-full h-auto min-h-[120px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(249,115,22,0.08)"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Animated Wave Background - Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <svg
          className="relative w-full h-auto min-h-[100px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(251,146,60,0.06)"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,138.7C672,128,768,128,864,138.7C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Gradient Orbs - Orange Theme */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731612_1px,transparent_1px),linear-gradient(to_bottom,#f9731612_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            {/* Enterprise Badge - Orange Theme */}
            <div className="inline-flex items-center gap-2 bg-orange-50/80 backdrop-blur-sm border border-orange-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <Sparkles size={16} className="text-orange-600" />
              <span className="text-sm font-semibold text-orange-700 tracking-wide">AI-Powered News Platform</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2] tracking-tight">
              Powering the Future of{" "}
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-transparent bg-clip-text relative">
                News Operations
                <svg className="absolute bottom-0 left-0 w-full h-3 -z-10" viewBox="0 0 200 10" preserveAspectRatio="none">
                  <path d="M0,5 Q25,0 50,5 T100,5 T150,5 T200,5" stroke="url(#gradient)" fill="none" strokeWidth="2" strokeDasharray="4 4"/>
                  <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#F97316"/><stop offset="100%" stopColor="#F59E0B"/></linearGradient></defs>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A unified platform to create, manage, and distribute news across global
              channels with AI-powered workflows and enterprise-grade scalability.
            </p>

            {/* Single CTA Button - Explore Products */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <button className="group px-10 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Explore Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE - Modern Dashboard Mockup */}
          <div className="relative flex justify-center items-center">
            {/* Animated Glow Ring - Orange Theme */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[480px] h-[480px] bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
            
            {/* Floating Elements Decoration - Orange Theme */}
            <div className="absolute -top-6 -right-6 z-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-3 border border-orange-200/50 animate-bounce-slow">
              <TrendingUp size={24} className="text-orange-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 z-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-3 border border-orange-200/50 animate-bounce-slow animation-delay-1000">
              <Globe size={24} className="text-amber-600" />
            </div>

            {/* Main Image Card */}
            <div className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-orange-200/30 bg-white/10 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="News Management Dashboard"
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
              />
              {/* Overlay Gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Floating Card Overlay - Orange Theme */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-orange-100/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">AI Content Score</p>
                      <p className="text-sm font-bold text-gray-900">Optimized for reach</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Real-time</p>
                    <p className="text-sm font-bold text-orange-600">Live Analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Wave Layer for Texture */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="rgba(249,115,22,0.03)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default NewsManagementHero;