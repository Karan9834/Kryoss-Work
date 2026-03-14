import React from "react";
import heroImg from "../../assets/car-rental-hero.webp";

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#02122b] via-[#031a3a] to-[#041d44] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-end justify-between pt-16 pb-0 gap-10">

        {/* LEFT */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left pb-10 lg:pb-20">

        {/* logo */}
<div className="flex items-center justify-center lg:justify-start gap-3 mb-6">

  {/* Icon */}
  <div className="w-10 h-10 rounded-lg 
      bg-gradient-to-br from-cyan-400 to-sky-500 
      flex items-center justify-center
      shadow-[0_0_18px_rgba(56,189,248,0.8)]">

      <span className="text-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
        🚗
      </span>

  </div>

  {/* Brand */}
  <span className="tracking-widest font-semibold text-sm uppercase">

      <span className="text-cyan-400 
            drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]">
        VYOM
      </span>

      <span className="text-white ml-1">
        RENTAL
      </span>

  </span>

</div>


          {/* title */}
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug mb-6">
            <span className="text-sky-400">
              Car Rental App Script
            </span>{" "}
            – Power Your Car Rental Business
          </h1>


          {/* text */}
          <p className="text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0">
            Launch your car rental business with our Car Rental App Script,
            designed with advanced features to streamline operations and maximize
            revenue. Get a scalable and ready-to-use solution tailored for success.
          </p>


          {/* button */}
          <div className="flex justify-center lg:justify-start">
            <button className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-full font-semibold">
              Let’s Discuss →
            </button>
          </div>

        </div>



        {/* RIGHT */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end">

          <img
            src={heroImg}
            alt=""
            className="
              w-[280px]
              sm:w-[350px]
              md:w-[450px]
              lg:w-[600px]
              xl:w-[650px]
              object-contain
              lg:self-end
            "
          />

        </div>

      </div>

    </section>
  );
};

export default HeroSection;