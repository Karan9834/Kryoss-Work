import { MessageCircle } from "lucide-react";
import React from "react";
import bookinghero from "../../../../assets/Hotel-Management/bookinghero.jpg"

const BookingHero = () => {
  return (
    <section className="w-full bg-black py-20 md:py-28 relative overflow-hidden">

      {/* Enhanced Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          {/* Enhanced Badge with Gradient */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 text-teal-300 text-sm border border-teal-500/20 backdrop-blur-sm">
            <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></span>
            Hotel Booking Platform
          </div>

          {/* Heading with Gradient Text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Simplify Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Hotel Booking
            </span>{" "}
            Experience
          </h1>

          {/* Subtext with Better Readability */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Deliver a seamless booking experience with real-time availability,
            fast reservations, and a system designed for modern hospitality.
          </p>

          {/* Enhanced CTA Button */}
          <div className="pt-4">
            <a
              href="https://preview.codecanyon.net/item/tourex-travel-agency-hotel-bookingsolution/full_screen_preview/58775119"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-teal-500/30 hover:scale-105 transform transition-all duration-300 flex-wrap gap-4"
            >
              Live Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
              <MessageCircle size={18} />
              Let's Discuss
            </a>
          </div>

          {/* Enhanced Feature Points */}
          <div className="flex flex-wrap gap-6 pt-6 text-gray-400 text-sm">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Instant Booking
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Real-Time Sync
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Mobile Ready
            </span>
          </div>

        </div>

        {/* RIGHT IMAGE with Glass Effect */}
        <div className="relative">
          {/* Image Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
            <img
              src={bookinghero}
              alt="Booking UI"
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingHero;