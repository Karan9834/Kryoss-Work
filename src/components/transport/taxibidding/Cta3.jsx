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
          px-12
          py-16
          relative
          overflow-hidden
          flex
          items-center
          justify-between
          gap-10
        "
      >

        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl">

          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
            Don’t Wait Start Your Journey to Success Now!
          </h2>

          <p className="text-white/80 mb-8 leading-relaxed">
            Take charge of your business with our feature-rich inDriver clone app.
            Launch quickly, scale effortlessly, and achieve success today!
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
            Contact Us
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden md:block">

          <img
            src={ctaImage}
            alt="CTA Visual"
            className="
              h-[380px]
              object-contain
            "
          />

        </div>

      </div>

    </section>
  );
};

export default CtaSection;