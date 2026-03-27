// src/pages/products/Apex-ERP/section/FinalCTA.jsx
import React from "react";
import prod5 from "../../../../assets/Products/prod5.png"
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  Shield, 
  TrendingUp,
  Crown,
  Star,
  CheckCircle
} from "lucide-react";

const FinalCTA = () => {
  const handleLiveDemo = () => {
    window.open(
      "https://preview.codecanyon.net/item/erp-os-best-erp-software-for-store-inventory-and-invoice-management/full_screen_preview/39644625",
      "_blank"
    );
  };

  const handleGetStarted = () => {
    console.log("Get Started clicked");
    // Add your signup/navigation logic here
  };

  return (
    <section className="relative bg-gradient-to-br from-sky-950 via-sky-900 to-blue-950 px-6 md:px-12 py-16 md:py-20 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e910_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e910_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-sky-400/30 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 opacity-10">
          <Crown className="w-24 h-24 text-amber-400" strokeWidth={1} />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <TrendingUp className="w-28 h-28 text-emerald-400" strokeWidth={1} />
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-sky-500/30 shadow-lg mb-6">
          <Crown className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-medium text-gray-300">Enterprise-Grade ERP Solution</span>
          <Sparkles className="w-3 h-3 text-emerald-400" />
        </div>
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
          Ready to Transform Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
            Financial Operations?
          </span>
        </h2>
        
        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Join 500+ enterprises already using Apex ERP to streamline their financial management, 
          gain real-time insights, and scale their business globally.
        </p>
        
        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-gray-400">No Credit Card Required</span>
          </div>
          <div className="w-px h-4 bg-sky-500/30"></div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-gray-400">14-Day Free Trial</span>
          </div>
          <div className="w-px h-4 bg-sky-500/30"></div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-400">Cancel Anytime</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4"> 
          {/* Secondary Button - Live Demo */}
          <button 
            onClick={handleLiveDemo}
            className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-sky-500/30 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-sky-500/50 transition-all duration-300"
          >
            <Play className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300" />
            <span>Live Demo</span>
          </button>
        </div>
        
        {/* Trust Text */}
        <p className="text-xs text-gray-500 mt-6">
          Trusted by 500+ enterprises • 99.99% uptime SLA • 24/7 dedicated support
        </p>
        
        {/* Client Logos Placeholder */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 opacity-60">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Trusted by industry leaders</span>
          <div className="flex gap-6">
            <div className="text-gray-500 text-sm">🏦 Global Bank</div>
            <div className="text-gray-500 text-sm">📊 FinTech Corp</div>
            <div className="text-gray-500 text-sm">💰 Wealth Mgmt</div>
            <div className="text-gray-500 text-sm">📈 Investment Group</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;