import React from "react";
import { ExternalLink, Play, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  const productLink = "https://preview.codecanyon.net/item/posly-pos-with-inventory-management-system/full_screen_preview/46842690";

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500 rounded-full filter blur-[100px] opacity-10 animate-pulse"></div>
      
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-500 rounded-full filter blur-[80px] opacity-10 animate-pulse delay-1000"></div>
      
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-500 rounded-full filter blur-[80px] opacity-10 animate-pulse delay-2000"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-semibold text-white/80">Ready to Get Started?</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Streamline Your
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {" "}Business Operations
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join 500+ businesses already using POSly to manage inventory, process sales, and grow efficiently.
        </p>

        {/* Single CTA Button - Live Demo */}
        <div className="flex flex-col items-center gap-4">
          <a
            href={productLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            <Play size={22} className="fill-white" />
            Live Demo
            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
          
          {/* Optional: Small trust text */}
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • Full access to all features
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;