import React from "react";

const DigitalFootprint = () => {
  return (
    <section
      className="py-24 text-white mt-30"
      style={{
        background: "linear-gradient(180deg, #002735 0%, #001015 100%)",
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
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#003C52] to-[#01B49E] rounded-full"></span>
            Get Your Digital Footprint
          </div>

          {/* Heading */}
          <h2 className="text-[38px] font-semibold mb-6 leading-tight">
          Launch Your Milk Delivery <span className="bg-gradient-to-r from-[#003C52] to-[#01B49E] text-transparent bg-clip-text">  App in Just 5 Days </span>
          </h2> 

          {/* Paragraphs */}
          <div className="space-y-6 text-white/80 leading-relaxed text-sm">

            <p>
           Your milk delivery app can be up and running in just 5 working days with our quick, easy-to-deploy solution. Unlike traditional development, which can take weeks or months, our ready-made platform accelerates your launch, so you can start offering milk delivery services without delay.</p>

            <p>
        With our milk delivery app, you skip the long development process and get a fully functional, on-demand delivery platform that connects customers, drivers, and suppliers instantly. </p>

            <p>
         Our pre-developed milk delivery app comes equipped with all the essential features needed to launch a modern, scalable milk delivery service. From real-time order tracking to flexible payment options and customer support, our app ensures a seamless experience.   </p>

         <p>Forget about lengthy coding, debugging, and testing phases—start running your business smoothly with a platform that’s ready to grow.</p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DigitalFootprint;

















