import React from "react";

const CTASection = () => {
  return (
    <section className="bg-white py-24">

      {/* Wrapper to create left space */}
      <div className="ml-64">

        <div
          className="relative rounded-l-[320px] px-16 py-20 flex items-center justify-between overflow-hidden"
          style={{
            background: "linear-gradient(90deg, #791531 0.23%, #C73F25 99.76%)",
borderRadius: "225px 0px 0px 225px",
    // background: linear-gradient(90deg, #791531 0.23%, #C73F25 99.76%);

          }}
        >

          {/* LEFT CONTENT */}
          <div className="text-white max-w-xl">

            <h2 className="text-[34px] font-semibold mb-6 ml-10">
          
Launch Your Milk Delivery Business in No Time!
            </h2>

            <p className="text-[17px] leading-relaxed mb-8 text-white/90 ml-10">
             Take your milk delivery business to the next level with our ready-to-deploy, white-label solution. Customize, scale, and start delivering with ease.
            </p>

            <button className="ml-10 bg-white text-purple-700 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition duration-300">
              Launch your App Now
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://whitelabelfox.com/assets/images/daily-delivery-app/daily-delivery-cta-3-left-image.webp"
              alt="Carpooling"
              className="w-[380px] mr-20"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;














