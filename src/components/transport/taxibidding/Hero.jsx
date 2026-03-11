import React from "react";
import { ArrowRight } from "lucide-react";
import taxi from "../../../assets/taxibidding.webp";

const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden
                 pt-20 md:pt-24
                 pb-10 md:pb-0
                 px-4 md:px-6"
      style={{
        backgroundImage:
          "url('https://whitelabelfox.com/assets/images/indriver-clone-app/fox-drive-main-slider-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20"></div>

      <div
        className="relative z-10 w-full max-w-6xl mx-auto 
                      flex flex-col md:flex-row 
                      items-center justify-between gap-10"
      >
        {/* LEFT SIDE */}
        <div
          className="text-white 
                        text-center md:text-left
                        w-full md:w-1/2"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <div className="bg-lime-500 p-3 rounded-xl shadow-[0_0_15px_rgba(132,204,22,0.7)]">
              <span className="text-xl">🚗</span>
            </div>

            <h4 className="text-lg md:text-xl font-semibold tracking-wide">
              <span className="text-lime-400 drop-shadow-[0_0_8px_rgba(132,204,22,0.8)]">
                VYOM
              </span>{" "}
              <span className="text-white">DRIVE</span>
            </h4>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-5">
            <span className="text-lime-400">inDriver</span> Clone
          </h1>

          <p
            className="text-gray-300 text-base md:text-lg 
                        leading-relaxed 
                        max-w-md md:max-w-xl 
                        mx-auto md:mx-0 mb-7"
          >
            A ready-to-use inDriver Clone provides you with complete control
            over your business operations. It connects passengers and drivers
            efficiently.
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              className="bg-lime-500 hover:bg-lime-600 
                               transition-all duration-300 
                               text-black font-semibold 
                               px-6 md:px-8 py-3 md:py-4 
                               rounded-full flex items-center gap-3 group"
            >
              Request Demo
              <ArrowRight
                className="group-hover:translate-x-1 transition"
                size={18}
              />
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="w-full md:w-1/2 
                        flex justify-center 
                        mt-8 md:mt-0"
        >
          <img
            src={taxi}
            alt="Taxi Bidding App"
            className="w-[85%] md:w-[95%] 
                       max-w-[380px] md:max-w-[650px] 
                       object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
