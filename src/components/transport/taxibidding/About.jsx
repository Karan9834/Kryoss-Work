import React from "react";
import taxi1 from "../../../assets/taxibidding1.webp";

const AboutSection = () => {
  return (
    <section className="w-full py-20 bg-[#f3f4f6]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Responsive Flex Container */}
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-start order-2 lg:order-1 ">

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
                          p-8 sm:p-10 lg:p-12 order-1 lg:order-2">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-sm font-medium 
                             text-[#4f8f12] border border-[#c7d8a4] 
                             px-4 py-1 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
              About Us
            </span>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-semibold leading-snug mb-6 text-[#1f2937]">
              Capture Vast Scaling{" "}
              <span className="text-[#5aa114]">
                Potential with Our Advanced inDrive Clone Solution
              </span>
            </h2>

            {/* Content */}
            <div className="space-y-5 text-[#4b5563] leading-relaxed text-[15px]">
              <p>
                At Vyom Mobility, we provide tailored digital frameworks for entrepreneurs
                eager to disrupt the transport and delivery sectors. Our comprehensive
                inDrive clone software serves as your primary tool for securing
                market leadership.
              </p>

              <p>
                Engineered for today's market, our inDriver-style application features
                open price negotiation, live trip monitoring, integrated
                payment systems, and an adaptive user experience.
              </p>

              <p>
                No matter if you are diversifying your portfolio or launching a
                new venture, our robust infrastructure offers all the components
                required for expansion.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;