import React from "react";

const CTASection2 = () => {
  return (
    <section
      className="py-14 px-4 w-full md:w-330 md:h-100 md:ml-25 rounded-4xl"
      style={{
        background: "linear-gradient(96.94deg, #3F000C 21.92%, #87451F 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Inner Box */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 md:h-80 rounded-3xl px-6 md:px-12 py-10 md:py-16">

          {/* Left Content */}
          <div className="text-white max-w-2xl text-center md:text-left">

            <h2 className="text-[28px] md:text-[40px] font-semibold mb-6 leading-tight">
              Transform Your Ride-Sharing Business Now!
            </h2>

            <p className="text-base md:text-lg text-white/80 mb-8">
              Explore the power of our carpooling clone script. Request a demo
              to see how easy it is to launch your app today!
            </p>

            <button className="bg-white text-[#3F000C] font-semibold px-7 md:px-8 py-3 rounded-full hover:scale-105 transition duration-300 shadow-lg">
              Get Started Today
            </button>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-CTA-2-image.webp"
              alt="Carpooling App"
              className="w-[320px] sm:w-[360px] md:max-w-md"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection2;