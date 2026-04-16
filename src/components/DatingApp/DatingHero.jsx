import React from "react";
import { ArrowRight } from "lucide-react";
import DatingHero from "../../assets/Datingkit/hero.jpg";

const DatingAppHero = () => {
  return (
    <section className=" min-h-[90vh] bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-24 grid md:grid-cols-2 items-center gap-8">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            {/* Icon */}
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center
      bg-gradient-to-br from-pink-500 to-purple-500
      shadow-[0_0_12px_rgba(236,72,153,0.8)]"
            >
              <span className="drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                ❤️
              </span>
            </div>

            {/* Brand */}
            <span className="text-base font-semibold uppercase tracking-wide">
              <span className="text-pink-400 drop-shadow-[0_0_6px_rgba(236,72,153,0.8)]">
                VYOM
              </span>

              <span className="text-white ml-1">MATCH</span>
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Build Your <span className="text-pink-400">Dating Platform</span>
            <br />
            Connect People Instantly
          </h1>

          <p className="text-gray-300 text-sm md:text-base mb-6 max-w-lg">
            Launch your own dating platform with modern matchmaking features,
            secure chat, and smart connections. Designed to help startups build
            engaging communities online.
          </p>

          <a
            href="https://preview.codecanyon.net/item/dating-kit-react-native-dating-mobile-app-template/full_screen_preview/44700446"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 px-5 py-3 rounded-full text-sm font-semibold transition w-fit"
          >
            Live Demo
            <ArrowRight size={16} />
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end items-end">
          <img
            src={DatingHero}
            alt="Dating App"
            className="w-full max-w-[600px] rounded-3xl shadow-4xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DatingAppHero;
