import React from "react";
import taxi1 from "../../../assets/taxibidding1.webp";

const AboutSection = () => {
  return (
    <section className="w-full py-20 bg-[#f3f4f6]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Responsive Flex Container */}
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-start">

            <div className="relative 
                            bg-gradient-to-br from-[#6dbb1a] to-[#4f8f12]
                            rounded-[36px] 
                            w-[260px] sm:w-[300px] lg:w-[340px] 
                            h-[420px] sm:h-[460px] lg:h-[520px] 
                            overflow-hidden">

              {/* IMAGE */}
              <img
                src={taxi1}
                alt="App Preview"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 
                           w-[115%] sm:w-[110%] lg:w-[120%] 
                           object-contain"
              />

              {/* Decorative Squares */}
              <div className="absolute top-6 left-6 w-10 h-10 bg-white/10 rounded-md"></div>
              <div className="absolute bottom-16 right-6 w-8 h-8 bg-white/10 rounded-md"></div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[60%] 
                          border border-[#c7d8a4] 
                          rounded-[28px] 
                          p-8 sm:p-10 lg:p-12">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-sm font-medium 
                             text-[#4f8f12] border border-[#c7d8a4] 
                             px-4 py-1 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
              About Us
            </span>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-semibold leading-snug mb-6 text-[#1f2937]">
              Grab Multiple Growth{" "}
              <span className="text-[#5aa114]">
                Opportunities with Our inDriver Clone App
              </span>
            </h2>

            {/* Content */}
            <div className="space-y-5 text-[#4b5563] leading-relaxed text-[15px]">
              <p>
                At White Label Fox, we deploy customized solutions for clients
                like you who aim to revolutionize the taxi and courier industries.
                Our feature-rich inDriver clone app is your gateway to unlocking
                growth opportunities in the digital space.
              </p>

              <p>
                Designed to meet modern demands, our inDriver clone offers
                transparent customer bidding, real-time tracking, seamless
                payments, and a versatile interface.
              </p>

              <p>
                Whether you're expanding your services or starting fresh,
                our scalable solution provides everything you need for growth.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;