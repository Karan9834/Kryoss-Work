import React from "react";
import benefits from "../../assets/Appointment/benefits.webp";

export default function AppBenefits() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-6">
          <span className="border px-4 py-1 rounded-full text-sm">
            Benefits
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
          Benefits of Our{" "}
          <span className="text-blue-600">
            Uber For Doctors App
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
              Our Uber For Doctors App provides powerful benefits for both
              healthcare providers and patients. From simplified appointment
              booking to improved clinic management, the platform enhances
              overall healthcare delivery.
            </p>

            <p>
              Patients can easily search for doctors and schedule appointments
              in just a few taps, while doctors can manage their schedules and
              availability efficiently.
            </p>

            <p>
              Real-time availability updates ensure that patients only book
              slots that match the doctor’s schedule, reducing confusion and
              saving time.
            </p>

            <p>
              Built-in communication tools and appointment tracking help
              improve patient satisfaction and streamline healthcare services.
            </p>

            <p>
              The system automates scheduling, reminders, and payment
              processing so medical staff can focus more on patient care.
            </p>

            <p>
              The platform is customizable and scalable, making it suitable for
              clinics, hospitals, and large healthcare networks.
            </p>

            <p>
              Advanced security and compliance features ensure patient data
              protection and adherence to healthcare regulations.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}