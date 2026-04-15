import React from "react";
import { Apple, Smartphone, Monitor } from "lucide-react";

import doctorApp from "../../assets/Appointment/doctor-app.webp";
import patientApp from "../../assets/Appointment/patient-app.webp";
import adminPanel from "../../assets/Appointment/admin-app.webp";

export default function PlatformsSection() {
  return (
    <section className="py-16 md:py-24 text-white bg-gradient-to-r from-[#0b0f3b] via-[#121a5a] to-[#0c6a7a]">

      <div className="max-w-7xl mx-auto px-5">

        {/* Badge */}
        <div className="text-center mb-5">
          <span className="border px-4 py-1 rounded-full text-xs md:text-sm">
            Our Deliverables
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl md:text-4xl font-semibold mb-4">
          Healthcare Applications Spanning{" "}
          <span className="text-cyan-400">Multiple Environments</span>
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10 md:mb-14 text-sm md:text-base">
          Digitize clinical provisions utilizing extensively adaptable scheduling
          architectures natively bridging Android, iOS, plus Web portals.
        </p>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 md:gap-8">

            {/* Doctor App */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 hover:bg-white/20 transition">

              <div className="flex-1 text-center md:text-left">

                <div className="flex justify-center md:justify-start gap-3 mb-4">

                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center">
                    <Smartphone size={18}/>
                  </div>

                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center">
                    <Apple size={18}/>
                  </div>

                </div>

                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  Specialist Mobile Applications
                </h3>

                <p className="text-gray-300 text-sm">
                  Our pre-built practitioner software assists clinical teams
                  overseeing sessions, health records alongside timetables
                  flawlessly via smartphones.
                </p>

              </div>

              <img
                src={doctorApp}
                alt="Doctor App"
                className="h-[150px] md:h-[170px] object-contain"
              />

            </div>

            {/* Patient App */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 hover:bg-white/20 transition">

              <div className="flex-1 text-center md:text-left">

                <div className="flex justify-center md:justify-start gap-3 mb-4">

                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center">
                    <Smartphone size={18}/>
                  </div>

                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center">
                    <Apple size={18}/>
                  </div>

                </div>

                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  Client Mobile Frameworks
                </h3>

                <p className="text-gray-300 text-sm">
                  Individuals rapidly identify local specialists, secure visits,
                  regulate sessions alongside obtaining diverse medical resources
                  via intuitive mobile interfaces.
                </p>

              </div>

              <img
                src={patientApp}
                alt="Patient App"
                className="h-[150px] md:h-[170px] object-contain"
              />

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:bg-white/20 transition">

            <div className="text-center md:text-left">

              <div className="flex justify-center md:justify-start mb-4">
                <div className="w-10 h-10 rounded-full border flex items-center justify-center">
                  <Monitor size={18}/>
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Central Management Dashboard
              </h3>

              <p className="text-gray-300 text-sm mb-6">
                Our overarching management portal supplies absolute authority covering
                personnel, users, bookings, financial tracking alongside insightful
                analytics, validating efficient operations.
              </p>

            </div>

            <img
              src={adminPanel}
              alt="Admin Panel"
              className="w-full object-contain rounded-xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}