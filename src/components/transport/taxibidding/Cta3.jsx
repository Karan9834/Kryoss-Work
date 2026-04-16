import React from "react";
import ctaImage from "../../../assets/cta3.webp";

const CtaSection = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-20 flex justify-center">

      <div
        className="
          w-full
          max-w-6xl
          bg-gradient-to-r
          from-[#0F0A3C]
          to-[#120C4D]
          rounded-[40px]
          px-8 md:px-12
          py-12 md:py-16
          relative
          overflow-hidden
          flex
          flex-col md:flex-row
          items-center
          justify-between
          gap-10
        "
      >

        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl text-center md:text-left">

          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
            Scale Your Enterprise with our <span className="text-[#6dbb1a]">inDrive-Inspired Ecosystem</span>
          </h2>

          <p className="text-white/80 mb-8 leading-relaxed">
            Take the definitive step towards establishing a market-leading mobility 
            venture with our production-ready inDrive replica. Facilitate seamless 
            coordination between users and partners, implement autonomous fare 
            setting, and maintain absolute operational authority.
          </p>

          <button
            className="
              border
              border-white
              text-white
              px-6
              py-3
              rounded-full
              hover:bg-white
              hover:text-[#120C4D]
              transition-all
              duration-300
            "
          >
            Get a Professional Quote
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          <img
            src={ctaImage}
            alt="CTA Visual"
            className="h-[220px] md:h-[380px] object-contain"
          />

        </div>

      </div>

    </section>
  );
};

export default CtaSection;