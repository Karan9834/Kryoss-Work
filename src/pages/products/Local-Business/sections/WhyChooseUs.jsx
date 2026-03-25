import React from "react";
import {
  ShieldCheck,
  Star,
  Zap,
  Users,
  Search,
  BadgeCheck,
  Sparkles,
  Heart,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Verified Businesses",
    desc: "All listings go through verification to ensure trust and authenticity.",
    color: "blue",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverColor: "hover:bg-blue-500",
  },
  {
    icon: Star,
    title: "Real Reviews",
    desc: "Genuine customer feedback helps you make better decisions.",
    color: "yellow",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
    hoverColor: "hover:bg-yellow-500",
  },
  {
    icon: Zap,
    title: "Fast & Easy Search",
    desc: "Find the right business instantly with our optimized search system.",
    color: "purple",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    hoverColor: "hover:bg-purple-500",
  },
  {
    icon: Users,
    title: "Large User Base",
    desc: "Thousands of users trust our platform every day.",
    color: "green",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    hoverColor: "hover:bg-green-500",
  },
  {
    icon: Search,
    title: "Advanced Discovery",
    desc: "Smart filters and categories to refine your search experience.",
    color: "indigo",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    hoverColor: "hover:bg-indigo-500",
  },
  {
    icon: BadgeCheck,
    title: "Quality Listings",
    desc: "We maintain high-quality listings across all categories.",
    color: "rose",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
    hoverColor: "hover:bg-rose-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      
      {/* ===== Background Elements ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full mb-4 border border-blue-200">
            <Heart className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Our Platform
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We provide a reliable and efficient way to discover and connect with businesses.
          </p>
        </div>

        {/* ===== CARDS ===== */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon size={24} className={item.iconColor} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom Hover Line */}
                <div className="w-12 h-0.5 bg-gray-200 rounded-full mt-5 group-hover:w-20 group-hover:bg-blue-500 transition-all duration-300"></div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;