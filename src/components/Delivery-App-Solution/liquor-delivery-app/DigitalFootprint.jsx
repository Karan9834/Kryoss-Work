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
            <span className="w-2.5 h-2.5 bg-gradient-to-r bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text] rounded-full"></span>
            Get Your Digital Footprint
          </div>

          {/* Heading */}
          <h2 className="text-[38px] font-semibold mb-6 leading-tight">
          Launch Your  <span className="bg-gradient-to-r bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text text-transparent bg-clip-text"> Alcohol Delivery App  </span> in Just 5 Days
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-white/80 leading-relaxed text-sm">

            <p>
          Get your Alcohol Delivery App live and running in just 5 working days with our fast, easy-to-deploy solution. Unlike traditional custom development, which can take weeks or months, our pre-built platform accelerates your time-to-market, allowing you to start offering alcohol delivery services immediately.</p>

            <p>
      With our Alcohol Delivery App Clone Script, you skip the lengthy development process and launch a fully functional app that connects customers, delivery drivers, and stores seamlessly. </p>

            <p>
       Our ready-made Alcohol Delivery App comes with all the essential features required to run a modern, scalable liquor delivery service. From real-time order tracking and delivery optimization to secure payments and customer reviews, our app ensures a smooth experience for all users.</p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DigitalFootprint;

















