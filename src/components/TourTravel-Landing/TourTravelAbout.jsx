import React from 'react';
import { Plane, MapPin, Compass, Calendar, Star, TrendingUp } from 'lucide-react';
import aboutImg from '../../assets/tourlanding-img/Tourlandingabout.jpg';

const TourTravelAbout = () => {
    const stats = [
        { icon: Plane, label: "Flight Integrations", value: "50+", color: "text-sky-500", bg: "bg-sky-50" },
        { icon: MapPin, label: "Destinations", value: "120+", color: "text-amber-500", bg: "bg-amber-50" },
        { icon: Star, label: "Client Rating", value: "4.9", color: "text-orange-500", bg: "bg-orange-50" },
    ];

    const pillars = [
        { icon: Compass, title: "End-to-End Booking", color: "text-sky-600", bg: "bg-sky-50" },
        { icon: Calendar, title: "Smart Itinerary Builder", color: "text-amber-600", bg: "bg-amber-50" },
        { icon: TrendingUp, title: "Revenue Analytics", color: "text-teal-600", bg: "bg-teal-50" },
        { icon: Plane, title: "Multi-Modal Travel", color: "text-indigo-600", bg: "bg-indigo-50" },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Top label */}
                <div className="text-center mb-16">
                    <span className="text-amber-600 font-bold text-sm uppercase tracking-[0.3em] block mb-3">Powering the Travel Industry</span>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E293B] leading-tight">
                        A Platform Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">Modern Travelers</span> &{" "}
                        <span className="text-amber-500">Tour Operators</span>
                    </h2>
                    <p className="text-[#4A4B5E] text-lg leading-relaxed max-w-3xl mx-auto mt-4">
                        From solo backpackers to enterprise travel agencies — our platform delivers a frictionless booking experience, real-time inventory management, and rich analytics to scale your travel business globally.
                    </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-6 mb-16">
                    {stats.map((s, i) => (
                        <div key={i} className={`flex flex-col items-center gap-3 p-6 rounded-3xl ${s.bg} border border-white shadow-sm hover:shadow-md transition-all`}>
                            <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm`}>
                                <s.icon size={24} className={s.color} />
                            </div>
                            <p className={`text-3xl font-black ${s.color}`}>{s.value}</p>
                            <p className="text-gray-600 text-sm font-semibold text-center">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Two-column layout */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image Placeholder */}
                    <div className="relative group animate-fadeInLeft order-2 lg:order-1">
                        <div className="absolute -inset-6 bg-gradient-to-br from-sky-100 to-amber-100 rounded-[50px] blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-700 pointer-events-none"></div>
                        <div className="relative z-10 rounded-[40px] border-4 border-white shadow-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-sky-100 via-cyan-50 to-amber-100 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
                            <img src={aboutImg} alt="About Tour Travel" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right: Pillars */}
                    <div className="space-y-8 animate-fadeInRight order-1 lg:order-2">
                        <p className="text-[#4A4B5E] text-base leading-relaxed">
                            We help travel agencies, tour operators, and OTAs launch feature-rich apps with dynamic packaging, real-time availability, and seamless payment processing — designed to delight travelers at every touchpoint.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {pillars.map((p, i) => (
                                <div key={i} className={`flex items-center gap-3 p-4 ${p.bg} rounded-2xl border border-white shadow-sm hover:shadow-md transition-all group cursor-default`}>
                                    <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm`}>
                                        <p.icon size={20} className={p.color} />
                                    </div>
                                    <span className="text-[#1E293B] font-semibold text-sm">{p.title}</span>
                                </div>
                            ))}
                        </div>
                        <button className="px-8 py-3 rounded-full border-2 border-sky-600 text-[#1E293B] font-bold hover:bg-sky-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-sky-100">
                            Discover More
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeInLeft {
                    0% { opacity: 0; transform: translateX(-40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }

                @keyframes fadeInRight {
                    0% { opacity: 0; transform: translateX(40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
            `}</style>
        </section>
    );
};

export default TourTravelAbout;
