import React from "react";

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <div
        className="relative max-w-7xl mx-auto 
                   rounded-3xl 
                   px-6 sm:px-10 md:px-16 
                   py-12 md:py-16 rounded-tr-4xl"
        style={{
          background: "linear-gradient(90deg, #04605B 0%, #00433F 100%)",
        }}
      >
        <div className="relative flex flex-col lg:flex-row items-center">

          {/* LEFT IMAGE */}
          <div className="lg:absolute lg:left-0 lg:bottom-0 lg:w-[45%]">
            <img
              src="https://whitelabelfox.com/assets/images/uber-massage-therapy-app/fox-massage-page-cta-1-image.webp"
              alt="House Cleaning App"
              className="w-full max-w-[520px] 
                         rounded-bl-[140px] 
                         rounded-tr-2xl 
                         rounded-tl-2xl 
                         rounded-br-2xl 
                         object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:ml-auto lg:w-[55%] text-white space-y-6 
                          mt-10 lg:mt-0">

            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
              Ready to Elevate Massage Therapy Services?{" "}
              <span className="text-[#55D7FF]">
               
              </span>
            </h2>

            <p className="text-white/80 text-lg">
            Revolutionize your Massage Therapy Business! Launch an Uber for Massage App in 5 days and connect users with top therapists. Schedule a demo now!
            </p>

            <button
              className="mt-4 px-8 py-4 rounded-full 
                         font-semibold text-white 
                         transition-all duration-300
                         bg-gradient-to-r from-[#009ACA] to-[#006C8D]
                         hover:scale-105"
            >
             Start Your Journey!
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;