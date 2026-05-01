import React from 'react';
import { Truck, MapPin, Search, Users, ShieldCheck, Zap } from 'lucide-react';

const LogisticsFeatures = () => {
    const features = [
        {
            title: "Fleet Tracking",
            description: "High-precision GPS tracking with sub-second updates for your entire fleet.",
            icon: <Truck className="text-white" size={32} />,
            color: "from-orange-500 to-amber-500",
            shadow: "shadow-orange-200"
        },
        {
            title: "Smart Routing",
            description: "AI-powered route optimization to reduce fuel costs and delivery times.",
            icon: <MapPin className="text-white" size={32} />,
            color: "from-blue-600 to-sky-400",
            shadow: "shadow-blue-200"
        },
        {
            title: "Real-time Visibility",
            description: "Complete transparency for your customers with shared tracking links.",
            icon: <Search className="text-white" size={32} />,
            color: "from-emerald-500 to-teal-400",
            shadow: "shadow-emerald-200"
        },
        {
            title: "Driver Management",
            description: "Comprehensive driver profiles, performance tracking, and communication tools.",
            icon: <Users className="text-white" size={32} />,
            color: "from-purple-600 to-indigo-500",
            shadow: "shadow-purple-200"
        },
        {
            title: "Safety Compliance",
            description: "Stay compliant with automated driver logs and vehicle health reports.",
            icon: <ShieldCheck className="text-white" size={32} />,
            color: "from-rose-500 to-pink-400",
            shadow: "shadow-rose-200"
        },
        {
            title: "Instant Alerts",
            description: "Get notified immediately for delays, arrivals, or any exceptions.",
            icon: <Zap className="text-white" size={32} />,
            color: "from-amber-500 to-yellow-400",
            shadow: "shadow-amber-200"
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Colorful Background Gradient */}
            <div className="absolute inset-0 bg-[#0F172A]">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/40 via-[#0F172A] to-orange-900/20"></div>
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                    <span className="text-orange-400 text-[12px] font-medium tracking-[0.05em] uppercase bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20">
                        Platform Features
                    </span>
                    
                    {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-white mt-6">
                        Powerful Tools for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-blue-400">
                            Modern Logistics.
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-10 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                        >
                            {/* Hover Glow Effect */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-[3rem]`}></div>

                            <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 shadow-lg ${feature.shadow} group-hover:scale-110 transition-transform duration-500`}>
                                {feature.icon}
                            </div>

                            {/* Card Title - Updated: text-[20px] md:text-[22px] font-bold leading-[1.3] */}
                            <h3 className="text-[20px] md:text-[22px] font-bold leading-[1.3] text-white mb-4 relative z-10 group-hover:text-orange-400 transition-colors">
                                {feature.title}
                            </h3>
                            
                            {/* Card Description - Updated: text-[14px] md:text-[15px] font-normal leading-[1.6] */}
                            <p className="text-slate-400 text-[14px] md:text-[15px] font-normal leading-[1.6] relative z-10">
                                {feature.description}
                            </p>

                            <div className={`mt-8 h-1 w-12 bg-gradient-to-r ${feature.color} rounded-full group-hover:w-full transition-all duration-700 opacity-50`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogisticsFeatures;