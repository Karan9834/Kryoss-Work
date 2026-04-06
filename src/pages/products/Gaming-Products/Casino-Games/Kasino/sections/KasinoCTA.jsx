import React from "react";
import { Play } from "lucide-react";

const KasinoCTA = () => {
  const handleLiveDemo = () => {
    window.open(
      "https://preview.codecanyon.net/item/kasino-online-casino-platform/full_screen_preview/32936869",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative w-full py-20 md:py-24 bg-black overflow-hidden">

      {/* Green Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-10">

        {/* Heading */}
        <h2 className="text-[28px] md:text-[36px] font-bold text-white leading-tight">
          Ready to Launch Your{" "}
          <span className="text-green-400">
            Casino Platform?
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-5 text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Build, scale, and grow your casino business with Kasino — 
          a powerful platform designed for performance and reliability.
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLiveDemo}
            className="flex items-center gap-2 px-7 py-3 bg-green-500 text-black text-[15px] font-semibold rounded-md hover:bg-green-400 transition shadow-lg shadow-green-500/20 hover:shadow-green-400/40"
          >
            <Play size={18} />
            Live Demo
          </button>
        </div>

      </div>
    </section>
  );
};

export default KasinoCTA;