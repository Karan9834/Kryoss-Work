import React, { useState } from "react";

const HowItWorks = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        {/* TOP CONTENT */}
        <div className="text-center max-w-8xl mx-auto mb-10 md:mb-14">

          <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-xs md:text-sm text-gray-700 mb-6">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
            How App Works
          </div>

          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-semibold leading-tight mb-6 text-gray-800">
            How Does Our{" "}
            <span className="text-[#1d79c6]">Carpooling App Work?</span>
          </h2>

          <p className="text-gray-700 text-[15px] md:text-[17px] leading-relaxed mb-6">
            With our Carpooling App Script, drivers can create rides based on their schedule,
            offering available seats to passengers. The fare is calculated based on the number
            of booked seats, ensuring drivers are paid accordingly.
          </p>

          <p className="text-gray-700 text-[15px] md:text-[17px] leading-relaxed">
            The admin oversees the entire process through a user-friendly control panel and earns
            a commission from each completed ride. Carpooling helps reduce road congestion and pollution.
          </p>

        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2 mt-12 md:mt-20 items-start">

          {/* LEFT ACCORDION */}
          <div className="space-y-5">

            {/* PASSENGER */}
            <div className="bg-[#eaf4fd] rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggle(0)}
                className="w-full flex justify-between items-center px-5 md:px-8 py-4 md:py-6 text-left"
              >
                <h3 className="text-base md:text-lg font-semibold">
                  Benefits Of Carpooling For Passenger:
                </h3>
                <span className="text-lg md:text-xl">
                  {openIndex === 0 ? "▲" : "▼"}
                </span>
              </button>

              {openIndex === 0 && (
                <div className="px-5 md:px-8 pb-5 md:pb-6">
                  <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] md:text-[16px] leading-relaxed">
                    <li>Carpooling significantly lowers commuting costs.</li>
                    <li>Passengers can easily find rides matching their schedule.</li>
                    <li>Great opportunity to meet new people.</li>
                    <li>More comfortable and optimized travel routes.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* DRIVER */}
            <div className="bg-[#eaf4fd] rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggle(1)}
                className="w-full flex justify-between items-center px-5 md:px-8 py-4 md:py-6 text-left"
              >
                <h3 className="text-base md:text-lg font-semibold">
                  Benefits Of Carpooling For Drivers:
                </h3>
                <span className="text-lg md:text-xl">
                  {openIndex === 1 ? "▲" : "▼"}
                </span>
              </button>

              {openIndex === 1 && (
                <div className="px-5 md:px-8 pb-5 md:pb-6">
                  <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] md:text-[16px] leading-relaxed">
                    <li>Higher earnings with more passengers.</li>
                    <li>Share fuel and travel expenses.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* ENVIRONMENT */}
            <div className="bg-[#eaf4fd] rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggle(2)}
                className="w-full flex justify-between items-center px-5 md:px-8 py-4 md:py-6 text-left"
              >
                <h3 className="text-base md:text-lg font-semibold">
                  Benefits Of Carpooling For Environments:
                </h3>
                <span className="text-lg md:text-xl">
                  {openIndex === 2 ? "▲" : "▼"}
                </span>
              </button>

              {openIndex === 2 && (
                <div className="px-5 md:px-8 pb-5 md:pb-6">
                  <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[14px] md:text-[16px] leading-relaxed">
                    <li>Less traffic congestion.</li>
                    <li>Reduced CO2 emissions.</li>
                  </ul>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end mt-0 md:mt-[-40px]">

            <div className="absolute w-[300px] h-[260px] md:w-[480px] md:h-[420px] bg-[#eaf4fd] rounded-3xl -z-10"></div>

            <img
              src="https://whitelabelfox.com/assets/images/carpooling-clone-script/How-does-publish-ride-work.webp"
              alt="Carpooling App UI"
              className="w-full max-w-[340px] md:max-w-[500px] h-auto relative z-10"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;