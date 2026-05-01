import React from "react";
import { Search, Calendar, CreditCard, Plane, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Search & Discover",
    desc: "Travelers enter destination, dates, and preferences. AI-powered engine fetches live inventory from GDS, hotel APIs, and tour providers in milliseconds.",
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    connector: "bg-sky-200",
  },
  {
    step: "02",
    icon: Calendar,
    title: "Select & Customize",
    desc: "Pick from curated options, personalize packages — choose room type, add-ons, meal plans, or excursions — and see dynamic pricing update in real-time.",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-200",
    connector: "bg-teal-200",
  },
  {
    step: "03",
    icon: CreditCard,
    title: "Pay Securely",
    desc: "Checkout with your preferred gateway — cards, wallets, EMI, or crypto. PCI-DSS encryption and 3DS authentication keep every transaction safe.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    connector: "bg-amber-200",
  },
  {
    step: "04",
    icon: Plane,
    title: "Travel & Enjoy",
    desc: "Receive e-tickets, hotel vouchers, and itinerary on the app. Get live flight status, local tips, and 24/7 in-app support throughout the journey.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    connector: null,
  },
];

const TourBookingHowItWorks = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/3 translate-x-1/3"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-sky-400"></div>
            <span className="text-sky-600 font-bold text-sm uppercase tracking-widest">How It Works</span>
            <div className="w-8 h-px bg-sky-400"></div>
          </div>
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E293B]">
            From Search to <span className="text-sky-600">Take-Off</span> in 4 Steps
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mt-3">
            A frictionless booking journey designed to convert browsers into confirmed travelers.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gray-100 hidden md:block"></div>

          <div className="space-y-8">
            {steps.map((s, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row gap-6 relative">
                {/* Step indicator */}
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-14 h-14 rounded-2xl ${s.bg} border-2 ${s.border} flex items-center justify-center ${s.color} z-10 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <s.icon size={24} />
                  </div>
                </div>

                {/* Content card */}
                <div className={`flex-1 p-6 rounded-3xl ${s.bg} border ${s.border} group-hover:shadow-md transition-all duration-300`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-black ${s.color} uppercase tracking-widest`}>Step {s.step}</span>
                    <div className={`h-px flex-1 ${s.connector || 'bg-gray-100'}`}></div>
                    <CheckCircle size={16} className={s.color} />
                  </div>
                  <h3 className={`text-base font-bold text-[#1E293B] mb-2 group-hover:${s.color} transition-colors`}>{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourBookingHowItWorks;
