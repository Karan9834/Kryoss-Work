import React from 'react';
import { Target, TrendingUp, MonitorPlay, MessageSquareText } from 'lucide-react';
import aboutImg from "@/assets/webinar-img/webinarabout.jpg";

const WebinarAbout = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Right: Content (swapped order) */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100">
                            <span className="text-cyan-600 font-bold text-sm uppercase tracking-widest">Purpose Built</span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-900 leading-tight">
                            Engineered for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">Audience Engagement.</span>
                        </h2>

                        <p className="text-slate-600 text-lg leading-relaxed font-medium">
                            Unlike standard meeting tools, our Webinar Engine is built specifically for one-to-many communications. It empowers marketers, educators, and enterprise teams to deliver flawless presentations while keeping the audience actively participating.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-6">
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                                    <Target size={20} />
                                </div>
                                <h4 className="font-bold text-slate-800">Laser-Focused UI</h4>
                                <p className="text-slate-500 text-sm font-medium">Eliminates distractions, keeping attention squarely on the speaker and presentation.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
                                    <TrendingUp size={20} />
                                </div>
                                <h4 className="font-bold text-slate-800">Actionable Insights</h4>
                                <p className="text-slate-500 text-sm font-medium">Deep analytics tracking attendee drop-offs, poll responses, and Q&A interactions.</p>
                            </div>
                        </div>
                    </div>

                    {/* Left: Visual (swapped order) */}
                    <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
                        <div className="absolute inset-0 bg-sky-100 rounded-full blur-[80px] opacity-50 translate-x-12 translate-y-12"></div>

                        <div className="relative w-full max-w-lg aspect-[4/5] sm:aspect-square bg-white border-[12px] border-white rounded-[3rem] shadow-2xl overflow-hidden">
                            <img src={aboutImg} alt="Webinar Engagement" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                                <span className="font-bold text-slate-800">Broadcasting...</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default WebinarAbout;
