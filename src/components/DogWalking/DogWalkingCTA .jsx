import React from "react";
import DogCTA1 from "../../assets/DogWalking/cta-1-image.webp";

const DogCTA = () => {
  return (
    <section className="py-24 bg-gray-100 flex justify-center px-6">

      {/* Green Container */}
      <div className="relative max-w-7xl w-full bg-gradient-to-r from-emerald-700 to-green-800 rounded-[120px] overflow-visible">

        <div className="grid lg:grid-cols-2 items-center px-10 lg:px-20 py-20">

          {/* LEFT TEXT */}
          <div className="text-white max-w-xl">

            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
              Ready to Boost Your Dog Walking Business with a Custom App?
            </h2>

            <p className="text-white/80 mb-8">
              Ready to boost your dog walking business? Get a ready-to-use
              app solution today!
            </p>

            <button className="border border-white rounded-full px-6 py-3 hover:bg-white hover:text-green-700 transition">
              Launch Your App Today
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">

            <img
              src={DogCTA1}
              alt="dog walking app"
              className="
                w-[260px]
                md:w-[320px]
                lg:w-[420px]
                object-contain
                lg:-top-10
                relative
                drop-shadow-xl
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default DogCTA;