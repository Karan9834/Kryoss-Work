import React, { useState } from "react";
import {
  Calendar,
  User,
  Settings,
  Clock,
  FileText,
  LogIn,
  UserPlus,
  List,
  CheckCircle
} from "lucide-react";

import doctorFeature from "../../assets/Appointment/appdoctor.webp";
import patientFeature from "../../assets/Appointment/appatient.webp";

export default function DoctorAppFeatures() {

  const [activeTab, setActiveTab] = useState("doctor");

  const doctorFeatures = [
    {
      icon: <Calendar size={22} />,
      title: "Appointment List",
      text: "Doctors can quickly view all scheduled consultations with patient details and timing."
    },
    {
      icon: <User size={22} />,
      title: "Manage Profile",
      text: "Doctors can update their professional profile including specialization and contact information."
    },
    {
      icon: <Settings size={22} />,
      title: "Settings",
      text: "Doctors can manage password, notifications and system preferences easily."
    },
    {
      icon: <Clock size={22} />,
      title: "Manage Time",
      text: "Doctors can control availability and manage appointment schedules efficiently."
    },
    {
      icon: <FileText size={22} />,
      title: "Patient Details",
      text: "Doctors can access patient contact details and appointment information."
    },
    {
      icon: <LogIn size={22} />,
      title: "Secure Login",
      text: "Doctors can log in safely using protected authentication systems."
    }
  ];

  const patientFeatures = [
    {
      icon: <UserPlus size={22} />,
      title: "Registration",
      text: "Patients can quickly create an account using basic information."
    },
    {
      icon: <Calendar size={22} />,
      title: "Appointments",
      text: "Patients can view upcoming and past consultations easily."
    },
    {
      icon: <User size={22} />,
      title: "Doctor Details",
      text: "Patients can explore doctor profiles with experience and specialization."
    },
    {
      icon: <List size={22} />,
      title: "Doctor List",
      text: "Patients can browse available doctors and choose specialists."
    },
    {
      icon: <CheckCircle size={22} />,
      title: "Confirm Appointment",
      text: "Patients can confirm bookings and receive appointment updates."
    },
    {
      icon: <User size={22} />,
      title: "Manage Profile",
      text: "Patients can update personal information and contact details."
    }
  ];

  const features = activeTab === "doctor" ? doctorFeatures : patientFeatures;
  const centerImage = activeTab === "doctor" ? doctorFeature : patientFeature;

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="border px-4 py-1 rounded-full text-sm">
          Features
        </span>

        <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-4">
          Key Features of Our{" "}
          <span className="text-blue-600">
            Uber For Doctors App
          </span>
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          Our doctor appointment platform includes powerful features
          for both doctors and patients, ensuring seamless scheduling,
          better communication and efficient healthcare services.
        </p>

        {/* Toggle */}
        <div className="flex justify-center gap-3 mb-16">

          <button
            onClick={() => setActiveTab("doctor")}
            className={`px-6 py-2 rounded-full border ${
              activeTab === "doctor"
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
          >
            Doctor App
          </button>

          <button
            onClick={() => setActiveTab("patient")}
            className={`px-6 py-2 rounded-full border ${
              activeTab === "patient"
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
          >
            Patient App
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* LEFT FEATURES */}
          <div className="space-y-6">

            {features.slice(0,3).map((item,index)=>(
              <div
                key={index}
                className="group border rounded-xl p-6 text-left transition duration-300 hover:bg-gradient-to-r hover:from-[#0b0f3b] hover:to-[#1e2a78] hover:text-white"
              >

                <div className="flex items-start gap-3">

                  <div className="text-blue-600 group-hover:text-white">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold mb-1">
                      {item.title}
                    </h4>

                    <p className="text-sm opacity-80">
                      {item.text}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <img
              src={centerImage}
              alt="app preview"
              className="max-h-[420px] object-contain"
            />
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-6">

            {features.slice(3,6).map((item,index)=>(
              <div
                key={index}
                className="group border rounded-xl p-6 text-left transition duration-300 hover:bg-gradient-to-r hover:from-[#0b0f3b] hover:to-[#1e2a78] hover:text-white"
              >

                <div className="flex items-start gap-3">

                  <div className="text-blue-600 group-hover:text-white">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold mb-1">
                      {item.title}
                    </h4>

                    <p className="text-sm opacity-80">
                      {item.text}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}