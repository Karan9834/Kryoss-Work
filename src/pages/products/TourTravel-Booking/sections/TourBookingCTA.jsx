import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const TourBookingCTA = () => {
  return (
    <section className="py-24 bg-[#040D1A] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-10">
        <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
          Ready to Launch Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400">Travel Marketplace?</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Join the next generation of travel operators who trust our technology. Experience the platform in action today.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="https://preview.codecanyon.net/item/tour-master-tour-booking-travel-wordpress-plugin/full_screen_preview/20539780"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-black rounded-full shadow-2xl shadow-sky-500/20 hover:scale-105 hover:shadow-sky-500/40 transition-all duration-300 flex items-center gap-3 group"
          >
            Live Demo
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/company/contact"
            className="px-10 py-5 bg-white/10 text-white border border-white/20 font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
          >
            <MessageCircle size={20} />
            Let's Discuss
          </a>
        </div>
      </div>
    </section>
  );
};

export default TourBookingCTA;
