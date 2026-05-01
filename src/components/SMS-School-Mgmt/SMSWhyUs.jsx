import React from 'react';
import { ShieldCheck, TrendingUp, Heart, Globe, Award, Sparkles } from 'lucide-react';

const SMSWhyUs = () => {
    const reasons = [
        {
            icon: <Award className="w-6 h-6 text-blue-300" />,
            title: "Accreditation Ready",
            desc: "Simplified data management for all major educational accreditations."
        },
        {
            icon: <Globe className="w-6 h-6 text-emerald-300" />,
            title: "Global Standards",
            desc: "Built to support international curricula and multi-language needs."
        },
        {
            icon: <Heart className="w-6 h-6 text-rose-300" />,
            title: "Student Centric",
            desc: "Focused on holistic student development, not just academic records."
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-amber-300" />,
            title: "Scalable Growth",
            desc: "Scale your institution from one school to a global network effortlessly."
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-emerald-900 overflow-hidden relative text-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[15deg] translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Content */}
                    <div className="space-y-10">
                        <div className="space-y-4 text-center lg:text-left">
                            {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-200 text-[12px] font-medium tracking-[0.05em] uppercase backdrop-blur-sm shadow-sm">
                                <ShieldCheck size={14} /> Why Choose Our SMS
                            </div>
                            
                            {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] tracking-tighter">
                                Empowering the Next <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-200">
                                    Generation with 3D Precision
                                </span>
                            </h2>
                            
                            {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                            <p className="text-blue-100/70 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-xl mx-auto lg:mx-0">
                                We go beyond simple administration. Our platform is designed to nurture growth, enhance collaboration, and ensure future-ready educational environments.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            {reasons.map((reason, idx) => (
                                <div key={idx} className="flex gap-6 group hover:-translate-x-2 transition-transform duration-300">
                                    <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-2xl shadow-xl border border-white/20 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                                        {reason.icon}
                                    </div>
                                    <div className="space-y-1">
                                        {/* Reason Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-white group-hover:text-blue-300 transition-colors uppercase tracking-tight">
                                            {reason.title}
                                        </h4>
                                        {/* Reason Description - Updated: text-[14px] md:text-[15px] font-normal leading-[1.6] */}
                                        <p className="text-blue-100/60 text-[14px] md:text-[15px] font-normal leading-[1.6]">
                                            {reason.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Unique Interactive */}
                    <div className="relative">
                        {/* Outer Glow */}
                        <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full scale-150"></div>

                        {/* Central Hub UI */}
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-white/10 rounded-full shadow-2xl p-4 border-[12px] border-white/5 flex items-center justify-center group backdrop-blur-md">
                            <div className="absolute inset-4 border-2 border-dashed border-white/20 rounded-full animate-[spin_30s_linear_infinite] group-hover:pause"></div>

                            <div className="relative z-10 text-center space-y-4">
                                <div className="w-24 h-24 mx-auto rounded-[2rem] bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                    <Sparkles size={48} />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-[24px] md:text-[28px] font-black text-white tracking-tighter uppercase whitespace-pre-line leading-none">UNITY <br /> ECOSYSTEM</h3>
                                    <p className="text-blue-300 font-semibold uppercase tracking-[0.05em] text-[10px] md:text-[11px]">One Unified System</p>
                                </div>
                            </div>

                            {/* Floating Benefit Nodes - Updated typography */}
                            <div className="absolute top-0 left-1/2 -track-x-1/2 -translate-y-1/2 p-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 flex items-center gap-4 hover:scale-110 transition-transform cursor-pointer">
                                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold shadow-inner text-[14px]">01</div>
                                <span className="font-bold text-gray-800 whitespace-nowrap text-[14px] md:text-[15px]">Parents</span>
                            </div>

                            <div className="absolute bottom-[10%] right-[-5%] p-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 flex items-center gap-4 hover:scale-110 transition-transform cursor-pointer">
                                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 font-bold shadow-inner text-[14px]">02</div>
                                <span className="font-bold text-gray-800 whitespace-nowrap text-[14px] md:text-[15px]">Teachers</span>
                            </div>

                            <div className="absolute bottom-[10%] left-[-5%] p-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 flex items-center gap-4 hover:scale-110 transition-transform cursor-pointer">
                                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold shadow-inner text-[14px]">03</div>
                                <span className="font-bold text-gray-800 whitespace-nowrap text-[14px] md:text-[15px]">Students</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default SMSWhyUs;