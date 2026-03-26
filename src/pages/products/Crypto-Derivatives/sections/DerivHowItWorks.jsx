import React from "react";
import { UserCheck, Sliders, ArrowRight, Activity, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "KYC Verification",
    desc: "Complete our automated 60-second verification process for high-leverage trading.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Sliders,
    title: "Choose Leverage",
    desc: "Select your preferred leverage from 2x up to 100x on supported perpetual pairs.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Activity,
    title: "Open Position",
    desc: "Use our advanced order types to open long or short positions with precise entry.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: TrendingUp,
    title: "Real-time Monitoring",
    desc: "Track your PnL, margin levels, and liquidation prices with live streaming data.",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];

const DerivHowItWorks = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="text-purple-600 font-bold text-sm uppercase tracking-[0.4em] block">Fast-Track Trading</span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1E293B]">
            Trading Journey in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">4 Precise Steps</span>
          </h2>
        </div>

        {/* Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative">
              <div className="flex flex-col items-center text-center space-y-8">
                <div className={`w-24 h-24 rounded-full ${step.bg} ${step.color} flex items-center justify-center border-4 border-white shadow-2xl group-hover:scale-110 transition-all duration-500 relative z-10`}>
                  <step.icon size={40} />
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[#0A0B14] text-white text-xs font-black flex items-center justify-center border-4 border-white">
                    {idx + 1}
                  </div>
                </div>

                <div className="space-y-4 px-4">
                  <h3 className="text-xl font-bold text-[#1E293B] tracking-tight text-center">{step.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* Connecting Dashed Line for Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+60px)] w-[calc(100%-120px)] h-0.5 border-t-2 border-dashed border-gray-200 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DerivHowItWorks;
