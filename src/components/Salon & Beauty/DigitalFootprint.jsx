import React from "react";

const DigitalFootprint = () => {
  return (
    <section
      className="py-24 text-white mt-30"
      style={{
        background: "linear-gradient(0deg, #1F030F 0%, #2C0617 100%)",
      }}
    >
      <div className="max-w-8xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div className="flex justify-center ">
          <img
            src="https://whitelabelfox.com/assets/images/gojek-clone-app/hit-the-market-withgojek-clone-app-in-days-not-months-image.webp"
            alt="Launch Carpooling App"
            className="w-full max-w-xl rounded-2xl shadow-2xl "
          />
        </div>

        {/* Right Content */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 text-sm mb-6">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
            Establish Your Market Presence
          </div>

          {/* Heading */}
          <h2 className="text-[38px] font-semibold mb-6 leading-tight">
           Initialize Your Aesthetic<span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text"> Service Ecosystem in a 5-Day Window</span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-white/80 leading-relaxed text-sm">

            <p>
              Deploy your dedicated styling platform within 5 business days utilizing 
              our rapid-deployment architecture. Contrasting with conventional 
              technical development cycles that persist for months, our engineered 
              framework accelerates your commercial launch, facilitating immediate 
              aesthetic service synchronization.
            </p>

            <p>
              Our architectural solution encompasses all vital modules for a 
              contemporary, expanding styling enterprise, from synchronized 
              reservation tracking to protected fiscal settlements and participant 
              feedback loops. It provides the essential infrastructure for 
              professional service delivery.
            </p>

            <p>
              Concentrate on enterprise expansion rather than technical maintenance—
              our framework is engineered for immediate scalability and professional 
              performance from the initial launch.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DigitalFootprint;
