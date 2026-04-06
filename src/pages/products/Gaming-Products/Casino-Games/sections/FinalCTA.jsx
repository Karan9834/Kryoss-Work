import React from "react";
import { Play, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const handleLiveDemo = () => {
    window.open(
      "https://preview.codecanyon.net/item/stake-online-casino-gaming-platform-single-page-application/full_screen_preview/25370124",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#0B0B0B] overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-10">

        {/* Heading */}
        <h2 className="text-[30px] md:text-[42px] font-bold text-white leading-tight">
          Ready to Launch Your{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
            Casino Platform?
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-gray-400 text-[16px] max-w-2xl mx-auto">
          Build, scale, and dominate the iGaming industry with Stake1 — 
          a complete solution for modern casino businesses.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">

          {/* Live Demo Button */}
          <button
            onClick={handleLiveDemo}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-[16px] font-semibold rounded-lg shadow-lg hover:scale-105 transition"
          >
            <Play size={18} />
            Live Demo
          </button>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;