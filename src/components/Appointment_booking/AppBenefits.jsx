import React from "react";
import benefits from "../../assets/Appointment/benefits.webp";

export default function AppBenefits() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-6">
          <span className="border px-4 py-1 rounded-full text-sm">
            Advantages
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
          Key Perks of Our{" "}
          <span className="text-blue-600">
            Medical Appointment App
          </span>
        </h2>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">

            {/* Background card effect */}
            <div className="absolute w-[90%] h-[90%] bg-blue-100 rounded-3xl rotate-3"></div>

            <img
              src={benefits}
              alt="Doctor appointment benefits"
              className="relative z-10 rounded-3xl object-contain max-h-[420px]"
            />

          </div>

          {/* RIGHT TEXT */}
          <div className="space-y-6 text-gray-600 text-[15px] leading-relaxed">

            <p>
              Our on-demand health application delivers substantial advantages for
              clinical facilities as well as individuals. Ranging from streamlined
              scheduling procedures to optimized hospital operations, the system
              comprehensively elevates medical care provisions.
            </p>

            <p>
              Patients intuitively find physicians and secure time slots
              using minimal screen clicks, whereas doctors meticulously oversee
              their daily agendas and operational availability flawlessly.
            </p>

            <p>
              Live inventory sync guarantees that individuals exclusively reserve
              times corresponding with the physician’s calendar, minimizing scheduling
              conflicts and conserving valuable hours.
            </p>

            <p>
              Integrated messaging features alongside visit monitoring directly
              boost individual gratification whilst heavily optimizing the overall clinical
              service workflow.
            </p>

            <p>
              Our architecture automatically handles bookings, alerts, and transaction
              settlements, allowing clinical personnel to concentrate deeply on superior
              patient treatments.
            </p>

            <p>
              Our framework remains highly adaptable and expandable, rendering it
              perfect for individual practices, independent clinics, and massive
              metropolitan health networks.
            </p>

            <p>
              Sophisticated encryption paired with regulatory adherence modules
              guarantees robust health data privacy and strict compliance with
              global medical guidelines.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}