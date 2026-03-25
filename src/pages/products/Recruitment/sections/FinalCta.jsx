import React from "react";
import { ArrowRight } from "lucide-react";

const ATSFinalCTA = () => {
  const handleViewDemo = () => {
    window.open("https://preview.codecanyon.net/item/agenthr-aipowered-recruitment-hr-saas-for-screening-interviews-hiring/full_screen_preview/62191612", "_blank");
  };

  return (
    <section className="relative bg-[#0A0A0F] py-24 px-6 text-white text-center overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Ready to Transform Your{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Hiring Process?
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-gray-400 text-lg">
          Streamline recruitment, improve collaboration, and hire top talent faster with our ATS platform.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button 
            onClick={handleViewDemo}
            className="group bg-gradient-to-r from-blue-500 to-indigo-600 px-10 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-500/20"
          >
            🚀 View Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </div>

        {/* Optional Trust Line */}
        <p className="mt-6 text-gray-500 text-sm">
          Trusted by 500+ companies worldwide
        </p>

      </div>
    </section>
  );
};

export default ATSFinalCTA;