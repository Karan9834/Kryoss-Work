import React from 'react'
import ctaflutter from "../../../assets/FlutterApp/ctaflutter.webp";
export default function FlutterCTA() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white overflow-hidden">

      {/* angled background effect */}
      <div className="absolute top-0 left-0 w-full h-20 bg-white -skew-y-2 origin-top-left"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white skew-y-2 origin-bottom-left"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>

          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20">
            Best Solutions
          </span>

          <h2 className="text-4xl lg:text-5xl font-semibold mt-6 leading-tight">
            Ready to Build Your
            <br />
            Custom Flutter App?
          </h2>

          <p className="mt-6 text-purple-100 max-w-md">
            Partner with our experienced Flutter development team to launch
            scalable, high-performance mobile applications faster and
            accelerate your digital growth.
          </p>

          <button className="mt-8 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-purple-900 transition">
            Start Your Project
          </button>

        </div>

        {/* RIGHT IMAGE PLACEHOLDER */}
        <div className="flex justify-center lg:justify-end">

          <div className="relative w-[360px] h-[360px] flex items-center justify-center">

            {/* IMAGE PLACEHOLDER */}
            <img
              src={ctaflutter}
              alt="Flutter Developer"
              className="w-full h-full object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}