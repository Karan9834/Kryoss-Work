import React from "react";

import mfineImg from "../../assets/Appointment/mfine.webp";
import drOnDemandImg from "../../assets/Appointment/drondemand.webp";
import practoImg from "../../assets/Appointment/practo.webp";

export default function DoctorAppSolutions() {

  const cards = [
    {
      title: "MFine App",
      desc: "This model grants individuals direct pathways to digital medical sessions spanning diverse specialist categories via smartphones.",
      img: mfineImg
    },
    {
      title: "Dr. On Demand App",
      desc: "An integrated telehealth framework empowering individuals to experience remote clinical checkups utilizing certified and practicing medical specialists.",
      img: drOnDemandImg
    },
    {
      title: "Practo App",
      desc: "A premier health-tech infrastructure delivering an extensive spectrum of modern consumer-focused digital medical management resources globally.",
      img: practoImg
    }
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <span className="border px-4 py-1 rounded-full text-sm">
          Digital Healthcare Models
        </span>

        {/* Heading + Description */}
        <div className="grid md:grid-cols-2 gap-12 mt-6 mb-16">

          <h2 className="text-3xl md:text-4xl font-semibold text-blue-700">
            Discover Prominent Telehealth Mobile Platform Inspirations
          </h2>

          <p className="text-gray-600">
            Examine pioneering platforms akin to leading telehealth architectures
            leveraging our bespoke medical programming services. Such applications
            optimize clinical provisions, bridging practitioners and users
            instantly facilitating straightforward digital consultations.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {cards.map((card, index) => (
            <div key={index} className="group">

              {/* Image Card */}
              <div className="rounded-3xl overflow-hidden bg-gray-100 p-4 hover:shadow-xl transition">

                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full object-contain group-hover:scale-105 transition duration-300"
                />

              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-blue-600 mt-6">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {card.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}