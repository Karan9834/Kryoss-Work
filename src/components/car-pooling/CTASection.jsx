import React from "react";

const CTASection = () => {
  return (
    <section className="bg-white py-24">

      {/* Wrapper to create left space */}
      <div className="ml-64">

        <div
          className="relative rounded-l-[320px] px-16 py-20 flex items-center justify-between overflow-hidden"
          style={{
            background: "linear-gradient(90deg, #8601B0 0%, #40019C 100%)",
          }}
        >

          {/* LEFT CONTENT */}
          <div className="text-white max-w-xl">

            <h2 className="text-[34px] font-semibold mb-6 ml-10">
              Ready to Launch Your Carpooling Business?
            </h2>

            <p className="text-[17px] leading-relaxed mb-8 text-white/90 ml-10">
              Start your journey with our fully customizable carpooling app script.
              Contact White Label Fox today for a live demo and get started on
              building your brand with our cost-effective, feature-rich solution.
            </p>

            <button className="ml-10 bg-white text-purple-700 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition duration-300">
              Request a Demo
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-CTA-1-image.webp"
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














