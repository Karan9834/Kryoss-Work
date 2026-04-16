import React from "react";
import { ArrowRight, Play, Shield, Clock, Truck, TrendingUp, MessageCircle } from "lucide-react";
import hero from "../../../../assets/Wholesale/1!.jpg"
const HeroSection = () => {
  const demoLink = "https://preview.codecanyon.net/item/wholesale-inventory-control-and-inventory-management-system/full_screen_preview/20291791";

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      
      {/* Simple Background Pattern - Fixed */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-white/90">Trusted by 500+ Wholesalers</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Streamline Your 
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {" "}Wholesale Food
              </span>
              <br />
              Supply Chain
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Powerful inventory control, order management, and logistics platform designed for 
              wholesale food distributors. Reduce waste, increase efficiency, and scale your business.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
              >
                <Play size={20} className="fill-white" />
                Live Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </a>
              <a
                href="/company/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-500 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={20} />
                Let's Discuss
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </a>
            </div>
            
            {/* Feature List */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-emerald-400" />
                <span>Real-time Logistics</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-emerald-400" />
                <span>Inventory Control</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-emerald-400" />
                <span>Order Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-emerald-400" />
                <span>Analytics Dashboard</span>
              </div>
            </div>
          </div>
          
          {/* RIGHT IMAGE */}
          <div className="relative mt-10 lg:mt-0">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl filter blur-3xl opacity-30"></div>
            
            {/* Image Card with Glassmorphism */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-3 shadow-2xl">
              <img 
                src={hero}
                alt="Wholesale Food Delivery Dashboard"
                className="rounded-xl w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-12 text-slate-900" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,234.7C672,245,768,235,864,208C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;