import React from "react";
import {
  Search,
  Star,
  MapPin,
  Building2,
  Filter,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    desc: "Quickly find businesses with intelligent search and suggestions.",
  },
  {
    icon: Filter,
    title: "Advanced Filters",
    desc: "Refine results by category, rating, and location effortlessly.",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    desc: "Make better decisions with real customer feedback.",
  },
  {
    icon: MapPin,
    title: "Location Based",
    desc: "Discover nearby businesses with accurate geo-location.",
  },
  {
    icon: Building2,
    title: "Multi Categories",
    desc: "Explore businesses across multiple industries.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    desc: "All listings are verified for trust and reliability.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0A0F1C] via-[#0F172A] to-[#111827] py-24 px-6 overflow-hidden text-white">

      {/* Subtle Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Powerful Features for Better Discovery
          </h2>
          <p className="mt-4 text-gray-400">
            Everything you need to explore, compare, and connect with businesses seamlessly.
          </p>
        </div>

        {/* ===== GLASS CARDS ===== */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
              >

                {/* Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 blur-xl"></div>

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="w-12 h-12 bg-white/10 text-blue-400 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">
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

export default FeaturesSection;