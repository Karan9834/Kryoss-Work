import React from "react";
import { ArrowRight } from "lucide-react";

const DerivCTA = () => {
  return (
    <section className="py-24 bg-[#0A0B14] relative overflow-hidden">
      {/* Dynamic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-12">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight">
          Unleash the Power of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Institutional Leverage</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-semibold">
          Don't settle for basic trading. Build a derivatives empire with the world's most stable and performant exchange engine.
        </p>

        <div className="flex justify-center pt-8">
          <a
            href="https://preview.codecanyon.net/item/tradexpro-demo-trading-crypto-exchange-addon/full_screen_preview/46940765"
            target="_blank"
            rel="noopener noreferrer"
            className="px-14 py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black rounded-3xl shadow-[0_20px_50px_rgba(147,51,234,0.3)] hover:scale-105 transition-all duration-500 flex items-center gap-4 group uppercase tracking-widest text-sm"
          >
            Try Live Demo
            <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DerivCTA;
