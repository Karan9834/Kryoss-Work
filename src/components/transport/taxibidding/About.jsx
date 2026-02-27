import React from "react";
import taxi1 from "../../../assets/taxibidding1.webp";

const AboutSection = () => {
  return (
    <section className="w-full py-24 bg-[#f3f4f6] flex justify-center">
      <div className="w-full max-w-6xl px-6 flex items-center gap-16">

        {/* LEFT SIDE (40%) */}
        <div className="relative w-[40%] flex justify-start">

          <div className="relative bg-gradient-to-br from-[#6dbb1a] to-[#4f8f12]
                          rounded-[36px] w-[340px] h-[520px] overflow-hidden">

            {/* IMAGE OVERFLOW EFFECT */}
            <img
              src={taxi1}
              alt="App Preview"
              className="absolute bottom-0 -left-8 w-[120%] object-contain"
            />

            {/* Decorative squares */}
            <div className="absolute top-8 left-8 w-12 h-12 bg-white/10 rounded-md"></div>
            <div className="absolute bottom-20 right-6 w-10 h-10 bg-white/10 rounded-md"></div>
          </div>
        </div>

        {/* RIGHT SIDE (60%) */}
        <div className="w-[60%] border border-[#c7d8a4] 
                        rounded-[28px] p-12">

          <span className="inline-flex items-center gap-2 text-sm font-medium 
                           text-[#4f8f12] border border-[#c7d8a4] 
                           px-4 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
            About Us
          </span>

          <h2 className="text-3xl font-semibold leading-snug mb-6 text-[#1f2937]">
            Grab Multiple Growth{" "}
            <span className="text-[#5aa114]">
              Opportunities with Our inDriver Clone App
            </span>
          </h2>

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
    </section>
  );
};

export default AboutSection;