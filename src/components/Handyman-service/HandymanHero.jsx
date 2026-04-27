import React from "react";
import handymanhero from "../../assets/Handyman/Handymanhero.webp";

const HandymanHero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-[#1a1200] via-[#5a3e00] to-[#f59e0b] text-white px-6 md:px-16">
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center justify-between">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-8">
            {/* Icon */}
            <div
              className="bg-gradient-to-br from-yellow-400 to-orange-500 
      text-black p-3 rounded-xl font-bold text-lg
      flex items-center justify-center
      shadow-[0_0_18px_rgba(250,204,21,0.8)]"
            >
              <span className="drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                🛠
              </span>
            </div>

            {/* Brand */}
            <h2 className="text-2xl font-semibold tracking-wide uppercase">
              <span
                className="text-yellow-400 
            drop-shadow-[0_0_8px_rgba(250,204,21,0.9)]"
              >
                VYOM
              </span>

              <span className="text-white ml-1">HANDYMAN</span>
            </h2>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Handyman App <br />
            <span className="text-yellow-300">Like Uber</span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-lg leading-relaxed mb-8">
            Operating a handyman business involves many challenges. Our handyman
            app like Uber helps you overcome these hurdles by connecting you
            with local customers, managing bookings, and ensuring smooth
            payments.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://preview.codecanyon.net/item/flutter-handy-service-ondemand-home-services-shopping-androidioswebsite-full-solution-laravel/full_screen_preview/39700102",
                "_blank",
              )
            }
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-base shadow-md hover:scale-105 transition duration-300"
          >
            Live Demo →
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex justify-end items-end h-full">
          <img
            src={handymanhero}
            alt="Handyman App"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HandymanHero;
