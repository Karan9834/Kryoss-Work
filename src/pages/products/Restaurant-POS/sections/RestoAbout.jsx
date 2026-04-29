import React from 'react';
import { UtensilsCrossed, Users, BarChart } from 'lucide-react';
import aboutImg from "../../../../assets/resturantpos-img/resturantposabout.jpg";

const RestoAbout = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Visual (Classical Layout) */}
                    <div className="relative group animate-fadeInLeft">
                        <div className="absolute -inset-10 bg-emerald-50 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative bg-white p-4 rounded-[3.8rem] shadow-2xl border border-emerald-50 overflow-hidden">
                            <img
                                src={aboutImg}
                                alt="Kitchen Management"
                                className="w-full h-full object-cover rounded-[3rem] group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>

                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <span className="text-indigo-600 font-bold text-sm uppercase tracking-[0.3em] block decoration-emerald-400 underline underline-offset-8">Mastering Hospitality</span>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1E293B] leading-tight">
                                Built by restaurateurs, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-emerald-600 to-amber-500">For restaurateurs.</span>
                            </h2>
                            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl">
                                We understand the chaos of a busy service. That's why we've built a system that stays out of your way and helps you focus on what matters: the food and the guests.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-10 pt-4">
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                                    <Users size={20} />
                                </div>
                                <h3 className="font-black uppercase tracking-tight text-sm">Staff Management</h3>
                                <p className="text-gray-400 text-xs font-bold leading-relaxed">Role-based access and attendance tracking.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                                    <BarChart size={20} />
                                </div>
                                <h3 className="font-black uppercase tracking-tight text-sm">Advanced Insights</h3>
                                <p className="text-gray-400 text-xs font-bold leading-relaxed">Inventory alerts and revenue forecasting.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RestoAbout;
