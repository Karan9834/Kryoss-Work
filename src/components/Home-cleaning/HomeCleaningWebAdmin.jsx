import React from "react";
import {
  Users,
  CreditCard,
  FileCheck,
  BarChart3,
  Bell,
  TicketPercent,
  LayoutDashboard,
  Star,
} from "lucide-react";

const HomeCleaningWebAdmin = () => {
  const features = [
    {
      icon: Users,
      title: "Manage Provider",
      desc: "Admin can approve or reject provider profiles and view order history, reviews, and feedback.",
    },
    {
      icon: CreditCard,
      title: "Manage Payment Option",
      desc: "Admin can manage commission, tax, and available payment methods.",
    },
    {
      icon: FileCheck,
      title: "Manage Document",
      desc: "Admin can set required documents and verify provider uploaded documents.",
    },
    {
      icon: BarChart3,
      title: "Earning Report",
      desc: "View cleaner earnings and total system commission reports with full details.",
    },
    {
      icon: Bell,
      title: "Mass Notification",
      desc: "Send announcements, offers, and festival greetings to users and providers.",
    },
    {
      icon: TicketPercent,
      title: "Manage Promo Code",
      desc: "Add or remove promo codes with discount type, value, and expiry settings.",
    },
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      desc: "View site statistics, revenue reports, and new service requests graphically.",
    },
    {
      icon: Star,
      title: "View Review & Rating",
      desc: "Access provider reviews with service ID, user details, and timestamps.",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 mt-20 text-white overflow-x-hidden"
      style={{
        background: "linear-gradient(148.28deg, #00141A 19.1%, #004D65 80.9%)",
      }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-sm text-gray-700 mb-6">
          <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
          Web Admin Features
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          <span className="text-[#1d79c6]">
            Super Web Admin Panel Features
          </span>{" "}
          for Uber for House Cleaning App
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-4xl mx-auto mb-16">
          Explore the powerful features of our super admin web panel designed to
          manage and optimize your on-demand house cleaning business efficiently.
        </p>

        {/* Admin Panel Image */}
        <div className="mb-20">
          <img
            src="https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-admin-panel-section-image.webp"
            alt="Admin Panel"
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-xl"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white/10 p-6 rounded-2xl border border-white/20 
                         transition duration-300 hover:bg-white hover:shadow-xl"
              >

                {/* Top Row: Icon + Title */}
                <div className="flex items-center gap-4 mb-4">

                  <Icon className="w-12 h-12 text-cyan-400" />

                  <h3 className="text-lg font-semibold group-hover:text-black transition">
                    {item.title}
                  </h3>

                </div>

                {/* Description */}
                <p className="text-sm text-white/80 leading-relaxed group-hover:text-gray-700 transition">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default HomeCleaningWebAdmin;