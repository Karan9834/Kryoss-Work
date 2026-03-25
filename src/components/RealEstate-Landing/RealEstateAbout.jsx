import React from 'react';
import { Home, Key, TrendingUp, ShieldCheck, BarChart3, Users } from 'lucide-react';
import aboutImg from '../../assets/realestatelanding-img/realestatelandingabout.jpg';

const RealEstateAbout = () => {
    const timeline = [
        {
            step: "01",
            title: "List Property",
            desc: "Agents & owners publish verified listings with rich media.",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "border-emerald-200",
        },
        {
            step: "02",
            title: "Smart Discovery",
            desc: "Buyers find their dream property with AI-powered filters and map search.",
            color: "text-teal-600",
            bg: "bg-teal-50",
            border: "border-teal-200",
        },
        {
            step: "03",
            title: "Connect & Close",
            desc: "In-app chat, virtual tours, and e-signature tools seal the deal seamlessly.",
            color: "text-amber-600",
            bg: "bg-amber-50",
            border: "border-amber-200",
        },
    ];

    const metrics = [
        { icon: Home, label: "Properties Managed", value: "5k+", color: "text-emerald-600" },
        { icon: Users, label: "Active Agents", value: "300+", color: "text-teal-600" },
        { icon: TrendingUp, label: "Transaction Value", value: "$2B+", color: "text-amber-600" },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div className="space-y-8 animate-fadeInLeft order-1">
                        <div className="space-y-3">
                            <span className="text-amber-600 font-bold text-sm uppercase tracking-[0.3em] block">Transforming Real Estate</span>
                            <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E293B] leading-tight">
                                From Listing to Closing —<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">All in One Platform</span>
                            </h2>
                            <p className="text-[#4A4B5E] text-lg leading-relaxed">
                                We build digitally-driven property portals that connect buyers, sellers, agents, and property managers on a single, intuitive platform.
                            </p>
                        </div>

                        {/* How it works — timeline steps */}
                        <div className="space-y-4">
                            {timeline.map((t, i) => (
                                <div key={i} className={`flex items-start gap-5 p-5 rounded-2xl ${t.bg} border ${t.border} hover:shadow-sm transition-all`}>
                                    <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm`}>
                                        <span className={`text-sm font-black ${t.color}`}>{t.step}</span>
                                    </div>
                                    <div>
                                        <h4 className={`font-bold text-sm ${t.color} mb-1`}>{t.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="px-8 py-3 rounded-full border-2 border-emerald-600 text-[#1E293B] font-bold hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-emerald-100">
                            Discover More
                        </button>
                    </div>

                    {/* Right: Image + Metrics */}
                    <div className="space-y-8 animate-fadeInRight order-2">
                        {/* Image Placeholder */}
                        <div className="relative group">
                            <div className="absolute -inset-6 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-[50px] blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-700 pointer-events-none"></div>
                            <div className="relative z-10 rounded-[40px] border-4 border-white shadow-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-emerald-100 via-teal-50 to-amber-100 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
                                <img src={aboutImg} alt="About Real Estate" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Metrics Row */}
                        <div className="grid grid-cols-3 gap-4">
                            {metrics.map((m, i) => (
                                <div key={i} className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100 hover:shadow-sm transition-all">
                                    <m.icon size={20} className={`${m.color} mx-auto mb-2`} />
                                    <p className={`text-xl font-black ${m.color}`}>{m.value}</p>
                                    <p className="text-gray-500 text-xs font-semibold mt-1">{m.label}</p>
                                </div>
                            ))}
                        </div>
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

export default RealEstateAbout;
