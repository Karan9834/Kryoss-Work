import React from "react";
import aboutImg from "../../../../../../assets/Casino games/Kasino online/2..jpg";

const KasinoAbout = () => {
  return (
    <section className="w-full py-20 md:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">

          {/* Soft green glow */}
          <div className="absolute w-[260px] h-[260px] bg-green-100 blur-[80px] rounded-full"></div>

          <img
            src={aboutImg}
            alt="Kasino Platform"
            className="relative w-full max-w-md rounded-lg shadow-lg"
          />

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Small label */}
          <p className="text-green-600 text-xs mb-3 tracking-wide">
            ● About Kasino
          </p>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 leading-tight">
            A Modern{" "}
            <span className="text-green-600">
              Casino Platform
            </span>{" "}
            Built for Scale
          </h2>

          {/* Description */}
          <p className="mt-5 text-gray-600 text-[15px] md:text-[16px] leading-relaxed">
            Kasino is a powerful iGaming platform designed to deliver seamless
            gameplay, secure transactions, and high-performance infrastructure.
            Built with scalability in mind, it supports real-time gaming
            experiences for thousands of active users.
          </p>

          <p className="mt-4 text-gray-600 text-[15px] md:text-[16px] leading-relaxed">
            From immersive slot games to live casino features, Kasino provides a
            complete ecosystem that combines entertainment with reliability,
            making it ideal for modern gaming businesses.
          </p>

          {/* Features list */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Real-time multiplayer gameplay
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Secure payment integrations
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Scalable & high-performance backend
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default KasinoAbout;