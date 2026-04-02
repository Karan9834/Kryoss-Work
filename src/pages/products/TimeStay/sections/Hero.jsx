import React from "react";
import { Play, ArrowRight, Clock, Calendar, Users, Star } from "lucide-react";

const TimeStayHero = () => {
  const liveDemoUrl ="https://preview.codecanyon.net/item/timestay-multivendor-hourly-hotel-booking-laravel-website-saas/full_screen_preview/56212618";

  const handleLiveDemo = () => {
    window.open(liveDemoUrl, "_blank");
  };

  return (
    <section className="relative w-full h-[85vh] md:h-[80vh] lg:h-[75vh] overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-3xl"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/40 rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-teal-400/30 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-green-400/30 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-emerald-300/30 rounded-full animate-float animation-delay-1500"></div>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
          
          {/* LEFT CONTENT */}
          <div className="text-white space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-4 py-2">
              <Clock size={16} className="text-emerald-400" />
              <span className="text-sm font-medium text-emerald-200">Smart Time Management</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight">
              Smart Time &
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
                Stay Management
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg">
              Streamline your time tracking and stay management with our intelligent platform. 
              Perfect for hotels, co-working spaces, and hospitality businesses.
            </p>
            
            {/* Features List */}
            <div className="flex flex-wrap gap-4 pt-3">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-emerald-400" />
                <span className="text-gray-300 text-sm">Smart Scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-emerald-400" />
                <span className="text-gray-300 text-sm">Guest Management</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-emerald-400" />
                <span className="text-gray-300 text-sm">Premium Support</span>
              </div>
            </div>
            
            {/* Live Demo Button */}
            <div className="pt-3">
              <button
                onClick={handleLiveDemo}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <Play size={16} className="fill-white" />
                Live Demo
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
          
          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-2xl"></div>
            
            {/* Image Container */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/40 to-teal-500/40 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-2 border border-emerald-500/30 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury Hotel Suite"
                  className="w-full max-w-md rounded-lg shadow-xl transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-2 rounded-lg bg-gradient-to-tr from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-5 -left-5 bg-slate-800/90 backdrop-blur-md rounded-xl p-3 shadow-xl border border-emerald-500/30 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Clock size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-emerald-300">Avg. Response Time</p>
                  <p className="text-base font-bold text-white">&lt; 2 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
      
      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        @keyframes grid {
          0% { transform: translateY(0); }
          100% { transform: translateY(20px); }
        }
        .animate-grid {
          animation: grid 20s linear infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-12px) translateX(6px); opacity: 0.6; }
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

export default TimeStayHero;