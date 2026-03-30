import React from "react";
import { Play, ArrowRight } from "lucide-react";

const HotelHero = () => {
  // The URL you want to open when clicking Live Demo
  const liveDemoUrl = "https://preview.codecanyon.net/item/mars-room-management-system/full_screen_preview/21646390";

  const handleLiveDemo = () => {
    // Open in a new tab
    window.open(liveDemoUrl, "_blank");
    
    // Alternative: if you want to open in the same tab
    // window.location.href = liveDemoUrl;
  };

  return (
    <section className="relative w-full h-[85vh] md:h-[80vh] lg:h-[75vh] overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      
      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white/40 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-blue-300/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-indigo-300/30 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-float animation-delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
          
          {/* LEFT CONTENT */}
          <div className="text-white space-y-5">
            {/* Premium Divider */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-white/40"></div>
              <span className="text-xs font-light tracking-[0.2em] text-white/80 uppercase">
                Hotel Management Platform
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight">
              Smart Hospitality
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                Management
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg">
              Elevate your hotel operations with intelligent booking systems, 
              personalized guest experiences, and seamless management tools 
              designed for modern hospitality.
            </p>
            
            {/* Single CTA Button - Live Demo with External Link */}
            <div className="pt-3">
              <button
                onClick={handleLiveDemo}
                className="group relative px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:bg-white/20 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                  <Play size={16} className="fill-white" />
                  Live Demo
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
          
          {/* RIGHT IMAGE - Glass Card */}
          <div className="relative flex justify-center items-center">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-2xl"></div>
            
            {/* Glass Image Container */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-blue-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-xl p-2 border border-white/20 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury Hotel Suite"
                  className="w-full max-w-md rounded-lg shadow-xl transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Glass Overlay */}
                <div className="absolute inset-2 rounded-lg bg-gradient-to-tr from-white/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
            
            {/* Floating Premium Icon */}
            <div className="absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-white/30 animate-float">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glass Effect */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-900/50 to-transparent pointer-events-none"></div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default HotelHero;