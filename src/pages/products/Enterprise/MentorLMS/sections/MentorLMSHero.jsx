import React from 'react';
import { ArrowRight, Activity, ShieldPlus, Zap, BookOpen, MessageCircle } from "lucide-react";
import mentorHero from '@/assets/mentorlms-img/mentorlmshero.png';

const MentorLMSHero = () => {
    const demoUrl = "https://preview.codecanyon.net/item/mentor-lms-learning-management-system/full_screen_preview/59092700";

    return (
        <section className="relative w-full min-h-screen lg:min-h-[90vh] overflow-hidden flex items-center py-12 lg:py-0"
            style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 40%, #c026d3 70%, #9333ea 100%)" }}>

            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full opacity-[0.05] bg-fuchsia-400 blur-3xl" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.05] bg-indigo-500 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
                {/* Left Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-fuchsia-400/30 bg-white/5 backdrop-blur-sm">
                        <Activity size={16} className="text-fuchsia-400" />
                        <span className="text-fuchsia-100 text-sm font-bold tracking-wide uppercase">Next-Gen LMS Platform</span>
                    </div>

                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15]">
                        Empower <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg, #f0abfc, #818cf8)" }}>The Future</span> of Learning Management.
                    </h1>

                    <p className="text-lg text-fuchsia-50/80 max-w-xl leading-relaxed">
                        Mentor LMS is the ultimate platform for creating, managing, and selling courses online. Scale your teaching expertise effortlessly.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 sm:gap-8 py-6 border-t border-white/10">
                        {[
                            { icon: <Zap size={20} />, label: "Courses", value: "Unlimited" },
                            { icon: <ShieldPlus size={20} />, label: "Security", value: "Industrial" },
                            { icon: <BookOpen size={20} />, label: "Learners", value: "Global" },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-fuchsia-300 flex-shrink-0 flex-wrap gap-4">
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg sm:text-xl leading-none">{stat.value}</p>
                                    <p className="text-fuchsia-200/60 text-[10px] sm:text-xs mt-1 font-medium">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-2">
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            style={{ background: "linear-gradient(90deg, #7c3aed, #4f46e5)", boxShadow: "0 8px 30px rgba(124,58,237,0.4)" }}
                        >
                            Live Demo
                            <ArrowRight size={22} />
                        </a>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative mt-8 lg:mt-0">
                    <div className="absolute inset-0 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-fuchsia-400 to-indigo-600" />
                    <div className="relative z-10 w-full max-w-lg mx-auto">
                        <div className="w-full h-64 sm:h-80 lg:h-[400px] rounded-[3rem] border-8 border-white/10 shadow-2xl bg-slate-900/40 backdrop-blur-md flex items-center justify-center overflow-hidden flex-wrap gap-4">
                            <img
                                src={mentorHero}
                                alt="Mentor Academy Dashboard"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-2xl flex items-center gap-4 border border-slate-50">
                            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 flex-wrap gap-4">
                                <ShieldPlus size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Status</p>
                                <p className="text-sm font-black text-emerald-600 leading-none">Verified Core</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentorLMSHero;
