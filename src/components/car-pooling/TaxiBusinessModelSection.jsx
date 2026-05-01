import React from "react";

const TaxiBusinessModelSection = () => {
  const solutions = [
    {
      image: "https://whitelabelfox.com/assets/images/carpooling-clone-script/carpool-similar-buiness-model-lyft.webp",
      title: "Lyft Clone App",
      desc: "Lyft Clone online taxi Booking broadens your ride-hailing business & increases your business revenue."
    },
    {
      image: "https://whitelabelfox.com/assets/images/carpooling-clone-script/carpool-similar-buiness-model-uber.webp",
      title: "Cabify Clone App",
      desc: "A taxi booking service to cover the maximum on-demand business market with extraordinary features."
    },
    {
      image: "https://whitelabelfox.com/assets/images/carpooling-clone-script/carpool-similar-buiness-model-blablacar.webp",
      title: "Rapido Clone App",
      desc: "A popular bike taxi solution to extend your market reach and diversify your taxi-hailing business."
    },
  ];

  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Top Center Content ===== */}
        <div className="text-center max-w-6xl mx-auto mb-20">

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 text-sm mb-6">
            <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></span>
            Taxi Business Model
          </div>

          <h2 className="text-[38px] font-semibold mb-6">
            Other On-Demand Taxi App Solutions
          </h2>

          <p className="text-black leading-relaxed">
            We offer a range of on-demand taxi app solutions to meet your business needs.
            From Lyft and Cabify clone apps to Rapido clone apps, we’re here to help
            you create the perfect platform that mirrors the success of leading
            ride-hailing services. Let us assist you in launching your own business
            with ease and efficiency.
          </p>

        </div>

        {/* ===== 3 Image Cards ===== */}
        <div className="grid md:grid-cols-3 gap-10 text-center">

          {solutions.map((item, index) => (
            <div key={index} className="group">

              {/* Image */}
              <div className="mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className=" text-sm leading-relaxed text-black">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TaxiBusinessModelSection;
















