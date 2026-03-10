import React from "react";
import { ArrowRight } from "lucide-react";
import DogHero from "../../assets/DogWalking/doghero.webp";

const DogWalkingHero = () => {
  return (
    <section className="w-full bg-gradient-to-r from-emerald-50 via-green-50 to-teal-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-end justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="max-w-xl py-24">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            {/* Icon */}
            <div
              className="p-2 rounded-lg flex items-center justify-center
      bg-gradient-to-br from-emerald-400 to-green-500
      shadow-[0_0_16px_rgba(16,185,129,0.8)]"
            >
              <span className="text-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                🐶
              </span>
            </div>

            {/* Brand */}
            <span className="text-lg font-semibold tracking-wide uppercase">
              <span
                className="text-emerald-600 
            drop-shadow-[0_0_6px_rgba(16,185,129,0.8)]"
              >
                VYOM
              </span>

              <span className="text-gray-800 ml-1">DOG</span>
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight mb-6">
            <span className="text-emerald-600">Dog Walking and Sitting</span>{" "}
            App Development
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-8">
            Launch a fully customized and white-label dog walking app designed
            to seamlessly connect dog owners with professional dog walkers.
            Packed with advanced features, our app ensures smooth and efficient
            service delivery.
          </p>

          {/* Button */}
          <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-7 py-3 rounded-full font-semibold transition">
            Let's Discuss
            <ArrowRight size={18} />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-end justify-end h-full">
          <img
            src={DogHero}
            alt="Dog walking app"
            className="w-[720px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DogWalkingHero;
