import React from "react";
import { Apple, Smartphone, Globe } from "lucide-react";
import AppPreview from "../../assets/DatingApp/platform.webp";

const DatingAppPlatforms = () => {
  return (
    <section className="bg-gradient-to-r from-[#2a0845] via-[#3a0d5c] to-[#1a0433] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-14 grid md:grid-cols-2 gap-10 items-end">

        {/* LEFT CONTENT */}
        <div className="max-w-xl pb-8">

          {/* LABEL */}
          <span className="inline-block border border-white/30 px-4 py-1 rounded-full text-sm mb-4">
            What we provide
          </span>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            Launch Your Dating App on{" "}
            <span className="text-pink-400">Android & iOS</span> with Ease
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-sm md:text-base mb-6">
            Build your dating platform with cross-platform mobile apps and a
            powerful web admin panel. Manage everything seamlessly while
            delivering a smooth user experience across devices.
          </p>

          {/* PLATFORM ICONS */}
          <div className="flex gap-4 mb-6">

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur">
              <Smartphone size={20} />
            </div>

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur">
              <Apple size={20} />
            </div>

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur">
              <Globe size={20} />
            </div>

          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 text-sm">

            <span className="px-4 py-2 rounded-full bg-white/10">
              Android App
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10">
              iOS Application
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10">
              Web Admin Panel
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10">
              Landing Website
            </span>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end items-end">
          <img
            src={AppPreview}
            alt="platform preview"
            className="w-full max-w-[520px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default DatingAppPlatforms;