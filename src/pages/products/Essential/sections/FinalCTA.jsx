import React from "react";
import { Play, ArrowRight, Rocket, Sparkles, Zap } from "lucide-react";

const FinalCTA = () => {
  const liveDemoUrl = "https://preview.codecanyon.net/item/wp-news-and-scrolling-widgets-pro-wordpress-news-plugin/full_screen_preview/19274189";

  const handleLiveDemo = () => {
    window.open(liveDemoUrl, "_blank");
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-600 py-20 lg:py-28">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-300/40 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-fuchsia-300/40 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-float animation-delay-1500"></div>
      </div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      
      {/* Rotating Ring */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full animate-spin-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full animate-spin-reverse"></div>

      <div className="relative max-w-5xl mx-auto text-center px-6 lg:px-8 z-10">
        
        {/* Icon with Glow */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8 relative">
          <Rocket size={36} className="text-white" />
          <div className="absolute inset-0 rounded-full bg-white/20 blur-xl animate-ping-slow"></div>
        </div>
        
        {/* Heading with Gradient */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to{" "}
          <span className="bg-gradient-to-r from-purple-200 via-fuchsia-200 to-white text-transparent bg-clip-text">
            Supercharge
          </span>{" "}
          Your Website?
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join 50,000+ happy customers already using Essential Plugins to power their WordPress sites.
        </p>
        
        {/* Live Demo Button */}
        <button
          onClick={handleLiveDemo}
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Play size={18} className="fill-purple-600" />
            Live Demo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-fuchsia-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </button>
        
        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Zap size={14} className="text-yellow-300" />
            <span>No credit card required</span>
          </div>
          <div className="w-px h-4 bg-white/30 hidden sm:block"></div>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Sparkles size={14} className="text-purple-300" />
            <span>14-day free trial</span>
          </div>
          <div className="w-px h-4 bg-white/30 hidden sm:block"></div>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <ArrowRight size={14} className="text-fuchsia-300" />
            <span>Cancel anytime</span>
          </div>
        </div>
        
        {/* Bottom Text */}
        <p className="mt-8 text-white/60 text-xs">
          Trusted by developers and agencies worldwide
        </p>
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
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        @keyframes ping-slow {
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        @keyframes spin-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
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