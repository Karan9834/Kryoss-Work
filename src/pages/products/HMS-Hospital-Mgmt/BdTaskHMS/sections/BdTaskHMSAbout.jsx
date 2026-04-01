import React from 'react';
import aboutImg from "@/assets/bdtaskhms-img/bdtaskhmsabout.webp";

const BdTaskHMSAbout = () => {
    return (
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Soft decorative background shape */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-purple-50/50 rounded-br-full -z-10"></div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Changed to flex-col on mobile, flex-row on desktop. Left side is image. right is text */}
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side (Left for BdTask as requested) */}
                    <div className="w-full lg:w-1/2 relative group flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-lg aspect-[4/3] bg-slate-50 border-2 border-slate-200 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(147,51,234,0.15)] flex items-center justify-center group-hover:border-purple-300 group-hover:shadow-[0_20px_50px_-15px_rgba(147,51,234,0.3)] transition-all duration-500 overflow-hidden">
                            <img src={aboutImg} alt="BdTask About" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>

                    {/* Text Side (Right for BdTask) */}
                    <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center justify-center lg:justify-start gap-3 w-full lg:w-auto">
                            <span className="w-8 h-1 bg-fuchsia-600 rounded-full"></span>
                            <span className="text-fuchsia-600 font-bold uppercase tracking-widest text-sm">Flexible & Agile</span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-semibold text-slate-800 leading-tight">
                            A Clinic Dashboard Built for <span className="text-purple-700">Rapid Growth</span>
                        </h2>

                        <p className="text-slate-600 text-lg leading-relaxed font-medium">
                            Unlike monolithic enterprise systems, BdTask HMS provides just the right amount of structure to organize your clinic without slowing you down. It empowers independent healthcare providers with robust scheduling, lightning-fast electronic prescriptions, and easy accounting modules.
                        </p>

                        <div className="pt-2">
                            <ul className="space-y-4 text-left inline-block lg:block">
                                <li className="flex items-center gap-4 text-slate-700 font-semibold text-lg">
                                    <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm">✓</span>
                                    Zero Configuration Setup
                                </li>
                                <li className="flex items-center gap-4 text-slate-700 font-semibold text-lg">
                                    <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-fuchsia-600 shadow-sm">✓</span>
                                    Highly Customizable Prescriptions
                                </li>
                                <li className="flex items-center gap-4 text-slate-700 font-semibold text-lg">
                                    <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm">✓</span>
                                    Transparent Modular Pricing
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BdTaskHMSAbout;
