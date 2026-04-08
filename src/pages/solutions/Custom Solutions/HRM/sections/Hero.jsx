import { Link } from 'react-router-dom';
import React from "react";
import heroBg from "../../../../../assets/human-resources/hero1.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-[70vh] px-6">

      {/* BACKGROUND IMAGE - FULL VISIBLE */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="HR Background"
          className="w-full h-full object-cover object-center"
        />

        {/* SUBTLE DARK OVERLAY - ONLY FOR TEXT READABILITY, IMAGE STILL VISIBLE */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

        {/* ORANGE MESH GRADIENT - PREMIUM TOUCH */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.08),transparent_50%)]"></div>
      </div>

      {/* ORANGE GLOW EFFECT - SUBTLE */}
      <div className="absolute top-[-120px] left-[30%] w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto h-full flex items-center">
        <div className="grid md:grid-cols-2 items-center gap-10 w-full">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Smart{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                HR Management
              </span>{" "}
              for Modern Teams
            </h1>

            <p className="mt-4 text-slate-200 text-base max-w-lg">
              Manage hiring, onboarding, payroll, and performance — all in one powerful SaaS platform designed for growing teams.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/company/contact" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                Get Started
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE (EMPTY - IMAGE FULLY VISIBLE ON RIGHT) */}
          <div></div>

        </div>
      </div>
    </section>
  );
};

export default Hero;