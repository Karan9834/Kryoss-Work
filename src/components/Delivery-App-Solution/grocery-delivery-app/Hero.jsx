import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#f8fafc] overflow-hidden py-12 px-4 sm:px-10 lg:px-20">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#10B981]/5 rounded-bl-[100px] -z-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="max-w-[1400px] mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            {/* <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-lg
      bg-gradient-to-br from-emerald-400 to-[#10B981]
      shadow-[0_0_16px_rgba(16,185,129,0.8)]"
              >
                <span className="text-xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                  🛒
                </span>
              </div>
              <span className="text-lg font-semibold tracking-wide uppercase">
                <span
                  className="text-[#10B981] 
            drop-shadow-[0_0_6px_rgba(16,185,129,0.8)]"
                >
                  VYOM
                </span>

                <span className="text-gray-900 ml-1">GROCERY</span>
              </span>
            </div> */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-emerald-100">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-700 font-bold text-sm tracking-wide uppercase">
                On-Demand Solution
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Grocery Delivery App <br />
              <span className="text-[#10B981]">Development Solutions</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Empower your grocery business with our white-labeled, feature-rich
              on-demand delivery application. Scalable, secure, and ready to
              launch.
            </p>

            <ul className="space-y-4">
              {[
                "Customizable White-Label Solution",
                "Advanced Store & Inventory Management",
                "Real-time Tracking & Seamless Payments",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-700 font-medium"
                >
                  <CheckCircle2 className="text-[#10B981]" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://preview.codecanyon.net/item/dtbasket-instant-grocery-daily-essentials-delivery-flutter-app-with-admin-panel-android-ios/full_screen_preview/61247814"
                target="_blank"
                rel="noopener noreferrer"
              >

                <button className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl shadow-emerald-500/20">
                  Live Demo
                  <ArrowRight size={20} />
                </button>
              </a>
              {/* <button className="bg-white border-2 border-emerald-100 text-emerald-700 px-8 py-4 rounded-xl font-bold transition-all hover:bg-emerald-50">
                View Live Demo
              </button> */}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-right">
            <div className="absolute -inset-10 bg-gradient-to-tr from-[#10B981]/20 to-transparent rounded-full blur-[100px] -z-10"></div>
            <img
              src="https://whitelabelfox.com/assets/images/on-demand-grocery-delivery-app/hero-section-image.webp"
              alt="Grocery Delivery App Mockup"
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(16,185,129,0.2)] transform hover:rotate-1 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
