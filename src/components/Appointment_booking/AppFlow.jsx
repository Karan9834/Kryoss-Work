import React from "react";

const steps = [
  {
    id: 1,
    title: "Authentication",
    img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
  },
  {
    id: 2,
    title: "Discover Local Specialists",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    id: 3,
    title: "Pick Availability Slot",
    img: "https://cdn-icons-png.flaticon.com/512/747/747310.png",
  },
  {
    id: 4,
    title: "Confirm Reservation",
    img: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
  },
];

export default function AppFlow() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="border px-4 py-1 rounded-full text-sm">
          Visual Application Journey
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-4">
          Operational Sequence of Our{" "}
          <span className="text-blue-600">
            Medical Scheduling Platform
          </span>
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-16">
          Observe the structured pathway outlining our clinical reservation ecosystem
          — navigating from practitioner discovery straight through effortlessly confirming sessions.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center">

          {steps.map((step, index) => (
            <div key={index} className="relative group">

              {/* Card */}
              <div className="bg-[#eef2ff] p-8 rounded-2xl relative transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">

                {/* Layer effect */}
                <div className="absolute -top-2 -left-2 w-full h-full rounded-2xl border border-blue-300"></div>

                <img
                  src={step.img}
                  alt={step.title}
                  className="w-20 mx-auto mb-6"
                />

              </div>

              {/* Step Title */}
              <p className="mt-6 text-blue-600 font-medium">
                {step.id}. {step.title}
              </p>

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-12 text-gray-300">
                  →
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}