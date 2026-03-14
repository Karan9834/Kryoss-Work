import React from "react";
import thumbnail from "../../../assets/phone1.webp"; // <-- your image

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-24 flex justify-center">
      <div className="w-full max-w-7xl px-6">

        {/* Green Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border border-[#cfe3a6] bg-white px-4 py-1 rounded-full text-sm text-gray-700">
            <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
            inDriver like App StakeHolders Flow
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-4">
          How Does{" "}
          <span className="text-[#6dbb1a]">inDriver App</span>{" "}
          Clone Work ?
        </h2>

        <p className="text-center text-gray-600 mb-16">
          Explore the exclusive features along with the inner workings of the inDriver app
        </p>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE VIDEO PLACEHOLDER */}
          <div className="relative">

            {/* Outer green soft box */}
            <div className="bg-[#e9f2d6] rounded-[30px] p-6 shadow-xl">

              {/* Inner thumbnail container */}
              <div className="relative rounded-[20px] overflow-hidden shadow-lg">

                <img
                  src={thumbnail}
                  alt="Video Preview"
                  className="w-full object-cover"
                />

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-l-[18px] border-l-[#6dbb1a] border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE TEXT BOX */}
          <div className="border border-[#9ac64d] rounded-[25px] p-10 bg-white/40">

            <p className="text-gray-700 leading-relaxed">
              Experience the frictionless functionality of our inDriver clone through our
              comprehensive demonstration. Explore how our innovative platform
              operates all apps and panels, showcasing its stunning interface and robust features.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              Discover the uniqueness of our platform as the inDriver clone app is developed
              just like the original bidding application. From appealing interfaces to efficient
              bidding processes, our application helps you upscale your existing transportation business.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;