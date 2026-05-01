import React from "react";
import pesthero from "../../assets/PestControl/pesthome.webp";

const PestHero = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg,#f5efe4 0%, #f1e2c7 50%, #ead7b8 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 min-h-[520px] grid lg:grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <div className="py-16">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-6">
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center
      bg-gradient-to-br from-yellow-400 to-orange-500
      shadow-[0_0_18px_rgba(251,146,60,0.85)]"
            >
              <span className="text-xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                🐞
              </span>
            </div>

            {/* Brand */}
            <h4 className="text-xl font-semibold tracking-wide uppercase">
              <span
                className="text-orange-500 
            drop-shadow-[0_0_8px_rgba(249,115,22,0.9)]"
              >
                VYOM
              </span>

              <span className="text-gray-700 ml-1">PEST</span>
            </h4>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-semibold leading-tight mb-6">
            <span className="text-orange-500">Uber for Pest Control App</span>
            <br />
            Development
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-xl mb-8 leading-relaxed">
            Launch your own on-demand pest control business with our
            ready-to-use app solution. Our customizable app covers everything
            from booking and provider management to secure payments and ratings,
            ensuring a seamless experience for both businesses and customers.
            Get started in just 5 days!
          </p>

          {/* Button */}
          <a
            href="https://preview.codecanyon.net/item/appointment-booking-software-for-cleaning-maintenance-businesses-cleanto/full_screen_preview/18397969"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition w-fit"
          >
            Live Demo
            <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center">
              →
            </span>
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="h-full flex items-end justify-end">
          <img
            src={pesthero}
            alt="pest control"
            className="h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PestHero;
