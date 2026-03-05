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
            Get Your Digital Footprint
          </div>

          {/* Heading */}
          <h2 className="text-[38px] font-semibold mb-6 leading-tight">
           Launch Your Uber for<span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text"> House Cleaning App in Just 5 Days</span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-white/80 leading-relaxed text-sm">

            <p>
             Get your Uber for Beauty App up and running in just 5 working days with our fast and easy-to-deploy solution. Unlike traditional custom development, which can take weeks or months, our pre-built platform accelerates your time-to-market, allowing you to offer on-demand beauty services immediately.   </p>

            <p>
           Our pre-built solution includes all essential features for a modern, scalable beauty service business, from real-time bookings and provider tracking to secure payments and customer reviews. It’s everything you need to deliver a smooth, efficient experience. </p>

            <p>
           Focus on growing your business, not on coding, debugging, and testing—our platform is ready to scale and deliver from day one.
            </p>

         

          </div>

        </div>

      </div>
    </section>
  );
};

export default DigitalFootprint;

















