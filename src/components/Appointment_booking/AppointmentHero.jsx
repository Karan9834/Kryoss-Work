import React from "react";
import hero from "../../assets/Appointment/appointmenthero.webp";
const AppointmentHero = () => {
  return (
    <section className="text-white bg-gradient-to-r from-[#0b0f3b] via-[#121a5a] to-[#1e2a78] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-end gap-10 pt-16">

        {/* LEFT CONTENT */}
        <div className="pb-10">

          {/* App label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-lg">
              A
            </div>

            <span className="text-lg font-semibold">
              Appointment Booking App
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug mb-5">
            Uber for Doctors App –{" "}
            <span className="text-cyan-400">
              Simplify Online Doctor Appointments
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 mb-8 max-w-xl">
            Improve healthcare accessibility with an advanced doctor
            appointment platform. Patients can easily book consultations
            while doctors manage schedules and appointments seamlessly
            through a powerful mobile solution available on Android and iOS.
          </p>

          {/* CTA */}
          <button className="bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 rounded-full font-medium hover:scale-105 transition">
            Let's Discuss →
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">

          <img
            src={hero}
            alt="Doctor appointment app"
            className="max-h-[420px] object-contain"
          />

        </div>

      </div>

    </section>
  );
};

export default AppointmentHero;