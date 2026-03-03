import React from "react";

const CTASection2 = () => {
  return (
    <section
      className="py-24 w-330 h-100 ml-25 rounded-4xl"
      style={{
        background: "linear-gradient(96.94deg, #3F000C 21.92%, #87451F 100%)",
        // backgroundColor:"white"
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Inner Box with spacing */}
        <div className="flex flex-col h-80 md:flex-row items-center justify-between gap-12   rounded-3xl px-12 py-16">

          {/* Left Content */}
          <div className="text-white max-w-2xl">

            <h2 className="text-[40px] font-semibold mb-6 leading-tight">
              Transform Your Ride-Sharing Business Now!
            </h2>

            <p className="text-lg text-white/80 mb-8">
              Explore the power of our carpooling clone script. Request a demo
              to see how easy it is to launch your app today!
            </p>

            <button className="bg-white text-[#3F000C] font-semibold px-8 py-3 rounded-full hover:scale-105 transition duration-300 shadow-lg">
              Get Started Today
            </button>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-CTA-2-image.webp"
              alt="Carpooling App"
              className="w-full max-w-md"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection2;




























