import React from "react";
import {
  LayoutDashboard,
  Users,
  Car,
  CalendarCheck,
  BarChart3,
  Bell,
  Route,
  CreditCard
} from "lucide-react";

const AdminPanelSection = () => {

  const features = [
    {
      icon: LayoutDashboard,
      title: "Powerful Dashboard",
      desc: "Our software offers a user-friendly dashboard with powerful management tools, displaying highlights in graphical form.",
    },
    {
      icon: Users,
      title: "Manage Users & Driver",
      desc: "Admin can see & manage both users & drivers details with name, email, contact details, city, and ride details.",
    },
    {
      icon: Car,
      title: "Manage Car Models",
      desc: "Admin can add and edit car models through admin panels and remove any car models.",
    },
    {
      icon: CalendarCheck,
      title: "Date Validations",
      desc: "Admin can set date validation to manage booking window and other date settings.",
    },
    {
      icon: BarChart3,
      title: "Earning Report",
      desc: "Admin can manage earning reports daily, weekly, monthly and yearly.",
    },
    {
      icon: Bell,
      title: "Mass Notification",
      desc: "Admin can send push notifications to all users and drivers or specific conditions.",
    },
    {
      icon: Route,
      title: "Manage Ride",
      desc: "Admin can complete or cancel rides in case of unacceptable circumstances.",
    },
    {
      icon: CreditCard,
      title: "Payment Settings",
      desc: "Admin can set payment settings like commission, tax percentages and more.",
    },
  ];

  return (
    <section
      className="py-12 md:py-14 mt-16 md:mt-20 text-white"
      style={{
        background: "linear-gradient(180deg, #00458E 0%, #000328 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-xs md:text-sm text-gray-700 mb-6">
          <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
          Web Admin Panel
        </div>

        {/* Heading */}
        <h2 className="text-[28px] md:text-[40px] font-semibold mb-6">
          Carpooling Clone Script Admin Features
        </h2>

        <p className="text-base md:text-lg text-white/80 max-w-5xl mx-auto mb-12 md:mb-16">
          Our carpooling clone script offers powerful admin features, including
          easy management of rides, payments, and user accounts.
        </p>

        {/* Image */}
        <div className="mb-12 md:mb-20">
          <img
            src="https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-admin-panel-features-image.webp"
            alt="Admin Panel"
            className="w-full rounded-2xl"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex gap-4 md:gap-5 bg-white/10 p-5 md:p-6 rounded-2xl border border-white/20 transition duration-300 hover:bg-white"
              >

                {/* Icon */}
                <div className="flex-shrink-0">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 group-hover:text-black transition" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-black transition">
                    {item.title}
                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed group-hover:text-gray-700 transition">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default AdminPanelSection;