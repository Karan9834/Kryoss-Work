import React from "react";
import { ArrowRight } from "lucide-react";
import businessHero from "../../assets/Busiuness-directory/hero.png";

const BusinessHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0B1D3A] via-[#102A56] to-[#1E3A8A] text-white py-24 px-6 overflow-hidden">

      {/* Subtle Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* ===== LEFT CONTENT ===== */}
        <div>
          {/* Badge */}
          <span className="inline-block text-sm bg-white/10 px-4 py-1.5 rounded-full border border-white/20 mb-6">
            Business Directory
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Discover Top{" "}
            <span className="text-blue-400">Businesses</span>{" "}
            Around You
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg text-gray-300 max-w-lg">
            Explore verified businesses, compare services, and connect with the best options near you.
          </p>

          {/* ===== CTA BUTTONS ===== */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            {/* Primary CTA */}
            <button className="group bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition flex items-center gap-2">
              🚀 Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>


          </div>
        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="relative flex justify-center">
          <img
            src={businessHero}
            alt="Business directory"
            className="w-full max-w-lg object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default BusinessHero;