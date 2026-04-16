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
      title: "Operational Analytics",
      desc: "Utilizing the advanced analytics hub, administrators monitor global assignment volumes, fiscal trajectories, incoming requests, and stakeholder growth metrics.",
      icon: LayoutDashboard,
    },
    {
      title: "Practitioner Governance",
      desc: "Authorize pending specialist credentials or restrict specific accounts while maintaining a comprehensive registry of practitioner profile data.",
      icon: Users,
    },
    {
      title: "Certification Compliance",
      desc: "Define and modify mandatory documentation protocols for specialists, including professional licenses, identification, and specialized aesthetic permits.",
      icon: FileCheck,
    },
    {
      title: "Assignment Monitoring",
      desc: "Audit a comprehensive ledger of anticipated, authorized, current, fulfilled, and annulled treatments with high-fidelity detail.",
      icon: ClipboardList,
    },
    {
      title: "Service Taxonomy",
      desc: "Administrators can initialize, refine, or remove aesthetic categories, with the capability to toggle service availability status globally.",
      icon: Layers,
    },
    {
      title: "Fiscal Protocols",
      desc: "Orchestrate commission structures, authorized settlement gateways, and comprehensive platform financial parameters from a centralized module.",
      icon: CreditCard,
    },
    {
      title: "Global Configuration",
      desc: "Modify core platform identity, including brand logos, nomenclature, technical API integrations, and communication gateways.",
      icon: Settings,
    },
    {
      title: "Broadcast Systems",
      desc: "Disseminate localized or global broadcast alerts to the entire stakeholder network for critical updates or promotional campaigns.",
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
            Governance Control Center
          </div>

          <h3 className="text-lg sm:text-4xl font-bold text-gray-700 mb-6">
            <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">
              Elite Administrative Suite
            </span>{" "}
            for Aesthetic Enterprise Oversight
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Discover the sophisticated modules within our Governance Control Center, specifically 
            engineered to orchestrate your high-capacity aesthetic platform with precision.
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