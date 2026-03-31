import React from 'react';
import { ShieldCheck, HeartPulse, Zap, Award, Activity, CheckCircle2, FlaskConical } from 'lucide-react';

const PMSWhyUs = () => {
    const reasons = [
        {
            icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
            title: "Data Integrity",
            desc: "Redundant backup systems ensuring 100% data safety and HIPAA clinical compliance."
        },
        {
            icon: <Activity className="w-6 h-6 text-teal-400" />,
            title: "Process Speed",
            desc: "Optimized billing and inventory workflows that save up to 40% of pharmacy staff time."
        },
        {
            icon: <Award className="w-6 h-6 text-[#00BFA5]" />,
            title: "Industrial UI",
            desc: "Clean, professional interface designed specifically for high-speed healthcare environments."
        },
        {
            icon: <FlaskConical className="w-6 h-6 text-emerald-300" />,
            title: "Integrated Care",
            desc: "Connect directly with local clinics and hospital information systems for seamless sync."
        }
    ];

    return (
        <section className="py-24 bg-[#001515] overflow-hidden relative text-white">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Unique Interactive Stack */}
                    <div className="relative group">
                        <div className="absolute -inset-10 bg-emerald-500/5 blur-[120px] rounded-full group-hover:bg-teal-500/10 transition-colors duration-1000"></div>

                        <div className="relative grid grid-cols-2 gap-6 scale-90 md:scale-100 transition-transform duration-700">
                            <div className="space-y-6 pt-12">
                                <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-emerald-100 hover:scale-105 transition-transform duration-500 cursor-pointer group/card">
                                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover/card:bg-emerald-600 group-hover/card:text-white transition-colors duration-300">
                                        <Zap fill="currentColor" size={24} />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg uppercase leading-none mb-2">Fast Dispense</h4>
                                    <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
                                </div>
                                <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-emerald-100 hover:scale-105 transition-transform duration-500 cursor-pointer group/card">
                                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover/card:bg-emerald-600 group-hover/card:text-white transition-colors duration-300">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg uppercase leading-none mb-2">Error Free</h4>
                                    <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-emerald-100 hover:scale-105 transition-transform duration-500 cursor-pointer group/card">
                                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover/card:bg-emerald-600 group-hover/card:text-white transition-colors duration-300">
                                        <Activity size={24} />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg uppercase leading-none mb-2">Formulary Sync</h4>
                                    <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
                                </div>
                                <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-emerald-100 hover:scale-105 transition-transform duration-500 cursor-pointer group/card">
                                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover/card:bg-emerald-600 group-hover/card:text-white transition-colors duration-300">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg uppercase leading-none mb-2">Market Leader</h4>
                                    <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-300 text-sm font-bold uppercase tracking-widest shadow-xl">
                                <HeartPulse size={16} /> The Clinical Advantage
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold leading-[1.1] tracking-tight ">
                                Why Pharmacies <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-100 to-white">
                                    Trust Our Unified App
                                </span>
                            </h2>
                            <p className="text-emerald-50/60 font-medium text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                                We combine pharmaceutical expertise with cutting-edge infrastructure to provide a platform that doesn't just manage business—it enhances patient wellness.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {reasons.map((reason, idx) => (
                                <div key={idx} className="flex gap-6 group hover:translate-x-2 transition-transform duration-300">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 border border-white/20 rounded-2xl shadow-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                        {reason.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors  tracking-tight leading-none">
                                            {reason.title}
                                        </h4>
                                        <p className="text-emerald-100/50 font-medium leading-relaxed">
                                            {reason.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PMSWhyUs;
