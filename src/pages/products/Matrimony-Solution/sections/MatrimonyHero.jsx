import React from 'react';
import { Heart, Search, Users, ShieldCheck, Sparkles, PlayCircle, ArrowRight, MessageCircle } from 'lucide-react';
import heroImg from '../../../../assets/Matrimony portal/1.jpg';

const MatrimonyHero = () => {
    return (
        <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#FAFAF9]">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-200/40 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[120px] -ml-48 -mb-48"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-rose-100 rounded-full shadow-sm text-purple-600 font-bold text-xs uppercase tracking-widest">
                            <Sparkles size={14} className="text-amber-500" />
                            Next-Gen Matrimony Portal
                        </div>

                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">Meaningful</span> <br />
                            Connections.
                        </h1>

                        <p className="text-slate-600 text-lg md:text-xl max-w-lg leading-relaxed">
                            A highly scalable, secure, and feature-rich matrimony engine customized for communities, brands, and modern matchmaking businesses.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="https://preview.codecanyon.net/item/dating-app-social-match-making-matrimony-theme-react-native-ui-ux-design-tinder-bumble-badoo-clone/full_screen_preview/56904398"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-gradient-to-r from-rose-50 to-rose-100 text-rose-600 font-bold border border-rose-200 rounded-full shadow-lg shadow-rose-200 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group text-center"
                            >
                                Try Live Demo
                                <PlayCircle size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="/company/contact"
                                className="px-8 py-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold rounded-full shadow-xl shadow-rose-200 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group text-center"
                            >
                                <MessageCircle size={20} />
                                Let's Discuss
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="pt-8 flex flex-wrap gap-6 items-center border-t border-slate-200/60 mt-8">
                            <div className="flex items-center gap-2 text-slate-500 font-medium">
                                <ShieldCheck size={20} className="text-emerald-500" />
                                <span>End-to-End Encrypted</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 font-medium">
                                <Users size={20} className="text-purple-500" />
                                <span>Scales to Millions</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual Layout */}
                    <div className="relative mt-12 lg:mt-0">
                        <div className="relative w-full max-w-[500px] mx-auto group">
                            <div className="absolute -inset-8 bg-gradient-to-tr from-rose-300 to-purple-300 rounded-full blur-3xl opacity-30 group-hover:opacity-40 transition-duration-700"></div>

                            {/* Main Frame */}
                            <div className="relative bg-white p-2 rounded-[3rem] shadow-2xl border border-slate-100 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                                <div className="aspect-[5/5]  bg-rose-50 rounded-[2.5rem] overflow-hidden flex items-center justify-center relative border border-slate-100">
                                    <img src={heroImg} alt="Matrimony Hero UI" className="w-full h-full object-cover" />

                                    {/* Overlay Match Card */}
                                    <div className="absolute bottom-6 inset-x-6 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white">
                                        <div className="flex justify-between items-center mb-3">
                                            <div>
                                                <p className="text-sm font-bold text-slate-900">New Perfect Match</p>
                                                <p className="text-xs text-rose-500 font-semibold">98% Compatibility</p>
                                            </div>
                                            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-sm">
                                                <Heart size={18} fill="currentColor" />
                                            </div>
                                        </div>
                                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-rose-400 to-purple-500 w-[98%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MatrimonyHero;
