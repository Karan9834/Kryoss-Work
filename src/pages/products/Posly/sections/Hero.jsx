import React from "react";
import { ArrowRight, Play, Zap, Shield, TrendingUp, MessageCircle } from "lucide-react";
import hero from "../../../../assets/Posly/1.,,.jpg"
const HeroSection = () => {
  const productLink = "https://preview.codecanyon.net/item/posly-pos-with-inventory-management-system/full_screen_preview/46842690";

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Shiny Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] animate-shimmer"></div>
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-5">
              <Zap size={14} className="text-yellow-400" />
              <span className="text-xs text-white/90">AI-Powered Inventory Management</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Manage Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Inventory
              </span>
              <br />
              Like Never Before
            </h1>
            
            <p className="text-base text-gray-300 mb-6 leading-relaxed">
              POSly helps you track stock, manage orders, and boost sales with real-time insights. 
              The smartest way to run your business.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={productLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all text-sm group"
              >
                <Play size={16} className="fill-white" />
                Live Demo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </a>
              <a
                href="/company/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all text-sm group backdrop-blur-sm"
              >
                <MessageCircle size={16} />
                Let's Discuss
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-5 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <Shield size={14} className="text-green-400" />
                <span>Secure & Reliable</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp size={14} className="text-blue-400" />
                <span>Real-time Analytics</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          
          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl filter blur-2xl opacity-30"></div>
            
            {/* Image Card */}
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-white/20 p-3 shadow-2xl">
              <img 
                src={hero}
                alt="POSly Inventory Dashboard"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-8 text-gray-900" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,234.7C672,245,768,235,864,208C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L0,320Z"></path>
        </svg>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;