import React from "react";

const HomeCleaningCTA2 = () => {
  return (
    <section className="py-12 sm:py-16 px-4 overflow-x-hidden ">
      <div
        className="max-w-7xl mx-auto rounded-3xl 
                   bg-cover bg-center bg-no-repeat 
                   px-6 sm:px-10 md:px-16 
                   py-10 sm:py-12 md:py-0"
        style={{
        //   backgroundImage:
        //     "url('https://whitelabelfox.com/assets/images/uber-house-cleaning-app/cta-1-bg.webp')",
background: "radial-gradient(175.04% 199.89% at 70.54% -57.94%, #FF6B1B 0%, #781800 100%)",


        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* ===== LEFT CONTENT ===== */}
          <div className="text-center md:text-left">

            <h2 className="text-2xl sm:text-3xl md:text-4xl 
                           font-semibold text-white 
                           leading-tight mb-5">
          Boost Your Cleaning Business with Our Uber-Like App
            </h2>

            <p className="text-white/90 text-sm sm:text-base 
                          leading-relaxed mb-6 max-w-xl 
                          mx-auto md:mx-0">
              Our Uber for House Cleaning App simplifies the booking, management, and delivery of home cleaning services. Connect customers with professional cleaners seamlessly and efficiently, all in one platform.
            </p>

            <button className="bg-white text-blue-600 
                               font-semibold 
                               px-6 sm:px-8 py-3 
                               rounded-full 
                               shadow-lg 
                               hover:scale-105 
                               transition duration-300">
              Get Started Now →
            </button>

          </div>

          {/* ===== RIGHT IMAGE ===== */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-cta-1.webp"
              alt="House Cleaning App Demo"
              className="w-full 
                         max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl
                         h-[400px] sm:h-[450px] md:h-[500px]
                         object-contain 
                         drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeCleaningCTA2;