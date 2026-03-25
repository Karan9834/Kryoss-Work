import React from "react";
import { ArrowRight } from "lucide-react";

const AgencyManagementCTA = () => {
  return (
    <section className="py-24 bg-[#1A1404] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-10">
        <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
          Ready to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">Automate Your Agency?</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Stop struggling with manual updates. Switch to our automated agency and focus on what you do best: growing your business.
        </p>

        <div className="flex justify-center pt-4">
          <a
            href="https://preview.codecanyon.net/item/wootour-woocommerce-travel-tour-and-appointment-booking/full_screen_preview/19404740"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black rounded-full shadow-2xl shadow-amber-500/20 hover:scale-105 hover:shadow-amber-500/40 transition-all duration-300 flex items-center gap-3 group"
          >
            Try Live Demo
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AgencyManagementCTA;
