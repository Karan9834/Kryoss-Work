import React from "react";
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  BarChart3,
  CreditCard,
  Flag,
} from "lucide-react";
import AdminPanel from "../../assets/DatingApp/dashboard.webp";

const features = [
  {
    icon: <LayoutDashboard size={22} />,
    title: "Smart Dashboard",
    desc: "Track real-time engagement, user growth, and app performance from a powerful analytics dashboard.",
    iconColor: "text-pink-500",
    bg: "bg-pink-50",
    hover: "hover:text-pink-600",
  },
  {
    icon: <Users size={22} />,
    title: "User Management",
    desc: "Manage user profiles, permissions, and moderation tools through a centralized system.",
    iconColor: "text-purple-500",
    bg: "bg-purple-50",
    hover: "hover:text-purple-600",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Profile Verification",
    desc: "Verify user identities and ensure platform security with advanced moderation tools.",
    iconColor: "text-green-500",
    bg: "bg-green-50",
    hover: "hover:text-green-600",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Analytics & Insights",
    desc: "Gain insights into user behavior, retention, and growth trends through analytics.",
    iconColor: "text-blue-500",
    bg: "bg-blue-50",
    hover: "hover:text-blue-600",
  },
  {
    icon: <CreditCard size={22} />,
    title: "Subscription Control",
    desc: "Manage premium plans, billing cycles, and payment records easily.",
    iconColor: "text-yellow-500",
    bg: "bg-yellow-50",
    hover: "hover:text-yellow-600",
  },
  {
    icon: <Flag size={22} />,
    title: "Content Moderation",
    desc: "Monitor reports, remove harmful content, and keep the platform safe.",
    iconColor: "text-red-500",
    bg: "bg-red-50",
    hover: "hover:text-red-600",
  },
];

const DatingAdminPanel = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff7fa] to-[#f9f9ff] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block border px-4 py-1 rounded-full text-sm mb-4">
            Admin Dashboard
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Manage Your Platform with an
            <span className="text-pink-500"> Advanced Admin Panel</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Control every aspect of your dating platform through a modern
            admin dashboard designed to monitor users, manage activity,
            and optimize performance.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT CARDS */}
          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-6 md:-mr-16">

            {features.map((item, index) => (
              <div
                key={index}
                className={`${item.bg} rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-xl`}
              >
                <div className="flex items-start gap-4">

                  {/* ICON */}
                  <div className={`p-3 rounded-full bg-white shadow ${item.iconColor}`}>
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4
                      className={`font-semibold text-lg mb-1 transition ${item.hover} hover:italic`}
                    >
                      {item.title}
                    </h4>

                    <p className="text-gray-600 text-sm">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* RIGHT STICKY IMAGE */}
          <div className="sticky top-28 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a0838] to-[#3d0f6f] p-6">
              <img
                src={AdminPanel}
                alt="Admin Panel"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DatingAdminPanel;