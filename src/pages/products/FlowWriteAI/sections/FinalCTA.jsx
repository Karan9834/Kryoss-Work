import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-28 bg-[#0A0A0A] text-white overflow-hidden text-center">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-yellow-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-yellow-400/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-4xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Start Creating Content with{" "}
          <span className="text-yellow-400">WriteFlow AI</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-400 mt-6 text-lg">
          Experience the power of AI writing. Generate high-quality content in seconds.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-10">
          <a
            href="http://preview.codecanyon.net/item/chat-gpt-with-html-5-and-javascript/full_screen_preview/44832114"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition shadow-lg"
          >
            Live Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </a>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
        </div>

        {/* TRUST TEXT */}
        <p className="text-gray-500 text-sm mt-4">
          No signup required • Try instantly
        </p>

      </div>

      {/* ✨ TOP FADE (smooth transition from previous section) */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-black"></div>

    </section>
  );
};

export default FinalCTA;