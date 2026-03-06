import React from "react";
import LeftImage from "../../assets/DatingApp/cta2left.webp";
import RightImage from "../../assets/DatingApp/cta2right.webp";

const DatingCTA2 = () => {
  return (
    <section className="my-16 px-6">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[40px] bg-gradient-to-r from-[#ffd86b] via-[#ffb347] to-[#ff9a3c] py-14 px-8 text-center">

        {/* LEFT IMAGE */}
        <img
          src={LeftImage}
          alt="user"
          className="hidden md:block absolute left-0 bottom-0 w-[220px] lg:w-[260px]"
        />

        {/* RIGHT IMAGE */}
        <img
          src={RightImage}
          alt="user"
          className="hidden md:block absolute right-0 bottom-0 w-[220px] lg:w-[260px]"
        />

        {/* CONTENT */}
        <div className="relative max-w-2xl mx-auto">

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Launch Your <br />
            <span className="text-[#3b1a00]">Dating Platform?</span>
          </h2>

          <p className="text-white/90 text-sm md:text-base mb-6">
            Turn your dating app idea into reality with a scalable platform
            designed for modern matchmaking. Build meaningful connections
            and grow your community with ease.
          </p>

          <button className="bg-white text-[#d97706] font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition">
            Get Your Free Demo
          </button>

        </div>

      </div>
    </section>
  );
};

export default DatingCTA2;