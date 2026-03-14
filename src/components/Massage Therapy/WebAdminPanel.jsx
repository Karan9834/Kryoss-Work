import React from "react";
import {
  UserCheck,
  Users,
  MapPin,
  CreditCard,
  TicketPercent,
  Star,
} from "lucide-react";

const WebAdminPanel = () => {
  const features = [
    {
      title: "Manage Therapist",
      desc: "Admin can manage the therapist by reviewing documents, monitoring their performance, location, and revenue.",
      icon: UserCheck,
    },
    {
      title: "Manage User",
      desc: "Admin can manage and view user information like name, contact details, booking request, location, and more.",
      icon: Users,
    },
    {
      title: "Real-time Tracking",
      desc: "Admin can track service providers and booking status in real-time with analytics.",
      icon: MapPin,
    },
    {
      title: "Payment Setting",
      desc: "Admin can manage commission, tax percentages, payment gateways, and payment types.",
      icon: CreditCard,
    },
    {
      title: "Promo Code",
      desc: "Admin can add, edit, and manage promo codes including limits and offer types.",
      icon: TicketPercent,
    },
    {
      title: "Reviews",
      desc: "Admin can monitor feedback and ratings submitted by users for therapists.",
      icon: Star,
    },
  ];

  return (
    <section
      className="py-20 text-white"
      style={{
        background:
          "radial-gradient(140.19% 341.98% at -24.66% 133.05%, #0E0104 0%, #1C0109 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-10">
          Super <span className="text-[#FF2C87]">Admin Web Features for Uber for Massage </span> App
        </h2>

        <p className="max-w-3xl mb-4">
          Panel control over the Uber for Massage app. Manage users, service providers,
          bookings, and payments from one dashboard.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SCROLLABLE TIMELINE */}
          <div className="relative pl-12 max-h-[520px] overflow-y-auto pr-4 "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}>

            {/* vertical line */}
            <div className="absolute left-5 top-0 h-full border-l border-dashed border-gray-600"></div>

            <div className="space-y-8">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="relative">

                    {/* timeline icon */}
                    <div className="absolute -left-[34px] top-2 w-10 h-10 rounded-full bg-[#2d0a13] flex items-center justify-center border border-gray-600">
                      <Icon className="w-5 h-5 text-[#FF2C87]" />
                    </div>

                    {/* card */}
                    <div className="bg-[#1a0308] border border-[#3c0a16] rounded-xl p-6">
                      <h4 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h4>

                      <p className="text-gray-400 text-sm">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://whitelabelfox.com/assets/images/uber-massage-therapy-app/fox-massage-admin-panel-feature-mockup.webp"
              alt="Admin Panel"
              className="w-full max-w-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebAdminPanel;