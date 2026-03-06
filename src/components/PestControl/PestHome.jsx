import React from "react";
import pesthero from "../../assets/PestControl/pesthome.webp";

const PestHero = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg,#f5efe4 0%, #f1e2c7 50%, #ead7b8 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 min-h-[520px] grid lg:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <div className="py-16">

          {/* Logo */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
              🐞
            </div>

            <h4 className="text-xl font-semibold tracking-wide text-gray-700">
              FOX-PESTCONTROL
            </h4>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-semibold leading-tight mb-6">

            <span className="text-orange-500">
              Uber for Pest Control App
            </span>

            <br />

            Development

          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-xl mb-8 leading-relaxed">
            Launch your own on-demand pest control business with our ready-to-use
            app solution. Our customizable app covers everything from booking and
            provider management to secure payments and ratings, ensuring a seamless
            experience for both businesses and customers. Get started in just 5 days!
          </p>

          {/* Button */}
          <button className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
            Request Demo
            <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center">
              →
            </span>
          </button>

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