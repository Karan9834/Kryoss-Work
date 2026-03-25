import React from "react";
import { ArrowRight } from "lucide-react";

const ServiceHero = () => {
  const handleLiveDemo = () => {
    window.open("https://preview.codecanyon.net/item/slotty-service-booking-plugin-for-wordpress/full_screen_preview/51223734", "_blank");
  };

  return (
    <section className="relative bg-[#0B0B0B] text-white py-28 px-6 overflow-hidden">

      {/* Subtle Orange Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* ===== LEFT CONTENT ===== */}
        <div>

          {/* Tag */}
          <span className="inline-block text-sm border border-white/10 px-4 py-1.5 rounded-full text-gray-400 mb-6">
            Service Booking Platform
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Book Trusted{" "}
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Services
            </span>{" "}
            Instantly
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-400 text-lg max-w-lg">
            Connect with verified professionals for home services, repairs, and more.
            Seamless booking experience with trusted experts.
          </p>

          {/* ===== SINGLE CTA with Demo Link ===== */}
          <div className="mt-10">
            <button 
              onClick={handleLiveDemo}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-orange-500/20"
            >
              🚀 Live Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>

        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
            alt="Service Booking"
            className="w-full max-w-lg rounded-2xl object-cover shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default ServiceHero;