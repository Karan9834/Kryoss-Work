import React from "react";
import { ArrowRight, Play } from "lucide-react";

const FinalCTA = () => {
  const handleLiveDemo = () => {
    window.open(
      "https://preview.codecanyon.net/item/ekattor-8-finance-addon-bundle/full_screen_preview/39847504",
      "_blank"
    );
  };

  const handleGetStarted = () => {
    // Add your own "Get Started" logic (e.g., navigate to signup)
    console.log("Get Started clicked");
  };

  return (
    <section className="relative bg-[#050505] px-6 md:px-16 py-20 md:py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Ready to Unlock{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
            Financial Intelligence?
          </span>
        </h2>

        {/* DESC */}
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Start leveraging real-time analytics, powerful dashboards, and smarter insights 
          to scale your financial operations.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* SECONDARY BUTTON - Live Demo */}
          <button 
            onClick={handleLiveDemo}
            className="group flex items-center justify-center gap-2 border border-yellow-500/30 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition duration-300"
          >
            <Play className="text-yellow-400 group-hover:text-yellow-300" />
            Live Demo
          </button>

        </div>

        {/* TRUST TEXT */}
        <p className="text-xs text-gray-500 mt-6">
          No credit card required • Free trial • Instant access
        </p>

      </div>
    </section>
  );
};

export default FinalCTA;