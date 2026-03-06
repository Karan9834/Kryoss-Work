import React from "react";
import Dogcta2 from "../../assets/DogWalking/cta-2-image.webp";

const DogCTA2 = () => {
  return (
    <section className="py-28 bg-gray-100 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* CTA Box */}
        <div className="relative bg-[#24003A] rounded-[120px] px-16 py-14 flex items-center justify-end">

          {/* LEFT IMAGE */}
          <div className="absolute -left-10 bottom-0 hidden lg:block">

            <img
              src={Dogcta2}
              alt="Dog Walking App"
              className="w-[420px] object-contain drop-shadow-2xl"
            />

          </div>

          {/* TEXT CONTENT */}
          <div className="max-w-xl text-white text-center lg:text-left">

            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              Launch Your Dog Walking App in Just 5 Days!
            </h2>

            <p className="text-gray-300 mb-8">
              Get your dog walking app up and running quickly with our expert
              dog walking app development services. Enjoy a seamless,
              feature-rich solution designed for success.
            </p>

            <button className="border border-white rounded-full px-7 py-3 hover:bg-white hover:text-[#24003A] transition">
              Get a Live Demo Now!
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DogCTA2;