import React from "react";
import { UserPlus, Layout, Settings, PieChart, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Account Setup",
    desc: "Create and verify your corporate or retail exchange account in minutes.",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: Layout,
    title: "Configure Terminal",
    desc: "Personalize your trading dashboard with charts, depth maps, and hotkeys.",
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
  {
    icon: Settings,
    title: "Deposit Assets",
    desc: "Fund your secure wallet with crypto or fiat via local payment gateways.",
    color: "text-cyan-600",
    bg: "bg-cyan-100",
  },
  {
    icon: PieChart,
    title: "Start Trading",
    desc: "Execute spot orders at the best prices with our deep liquidity pool.",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

const SpotHowItWorks = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="text-indigo-600 font-bold text-sm uppercase tracking-[0.3em] block underline decoration-indigo-200 underline-offset-8">The Workflow</span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold pt-4">
             Trading Made <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Simple in 4 Steps</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-6">
             Our platform is designed for professional results without the unnecessary complexity.
          </p>
        </div>

        {/* Vertical Journey Style — (Diverging from reference) */}
        <div className="relative max-w-4xl mx-auto">
             {/* Connecting Line */}
             <div className="absolute top-0 bottom-0 left-[40px] md:left-1/2 w-1 bg-gray-100 -translate-x-1/2"></div>

             <div className="space-y-20 relative z-10">
                {steps.map((step, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row items-center gap-10 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        {/* Content */}
                        <div className={`md:w-1/2 flex ${idx % 2 === 0 ? 'md:justify-end md:pr-16 text-right' : 'md:justify-start md:pl-16 text-left'}`}>
                             <div className="space-y-4 max-w-sm">
                                <h3 className="text-xl font-bold tracking-tight text-[#1A1C2C]">{step.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                             </div>
                        </div>

                        {/* Point */}
                        <div className="w-20 h-20 rounded-full border-8 border-white bg-white shadow-2xl flex items-center justify-center relative z-20 shrink-0">
                             <div className={`w-full h-full rounded-full ${step.bg} ${step.color} flex items-center justify-center animate-pulse`}>
                                <step.icon size={30} />
                             </div>
                        </div>

                        {/* Spacer */}
                        <div className="md:w-1/2"></div>
                    </div>
                ))}
             </div>
        </div>
      </div>
    </section>
  );
};

export default SpotHowItWorks;
