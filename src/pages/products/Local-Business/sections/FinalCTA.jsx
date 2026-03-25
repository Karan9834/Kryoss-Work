import React from "react";
import { Rocket, Play, ArrowRight, Sparkles, CheckCircle, Zap, Building2, Star, Users } from "lucide-react";

const FinalCTASection = () => {
  const features = [
    "Instant business discovery",
    "Verified listings only",
    "Real customer reviews",
    "24/7 support",
  ];

  const handleLiveDemo = () => {
    window.open("https://demo.creativeitem.com/index.php?product=atlasimport", "_blank");
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white py-20 px-6 overflow-hidden">
      
      {/* ===== Background Elements ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 opacity-10 blur-3xl rounded-full"></div>
        </div>
      </div>

      {/* ===== Grid Pattern ===== */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* ===== White Waves at Top ===== */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="0.1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ===== MAIN CONTENT ===== */}
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">Ready to Get Started?</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Start Your Business{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Discovery Journey
            </span>{" "}
            Today
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Join thousands of businesses and customers already using our platform.
            Experience the future of business discovery.
          </p>

          {/* Stats Row */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-yellow-300" />
              <span className="text-sm">10,000+ Businesses</span>
            </div>
            <div className="w-px h-6 bg-white/30 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-yellow-300" />
              <span className="text-sm">50,000+ Users</span>
            </div>
            <div className="w-px h-6 bg-white/30 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              <span className="text-sm">4.9/5 Rating</span>
            </div>
          </div>

          {/* Feature List */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-200">{feature}</span>
              </div>
            ))}
          </div>

          {/* ===== CTA BUTTONS ===== */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {/* Live Demo Button with Link */}
            <button 
              onClick={handleLiveDemo}
              className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Live Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Trust Badge */}
          <div className="mt-8">
            <p className="text-xs text-gray-300">
              🚀 No credit card required • Free forever plan • Cancel anytime
            </p>
          </div>
        </div>
      </div>

      {/* ===== White Waves at Bottom ===== */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="0.1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default FinalCTASection;