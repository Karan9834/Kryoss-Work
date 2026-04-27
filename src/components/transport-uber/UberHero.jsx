import React from "react";
import { ArrowRight } from "lucide-react";
import uberhero from "../../assets/Global taxi booking app/1.jpg";
const UberHero = () => {
  return (
    <section
      id="hero-section"
      className="w-full min-h-[90vh] bg-[rgb(245,245,245)] pt-[30px] pb-[30px]"
      style={{ fontFamily: "IBM Plex Sans, sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* LEFT CONTENT */}
          <div className="pr-0 lg:pr-16">
            <div className="flex items-center gap-4 mb-8">
              {/* Logo */}
              <div
                className="relative w-12 h-12 flex items-center justify-center rounded-xl 
                  bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600
                  text-white font-bold text-lg shadow-lg
                  hover:scale-105 transition duration-300"
              >
                <span className="z-10">V</span>

                {/* glow */}
                <span
                  className="absolute inset-0 rounded-xl blur-md opacity-60 
                     bg-gradient-to-br from-blue-400 to-purple-500"
                ></span>
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-gray-900 tracking-wide">
                  Vyom Taxi
                </span>

                <span className="text-sm text-gray-500">
                  Smart AI-Powered Ride Booking Platform
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#303030] mb-5">
              Launch an AI-Powered Uber Clone in Five Days
            </h1>

            {/* Description */}
            <p className="text-[#6b6b6b] text-[16px] leading-[26px] mb-6 max-w-[520px]">
              No long development cycles and technical uncertainty. We offer a
              white-label Uber clone solution that helps businesses like yours
              go live quickly with a complete ecosystem.
            </p>

            {/* Points */}
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 text-[15px] text-[#555]">
                <span>✔</span>
                <span>Full source code ownership - no vendor lock-in</span>
              </li>
              <li className="flex gap-3 text-[15px] text-[#555]">
                <span>✔</span>
                <span>
                  AI matching connects nearest drivers with riders quickly
                </span>
              </li>
              <li className="flex gap-3 text-[15px] text-[#555]">
                <span>✔</span>
                <span>
                  Real-time analytics for complete operational control
                </span>
              </li>
            </ul>

            {/* CTA */}
            <a
              href="https://preview.codecanyon.net/item/taxi-booking-app-a-complete-clone-of-uber-with-userdriver-bacend-cms-coded-with-native-ios/full_screen_preview/18558899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#2f2f2f] text-white px-7 py-3 rounded-full text-[15px] font-medium hover:bg-black transition"
            >
              Live Demo
              <span className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">
                →
              </span>
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative">
              {/* IMAGE PLACEHOLDER */}
              <div className="w-full h-full  rounded-xl">
                <img
                  src={uberhero}
                  alt="Uber Clone App"
                  className="w-full h-[400px] rounded-3xl shadow-xl object-cover"
                />
                {/* HERO IMAGE */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UberHero;
