// FinalCTA Component
import React from "react";
import { ArrowRight, Play, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  const handleLiveDemo = () => {
    window.open("https://preview.codecanyon.net/item/elespare-pro-advanced-news-magazine-blog-addons-for-elementor/full_screen_preview/32950672", "_blank");
  };

  const handleGetStarted = () => {
    // Add your get started logic here
    console.log("Get Started clicked");
  };

  return (
    <section className="relative bg-[#050505] px-6 md:px-16 py-20 md:py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Ready to Scale Your{" "}
          <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
            Global Business?
          </span>
        </h2>

        {/* DESC */}
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of businesses leveraging our platform to grow faster,
          smarter, and globally.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap gap-4">

          {/* SECONDARY BUTTON - Live Demo */}
          <button
            onClick={handleLiveDemo}
            className="group flex items-center justify-center gap-2 border border-green-500/30 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-green-500/50 transition duration-300 flex-wrap gap-4"
          >
            <Play className="text-green-400 group-hover:text-green-300" size={18} />
            Live Demo
          </button>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>

        </div>

        {/* TRUST TEXT */}
        <p className="text-xs text-gray-500 mt-6">
          No credit card required • Free trial • Instant setup
        </p>

      </div>
    </section>
  );
};

export default FinalCTA;