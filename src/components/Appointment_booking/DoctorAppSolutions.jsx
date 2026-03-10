import React from "react";

import mfineImg from "../../assets/Appointment/mfine.webp";
import drOnDemandImg from "../../assets/Appointment/drondemand.webp";
import practoImg from "../../assets/Appointment/practo.webp";

export default function DoctorAppSolutions() {

  const cards = [
    {
      title: "MFine App",
      desc: "MFine provides users with access to virtual consultations with doctors from various specialties through its mobile app.",
      img: mfineImg
    },
    {
      title: "Dr. On Demand App",
      desc: "Dr. On Demand is a telemedicine platform that allows users to have virtual medical visits with licensed healthcare professionals.",
      img: drOnDemandImg
    },
    {
      title: "Practo App",
      desc: "Practo is a healthcare technology company based in India that provides a variety of digital health services.",
      img: practoImg
    }
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <span className="border px-4 py-1 rounded-full text-sm">
          On-Demand Doctor Solutions
        </span>

        {/* Heading + Description */}
        <div className="grid md:grid-cols-2 gap-12 mt-6 mb-16">

          <h2 className="text-3xl md:text-4xl font-semibold text-blue-700">
            Explore Top On-Demand Doctor App Solutions
          </h2>

          <p className="text-gray-600">
            Discover innovative solutions like MFine, Dr. On Demand, and Practo
            with our On-Demand Doctor App Development. These apps streamline
            healthcare services, connecting patients with doctors instantly for
            seamless appointments and consultations.
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