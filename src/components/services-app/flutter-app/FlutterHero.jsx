import React from "react";
import flutterhero from "../../../assets/FlutterApp/flutterhero.webp";
const FlutterHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      
      {/* background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 opacity-20 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-20 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <span className="bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm">
            Cross-Platform App Development
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-6">
            Launch Powerful Mobile Apps
            <span className="text-blue-400"> Faster with Flutter</span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Our white-label Flutter development solutions help businesses build
            high-performance mobile applications using a single scalable
            codebase. Deliver faster releases, reduce development cost, and
            grow your digital product with confidence.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg font-semibold">
              Get Free Consultation
            </button>

            <button className="border border-gray-400 hover:border-white px-6 py-3 rounded-lg">
              View Solutions
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center">
          
          {/* background shape */}
          <div className="absolute w-[380px] h-[380px] bg-blue-500/20 rounded-full blur-3xl"></div>

          {/* IMAGE PLACEHOLDER */}
          <img
            src={flutterhero}
            alt="Flutter App Development"
            className="relative z-10 w-[380px] lg:w-[420px] object-contain"
          />

        </div>
      </div>
    </section>
  );
};

export default FlutterHero;