import { useState } from "react";

const categories = [
  {
    label: "Healthcare",
    items: [
      {
        title: "Fitness Tracker App",
        sub: "Health & Wellness",
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80",
        tags: ["React Native", "AI", "Wearables"],
        color: "from-[#5B8CFF]/80",
      },
      {
        title: "Medicine Delivery",
        sub: "Pharma Logistics",
        img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80",
        tags: ["Flutter", "Node.js", "GPS"],
        color: "from-[#00C2A8]/80",
      },
      {
        title: "Telehealth Platform",
        sub: "Virtual Consultations",
        img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&q=80",
        tags: ["React", "WebRTC", "AI"],
        color: "from-purple-500/80",
      },
    ],
  },
  {
    label: "Shopping",
    items: [
      {
        title: "Multi-Vendor Marketplace",
        sub: "eCommerce",
        img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&q=80",
        tags: ["Next.js", "Stripe", "Redis"],
        color: "from-orange-500/80",
      },
      {
        title: "Grocery Delivery",
        sub: "On-Demand",
        img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80",
        tags: ["React Native", "Node", "ML"],
        color: "from-[#5B8CFF]/80",
      },
      {
        title: "Fashion App",
        sub: "Social Commerce",
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80",
        tags: ["Flutter", "Firebase", "AR"],
        color: "from-pink-500/80",
      },
    ],
  },
  {
    label: "Education",
    items: [
      {
        title: "AI Tutoring Platform",
        sub: "EdTech",
        img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&q=80",
        tags: ["Python", "GPT-4", "React"],
        color: "from-[#00C2A8]/80",
      },
      {
        title: "LMS Dashboard",
        sub: "Enterprise Learning",
        img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80",
        tags: ["Vue.js", "Node", "Socket.io"],
        color: "from-yellow-500/80",
      },
      {
        title: "Kids Learning App",
        sub: "Gamified Education",
        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80",
        tags: ["React Native", "Unity", "AI"],
        color: "from-purple-500/80",
      },
    ],
  },
  {
    label: "Transport",
    items: [
      {
        title: "Ride-Hailing App",
        sub: "Urban Mobility",
        img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&q=80",
        tags: ["React Native", "Maps", "AI"],
        color: "from-[#5B8CFF]/80",
      },
      {
        title: "Fleet Management",
        sub: "Logistics",
        img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&q=80",
        tags: ["Angular", "IoT", "Python"],
        color: "from-[#00C2A8]/80",
      },
      {
        title: "Car Rental Platform",
        sub: "Travel Tech",
        img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&q=80",
        tags: ["Next.js", "Stripe", "Maps"],
        color: "from-orange-500/80",
      },
    ],
  },
];

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const active = categories[activeTab];

  return (
    <section id="portfolio" className="relative py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#5B8CFF]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 border border-[#5B8CFF]/20 rounded-full px-4 py-1.5 bg-[#5B8CFF]/5">
            <span className="w-2 h-2 rounded-full bg-[#5B8CFF] animate-pulse" />
            <span className="text-[#5B8CFF] text-xs font-semibold uppercase tracking-widest">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
            Work That{" "}
            <span className="bg-gradient-to-r from-[#5B8CFF] to-[#00C2A8] bg-clip-text text-transparent italic">
              Speaks for Itself
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Explore our portfolio across industries — built with precision, shipped with pride.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === i
                ? "bg-gradient-to-r from-[#5B8CFF] to-[#00C2A8] text-white shadow-lg shadow-[#5B8CFF]/20"
                : "bg-white text-gray-500 border border-gray-200 hover:border-[#5B8CFF]/40 hover:text-[#5B8CFF]"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {active.items.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-xs text-[#5B8CFF] font-semibold uppercase tracking-widest mb-1">{item.sub}</p>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#5B8CFF] transition-colors">{item.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium px-2.5 py-0.5 bg-gray-50 text-gray-500 rounded-full border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:scale-105 shadow-md shadow-orange-500/10"
            style={{ background: "linear-gradient(135deg,#5B8CFF,#00C2A8)" }}
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
