import React from 'react';
import { Award, Clock, ShieldCheck, TrendingUp } from 'lucide-react';

const LogisticsWhyUs = () => {
    const reasons = [
        {
            icon: <TrendingUp className="text-orange-600" size={32} />,
            title: "99.9% Uptime",
            description: "Reliable infrastructure that keeps your operations running 24/7 without interruption.",
            stat: "Enterprise Grade",
            border: "hover:border-orange-500/50",
            bg: "group-hover:bg-orange-500/5"
        },
        {
            icon: <Clock className="text-blue-600" size={32} />,
            title: "Fast Implementation",
            description: "Get your entire logistics network online and optimized in record time.",
            stat: "< 2 Weeks Setup",
            border: "hover:border-blue-500/50",
            bg: "group-hover:bg-blue-500/5"
        },
        {
            icon: <ShieldCheck className="text-emerald-600" size={32} />,
            title: "Bank-Grade Security",
            description: "Your data is protected with the highest level of encryption and compliance standards.",
            stat: "ISO Certified",
            border: "hover:border-emerald-500/50",
            bg: "group-hover:bg-emerald-500/5"
        },
        {
            icon: <Award className="text-purple-600" size={32} />,
            title: "Expert Support",
            description: "Dedicated account managers and 24/7 technical support for your peace of mind.",
            stat: "Top Rated",
            border: "hover:border-purple-500/50",
            bg: "group-hover:bg-purple-500/5"
        }
    ];

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Colorful Background Gradient */}
            <div className="absolute inset-0 bg-[#F8FAFC]">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100/50 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-orange-100/50 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-px bg-slate-300"></div>
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Why Us</span>
                        <div className="w-8 h-px bg-slate-300"></div>
                    </div>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0F172A] leading-tight mt-6">
                        Why Choose Our <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Logistics Platform?</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto mt-6 font-medium">
                        We combine cutting-edge technology with industry expertise to deliver unparalleled logistics solutions.
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className={`relative flex flex-col items-center text-center p-10 rounded-[3rem] border border-transparent bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group ${reason.border} ${reason.bg}`}>
                            {/* Decorative Corner Glow */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-slate-500/5 rounded-tr-[3rem]"></div>

                            <div className="w-16 h-16 rounded-2xl bg-slate-50 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-white duration-500">
                                {reason.icon}
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 transition-colors group-hover:text-orange-600">{reason.stat}</span>
                            <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors">{reason.title}</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                {reason.description}
                            </p>

                            <div className="absolute bottom-6 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogisticsWhyUs;
