import React from "react";
import {
  Search,
  Star,
  MapPin,
  Building2,
  Filter,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    desc: "Quickly find businesses with powerful search and keyword matching.",
    color: "blue",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverColor: "hover:bg-blue-500",
  },
  {
    icon: Filter,
    title: "Advanced Filters",
    desc: "Refine results by category, rating, location, and more.",
    color: "indigo",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    hoverColor: "hover:bg-indigo-500",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    desc: "Explore genuine customer feedback before making decisions.",
    color: "purple",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    hoverColor: "hover:bg-purple-500",
  },
  {
    icon: MapPin,
    title: "Location Based",
    desc: "Discover businesses near you with accurate location data.",
    color: "pink",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
    hoverColor: "hover:bg-pink-500",
  },
  {
    icon: Building2,
    title: "Multi Categories",
    desc: "Browse businesses across various industries and services.",
    color: "orange",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    hoverColor: "hover:bg-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    desc: "All businesses are verified to ensure trust and authenticity.",
    color: "green",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    hoverColor: "hover:bg-green-500",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F8FAFC] to-white py-24 px-6 overflow-hidden">
      
      {/* ===== Blue Waves at Top ===== */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.05"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* ===== Background Elements ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full mb-4 border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Platform Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Better Discovery
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Everything you need to find and connect with the right businesses quickly and efficiently.
          </p>
        </div>

        {/* ===== CARDS with Clean Hover Effects ===== */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
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
                
                {/* Decorative Line */}
                <div className={`w-12 h-1 bg-gray-200 rounded-full mt-5 group-hover:w-20 group-hover:bg-blue-500 transition-all duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== Blue Waves at Bottom ===== */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 80" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.05"
            d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,21.3C1120,21,1280,43,1360,53.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default FeaturesSection;