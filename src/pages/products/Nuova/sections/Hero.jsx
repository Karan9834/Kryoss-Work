import React from "react";
import { Play, ArrowRight, Sparkles, MessageCircle } from "lucide-react";

const NuovaNewsHero = () => {
  const liveDemoUrl =
    "https://preview.codecanyon.net/item/nouvaexpress-magazine-and-news-portal-website-cms/full_screen_preview/35863919";

  const handleLiveDemo = () => {
    window.open(liveDemoUrl, "_blank");
  };

  return (
    <section className="relative w-full h-[85vh] md:h-[80vh] lg:h-[75vh] overflow-hidden bg-black">

      {/* ✅ KEEP YOUR ORIGINAL BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/30 to-blue-900/20"></div>

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,0,0,0.1)' stroke-width='1'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* TEXT OVERLAY */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[20vw] font-black text-white/5 select-none whitespace-nowrap">
          NUOVA
        </h1>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* LEFT */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-black/50 border border-red-500 rounded-full px-4 py-2 animate-pulse">
              <Sparkles size={16} className="text-red-500" />
              <span className="text-sm font-bold text-red-400">
                [ SYSTEM READY ]
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="text-white">BREAK</span>
              <span className="block bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                THE NEWS
              </span>
              <span className="text-white">MATRIX</span>
            </h1>

            <p className="text-gray-400 max-w-lg leading-relaxed">
  Our next-generation news management platform is designed to transform how you create, manage, and distribute content. Powered by AI-driven insights and automation, it streamlines workflows, enhances efficiency, and gives you the edge needed to dominate the modern media landscape.
</p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleLiveDemo}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white font-bold rounded-full hover:scale-105 transition"
              >
                <Play size={18} />
                LIVE DEMO
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </button>
              <a
                href="/company/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-white font-bold rounded-full hover:scale-105 transition backdrop-blur-sm"
              >
                <MessageCircle size={18} />
                LET'S DISCUSS
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 blur-2xl opacity-50"></div>

            <img
              src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80"
              alt="News"
              className="relative w-full max-w-md rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuovaNewsHero;