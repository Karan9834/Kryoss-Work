import React from "react";
import bg from "../../../../../assets/jobs/bg.png";

const Hero = () => {
  return (
    <section
      className="relative h-[70vh] flex items-center px-6 lg:px-16"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>

      <div className="relative w-full max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Find your{" "}
            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              dream job
            </span>{" "}
            faster & smarter
          </h1>

          <p className="mt-4 text-slate-300 text-base">
            Discover opportunities and connect with top companies.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 shadow-lg transition">
              Explore Jobs
            </button>
          </div>

          {/* Stats */}
          <div className="mt-6 flex gap-6 text-sm text-slate-300 flex-wrap">
            <span>✔ 10,000+ Jobs</span>
            <span>✔ 5,000+ Companies</span>
            <span>✔ 50K+ Candidates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;