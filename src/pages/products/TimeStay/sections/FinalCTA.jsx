import React from "react";
import { Play, ArrowRight, Rocket, Sparkles } from "lucide-react";

const FinalCTA = () => {
  // Updated with TimeStay demo link
  const liveDemoUrl = "https://preview.codecanyon.net/item/timestay-multivendor-hourly-hotel-booking-laravel-website-saas/full_screen_preview/56212618";

  const handleLiveDemo = () => {
    window.open(liveDemoUrl, "_blank");
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 py-20 lg:py-28">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-white/40 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-float animation-delay-1500"></div>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto text-center px-6 lg:px-8 z-10">
        
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
          <Rocket size={36} className="text-white" />
        </div>
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Transform Your Hospitality Business?
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Experience the power of TimeStay — the ultimate multivendor hourly hotel booking platform. See it in action today.
        </p>
        
        {/* Live Demo Button */}
        <button
          onClick={handleLiveDemo}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
        >
          <Play size={18} className="fill-teal-600" />
          Live Demo
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        
        {/* Trust Badge */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-white/70 text-sm">
          <span>✓ No credit card required</span>
          <span>✓ 14-day free trial</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>
      
      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-12px) translateX(6px); opacity: 0.6; }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
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

export default FinalCTA;