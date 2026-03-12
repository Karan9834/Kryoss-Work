import React from "react";
import {
  LayoutDashboard,
  Users,
  FileCheck,
  ClipboardList,
  Layers,
  CreditCard,
  Settings,
  Bell,
} from "lucide-react";

const WebAdminPanel = () => {
  const features = [
    {
      title: "Dashboard",
      desc: "With the powerful dashboard, admin can view the total order request, total revenue, new order request, and new users & providers.",
      icon: LayoutDashboard,
    },
    {
      title: "Manage Provider",
      desc: "Admin can approved pending providers and blocked the provider and also view & edit the provider’s details like name, contact details, address, etc.",
      icon: Users,
    },
    {
      title: "Manage Document",
      desc: "Admin can add and edit the required document for beauticians like a salon certificate, beautician id, and more document.",
      icon: FileCheck,
    },
    {
      title: "View Order List",
      desc: "Admin can view the list of pending, approved, rejected, ongoing, completed, and canceled order with details.",
      icon: ClipboardList,
    },
    {
      title: "Manage Service Category",
      desc: "Admin can add, update, and delete the category of service. They can also set the status of the category as ON/OFF.",
      icon: Layers,
    },
    {
      title: "Payment Setting",
      desc: "Admin can manage the payment settings of the site provider commission amount, payment methods of the site like cash, card, wallet.",
      icon: CreditCard,
    },
    {
      title: "Site Setting",
      desc: "Admin can change the site logo, site name, contact details, app links, SMS gateway key, Google map API key from site setting.",
      icon: Settings,
    },
    {
      title: "Mass Notifications",
      desc: "Admin can send the mass notification message to all users, and service providers. The features used when an admin wants to broadcast message.",
      icon: Bell,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== Center Content ===== */}
        <div className="text-center max-w-6xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-sm text-gray-700 mb-6">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
            Web Admin Panel
          </div>

          <h3 className="text-lg sm:text-4xl font-bold text-gray-700 mb-6">
            <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">
              Super Admin Web Features
            </span>{" "}
            for Beauty Services
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Explore the powerful features of our Super Admin Web Panel, designed to help you efficiently manage your on-demand beauty service business.
          </p>

        </div>

        {/* ===== Layout ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SCROLLABLE CARDS */}
          <div className="max-h-[540px] overflow-y-auto pr-3 space-y-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}>

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group border rounded-2xl p-6 transition duration-300
                   border-[#FF2485]
                   hover:font-thin 
                   hover:text-white"
                >

                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-3">

                    <Icon className="w-12 h-12 text-[#FF2485]" />

                    <h4 className="font-semibold text-lg bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">
                      {item.title}
                    </h4>

                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 group-hover:text-black/90 transition">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://whitelabelfox.com/assets/images/uber-beauty-app/Fox-Beauty-Admin-panel-features-UI.webp"
              alt="Provider Admin Panel"
              className="w-full max-w-lg lg:max-w-xl rounded-2xl shadow-xl"
              style={{
                background:
                  "radial-gradient(59.06% 82.5% at 34.55% 19.49%, #45123D 0%",
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default WebAdminPanel;