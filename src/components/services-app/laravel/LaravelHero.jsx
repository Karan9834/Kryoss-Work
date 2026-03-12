import React from "react";
import heroImg from "../../../assets/services-laravel-img/laravelhero.webp";

const LaravelHero = () => {
  return (
    <section className="bg-gradient-to-r from-[#3a0000] via-[#5c0a02] to-[#7a1406] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            <h1 className="text-3xl md:text-4xl lg:text-[46px] font-semibold leading-tight mb-6">
              White Label Laravel Development Company
              <br />
              <span className="text-orange-400">
                for Agencies & B2B Partners
              </span>
            </h1>

            <p className="text-white/90 text-[16px] md:text-[17px] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Scale your agency without hiring in-house Laravel developers.
              We are your silent white label Laravel development partner —
              delivering secure, scalable, and pixel-perfect Laravel
              solutions under your brand name. You sell it. We build it.
              Your clients never know we exist.
            </p>

            {/* CTA */}
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ffb347] to-[#ff7a18] px-7 py-3 rounded-full font-semibold text-[16px] hover:scale-105 transition">
              Start Your Project
              <span className="text-lg">→</span>
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">

            <div className="w-[320px] sm:w-[420px] md:w-[480px] lg:w-[560px]">
              <img
                src={heroImg}
                alt="Laravel Development"
                className="w-full h-auto object-contain"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LaravelHero;