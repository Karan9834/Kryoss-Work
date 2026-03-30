import React from 'react';
import { Ticket, Video, Users, BarChart3, Globe, Shield } from 'lucide-react';

const EMSFeatures = () => {
    const features = [
        {
            icon: <Ticket className="w-8 h-8 text-fuchsia-500" />,
            title: "Advanced Ticketing",
            desc: "Customizable tiers, dynamic pricing, and instant QR generation for fast check-ins.",
            color: "from-fuchsia-50 to-pink-50 border-fuchsia-100",
            hover: "hover:border-fuchsia-300 hover:shadow-fuchsia-200"
        },
        {
            icon: <Video className="w-8 h-8 text-orange-500" />,
            title: "Virtual & Hybrid Live",
            desc: "Seamless integration with leading video platforms to broadcast across the globe.",
            color: "from-orange-50 to-amber-50 border-orange-100",
            hover: "hover:border-orange-300 hover:shadow-orange-200"
        },
        {
            icon: <Users className="w-8 h-8 text-purple-500" />,
            title: "Attendee Networking",
            desc: "In-app chat, personalized matchmaking algorithms, and interactive breakout rooms.",
            color: "from-purple-50 to-indigo-50 border-purple-100",
            hover: "hover:border-purple-300 hover:shadow-purple-200"
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-pink-500" />,
            title: "Real-Time ROI",
            desc: "Track sponsor conversions, engagement metrics, and session popularity live.",
            color: "from-pink-50 to-rose-50 border-pink-100",
            hover: "hover:border-pink-300 hover:shadow-pink-200"
        },
        {
            icon: <Globe className="w-8 h-8 text-amber-600" />,
            title: "Multi-language Support",
            desc: "Automatically translate schedules and notifications for global audiences.",
            color: "from-amber-50 to-yellow-50 border-amber-100",
            hover: "hover:border-amber-300 hover:shadow-amber-200"
        },
        {
            icon: <Shield className="w-8 h-8 text-indigo-500" />,
            title: "Enterprise Security",
            desc: "Bank-level encryption, role-based access, and complete GDPR compliance.",
            color: "from-indigo-50 to-blue-50 border-indigo-100",
            hover: "hover:border-indigo-300 hover:shadow-indigo-200"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-fuchsia-50 via-white to-orange-50 relative">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Phase */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm font-bold uppercase tracking-wider text-pink-500">
                        Powerful Modules
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500">
                            Everything You Need to Host Brilliant Events
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Our comprehensive suit of tools empowers you to handle the logistics while you focus on the actual experience.
                    </p>
                </div>

                {/* Bento Grid layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div 
                            key={idx}
                            className={`p-8 rounded-[2rem] bg-gradient-to-br ${feature.color} border-2 transition-all duration-300 ${feature.hover} hover:-translate-y-2 hover:shadow-xl group`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-white group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default EMSFeatures;
