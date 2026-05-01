import React from "react";
import ctaImage from "../../../assets/cta2.webp"; // 🔹 your big composed image

const DemoCTASection = () => {
  return (
    <section className="relative w-full bg-[#0b0f16] flex justify-center overflow-visible">
      <div className="w-full max-w-7xl px-6 py-20 relative">

        <div className="grid lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white z-10">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Discover why our{" "}
            <span className="text-[#9FE870]">Vyom Drive Architecture</span> is
            the Optimal Choice
          </h2>
            <p className="text-gray-300 max-w-md leading-relaxed mb-8">
              Gain a detailed perspective on our sophisticated mobility framework.
              Our specialists will lead you through our interactive demo
              environments and management portals to demonstrate how they
              catalyze enterprise growth.
            </p>

            <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Schedule Your Live Demo
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">

            <img
              src={ctaImage}
              alt="App Demo"
              className="
                relative
                lg:absolute
                lg:-top-20
                lg:right-0
                w-[500px]
                md:w-[600px]
                lg:w-[750px]
                object-contain
              "
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default DemoCTASection;