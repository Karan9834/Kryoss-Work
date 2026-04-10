import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import card1 from "../../assets/Doctor-Health-App/product1.jpg";
import card2 from "../../assets/Doctor-Health-App/product2.jpg";
import prod1 from "../../assets/E-Commerce-Product/prod1.jpg";
import prod2 from "../../assets/E-Commerce-Product/prod2.jpg";
import card1Img from '@/assets/educationlanding-img/educationlandingcard1.jpg';
import card2Img from '@/assets/educationlanding-img/educationlandingcard2.jpg';
import trans1 from '../../assets/transportlanding-img/flower.jpg';
import trans2 from '../../assets/transportlanding-img/towy.jpg';

const categories = [
  {
    label: "Healthcare",
    color: "#5B8CFF",
    gradient: "from-[#5B8CFF] to-[#5B8CFF]",
    lightBg: "bg-[#5B8CFF]/10",
    borderColor: "border-[#5B8CFF]/30",
    hoverBorder: "hover:border-[#5B8CFF]",
    textColor: "text-[#5B8CFF]",
    bgGradient: "from-[#5B8CFF]/8 via-[#5B8CFF]/3 to-transparent",
    bgGlow: "bg-[#5B8CFF]/5",
    items: [
      {
        id: 1,
        title: "docrib",
        sub: "Appointment Booking",
        description: "Book consultations with top specialists instantly",
        img: card1,
        tags: ["React Native", "Video Call", "AI"],
        color: "from-[#5B8CFF]/80",
        route: "/products/social/appointment-booking",
      },
      {
        id: 2,
        title: "Medix Pro",
        sub: "Medicine Delivery",
        description: "Medicines delivered to your doorstep in minutes",
        img: card2,
        tags: ["Flutter", "Live Tracking", "GPS"],
        color: "from-[#00C2A8]/80",
        route: "/products/delivery/medicine-delivery",
      },
    ],
  },
  {
    label: "Shopping",
    color: "#F97316",
    gradient: "from-orange-500 to-orange-500",
    lightBg: "bg-orange-50",
    borderColor: "border-orange-200",
    hoverBorder: "hover:border-orange-500",
    textColor: "text-orange-600",
    bgGradient: "from-orange-500/8 via-orange-500/3 to-transparent",
    bgGlow: "bg-orange-500/5",
    items: [
      {
        title: "SnapCart",
        sub: "Food Delivery Platform",
        description: "Launch your own food delivery platform with real-time tracking and seamless ordering.",
        img: prod1,
        tags: ["React Native", "Real-time Tracking", "Payment Gateway"],
        color: "from-orange-500/80",
        route: "/products/snapcart",
      },
      {
        title: "OmniCart",
        sub: "Restaurant Management",
        description: "Empower restaurants with digital menus, order management, and customer engagement tools.",
        img: prod2,
        tags: ["Order Management", "Analytics", "Customer Engagement"],
        color: "from-orange-500/80",
        route: "/products/omnicart",
      },
    ],
  },
  {
    label: "Education",
    color: "#10B981",
    gradient: "from-emerald-500 to-emerald-500",
    lightBg: "bg-emerald-50",
    borderColor: "border-emerald-200",
    hoverBorder: "hover:border-emerald-500",
    textColor: "text-emerald-600",
    bgGradient: "from-emerald-500/8 via-emerald-500/3 to-transparent",
    bgGlow: "bg-emerald-500/5",
    items: [
      {
        title: "Bookingo",
        sub: "Tutor Booking App",
        description: "Complete tutor booking and management platform with video integration.",
        img: card1Img,
        tags: ["Video Integration", "Booking System", "Payment Gateway"],
        color: "from-emerald-500/80",
        route: "/products/home-service/tutor",
      },
      {
        title: "Academy",
        sub: "Tutor Booking Platform",
        description: "Comprehensive online learning and course management solution.",
        img: card2Img,
        tags: ["Course Management", "Online Learning", "Analytics"],
        color: "from-emerald-500/80",
        route: "/products/tutor-booking",
      },
    ],
  },
  {
    label: "Transport",
    color: "#8B5CF6",
    gradient: "from-purple-500 to-purple-500",
    lightBg: "bg-purple-50",
    borderColor: "border-purple-200",
    hoverBorder: "hover:border-purple-500",
    textColor: "text-purple-600",
    bgGradient: "from-purple-500/8 via-purple-500/3 to-transparent",
    bgGlow: "bg-purple-500/5",
    items: [
      {
        title: "Tow Truck Platform",
        sub: "Roadside Assistance",
        description: "On-demand roadside assistance with dispatch panel and real-time tracking.",
        img: trans1,
        tags: ["Real-time Tracking", "Dispatch Panel", "GPS"],
        color: "from-purple-500/80",
        route: "/products/home-service/tow-truck",
      },
      {
        title: "Snow Removal Solution",
        sub: "Fleet Management",
        description: "Automated booking and tracking platform designed for fleet management.",
        img: trans2,
        tags: ["Fleet Management", "Automated Booking", "Live Tracking"],
        color: "from-purple-500/80",
        route: "/products/home-service/snow-removal",
      },
    ],
  },
];

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const active = categories[activeTab];

  return (
    <section
      id="portfolio"
      className="relative py-24 overflow-hidden transition-all duration-700 ease-in-out"
      style={{ backgroundColor: '#F1F5F9' }}
    >
      {/* Dynamic Background that changes with category */}
      <div className="absolute inset-0 transition-all duration-700 ease-in-out">
        <div 
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-3xl transition-all duration-700 ease-in-out`}
          style={{ 
            background: `radial-gradient(circle, ${active.color}20 0%, transparent 70%)`,
          }}
        />
        <div 
          className={`absolute bottom-0 right-0 w-[600px] h-[500px] rounded-full blur-3xl transition-all duration-700 ease-in-out`}
          style={{ 
            background: `radial-gradient(circle, ${active.color}15 0%, transparent 70%)`,
          }}
        />
        <div 
          className={`absolute top-20 right-20 w-[400px] h-[400px] rounded-full blur-3xl transition-all duration-700 ease-in-out`}
          style={{ 
            background: `radial-gradient(circle, ${active.color}10 0%, transparent 70%)`,
          }}
        />
        <div 
          className={`absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full blur-3xl transition-all duration-700 ease-in-out`}
          style={{ 
            background: `radial-gradient(circle, ${active.color}08 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Subtle Grid Pattern - Darker */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 transition-all duration-300 ${active.borderColor}`} style={{ backgroundColor: `${active.color}10` }}>
            <span className={`w-2 h-2 rounded-full ${active.textColor} animate-pulse`} />
            <span className={`${active.textColor} text-xs font-semibold uppercase tracking-widest`}>
              Our Portfolio
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
            Work That{" "}
            <span className={`bg-gradient-to-r ${activeTab === 0 ? 'from-[#5B8CFF] to-[#00C2A8]' : activeTab === 1 ? 'from-orange-500 to-orange-600' : activeTab === 2 ? 'from-emerald-500 to-emerald-600' : 'from-purple-500 to-purple-600'} bg-clip-text text-transparent italic`}>
              Speaks for Itself
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Explore our portfolio across industries — built with precision,
            shipped with pride.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden group ${
                activeTab === i
                  ? `bg-gradient-to-r ${cat.gradient} text-white shadow-lg transform scale-105`
                  : `bg-white/80 backdrop-blur-sm ${cat.textColor} border-2 ${cat.borderColor} hover:scale-105`
              }`}
              style={{
                boxShadow: activeTab === i ? `0 10px 25px -5px ${cat.color}40` : "none",
              }}
            >
              {activeTab !== i && (
                <span 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{ backgroundColor: `${cat.color}15` }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Cards Grid - Original Layout with Theme Border on Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {active.items.map((item) => (
            <div key={item.title} className="text-center">
              {/* IMAGE with theme border on hover */}
              <div
                onClick={() => navigate(item.route)}
                className="cursor-pointer group inline-block w-full"
              >
                <div className={`rounded-xl border-[6px] transition-all duration-300 ${active.hoverBorder} border-transparent bg-white/50 backdrop-blur-sm`}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full rounded-lg transition duration-300 group-hover:scale-[1.02]"
                    style={{ 
                      objectFit: 'contain',
                      maxHeight: '300px',
                      backgroundColor: '#f8fafc'
                    }}
                  />
                </div>
              </div>

              {/* TITLE + DESCRIPTION */}
              <p className="mt-4 text-sm md:text-base leading-relaxed">
                <span
                  onClick={() => navigate(item.route)}
                  className={`${active.textColor} font-semibold cursor-pointer hover:underline transition-all duration-200`}
                >
                  {item.title}
                </span>{" "}
                <span className="text-gray-700">- {item.sub}</span>
              </p>

              {/* TAGS with theme colors */}
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] px-3 py-1 rounded-full border transition-all duration-200 
                      ${active.borderColor} 
                      ${active.textColor}
                      hover:scale-105 cursor-default`}
                    style={{ backgroundColor: `${active.color}12` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/portfolio")}
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:scale-105 shadow-md relative overflow-hidden group`}
            style={{
              background: `linear-gradient(135deg, ${active.color}, ${active.color === "#5B8CFF" ? "#00C2A8" : active.color === "#F97316" ? "#FF8C42" : active.color === "#10B981" ? "#34D399" : "#A78BFA"})`,
            }}
          >
            <span className="relative z-10">View All {active.label} Projects</span>
            <svg
              className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;