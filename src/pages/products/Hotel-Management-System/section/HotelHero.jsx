import React from "react";
import { MessageCircle } from "lucide-react";
import managehero from "../../../../assets/Hotel-Management/managehero.png"
const HotelHero = () => {
  const demoLink =
    "https://preview.codecanyon.net/item/xain-hotel-management-system-with-website/full_screen_preview/31264738";

  return (
    <section className="w-full bg-black py-20 md:py-28 relative overflow-hidden">

      {/* Soft Purple Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Safe Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-purple-300 text-sm font-medium">
                Hotel Management Platform
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                Hotel Management
              </span>
              <br />
              Solution
            </h1>

            {/* Description */}
            <p className="text-purple-200/80 text-lg md:text-xl leading-relaxed">
              All-in-one platform with integrated booking engine, property
              management, and analytics — designed for modern hospitality.
            </p>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
              >
                Live Demo
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a
                href="/company/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 text-white border border-white/20 font-semibold rounded-xl shadow-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <MessageCircle size={20} />
                Let's Discuss
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">

              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur-xl opacity-30"></div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                  alt="Hotel Dashboard"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-md rounded-xl p-3 border border-purple-500/30 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold">
                      All-in-One
                    </div>
                    <div className="text-purple-300 text-xs">
                      PMS + Booking
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelHero;