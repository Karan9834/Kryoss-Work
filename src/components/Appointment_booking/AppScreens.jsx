import React, { useState } from "react";

import doctor1 from "../../assets/Appointment/doctor-screen-1.webp";
import doctor2 from "../../assets/Appointment/doctor-screen-2.webp";
import doctor3 from "../../assets/Appointment/doctor-screen-3.webp";
import doctor4 from "../../assets/Appointment/doctor-screen-4.webp";
import doctor5 from "../../assets/Appointment/doctor-screen-5.webp";

import patient1 from "../../assets/Appointment/patient-screen-1.webp";
import patient2 from "../../assets/Appointment/patient-screen-2.webp";
import patient3 from "../../assets/Appointment/patient-screen-3.webp";
import patient4 from "../../assets/Appointment/patient-screen-4.webp";
import patient5 from "../../assets/Appointment/patient-screen-5.webp";

const doctorScreens = [doctor1, doctor2, doctor3, doctor4, doctor5];
const patientScreens = [patient1, patient2, patient3, patient4, patient5];

export default function AppScreens() {

  const [activeTab, setActiveTab] = useState("doctor");

  const screens = activeTab === "doctor" ? doctorScreens : patientScreens;

  return (
    <section className="py-20 bg-gradient-to-r from-[#0b0f3b] via-[#121a5a] to-[#1e2a78] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="border px-4 py-1 rounded-full text-sm">
          Uber For Doctors App At A Glance
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-4">
          Explore Our{" "}
          <span className="text-cyan-400">
            Doctor Booking App
          </span>{" "}
          Screens
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-3xl mx-auto mb-10">
          Discover how our doctor appointment platform simplifies
          booking, scheduling, and patient management through a
          modern and intuitive mobile experience.
        </p>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">

          <button
            onClick={() => setActiveTab("doctor")}
            className={`px-6 py-2 rounded-full border transition ${
              activeTab === "doctor"
                ? "bg-white text-black"
                : "bg-white/20"
            }`}
          >
            Doctor App
          </button>

          <button
            onClick={() => setActiveTab("patient")}
            className={`px-6 py-2 rounded-full border transition ${
              activeTab === "patient"
                ? "bg-white text-black"
                : "bg-white/20"
            }`}
          >
            Patient App
          </button>

        </div>

      </div>

      {/* Moving Screens */}
      <div className="overflow-hidden">

        <div
          key={activeTab}  /* Important: resets animation when switching */
          className="app-marquee flex gap-10"
        >

          {[...screens, ...screens].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="App screen"
              className="h-[420px] object-contain hover:scale-105 transition duration-300"
            />
          ))}

        </div>

      </div>

    </section>
  );
}