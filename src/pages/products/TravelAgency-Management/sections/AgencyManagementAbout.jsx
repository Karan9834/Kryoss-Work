import React from "react";
import { Layout, Users, Shield, TrendingUp } from "lucide-react";
import aboutImg from "@/assets/WooTour -  product/One Platform forEvery Travel Experience.jpg";

const AgencyManagementAbout = () => {
    const stats = [
        { label: "Bookings Managed", value: "2.5M+", icon: Layout, color: "text-amber-600", bg: "bg-amber-100" },
        { label: "Active Agencies", value: "1,200+", icon: Users, color: "text-orange-600", bg: "bg-orange-100" },
        { label: "Transaction Security", value: "SSL/PCI", icon: Shield, color: "text-yellow-600", bg: "bg-yellow-100" },
        { label: "Revenue Growth", value: "40% Avg", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-100" },
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Content Grid */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <span className="text-amber-600 font-bold text-sm uppercase tracking-widest block mb-4">Behind the scenes</span>
                            <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E293B] leading-tight">
                                Built for the <span className="text-amber-600">Complex Needs</span> of Modern Agencies
                            </h2>
                            <p className="text-gray-500 text-lg mt-6 leading-relaxed">
                                Managing a travel agency shouldn't be a nightmare of spreadsheets. Our Travel Management solution consolidates your entire operation into one powerful dashboard.
                            </p>
                        </div>

                        {/* Floating Stats Design — Different from TourBookingAbout */}
                        <div className="grid grid-cols-2 gap-6 relative">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                                    <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <stat.icon size={24} />
                                    </div>
                                    <div className="text-2xl font-black text-[#1E293B]">{stat.value}</div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
                                </div>
                            ))}
                            {/* Decorative element */}
                            <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 bg-amber-200/20 rounded-full blur-2xl"></div>
                        </div>
                    </div>

                    {/* Right: Large Mockup Placeholder */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/10 to-orange-500/10 rounded-[60px] blur-2xl"></div>
                        <div className="relative z-10 w-full aspect-[4/4] bg-white rounded-[50px] border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden">
                            <img src={aboutImg} alt="Admin Panel Mockup" className="w-full h-full object-cover" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AgencyManagementAbout;
