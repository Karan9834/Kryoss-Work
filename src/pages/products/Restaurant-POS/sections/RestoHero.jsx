import React from 'react';
import { ArrowRight, Utensils, Info, MessageCircle } from 'lucide-react';
import heroImg from "../../../../assets/resturantpos-img/resturantposhero.jpg";

const RestoHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-emerald-900">
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-indigo-950/40"></div>

            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-amber-500/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-amber-400 text-xs font-black uppercase tracking-widest">
                            <Utensils size={16} />
                            <span>Ultimate Dining OS</span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
                            Elevate Every <br />
                            <span className="text-amber-300">Dining Experience</span> <br />
                            <span className="text-emerald-200 text-3xl lg:text-4xl xl:text-5xl ">With Precision POS</span>
                        </h1>

                        <p className="text-indigo-50 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold opacity-90">
                            The most intuitive restaurant management system ever built. From table management to lightning-fast billing, we've got your back.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <a
                                href="https://preview.codecanyon.net/item/pos-saas-addon-for-salepro-multitenant-inventory-billing-module/full_screen_preview/58373948"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-5 bg-white text-indigo-700 font-black rounded-3xl hover:bg-amber-400 hover:text-white hover:scale-110 transition-all shadow-2xl flex items-center gap-3 group"
                            >
                                Try Live Demo
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/company/contact"
                                className="px-10 py-5 bg-white/10 text-white font-black rounded-3xl border border-white/20 hover:bg-white/20 hover:scale-110 transition-all shadow-2xl flex items-center gap-3 group backdrop-blur-sm"
                            >
                                <MessageCircle size={24} />
                                Let's Discuss
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Asset Preview */}
                    <div className="relative animate-float block scale-90 md:scale-100">
                        <div className="absolute -inset-4 bg-white/20 rounded-[5rem] blur-2xl opacity-50"></div>
                        <div className="relative bg-white/10 h-[400px] md:h-[500px] backdrop-blur-xl rounded-[5rem] border-4 border-white/30 overflow-hidden shadow-2xl flex items-center justify-center">
                            <img
                                src={heroImg}
                                alt="Restaurant POS Terminal"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

export default RestoHero;
