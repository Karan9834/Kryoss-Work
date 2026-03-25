import React from "react";
import {
  Search,
  Calendar,
  Star,
  ShieldCheck,
  UserCheck,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Easy Service Discovery",
    desc: "Find the right service professionals quickly with smart search.",
  },
  {
    icon: Calendar,
    title: "Instant Booking",
    desc: "Schedule services at your preferred time with ease.",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    desc: "Choose providers based on real customer feedback.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Experts",
    desc: "All professionals are background-checked and verified.",
  },
  {
    icon: UserCheck,
    title: "Professional Profiles",
    desc: "View detailed profiles before booking services.",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    desc: "Reliable professionals who value your time.",
  },
];

const ServiceFeatures = () => {
  return (
    <section className="relative bg-[#0B0B0B] py-24 px-6 text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Powerful Features for Seamless Booking
          </h2>
          <p className="mt-4 text-gray-400">
            Everything you need to book services efficiently and confidently.
          </p>
        </div>

        {/* Glass Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
              >

                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-orange-500/10 blur-xl"></div>

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="w-12 h-12 bg-white/10 text-orange-400 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition">
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-lg font-semibold">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="mt-2 text-gray-400 text-sm">
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

export default ServiceFeatures;