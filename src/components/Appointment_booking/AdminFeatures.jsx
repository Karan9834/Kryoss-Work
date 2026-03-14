import React from "react";
import {
  Users,
  CreditCard,
  CalendarDays,
  ClipboardList,
  Clock,
  BarChart3,
} from "lucide-react";

import adminDashboard from "../../assets/Appointment/appdashboard.webp";

export default function AdminFeatures() {
  const features = [
    {
      icon: <Users size={24} />,
      title: "Manage Doctors",
      text: "Admins can view doctor profiles, update information, and add or remove doctors from the system.",
    },
    {
      icon: <CreditCard size={24} />,
      title: "Payments & Billing",
      text: "Track transactions, generate invoices, monitor billing and process refunds securely.",
    },
    {
      icon: <ClipboardList size={24} />,
      title: "Manage Appointments",
      text: "Admins can oversee appointment schedules and edit or manage bookings easily.",
    },
    {
      icon: <CalendarDays size={24} />,
      title: "Calendar Booking",
      text: "Integrate with Google and iOS calendars to monitor doctor schedules and availability.",
    },
    {
      icon: <Clock size={24} />,
      title: "Manage Time",
      text: "Control clinic timings, appointment slots, and schedule adjustments in real time.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analytics & Reports",
      text: "Gain insights into appointments, patient activity, and revenue using detailed reports.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className="border px-4 py-1 rounded-full text-sm">
          Web Admin Features
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-4">
          Super Admin Web{" "}
          <span className="text-blue-600">
            Features of Our Uber For Doctors App
          </span>
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-16">
          Manage doctors, appointments, payments and platform operations through
          a powerful admin dashboard designed to give complete control over your
          healthcare ecosystem.
        </p>
      </div>

      {/* DARK FEATURE AREA */}
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Background Gradient Card */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0b0f3b] via-[#16245a] to-[#1e2a78] py-24 px-10 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] [background-size:40px_40px]" />

          {/* Monitor Image */}
          <div className="flex justify-center mb-12">
            <img
              src={adminDashboard}
              alt="Admin dashboard"
              className="max-h-[260px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            {features.map((item, index) => (
              <div
                key={index}
                className="group flex gap-4 p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                hover:bg-gradient-to-r hover:from-[#0b0f3b] hover:to-[#1e2a78]"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-blue-600
                group-hover:bg-blue-500 group-hover:text-white transition"
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div className="text-left">
                  <h4 className="font-semibold text-white mb-1">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-200 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
