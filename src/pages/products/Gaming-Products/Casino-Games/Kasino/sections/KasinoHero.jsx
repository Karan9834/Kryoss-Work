import React from "react";
import { Play, MessageCircle } from "lucide-react";
import heroImg from "../../../../../../assets/Games-Product/stakehero.webp";

const CasinoHero = () => {
  const handleLiveDemo = () => {
    window.open(
      "https://preview.codecanyon.net/item/kasino-online-casino-platform/full_screen_preview/32936869",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative w-full py-16 md:py-20 bg-black overflow-hidden">

      {/* 🟢 Subtle Green Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-80px] right-0 w-[400px] h-[400px] bg-green-400/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Grid Texture (very subtle) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center z-10">

        {/* LEFT */}
        <div>

          {/* Label */}
          <p className="text-green-400 text-xs mb-3 tracking-wide">
            ● Kasino Platform
          </p>

          {/* Heading */}
          <h1 className="text-[28px] md:text-[40px] font-bold text-white leading-tight">
            Build Your Own{" "}
            <span className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]">
              Casino Platform
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-400 text-sm md:text-base max-w-md">
            A modern casino solution with real-time gameplay, secure payments,
            and scalable infrastructure.
          </p>

          {/* CTA */}
          <button
            onClick={handleLiveDemo}
            className="mt-6 flex items-center gap-2 px-5 py-2.5 bg-green-500 text-black text-sm font-semibold rounded-md hover:bg-green-400 transition shadow-lg shadow-green-500/20"
          >
            <Play size={16} />
            Live Demo
          </button>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center flex-wrap gap-4">

          {/* Glow behind image */}
          <div className="absolute w-[250px] h-[250px] bg-green-500/20 blur-[100px] rounded-full"></div>

          <img
            src={heroImg}
            alt="Kasino Platform"
            className="relative w-full max-w-sm rounded-lg shadow-lg shadow-green-500/10"
          />

        </div>

      </div>
    </section>
  );
};

export default CasinoHero;