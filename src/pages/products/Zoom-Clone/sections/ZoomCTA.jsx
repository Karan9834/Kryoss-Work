import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const ZoomCTA = () => {
  return (
    <section className="py-24 bg-[#0A0B14] relative overflow-hidden">
      {/* Dynamic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-12">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight">
          Unleash the Power of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-400">Enterprise Communication</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-semibold">
          Don't settle for basic meetings. Build a collaborative empire with our highly scalable and secure video engine.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <a
            href="https://preview.codecanyon.net/item/jupitermeet-pro-video-conference/full_screen_preview/37367339"
            target="_blank"
            rel="noopener noreferrer"
            className="px-14 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black rounded-3xl shadow-[0_20px_50px_rgba(147,51,234,0.3)] hover:scale-105 transition-all duration-500 flex items-center gap-4 group uppercase tracking-widest text-sm"
          >
            Try Live Demo
            <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
          </a>
          <a
            href="/company/contact"
            className="px-10 py-6 bg-white/10 text-white border border-white/20 font-semibold rounded-3xl hover:bg-white/20 transition-all duration-500 flex items-center gap-3 backdrop-blur-md"
          >
            <MessageCircle size={22} />
            Let's Discuss
          </a>
        </div>
      </div>
    </section>
  );
};

export default ZoomCTA;
