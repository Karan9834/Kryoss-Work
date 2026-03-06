import React from "react";

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 px-4 overflow-x-hidden ">
      <div
        className="max-w-7xl mx-auto rounded-3xl 
                   bg-cover bg-center bg-no-repeat 
                   px-6 sm:px-10 md:px-16 
                   py-10 sm:py-12 md:py-1"
        style={{
          background:
            "linear-gradient(269.92deg, #0E0733 0.08%, #4A399F 99.94%)",
            transform: "skewy(0deg)",
        borderRadius: "30px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* ===== LEFT CONTENT ===== */}
          <div className="text-center md:text-left">

            <h2 className="text-2xl sm:text-3xl md:text-4xl 
                           font-semibold text-white 
                           leading-tight mb-5">
              Elevate Your Milk Delivery Service Now
            </h2>

            <p className="text-white/90 text-sm sm:text-base 
                          leading-relaxed mb-6 max-w-xl 
                          mx-auto md:mx-0">
              Transform how you manage orders and deliveries with our advanced app solution. Start now and elevate your milk delivery business to new heights!



            </p>

            <button className="bg-white text-blue-600 
                               font-semibold 
                               px-6 sm:px-8 py-3 
                               rounded-full 
                               shadow-lg 
                               hover:scale-105 
                               transition duration-300">
             Request a Demo
            </button>

          </div>

          {/* ===== RIGHT IMAGE ===== */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-cta-2.webp"
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

export default CTA;