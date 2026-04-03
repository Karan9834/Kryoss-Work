import React from "react";
import { motion } from "framer-motion";

const HotelManagementModules = () => {
  const modules = [
    {
      id: "01",
      title: "Online Booking Portal",
      description:
        "We develop innovative ideas based Hotel Reservation portal which allows one touch-based online hotel booking and cancellation service.",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "02",
      title: "Catalogue Management",
      description:
        "In this, you can find better and quality based hotel and restaurant booking service by dynamic hotel booking software.",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
    },
    {
      id: "03",
      title: "Inventory Management",
      description:
        "Manage reservation status, tracking, bookings, and transactions efficiently.",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      id: "04",
      title: "Management Solution",
      description:
        "Manage hotel services, security, parking, dining, and events seamlessly.",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37z" />
        </svg>
      ),
    },
    {
      id: "05",
      title: "Mobile & Web Portal",
      description:
        "Cross-platform booking system for Android, iOS, and web apps.",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "06",
      title: "Front Office Module",
      description:
        "Handle billing, guest management, and front desk operations.",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586l5.414 5.414V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: "07",
      title: "Mini Bar Module",
      description:
        "Track minibar usage, pricing, and customer consumption.",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0v8H5v-8m14 0V7H5v4" />
        </svg>
      ),
    },
    {
      id: "08",
      title: "Laundry Module",
      description:
        "Manage laundry processes, timing, and tracking efficiently.",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9" />
        </svg>
      ),
    },
    {
      id: "09",
      title: "Restaurant Module",
      description:
        "Handle cuisines, orders, pricing, and dining services.",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
        </svg>
      ),
    },
  ];

  const firstRowModules = modules.slice(0, 5);
  const secondRowModules = modules.slice(5, 9);

  const Card = ({ module, index }) => (
    <motion.div
      key={module.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div className="relative h-full p-[1px] rounded-xl">
        
        {/* Neon Glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-60 blur-md group-hover:opacity-100 transition duration-500"></div>

        {/* Card */}
        <div className="relative h-full p-5 rounded-xl bg-black/70 backdrop-blur-lg border border-white/10 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-cyan-500/40 shadow-lg">
          
          {/* Shine */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <div className="absolute -left-20 top-0 h-full w-20 bg-white/10 skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-shine"></div>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-3">
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center">
              {module.icon}
            </div>
          </div>

          {/* ID */}
          <div className="text-center mb-2">
            <span className="text-cyan-400 text-xs font-mono bg-cyan-500/10 px-2 py-0.5 rounded-full">
              {module.id}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-white text-center font-bold mb-2">
            {module.title}
          </h3>

          {/* Desc */}
          <p className="text-gray-300 text-center text-sm line-clamp-3">
            {module.description}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full py-24 bg-[#001a25] px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Hotel Management Software Modules
          </h2>
          <p className="text-gray-400 mt-3">
            Modern modules powered with neon SaaS experience
          </p>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {firstRowModules.map((m, i) => (
            <Card module={m} index={i} key={m.id} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {secondRowModules.map((m, i) => (
            <Card module={m} index={i + 5} key={m.id} />
          ))}
        </div>
      </div>

      {/* Shine Animation */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(300%) skewX(12deg); }
        }
        .group:hover .animate-shine {
          animation: shine 1.2s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default HotelManagementModules;