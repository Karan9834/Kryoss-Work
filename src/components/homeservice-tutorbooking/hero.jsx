import React from "react";
import tutorhero from "../../assets/homeservice-tutor-img/tutorhero.webp";
const Hero = () => {
  return (
    <section className="relative w-full bg-[radial-gradient(circle_at_top_left,#301a14,#1a0705)] overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-0 flex flex-col lg:flex-row lg:items-end justify-between">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[50%] text-white pb-12 lg:pb-20 lg:pr-10">
          {/* LOGO */}
          <div className="flex items-center gap-3 mb-6">
            {/* Icon */}
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl 
      bg-gradient-to-br from-yellow-400 to-orange-500
      shadow-[0_0_18px_rgba(251,191,36,0.85)]"
            >
              <span className="text-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                🎓
              </span>
            </div>

            {/* Brand */}
            <span className="text-[20px] font-bold tracking-wider uppercase lg:text-[22px]">
              <span
                className="text-yellow-400 
            drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]"
              >
                VYOM
              </span>

              <span className="text-white ml-1">TUTOR</span>
            </span>
          </div>

          {/* HEADING */}
          <h1 className="font-bold leading-tight mb-6">
            <span className="block text-[#f5b301] text-[32px] md:text-[40px]">
              Uber for Tutors
            </span>
            <span className="block text-white text-[38px] md:text-[46px]">
              App Development
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-[16px] leading-[28px] max-w-xl mb-10">
            Uber for tutoring app development solution for your education
            system. Simple and secure way to connect private tutors & students
            on one platform with our on-demand tutor app.
          </p>

          {/* CTA */}
          <a
            href="https://preview.codecanyon.net/item/bookingo-course-booking-system-for-wordpress/full_screen_preview/32368828"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-[#f5b301] text-black font-semibold px-7 py-3.5 rounded-full text-[16px] transition-all duration-300 hover:scale-105"
          >
            Live Demo
            <span className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center transition group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[48%] relative flex justify-end">
          <div className="relative">
            <div className="w-full h-full rounded-xl">
              <img
                src={tutorhero}
                alt="Tutor Booking App"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
