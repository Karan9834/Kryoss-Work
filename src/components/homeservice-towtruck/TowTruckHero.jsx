import React from "react";
import Towtruckhero from "../../assets/homeservice-towtruck-img/Towhero.webp";
const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#021423] via-[#031b2e] to-[#021423] overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-0 flex flex-col lg:flex-row lg:items-end justify-between">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[50%] text-white pb-12 lg:pb-20 lg:pr-10">
          {/* Top Label */}
          <div className="flex items-center gap-3 mb-6">
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center
      bg-gradient-to-br from-blue-500 to-sky-400
      shadow-[0_0_18px_rgba(59,130,246,0.85)]"
            >
              <span className="text-xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                🚚
              </span>
            </div>

            {/* Brand */}
            <h3 className="text-lg tracking-wide font-semibold uppercase">
              <span
                className="text-blue-400 
            drop-shadow-[0_0_8px_rgba(96,165,250,0.9)]"
              >
                VYOM
              </span>

              <span className="text-white ml-1">TOW</span>
            </h3>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Uber for Tow Trucks:{" "}
            <span className="text-blue-400">Seamless Roadside Assistance</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 max-w-xl mb-8">
            Get a secure, white-label Uber for tow trucks app that connects
            customers with nearby tow truck drivers instantly. Our towing app
            like Uber ensures fast, reliable roadside assistance, powered by
            cutting-edge technology.
          </p>

          {/* CTA */}
          <a
            href="https://preview.themeforest.net/item/towy-emergency-auto-towing-and-roadside-assistance-service-wordpress-theme/full_screen_preview/19985673"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-lg font-medium transition w-fit"
          >
            Live Demo
            <span className="text-xl">→</span>
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          {/* IMAGE PLACEHOLDER */}
          <img
            src={Towtruckhero}
            alt="Tow Truck App"
            className="w-[420px] md:w-[480px] lg:w-[520px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
