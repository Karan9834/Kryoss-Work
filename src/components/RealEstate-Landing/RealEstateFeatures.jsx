import React from 'react';
import { Search, Map, Camera, Users, CreditCard, BarChart3, Bell, FileText, Shield } from 'lucide-react';

const RealEstateFeatures = () => {
    const features = [
        {
            icon: Search,
            title: "Advanced Property Search",
            desc: "Filter by location, price, type, BHK, and 20+ parameters with instant results.",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "border-emerald-100",
        },
        {
            icon: Map,
            title: "Map-Based Listings",
            desc: "Interactive geo-map view to visually explore nearby properties and neighbourhoods.",
            color: "text-teal-600",
            bg: "bg-teal-50",
            border: "border-teal-100",
        },
        {
            icon: Camera,
            title: "Virtual 360° Tours",
            desc: "Immersive property walkthroughs and video tours for remote buyers.",
            color: "text-amber-600",
            bg: "bg-amber-50",
            border: "border-amber-100",
        },
        {
            icon: Users,
            title: "Agent CRM & Leads",
            desc: "Manage leads, follow-ups, and deal pipelines directly inside the app.",
            color: "text-indigo-600",
            bg: "bg-indigo-50",
            border: "border-indigo-100",
        },
        {
            icon: CreditCard,
            title: "EMI & Loan Calculator",
            desc: "Built-in mortgage calculator to help buyers make informed decisions faster.",
            color: "text-rose-600",
            bg: "bg-rose-50",
            border: "border-rose-100",
        },
        {
            icon: BarChart3,
            title: "Property Analytics",
            desc: "Market trends, price history, and ROI insights in a clean dashboard.",
            color: "text-orange-600",
            bg: "bg-orange-50",
            border: "border-orange-100",
        },
        {
            icon: FileText,
            title: "Document Management",
            desc: "Secure upload, e-sign, and manage all property documents in one place.",
            color: "text-purple-600",
            bg: "bg-purple-50",
            border: "border-purple-100",
        },
        {
            icon: Bell,
            title: "Smart Alerts",
            desc: "Push notifications for new listings, price drops, and agent responses.",
            color: "text-cyan-600",
            bg: "bg-cyan-50",
            border: "border-cyan-100",
        },
        {
            icon: Shield,
            title: "Verified Listings",
            desc: "RERA-compliant, verified listings to build buyer trust and reduce fraud.",
            color: "text-green-600",
            bg: "bg-green-50",
            border: "border-green-100",
        },
    ];

    return (
        <section className="py-24 bg-[#F8FAF9] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-px bg-emerald-400"></div>
                        <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest">Industry Leading Features</span>
                        <div className="w-8 h-px bg-emerald-400"></div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E293B]">
                        Everything You Need to <span className="text-emerald-600">Close Deals</span>{' '}
                        <span className="text-amber-500">Faster</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Our real estate platform is equipped with powerful tools for buyers, sellers, agents, and property managers.
                    </p>
                </div>

                {/* 3-column feature grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feat, idx) => (
                        <div
                            key={idx}
                            className={`group flex items-start gap-5 p-6 bg-white rounded-3xl border ${feat.border} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default`}
                        >
                            <div className={`w-14 h-14 shrink-0 rounded-2xl ${feat.bg} flex items-center justify-center ${feat.color} shadow-sm group-hover:scale-110 transition-transform duration-300 border border-white`}>
                                <feat.icon size={26} />
                            </div>
                            <div className="space-y-1 pt-1">
                                <h3 className={`text-base font-bold text-[#1E293B] group-hover:${feat.color} transition-colors`}>{feat.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RealEstateFeatures;
