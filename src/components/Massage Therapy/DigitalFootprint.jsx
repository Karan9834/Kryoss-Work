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
           Launch Your <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text"> Uber for Massage App</span>in Just 5 Days
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-white/80 leading-relaxed text-sm">

            <p>
            Get your Uber for Massage app live in just 5 working days with our fast and efficient deployment solution. Skip the lengthy development processes and launch a fully functional massage platform without the usual delays. </p>

            <p>
          Our pre-built Uber for Massage app makes it easy to connect users with top-rated massage therapists, with all the essential features ready from day one. Enjoy functionalities like appointment scheduling, real-time tracking, secure payments, and more—all within a seamless app experience. </p>

            <p>
          The app is built on a strong, scalable platform that grows with your business. Say goodbye to extended development timelines and focus on delivering exceptional service to your clients.
            </p>

         <p>Launch swiftly, scale seamlessly, and offer a reliable and smooth massage therapy experience with our ready-to-use solution.</p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DigitalFootprint;

















