import React from "react";
import cta31 from "../../assets/DogWalking/cta-3-1.webp"
import cta32 from "../../assets/DogWalking/cta-3-2.webp"

const DogCTA3 = () => {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative bg-[#c7421e] rounded-[90px] px-16 py-20 flex items-center justify-center overflow-hidden">

          {/* LEFT IMAGE */}
          <img
            src={cta31}
            alt="dog owner"
            className="absolute left-16 bottom-0 w-[320px] hidden lg:block object-contain"
          />

          {/* RIGHT DOG */}
          <img
            src={cta32}
            alt="dog"
            className="absolute right-16 bottom-0 w-[220px] hidden lg:block object-contain"
          />

          {/* TEXT */}
          <div className="max-w-xl text-center text-white">

            <h2 className="text-4xl font-semibold mb-6 leading-snug">
              Launch Your Dog-Walking Business Today
            </h2>

            <p className="text-white/90 mb-8">
              Quickly launch your own platform, connect pet owners with trusted
              walkers, and start earning with our customizable dog-walking app
              solution.
            </p>

            <button className="border border-white rounded-full px-8 py-3 hover:bg-white hover:text-[#c7421e] transition">
              Get Your Demo Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DogCTA3;