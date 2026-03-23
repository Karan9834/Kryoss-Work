import React from "react";
import { ArrowRight } from "lucide-react";

const StreamingCTA = () => {
  return (
    <section className="py-24 bg-[#0A0A0B] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-10">
        <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
          Ready to Scale Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">Video Platform?</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Join leading content providers who trust our infrastructure for world-class streaming. Start your journey today.
        </p>

        <div className="flex justify-center pt-4">
          <a
            href="https://preview.codecanyon.net/item/streamit-laravel-movie-tv-show-video-streaming-platform-with-laravel/full_screen_preview/54895738"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-gradient-to-r from-red-600 to-purple-600 text-white font-black rounded-full shadow-2xl shadow-red-500/20 hover:scale-105 hover:shadow-red-500/40 transition-all duration-300 flex items-center gap-3 group"
          >
            Try Live Demo
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="pt-10 flex items-center justify-center gap-12 grayscale opacity-40">
          {/* Placeholder for small partner logos if needed */}
        </div>
      </div>
    </section>
  );
};

export default StreamingCTA;
