import React from "react";
import { UserPlus, Layout, Settings, PieChart, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Onboard Agencies & Agents",
    desc: "Set up your agency profile and invite your sub-agents and team members to the platform.",
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
  {
    icon: Layout,
    title: "Define Rules & Contracts",
    desc: "Configure your commission structures, vendor contracts, and dynamic pricing rules.",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    icon: Settings,
    title: "Manage Bookings & Ops",
    desc: "Handle daily bookings, manage cancellations, and automate vendor payments via the dash.",
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    icon: PieChart,
    title: "Get Real-time Analytics",
    desc: "Track revenue, agent performance, and agency growth with detailed reporting tools.",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
];

const AgencyManagementHowItWorks = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl opacity-50 pointer-events-none translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-amber-600 font-bold text-sm uppercase tracking-widest block">The Workflow</span>
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E293B]">
             Smart Operations in <span className="text-amber-600">4 Simple Steps</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
             How our management system transforms your agency operations from manual to fully automated.
          </p>
        </div>

        {/* Horizontal Flow Steps — Different from vertical timeline in other page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative">
              {/* Step Icon & Circle */}
              <div className="flex flex-col items-center text-center space-y-6">
                <div className={`w-20 h-20 rounded-[30%] ${step.bg} ${step.color} flex items-center justify-center border-4 border-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                  <step.icon size={36} />
                  {/* Step Number Overlay */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#1E293B] text-white text-[10px] font-black flex items-center justify-center border-2 border-white shadow-sm">
                    {idx + 1}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-amber-600 transition-colors uppercase tracking-tight">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* Connecting Arrow for Desktop — Different visual helper */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+60px)] w-[calc(100%-120px)] pointer-events-none">
                  <div className="flex items-center gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                    ))}
                    <ArrowRight size={16} className="text-amber-600 mb-0.5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyManagementHowItWorks;
