import React from "react";

const HomeCleaningDigitalFootprint = () => {
  return (
    <section
      className="py-24 text-white mt-30"
      style={{
        background: "linear-gradient(180deg, #003756 0%, #00101A 100%)",
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
            <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></span>
            Get Your Digital Footprint
          </div>

          {/* Heading */}
          <h2 className="text-[38px] font-semibold mb-6 leading-tight">
           Launch Your Uber for<span className="text-[#55D7FF]"> House Cleaning App in Just 5 Days</span>
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-white/80 leading-relaxed text-sm">

            <p>
              Get your Uber for House Cleaning App live in just 5 working days with our fast and efficient deployment solution. Skip the lengthy custom development process and launch your fully operational on-demand cleaning app without the usual delays.
            </p>

            <p>
            Our pre-built Uber-like house cleaning app offers a fast-track way to start your cleaning services, connecting homeowners, service providers, and admins all in one seamless platform. With essential features like booking, real-time tracking, multiple payment options, and service management already integrated, you'll be ready to offer outstanding cleaning services right from the start.
            </p>

            <p>
             Designed for scalability, our Uber for House Cleaning App grows with your business. Say goodbye to long development cycles and focus on expanding your operations while delivering exceptional on-demand cleaning services.


            </p>

            <p>
             
Launch quickly, scale effortlessly, and offer a smooth, efficient experience with our ready-made Uber for House Cleaning Service App.

            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeCleaningDigitalFootprint;

















