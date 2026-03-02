import React, { useState } from "react";

const HowItWorks = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP CONTENT (same as before) */}
        <div className="text-center max-w-8xl mx-auto mb-14">

          <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-sm text-gray-700 mb-6">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
            How App Works
          </div>

          <h2 className="text-[38px] font-semibold leading-tight mb-6 text-gray-800">
            How Does Our{" "}
            <span className="text-[#1d79c6]">Carpooling App Work?</span>
          </h2>

          <p className="text-gray-700 text-[17px] leading-relaxed mb-6">
           With our Carpooling App Script, drivers can create rides based on their schedule, offering available seats to passengers. The fare is calculated based on the number of booked seats, ensuring drivers are paid accordingly. Passengers can book seats that fit their schedules, providing a convenient and affordable carpooling experience.
          </p>

          <p className="text-gray-700 text-[17px] leading-relaxed">
            The admin oversees the entire process through a user-friendly control panel and earns a commission from each completed ride. Carpooling helps reduce road congestion and pollution, benefiting both the environment and the community, creating a sustainable and cost-effective transportation solution for everyone.
          </p>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid md:grid-cols-2 gap-2 mt-30 items-start">

          {/* LEFT - ACCORDION */}
          <div className="space-y-5">

            {/* PASSENGER */}
            <div className="bg-[#eaf4fd] rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggle(0)}
                className="w-full flex justify-between items-center px-8 py-6 text-left"
              >
                <h3 className="text-lg font-semibold">
                  Benefits Of Carpooling For Passenger:
                </h3>
                <span className="text-xl">
                  {openIndex === 0 ? "▲" : "▼"}
                </span>
              </button>

              {openIndex === 0 && (
                <div className="px-8 pb-6">
                  <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[16px] leading-relaxed">
                    <li>Carpooling significantly lowers the cost of commuting by sharing the fare with other passengers, making it an affordable choice for daily travel.</li>
                    <li>With our app, passengers can easily find rides that match their preferred timing, offering flexibility and convenience to suit busy lifestyles.</li>
                    <li>Ride-sharing is an excellent opportunity to meet new people, whether for socializing or networking, making the journey more enjoyable and fulfilling.</li>
                    <li>Carpooling provides a comfortable and less stressful commuting experience, with the added benefit of shorter travel times due to fewer stops and optimized routes, making it comparable to a private ride.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* DRIVER */}
            <div className="bg-[#eaf4fd] rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggle(1)}
                className="w-full flex justify-between items-center px-8 py-6 text-left"
              >
                <h3 className="text-lg font-semibold">
                  Benefits Of Carpooling For Drivers:
                </h3>
                <span className="text-xl">
                  {openIndex === 1 ? "▲" : "▼"}
                </span>
              </button>

              {openIndex === 1 && (
                <div className="px-8 pb-6">
                  <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[16px] leading-relaxed">
                    <li>Carrying more passengers means higher earnings and more opportunities to increase income.</li>
                    <li>Share expenses like fuel with passengers, cutting down on your overall commuting costs.</li>
                  
                  </ul>
                </div>
              )}
            </div>


             {/* Environments */}
            <div className="bg-[#eaf4fd] rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => toggle(2)}
                className="w-full flex justify-between items-center px-8 py-6 text-left"
              >
                <h3 className="text-lg font-semibold">
                  Benefits Of Carpooling For Environments:
                </h3>
                <span className="text-xl">
                  {openIndex === 2 ? "▲" : "▼"}
                </span>
              </button>

              {openIndex === 2 && (
                <div className="px-8 pb-6">
                  <ul className="list-disc pl-5 space-y-3 text-gray-700 text-[16px] leading-relaxed">
                    <li>Fewer cars on the road mean less traffic, leading to smoother commutes for everyone.</li>
                    <li>Carpooling reduces the number of vehicles, helping decrease CO2 emissions and improve air quality.</li>
                  
                  </ul>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT IMAGE (same as before) */}
          <div className="relative flex justify-center mt-[-40px]">
            <div className="absolute w-[480px] h-[420px] bg-[#eaf4fd] rounded-3xl -z-10"></div>
            <img
              src="https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-how-does-app-works-image.webp"
              alt="Carpooling App UI"
              className="w-[600px] h-[400px] relative z-10"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;