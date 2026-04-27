import React from "react";
import hero from "@/assets/Appointment/hero1.jpg";
const AppointmentHero = () => {
  return (
    <section className="relative text-white min-h-[90vh] flex items-center bg-gradient-to-r from-[#0b0f3b] via-[#121a5a] to-[#1e2a78] overflow-hidden pt-20 pb-10 lg:py-0">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 w-full z-10">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* App label */}
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 flex items-center justify-center 
                  rounded-xl font-bold text-lg text-white
                  bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600
                  shadow-[0_0_15px_rgba(56,189,248,0.8)]
                  border border-white/20 backdrop-blur-md shrink-0"
            >
              V
            </div>

            <span className="text-lg font-semibold text-white tracking-wide">
              On-Demand Doctor Booking Platform
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            Smart Doctor Appointment App –{" "}
            <span className="text-cyan-400 block mt-2">
              Redefining Patient Care
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Enhance medical service accessibility through a sophisticated doctor scheduling system. Patients effortlessly reserve visits, while physicians coordinate their timetables flawlessly using a robust mobile application for both iOS and Android.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="https://preview.codecanyon.net/item/docrib-doctor-appointment-system/full_screen_preview/31305957"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-3.5 rounded-full font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all inline-flex items-center gap-2"
            >
              Live Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center relative mt-10 md:mt-0">
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[80px] -z-10"></div>

          <img
            src={hero}
            alt="Doctor appointment app"
            className="w-full max-w-md lg:max-w-lg rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AppointmentHero;
