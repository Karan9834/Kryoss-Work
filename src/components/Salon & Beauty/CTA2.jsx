import React from "react";

const CTA2 = () => {
  return (
    <section className="py-12 sm:py-16 px-4 overflow-x-hidden ">
      <div
        className="max-w-7xl mx-auto rounded-3xl 
                   bg-cover bg-left bg-no-repeat 
                   px-6 sm:px-10 md:px-16 
                   py-10 sm:py-12 md:py-0"
        style={{
        //   backgroundImage:
        //     "url('https://whitelabelfox.com/assets/images/uber-house-cleaning-app/cta-1-bg.webp')",
background: "linear-gradient(84.32deg, #913417 0.19%, #AC573D 100%)",


        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* ===== LEFT CONTENT ===== */}
          <div className="text-center md:text-left">

            <h2 className="text-2xl sm:text-3xl md:text-4xl 
                           font-semibold text-white 
                           leading-tight mb-5">
      Grow Your Beauty Business with an On-Demand App!
            </h2>

            <p className="text-white/90 text-sm sm:text-base 
                          leading-relaxed mb-6 max-w-xl 
                          mx-auto md:mx-0">
              Take your beauty business to the next level with an on-demand Uber for Beauty App. Streamline bookings, enhance customer experiences, and expand your services efficiently.    </p>

            <button className="bg-white text-blue-600 
                               font-semibold 
                               px-6 sm:px-8 py-3 
                               rounded-full 
                               shadow-lg 
                               hover:scale-105 
                               transition duration-300">
              Get Started Now 
            </button>

          </div>

          {/* ===== RIGHT IMAGE ===== */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://whitelabelfox.com/assets/images/uber-beauty-app/Fox-Beauty-CTA-2-image.webp"
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

export default CTA2;