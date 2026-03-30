import React from "react";
import { ArrowRight } from "lucide-react";

const WebinarCTA = () => {
  return (
    <section className="py-24 bg-[#0A0B14] relative overflow-hidden">
      {/* Dynamic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-600/10 rounded-full blur-[150px] animate-pulse"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-12">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight">
          Take Command of Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400">Global Virtual Events</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-semibold">
          Stop struggling with limited tools. Deliver broadcast-quality webinars to boundless audiences with perfect stability.
        </p>

        <div className="flex justify-center pt-8">
          <a
            href="https://preview.codecanyon.net/item/webinar-info-plugin-for-elementor/full_screen_preview/39949366"
            target="_blank"
            rel="noopener noreferrer"
            className="px-14 py-6 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-black rounded-3xl shadow-[0_20px_50px_rgba(14,165,233,0.3)] hover:scale-105 transition-all duration-500 flex items-center gap-4 group uppercase tracking-widest text-sm"
          >
            Try Live Demo
            <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WebinarCTA;
