import React from "react";

const CarHero = () => {
  return (
    <section className="bg-gradient-to-br from-[#071c3a] via-[#0b2a57] to-[#071f40] text-white">
      <div className="grid md:grid-cols-2 items-center">
        {/* LEFT SIDE */}
        <div className="pl-5 md:pl-10 pr-5 md:pr-6 py-14 md:py-20">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-5">
            {/* Glowing Icon */}
            <div
              className="bg-gradient-to-br from-cyan-400 to-blue-500 
      p-3 rounded-lg flex items-center justify-center
      shadow-[0_0_18px_rgba(56,189,248,0.8)]"
            >
              <span className="text-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                🚗
              </span>
            </div>

            {/* Brand */}
            <span className="uppercase tracking-widest text-sm font-semibold">
              <span
                className="text-cyan-400 
            drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]"
              >
                VYOM
              </span>

              <span className="text-white ml-1">CARPOOL</span>
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold leading-[1.2] mb-5">
            <span className="text-cyan-400">
              Revolutionize Your Carpooling Business
            </span>
            <br />
            with Our Carpooling App Script
          </h1>

          {/* Paragraph */}
          <p className="text-gray-300 text-[15px] md:text-[17px] leading-relaxed mb-7 max-w-xl">
            Transform your carpooling business with our powerful carpooling
            clone script. Our fully customizable, on-demand ride-sharing
            solution ensures quick setup and seamless user experiences, helping
            you scale faster in today’s competitive market.
          </p>

          {/* Button */}
          <a
            href="https://preview.codecanyon.net/item/car-pooling-app-bike-pooling-app-ride-sharing-app-car-sharing-app-flutter-poolride/full_screen_preview/53381346"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 md:px-7 py-3 md:py-3.5 rounded-full text-white font-semibold text-sm md:text-base shadow-md hover:scale-105 transition duration-300 inline-block w-fit"
          >
            Live Demo →
          </a>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center md:justify-end items-center px-5 md:px-0">
          <img
            src="https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-hero-section-image.webp"
            alt=""
            className="w-full max-w-[420px] md:max-w-[660px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CarHero;
