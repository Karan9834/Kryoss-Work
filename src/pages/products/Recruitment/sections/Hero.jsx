import React from "react";
import { ArrowRight } from "lucide-react";

const ATSHero = () => {
  const handleViewDemo = () => {
    window.open("https://preview.codecanyon.net/item/agenthr-aipowered-recruitment-hr-saas-for-screening-interviews-hiring/full_screen_preview/62191612", "_blank");
  };

  return (
    <section className="relative bg-[#0A0A0F] text-white py-28 px-6 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* ===== LEFT CONTENT ===== */}
        <div>

          {/* Tag */}
          <span className="inline-block text-sm border border-white/10 px-4 py-1.5 rounded-full text-gray-400 mb-6">
            Recruitment ATS Platform
          </span>

          {/* Heading - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Hire Smarter with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              AI-Powered ATS
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-400 text-lg max-w-lg">
            Streamline your hiring process, track candidates efficiently,
            and make data-driven recruitment decisions with our advanced ATS platform.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <button 
              onClick={handleViewDemo}
              className="group bg-gradient-to-r from-blue-500 to-indigo-600 px-10 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-500/20"
            >
              🚀 View Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>

        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
            alt="ATS Dashboard"
            className="w-full max-w-lg rounded-2xl object-cover shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default ATSHero;