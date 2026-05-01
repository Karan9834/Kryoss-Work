import React from "react";
import BenefitsImage from "../../assets/DatingApp/cta3.webp";

const DatingAppBenefits = () => {
  return (
    <section className="py-20 px-6 bg-[#f8f8fb]">
      <div className="max-w-7xl mx-auto">

        <div className="relative bg-gradient-to-r from-[#fff5f7] to-[#fffafa] border border-pink-200 rounded-[40px] p-8 md:p-14 overflow-hidden">

          {/* IMAGE */}
          <div className="flex justify-center md:absolute md:left-0 md:bottom-0 md:-translate-x-10 mb-8 md:mb-0">
            <img
              src={BenefitsImage}
              alt="dating couple"
              className="w-[220px] md:w-[340px] lg:w-[420px] object-contain"
            />
          </div>

          {/* CONTENT */}
          <div className="md:ml-[320px] lg:ml-[380px] text-center md:text-left">

            {/* LABEL */}
            <span className="inline-block border border-pink-300 text-sm px-4 py-1 rounded-full mb-4 bg-white">
              Benefits
            </span>

            {/* HEADING */}
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-snug">
              Powerful Features to Grow Your
              <span className="text-pink-500"> Dating Platform</span>
            </h2>

            {/* PARAGRAPHS */}
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Launch a modern dating platform with advanced matchmaking
              algorithms and smooth swipe-based interactions.
            </p>

            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Built-in messaging and notification systems allow users to
              communicate instantly and build meaningful connections.
            </p>

            <p className="text-gray-600 text-sm md:text-base">
              A powerful admin dashboard helps you monitor user activity,
              manage content, and scale your dating platform efficiently.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DatingAppBenefits;