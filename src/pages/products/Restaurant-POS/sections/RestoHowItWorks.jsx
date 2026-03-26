import React from "react";
import { ClipboardList, ChefHat, CreditCard, Heart } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Order Entry",
    desc: "Waiters take orders on mobile devices, instantly synced to the kitchen and bar.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: ChefHat,
    title: "Kitchen Prep",
    desc: "Kitchen staff receives items on digital screens with timers and priority alerts.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: CreditCard,
    title: "Quick Billing",
    desc: "Process payments at the table or counter with split-bill and multi-pay support.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Heart,
    title: "Guest Insights",
    desc: "Collect feedback and loyalty data to personalize future dining visits.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const RestoHowItWorks = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest block">The Dining Flow</span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1E293B]">
            Seamless Service <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">in 4 Simple Steps</span>
          </h2>
        </div>

        {/* 2x2 Simple Numerical Cards (Different from Crypto pages) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="group p-10 bg-white rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-indigo-100 flex items-start gap-8">
              <div className={`w-20 h-20 rounded-full ${step.bg} ${step.color} flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-500 relative`}>
                <step.icon size={36} />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#1E293B] text-white text-[10px] font-black flex items-center justify-center border-4 border-white">
                  0{idx + 1}
                </div>
              </div>
              <div className="space-y-4 pt-2">
                <h3 className="text-2xl font-bold text-[#1E293B] tracking-tighter group-hover:text-indigo-600 transition-colors">{step.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestoHowItWorks;
