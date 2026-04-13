import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const HeroWriteFlow = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-32 text-white">
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-yellow-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-yellow-400/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* BADGE */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-sm mb-6">
            AI Writing Assistant
          </div>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Generate Content at{" "}
            <span className="text-yellow-400">Lightning Speed</span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-400 text-lg mt-6 max-w-xl leading-relaxed">
            WriteFlow AI helps you create emails, ads, product descriptions, and
            business content in seconds — powered by advanced AI.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="http://preview.codecanyon.net/item/chat-gpt-with-html-5-and-javascript/full_screen_preview/44832114"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition shadow-lg"
            >
              Live Demo
            </a>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
          </div>

          {/* MINI TEXT */}
          <p className="text-gray-500 text-sm mt-4">
            No signup required • Try instantly
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* 🔥 GLOW BEHIND IMAGE */}
          <div className="absolute -inset-12 bg-gradient-to-r from-yellow-400/20 via-yellow-500/20 to-yellow-400/20 blur-3xl rounded-3xl"></div>

          {/* IMAGE CARD */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400"
              alt="AI Writing Interface"
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* FLOATING BADGE */}
          <div className="absolute -top-6 right-6 bg-black border border-white/10 px-4 py-2 rounded-xl text-sm text-yellow-400 shadow-lg">
            ⚡ AI Generated
          </div>
        </div>
      </div>

      {/* ✨ BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroWriteFlow;
