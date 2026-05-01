import React from 'react';
import {
    Search, Globe, CreditCard, Smartphone,
    Star, Bell, Map, BarChart3,
} from 'lucide-react';

const features = [
    {
        icon: Search,
        title: "Smart Search & Filter",
        desc: "Powerful search engine with real-time availability, dynamic pricing, and 30+ filter parameters to find the perfect trip instantly.",
        color: "text-sky-600",
        bg: "from-sky-500 to-cyan-400",
        light: "bg-sky-50",
        tag: "Discovery",
    },
    {
        icon: Map,
        title: "Interactive Destination Maps",
        desc: "Visual destination exploration with integrated maps, heat-zones, and curated local guides for every city.",
        color: "text-teal-600",
        bg: "from-teal-500 to-emerald-400",
        light: "bg-teal-50",
        tag: "Navigation",
    },
    {
        icon: CreditCard,
        title: "Secure Multi-Currency Payments",
        desc: "Accept payments in 50+ currencies with EMI options, wallet top-ups, and PCI-DSS encrypted gateways.",
        color: "text-amber-600",
        bg: "from-amber-500 to-orange-400",
        light: "bg-amber-50",
        tag: "Payments",
    },
    {
        icon: Bell,
        title: "Smart Push Notifications",
        desc: "Trip reminders, exclusive deal alerts, gate changes, and real-time booking updates delivered instantly.",
        color: "text-indigo-600",
        bg: "from-indigo-500 to-blue-400",
        light: "bg-indigo-50",
        tag: "Engagement",
    },
    {
        icon: Smartphone,
        title: "Native iOS & Android Apps",
        desc: "Buttery-smooth cross-platform apps with offline mode, biometric login, and seamless UX for every traveler.",
        color: "text-rose-600",
        bg: "from-rose-500 to-pink-400",
        light: "bg-rose-50",
        tag: "Mobile",
    },
    {
        icon: BarChart3,
        title: "Analytics & Revenue Dashboard",
        desc: "Detailed reports on bookings, revenue funnels, channel performance, and traveler behavior insights.",
        color: "text-purple-600",
        bg: "from-purple-500 to-violet-400",
        light: "bg-purple-50",
        tag: "Analytics",
    },
    {
        icon: Globe,
        title: "30+ Language Support",
        desc: "Reach a truly global audience with auto-detect language switching, RTL layouts, and localized content.",
        color: "text-cyan-600",
        bg: "from-cyan-500 to-sky-400",
        light: "bg-cyan-50",
        tag: "Global",
    },
    {
        icon: Star,
        title: "Reviews & Trust Ratings",
        desc: "Verified user reviews, star ratings, and photo uploads build trust and drive higher conversion rates.",
        color: "text-orange-600",
        bg: "from-orange-500 to-amber-400",
        light: "bg-orange-50",
        tag: "Trust",
    },
];

const TourTravelFeatures = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Subtle top & bottom color bands */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-400 via-cyan-400 to-amber-400"></div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-cyan-400 to-sky-400"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header - Updated Typography ONLY */}
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-px bg-sky-400"></div>
                        {/* Badge - Updated: text-[14px] font-bold tracking-widest uppercase */}
                        <span className="text-sky-600 text-[14px] font-bold tracking-widest uppercase">Packed with Power</span>
                        <div className="w-8 h-px bg-sky-400"></div>
                    </div>
                    
                    {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                        Features that <span className="text-sky-600">Elevate</span> Every <span className="text-amber-500">Journey</span>
                    </h2>
                    
                    {/* Description - 16px, weight 400, line-height 1.6 */}
                    <p className="text-[16px] font-normal leading-[1.6] text-gray-500 max-w-2xl mx-auto">
                        Our travel platform comes packed with tools to deliver a seamless booking experience for travelers and operators alike.
                    </p>
                </div>

                {/* Zigzag alternating strip layout - Card fonts KEPT ORIGINAL */}
                <div className="space-y-5">
                    {features.map((feat, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div
                                key={idx}
                                className={`group flex flex-col sm:flex-row items-stretch rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-0.5 ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                            >
                                {/* Colored accent panel with icon */}
                                <div className={`relative flex items-center justify-center bg-gradient-to-br ${feat.bg} p-8 sm:w-52 shrink-0 overflow-hidden`}>
                                    {/* Big background circle */}
                                    <div className="absolute w-36 h-36 bg-white/10 rounded-full -top-8 -right-8 group-hover:scale-150 transition-transform duration-700"></div>
                                    <div className="absolute w-20 h-20 bg-white/10 rounded-full bottom-2 left-2 group-hover:scale-125 transition-transform duration-500 delay-100"></div>

                                    <div className="relative z-10 flex flex-col items-center gap-3">
                                        <div className="w-16 h-16 rounded-2xl bg-white/20 group-hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110">
                                            <feat.icon size={32} />
                                        </div>
                                        <span className="text-white/80 text-xs font-bold uppercase tracking-widest">{feat.tag}</span>
                                    </div>
                                </div>

                                {/* Text content - Card fonts ORIGINAL (unchanged) */}
                                <div className={`flex-1 flex flex-col justify-center px-8 py-6 bg-white group-hover:${feat.light} transition-colors duration-300`}>
                                    {/* Card Title - ORIGINAL FONT */}
                                    <h3 className={`text-base font-bold text-[#1E293B] mb-2 group-hover:${feat.color} transition-colors duration-300 uppercase tracking-tight`}>
                                        {feat.title}
                                    </h3>
                                    {/* Card Description - ORIGINAL FONT */}
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-xl">{feat.desc}</p>
                                </div>

                                {/* Right number accent */}
                                <div className="hidden sm:flex items-center justify-center w-16 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                                    <span className="text-2xl font-black text-gray-200 group-hover:text-gray-300 transition-colors">
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TourTravelFeatures;