import React from 'react';
import { Shield, Target, Users, Search, Activity, Lock } from 'lucide-react';
import aboutimg from '../../../../assets/Matrimony portal/about.jpg';
const MatrimonyAbout = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Soft Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Visual Grid Layout */}
                    {/* <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-12">
                            <div className="bg-rose-50 rounded-3xl p-6 aspect-square flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow">
                                <Search size={40} className="text-rose-500 mb-4" />
                                <h3 className="font-bold text-slate-900">Deep Search</h3>
                                <p className="text-xs text-slate-500 mt-2">Filter by 50+ cultural parameters.</p>
                            </div>
                            <div className="bg-purple-50 rounded-3xl p-6 aspect-square flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <Shield size={40} className="text-purple-600 mb-4 group-hover:text-white transition-colors relative z-10" />
                                <h3 className="font-bold text-slate-900 group-hover:text-white transition-colors relative z-10">Family Approved</h3>
                                <p className="text-xs text-slate-500 mt-2 group-hover:text-white/80 transition-colors relative z-10">Multi-tier privacy bounds.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-slate-50 rounded-3xl p-6 aspect-[4/5] flex flex-col items-center justify-center text-center shadow-inner border border-slate-100 relative group overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors"></div>
                                <div className="text-center opacity-40 group-hover:opacity-100 transition-opacity space-y-3">
                                    <Users size={60} className="mx-auto text-slate-400" />
                                    <p className="font-bold uppercase tracking-widest text-xs text-slate-500">Platform Image</p>
                                </div>
                            </div>
                            <div className="bg-amber-50 rounded-3xl p-6 aspect-video flex flex-col justify-center items-center text-center shadow-sm">
                                <Activity size={32} className="text-amber-500 rtl" />
                                <h3 className="font-bold text-slate-900 mt-2">High Retention</h3>
                            </div>
                        </div>
                    </div> */}
                    {/* Image Section */}
                    <div className="lg:w-1/2 w-full order-2 lg:order-1">
                        <img
                            src={aboutimg}
                            alt="about the matrimony"
                            className="w-full h-auto rounded-3xl shadow-4xl object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2 space-y-8 order-1 lg:order-2">
                        <div>
                            <span className="text-rose-600 font-bold text-sm uppercase tracking-widest block mb-3">Why Choose Our Framework</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                                A Complete Ecosystem for <br className="hidden lg:block" />
                                <span className="text-purple-600">Modern Matchmaking</span>
                            </h2>
                        </div>

                        <p className="text-slate-600 text-lg leading-relaxed">
                            Traditional matrimony is evolving. Our solution bridges the gap between deep cultural traditions and modern dating expectations, giving your users a secure, respectful, and highly engaging platform to find their life partners.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Customizable Match Algorithms", desc: "Adapt the core logic to match based on astrology, profession, community, or modern lifestyle choices." },
                                { title: "Bank-Grade Privacy", desc: "Features like photo watermarking, secure chat without sharing numbers, and family-managed accounts." },
                                { title: "Monetization Ready", desc: "Built-in subscription tiers, pay-per-contact features, and premium badge promotions out of the box." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                                            <div className="w-2 h-2 rounded-full bg-current"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-slate-500 mt-1">{item.desc}</p>
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

export default MatrimonyAbout;
