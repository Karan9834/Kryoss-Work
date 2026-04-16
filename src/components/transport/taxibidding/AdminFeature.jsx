import React from "react";
import { User, Users, DollarSign, Car, Settings, Shield, BarChart3, Bell, Globe } from "lucide-react";
import dashboardImage from "../../../assets/Admin.webp"; // replace

const features = [
  {
    icon: User,
    title: "Account Oversight",
    desc: "Supervise user authentication, access rights, and the entire registration lifecycle.",
  },
  {
    icon: Users,
    title: "Partner Supervision",
    desc: "Audit service provider profiles and validate professional documentation.",
  },
  {
    icon: DollarSign,
    title: "Pricing Architecture",
    desc: "Configure tariff structures, promotional offers, and commission strategies.",
  },
  {
    icon: Car,
    title: "Dispatch Logistics",
    desc: "Coordinate driver allocations and supervise real-time service requests.",
  },
  {
    icon: Settings,
    title: "System Configuration",
    desc: "Adjust platform parameters and global service definitions with ease.",
  },
  {
    icon: Shield,
    title: "Safety Governance",
    desc: "Maintain ecosystem integrity with advanced fraud detection and secure protocols.",
  },
  {
    icon: BarChart3,
    title: "Insightful Analytics",
    desc: "Access detailed financial summaries and operational performance metrics.",
  },
  {
    icon: Bell,
    title: "Automated Alerts",
    desc: "Broadcast critical messages and promotional updates to your user base.",
  },
  {
    icon: Globe,
    title: "Regional Localization",
    desc: "Manage global operations with multi-currency support and localized settings.",
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
    Back-Office Administration
  </span>
</div>
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
       <div className="text-center mb-16">

  <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
    Orchestrate Your Enterprise Workflow with{" "}
    <span className="text-[#5aa114]">
      Vyom Mobility
    </span>
  </h2>

  <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
    Oversee every dimension of your mobility and logistics operations through a centralized command center.
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