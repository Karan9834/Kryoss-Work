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
      text: "Administrators visually inspect practitioner accounts, modify credentials, plus register or delete individual medical experts.",
    },
    {
      icon: <CreditCard size={24} />,
      title: "Payments & Billing",
      text: "Track financial exchanges, export invoicing records, observe payments, plus administer secure monetary refunds.",
    },
    {
      icon: <ClipboardList size={24} />,
      title: "Manage Appointments",
      text: "Managers thoroughly control session logs alongside seamlessly modifying or rearranging patient checkup schedules.",
    },
    {
      icon: <CalendarDays size={24} />,
      title: "Calendar Booking",
      text: "Synchronize directly utilizing Google alongside Apple schedulers to accurately track physician availability periods.",
    },
    {
      icon: <Clock size={24} />,
      title: "Manage Time",
      text: "Govern hospital operating hours, individual timeframes, alongside immediate live slot modifications dynamically.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analytics & Reports",
      text: "Extract analytical intelligence covering clinical visits, user retention, plus overarching system revenue statistics.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className="border px-4 py-1 rounded-full text-sm">
          Management Dashboard Tools
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-4">
          Super Admin Backend{" "}
          <span className="text-blue-600">
            Capabilities of Our Medical App
          </span>
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-16">
          Oversee physicians, bookings, financials, alongside system parameters
          utilizing a robust centralized panel structured to provide absolute
          authority within your clinical platform.
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
