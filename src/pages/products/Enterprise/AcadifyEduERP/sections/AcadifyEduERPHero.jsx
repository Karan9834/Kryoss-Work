import React from 'react';
import { ArrowRight, Activity, ShieldPlus, Zap, LayoutDashboard } from 'lucide-react';
import acadifyHero from '@/assets/acadifyeduerp-img/acadifyeduerphero.webp';

const AcadifyEduERPHero = () => {
    const demoUrl = "https://preview.codecanyon.net/item/acadify-edu-the-education-management-system-student-app-only/full_screen_preview/60513357";

    return (
        <section className="relative w-full min-h-screen lg:min-h-[90vh] overflow-hidden flex items-center py-12 lg:py-0"
            style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 40%, #0891b2 70%, #4f46e5 100%)" }}>
            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full opacity-[0.03] bg-blue-600 blur-3xl" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.03] bg-indigo-600 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
                {/* Left Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-white shadow-sm">
                        <Activity size={16} className="text-blue-600" />
                        <span className="text-slate-600 text-sm font-bold tracking-wide uppercase font-sans">Next-Gen Education ERP</span>
                    </div>

                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-[1.15]">
                        Manage Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-900 uppercase">Campus</span> with Pure Intelligence.
                    </h1>

                    <p className="text-lg text-slate-900 max-w-xl leading-relaxed">
                        AcadifyEdu is the ultimate all-in-one education management system that bridges the gap between administrators, teachers, and students.
                    </p>

                    <div className="pt-2">
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl shadow-blue-20"
                        >
                            Live Demo
                            <ArrowRight size={22} />
                        </a>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative mt-8 lg:mt-0">
                    <div className="absolute inset-0 rounded-full blur-3xl opacity-10 bg-gradient-to-br from-blue-400 to-indigo-500" />
                    <div className="relative z-10 w-full max-w-lg mx-auto">
                        <div className="w-full h-64 sm:h-80 lg:h-[400px] rounded-[3rem] border-8 border-white shadow-2xl bg-slate-100 flex items-center justify-center overflow-hidden">
                            <img
                                src={acadifyHero}
                                alt="Acadify Dashboard"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Status elements */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-2xl flex items-center gap-4 border border-slate-50">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                <ShieldPlus size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Status</p>
                                <p className="text-sm font-black text-green-600 leading-none">100% Secure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcadifyEduERPHero;
