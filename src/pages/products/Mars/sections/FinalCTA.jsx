import React from "react";
import { Play, ArrowRight, MessageCircle } from "lucide-react";

const SimpleCTA = () => {
  const liveDemoUrl = "https://preview.codecanyon.net/item/mars-room-management-system/full_screen_preview/21646390";

  const handleLiveDemo = () => {
    window.open(liveDemoUrl, "_blank");
  };

  return (
    <section className="relative w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-16 md:py-20">
      
      {/* Simple Glass Overlay */}
      <div className="absolute inset-0 bg-white/5"></div>
      
      <div className="relative max-w-4xl mx-auto text-center px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        
        {/* Description */}
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Experience the future of news management. Try our platform today.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleLiveDemo}
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Play size={18} />
            Live Demo
            <ArrowRight size={16} />
          </button>
          <a
            href="/company/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300"
          >
            <MessageCircle size={18} />
            Let's Discuss
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default SimpleCTA;