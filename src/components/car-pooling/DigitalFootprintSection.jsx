import React from "react";

const DigitalFootprintSection = () => {
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
            Launch Your Carpooling Clone Script in Just 5 Days
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-white/80 leading-relaxed text-sm">

            <p>
              Launch your carpooling business quickly with our Carpooling Clone Script.
              In just 5 working days, you can have your on-demand carpooling app live,
              providing a seamless experience for both passengers and drivers.
              Unlike traditional custom app development that takes weeks or even months,
              our ready-to-use solution enables you to get started instantly.
            </p>

            <p>
              Our Carpooling App Script comes pre-built with all the essential
              features required for a successful carpooling business, including
              ride management, real-time tracking, and secure payment options.
              By using our Carpooling Clone Script, you can skip the long development
              and testing phases and launch your app right away.
            </p>

            <p>
              With a fully scalable platform, you can effortlessly connect
              passengers, drivers, and administrators, and expand as your
              business grows. Our Carpooling Clone Script is designed for
              flexibility, ensuring you can tailor it to meet your specific
              business needs.
            </p>

            <p>
              Don’t let long development timelines hold you back. Get started
              with our Carpooling App Script and focus on scaling your business
              from day one.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DigitalFootprintSection;