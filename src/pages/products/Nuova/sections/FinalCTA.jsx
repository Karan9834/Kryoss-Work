import React from "react";
import { ArrowRight, Play, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  const handleLiveDemo = () => {
    window.open(
      "https://preview.codecanyon.net/item/nouvaexpress-magazine-and-news-portal-website-cms/full_screen_preview/35863919",
      "_blank"
    );
  };

  return (
    <section className="w-full py-24 px-6 md:px-16 bg-gradient-to-r from-orange-500 via-purple-500 to-teal-500 text-center relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-white/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Ready to Transform Your{" "}
          <span className="block">
            Business Experience?
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-white/90 text-lg">
          Experience the power of our platform with a live demo. See how it can
          streamline your workflow and elevate your business.
        </p>

        {/* Button */}
        <div className="mt-10">
          <button
            onClick={handleLiveDemo}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Play size={18} />
            Live Demo
            <ArrowRight className="group-hover:translate-x-1 transition" />
          </button>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;