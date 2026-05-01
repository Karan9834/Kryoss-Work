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
      title: "Clinical Overview",
      text: "Practitioners rapidly examine all upcoming patient visits alongside detailed medical background notes."
    },
    {
      icon: <User size={22} />,
      title: "Profile Setup",
      text: "Specialists modify their public portfolios covering medical expertise along with direct contact paths."
    },
    {
      icon: <Settings size={22} />,
      title: "Configurations",
      text: "Professionals handle access credentials, alert parameters, alongside broad application operational preferences."
    },
    {
      icon: <Clock size={22} />,
      title: "Roster Control",
      text: "Physicians thoroughly dictate their open hours alongside structurally organizing clinical availability routines."
    },
    {
      icon: <FileText size={22} />,
      title: "Health Records",
      text: "Experts instantly retrieve individual contact documents alongside corresponding comprehensive session histories."
    },
    {
      icon: <LogIn size={22} />,
      title: "Encrypted Access",
      text: "Practitioners authenticate securely leveraging high-standard data protection verification methodologies safely."
    }
  ];

  const patientFeatures = [
    {
      icon: <UserPlus size={22} />,
      title: "Onboarding Process",
      text: "Individuals rapidly set up personal profiles supplying essential demographic medical statistics."
    },
    {
      icon: <Calendar size={22} />,
      title: "Session Tracking",
      text: "Users comprehensively monitor forthcoming bookings alongside historical clinical consultation archives thoroughly."
    },
    {
      icon: <User size={22} />,
      title: "Specialist Intel",
      text: "Individuals meticulously browse practitioner backgrounds highlighting clinical expertise alongside medical credentials."
    },
    {
      icon: <List size={22} />,
      title: "Medical Directory",
      text: "Users navigate across active specialist listings and select aligned healthcare professionals."
    },
    {
      icon: <CheckCircle size={22} />,
      title: "Booking Verification",
      text: "Individuals lock in chosen timings and simultaneously acquire instant booking confirmations."
    },
    {
      icon: <User size={22} />,
      title: "Account Management",
      text: "Users modify sensitive personal demographics alongside associated emergency contact data securely."
    }
  ];

  const features = activeTab === "doctor" ? doctorFeatures : patientFeatures;
  const centerImage = activeTab === "doctor" ? doctorFeature : patientFeature;

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="border px-4 py-1 rounded-full text-sm">
          Capabilities
        </span>

        <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-4">
          Core Functionalities of Our{" "}
          <span className="text-blue-600">
            Healthcare Mobile Platform
          </span>
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          Our medical reservation ecosystem packs advanced technical tools
          serving practitioners and users, ensuring frictionless bookings,
          enhanced interactions, alongside optimized clinical operations.
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