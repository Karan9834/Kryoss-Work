import React from "react";
import { ArrowRight } from "lucide-react";

const JobHero = () => {
  return (
    <section className="relative bg-[#0A0A0A] text-white py-28 px-6 overflow-hidden">

      {/* Subtle Green Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* ===== LEFT CONTENT ===== */}
        <div>

          {/* Tag */}
          <span className="inline-block text-sm border border-white/10 px-4 py-1.5 rounded-full text-gray-400 mb-6">
            Job Board Platform
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Find Your Next{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Dream Job
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-400 text-lg max-w-lg">
            Discover top opportunities, connect with leading companies,
            and take the next step in your career journey.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <button className="group bg-gradient-to-r from-green-500 to-emerald-600 px-10 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-green-500/20">
              🚀 Live Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>

        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
            alt="Job Board"
            className="w-full max-w-lg rounded-2xl object-cover shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default JobHero;