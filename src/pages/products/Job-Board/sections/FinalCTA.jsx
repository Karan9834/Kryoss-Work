import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const JobCTA = () => {
  const handleViewDemo = () => {
    window.open("https://preview.codecanyon.net/item/job-portal-platform-a-complete-job-portal-website/full_screen_preview/21916934", "_blank");
  };
  return (
    <section className="relative bg-[#0A0A0A] py-24 px-6 text-white text-center overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Ready to Find Your{" "}
          <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
            Dream Job?
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-gray-400">
          Explore thousands of opportunities and connect with top companies today.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={handleViewDemo}
            className="group bg-gradient-to-r from-green-500 to-emerald-600 px-10 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-green-500/20 text-white">
            Live Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
          <a
            href="/company/contact"
            className="group inline-flex items-center gap-2 px-10 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Let's Discuss
          </a>
        </div>

      </div>
    </section>
  );
};

export default JobCTA;