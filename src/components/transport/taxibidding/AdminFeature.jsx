import React from "react";
import { User, Users, DollarSign, Car, Settings, Shield, BarChart3, Bell, Globe } from "lucide-react";
import dashboardImage from "../../../assets/Admin.webp"; // replace

const features = [
  {
    icon: User,
    title: "User Management",
    desc: "Manage user accounts, login credentials and onboarding flow.",
  },
  {
    icon: Users,
    title: "Driver Management",
    desc: "Monitor driver profiles and verify their credentials.",
  },
  {
    icon: DollarSign,
    title: "Fare Management",
    desc: "Define pricing strategies, discounts and revenue models.",
  },
  {
    icon: Car,
    title: "Ride Management",
    desc: "Assign drivers and monitor ride requests easily.",
  },
  {
    icon: Settings,
    title: "App Settings",
    desc: "Control app configurations and service settings.",
  },
  {
    icon: Shield,
    title: "Security Control",
    desc: "Ensure platform safety and secure transactions.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "View revenue insights and booking performance.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    desc: "Send alerts and updates to users instantly.",
  },
  {
    icon: Globe,
    title: "Multi-Currency",
    desc: "Support multiple currencies and regional pricing.",
  },
];

const AdminFeaturesSection = () => {
  return (
    <section className="w-full py-20 bg-white">
        {/* Green Pill */}
<div className="flex justify-center mb-6">
  <span className="
    inline-flex items-center gap-2
    text-sm font-medium
    text-[#5aa114]
    border border-[#b6d38b]
    bg-white/70 backdrop-blur-sm
    px-4 py-1.5
    rounded-full
  ">
    <span className="w-2 h-2 bg-[#5aa114] rounded-full"></span>
    Admin Features
  </span>
</div>
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
       <div className="text-center mb-16">

  <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
    Control Your Business Operations with{" "}
    <span className="text-[#5aa114]">
      Kryoss Work
    </span>
  </h2>

  <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
    Manage every aspect of your ride-hailing and parcel-delivery services from a single platform.
  </p>

</div>
        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE - Scrollable Cards */}
          <div className="space-y-8">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex gap-6 p-8 rounded-3xl border border-[#a6c77a]
                             bg-[#eef4e1] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#5aa114] rounded-xl
                                  flex items-center justify-center text-white">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#5aa114] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE - Sticky Image */}
          <div className="relative hidden lg:block">

            <div className="sticky top-24">
              <img
                src={dashboardImage}
                alt="Admin Dashboard"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AdminFeaturesSection;