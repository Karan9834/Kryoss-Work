import React from "react";
import { ArrowRight } from "lucide-react";
import DatingHero from "../../assets/DatingApp/DatingHero.webp";

const DatingAppHero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 pt-14 grid md:grid-cols-2 items-center gap-8">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 bg-pink-500 rounded-lg flex items-center justify-center">
              ❤️
            </div>
            <span className="text-base font-semibold">MatchFlow</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Build Your <span className="text-pink-400">Dating Platform</span>
            <br />
            Connect People Instantly
          </h1>

          <p className="text-gray-300 text-sm md:text-base mb-6 max-w-lg">
            Launch your own dating platform with modern matchmaking features,
            secure chat, and smart connections. Designed to help startups
            build engaging communities online.
          </p>

          <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 px-5 py-3 rounded-full text-sm font-semibold transition">
            Let's Discuss
            <ArrowRight size={16} />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end items-end">
          <img
            src={DatingHero}
            alt="Dating App"
            className="w-full max-w-[620px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default DatingAppHero;