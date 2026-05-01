import React from "react";
import DatingCTA from "../../assets/DatingApp/cta1.webp";

const DatingAppCTA1 = () => {
  return (
    <section className="bg-[#f5f5f7] py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="relative bg-gradient-to-r from-pink-600 to-red-500 rounded-[50px] overflow-hidden px-8 md:px-16 py-12 md:py-14 flex flex-col md:flex-row items-center">

          {/* IMAGE */}
          <div className="md:absolute md:left-0 md:bottom-0 md:-translate-x-10 md:scale-110">
            <img
              src={DatingCTA}
              alt="dating couple"
              className="w-[220px] md:w-[320px] lg:w-[380px] object-contain"
            />
          </div>

          {/* CONTENT */}
          <div className="md:ml-auto text-center md:text-left max-w-lg">

            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Launch Your Next <br />
              Dating Platform Faster
            </h2>

            <p className="text-white/90 text-sm md:text-base mb-6">
              Turn your idea into a fully functional dating platform with
              modern features, smart matching, and seamless user experience.
              Start building your community today.
            </p>

            <button className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Explore Demo
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DatingAppCTA1;