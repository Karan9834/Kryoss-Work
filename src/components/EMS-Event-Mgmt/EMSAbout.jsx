import React from 'react';
import { CalendarCheck, ShieldCheck, TrendingUp, Target } from 'lucide-react';
import aboutimg from "@/assets/emslanding-img/emslandingabout.jpg";
const EMSAbout = () => {
    const highlights = [
        { title: "Dynamic Venues", icon: <Target size={20} className="text-pink-500" /> },
        { title: "Secure Ticketing", icon: <ShieldCheck size={20} className="text-purple-500" /> },
        { title: "Sponsor Analytics", icon: <TrendingUp size={20} className="text-orange-500" /> },
        { title: "Automated Scheduling", icon: <CalendarCheck size={20} className="text-fuchsia-500" /> },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Single Image Container */}
                    <div className="relative group order-2 lg:order-1 h-[400px] sm:h-[500px] w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-100 to-orange-50 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000 transform group-hover:scale-105"></div>

                        <div className="relative w-full h-full bg-white rounded-[3rem] shadow-2xl overflow-hidden transition-transform duration-700 border-4 border-white">
                            {/* PLACEHOLDER FOR EXACTLY 1 IMAGE */}
                            <img src={aboutimg} alt="Event Dashboard" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                            <div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay"></div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="space-y-4">
                            <span className="text-fuchsia-600 font-bold text-sm uppercase tracking-[0.3em] block mb-2 px-3 py-1 bg-fuchsia-50 w-max rounded-full border border-fuchsia-100">
                                Redefining Experiences
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 via-pink-600 to-orange-500">
                                    Master Every Moment of Your Event
                                </span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our Event Management System is crafted for visionaries. Whether you are hosting an intimate corporate seminar or a massive multi-day festival, we provide the tools to orchestrate everything effortlessly in one unified platform.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="p-2 bg-gray-50 rounded-lg group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <span className="text-gray-800 font-semibold">{item.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white font-bold hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-1 transition-all duration-300">
                                Discover Features
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EMSAbout;
