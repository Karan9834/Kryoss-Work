import React from "react";
import { Download, Layout, Store, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Install & Sync",
    desc: "Download our cloud app and sync your initial inventory database.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    position: "lg:top-0 lg:left-1/2 lg:-translate-x-1/2"
  },
  {
    icon: Layout,
    title: "Customize UI",
    desc: "Set up your quick-access buttons and branded receipts.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    position: "lg:top-1/2 lg:right-0 lg:-translate-y-1/2"
  },
  {
    icon: Store,
    title: "Open Shop",
    desc: "Start processing sales with lightning-fast cloud checkouts.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    position: "lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2"
  },
  {
    icon: TrendingUp,
    title: "Monitor Growth",
    desc: "Track sales and inventory from your mobile device anywhere.",
    color: "text-rose-600",
    bg: "bg-rose-50",
    position: "lg:top-1/2 lg:left-0 lg:-translate-y-1/2"
  },
];

const RetailHowItWorks = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest block underline decoration-amber-400">The Modern Setup</span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1E293B]">
            Go Live in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600">4 Cloud Steps</span>
          </h2>
        </div>

        {/* Improved Responsive Circular Hub Layout */}
        <div className="relative w-full max-w-5xl mx-auto min-h-[500px] flex items-center justify-center">

          {/* Central Hub - Always Visible */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-2xl border-8 border-gray-100 flex items-center justify-center relative z-20 animate-pulse shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black text-[10px] md:text-xs uppercase tracking-tighter text-center px-2">Cloud Hub</div>
          </div>

          {/* Steps Positioning for Desktop */}
          <div className="hidden lg:block absolute inset-0">
            {steps.map((step, idx) => (
              <div key={idx} className={`absolute ${step.position} group p-4`}>
                <div className="flex flex-col items-center text-center space-y-4 max-w-[220px]">
                  <div className={`w-16 h-16 rounded-3xl ${step.bg} ${step.color} flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-500`}>
                    <step.icon size={28} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#1E293B] tracking-tight">{step.title}</h3>
                    <p className="text-gray-400 text-xs font-semibold leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet List for better visibility */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <div className="w-full h-full border-4 border-dashed border-gray-200 rounded-full"></div>
          </div>
        </div>

        <div className="lg:hidden grid sm:grid-cols-2 gap-8 w-full mt-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4 p-8 bg-white rounded-[3rem] shadow-xl">
              <div className={`w-16 h-16 rounded-3xl ${step.bg} ${step.color} flex items-center justify-center shadow-lg`}>
                <step.icon size={28} />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#1E293B]">{step.title}</h3>
              <p className="text-gray-500 text-sm font-semibold">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetailHowItWorks;
