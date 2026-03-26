import React from "react";
import { ArrowRight } from "lucide-react";

const RetailCTA = () => {
  return (
    <section className="py-24 bg-[#0A0B14] relative overflow-hidden">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] opacity-20"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-12 ">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight">
          Ready to Scale Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-indigo-600 to-amber-600">Retail Empire?</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-semibold">
          Don't let legacy software hold you back. Join the world's most innovative retail brands and experience the power of a unified cloud POS.
        </p>

        <div className="flex justify-center pt-8">
          <a
            href="https://preview.codecanyon.net/item/point-of-sale-billing-and-stock-management-system/full_screen_preview/38661505"
            target="_blank"
            rel="noopener noreferrer"
            className="px-14 py-6 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-black rounded-[2rem] shadow-2xl shadow-indigo-500/20 hover:scale-105 transition-all duration-500 flex items-center gap-4 group uppercase tracking-widest text-sm"
          >
            Try Live Demo
            <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RetailCTA;
