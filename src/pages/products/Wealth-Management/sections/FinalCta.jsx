import React from "react";
import { ArrowRight, Play } from "lucide-react";

const FinalCTA = () => {
  const handleLiveDemo = () => {
    window.open(
      "https://preview.codecanyon.net/item/taskhub-saas-project-management-tool-finance-crm-tool/full_screen_preview/31136032",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleGetStarted = () => {
    // Add your own "Get Started" logic
    console.log("Get Started clicked");
  };

  return (
    <section className="relative bg-[#040608] px-6 md:px-16 py-20 md:py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Ready to Elevate Your{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Wealth Strategy?
          </span>
        </h2>

        {/* DESC */}
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Unlock smarter investments, real-time analytics, and intelligent portfolio 
          management designed for long-term financial success.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* LIVE DEMO BUTTON */}
          <button 
            onClick={handleLiveDemo}
            className="group flex items-center justify-center gap-2 border border-cyan-400/30 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition duration-300"
          >
            <Play className="text-cyan-400 group-hover:text-cyan-300" />
            Live Demo
          </button>

        </div>

        {/* TRUST TEXT */}
        <p className="text-xs text-gray-500 mt-6">
          Secure platform • Real-time insights • Trusted by investors
        </p>

      </div>
    </section>
  );
};

export default FinalCTA;