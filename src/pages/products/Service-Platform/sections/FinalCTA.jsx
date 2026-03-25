import React from "react";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const handleLiveDemo = () => {
    window.open("https://preview.codecanyon.net/item/slotty-service-booking-plugin-for-wordpress/full_screen_preview/51223734", "_blank");
  };

  return (
    <section className="relative bg-[#0B0B0B] py-24 px-6 text-white overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 blur-3xl rounded-full"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Ready to Book Your Next{" "}
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Service?
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-gray-400 text-lg">
          Explore trusted professionals and experience seamless service booking today.
        </p>

        {/* CTA with Demo Link */}
        <div className="mt-10 flex justify-center">
          <button 
            onClick={handleLiveDemo}
            className="group bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-orange-500/20"
          >
            🚀 Live Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;