import React from 'react';
import aboutImg from "../../../../../assets/SmartHms/2.,.jpeg";

const SmartHMSAbout = () => {
    return (
        <section className="py-20 lg:py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image / Stats Side */}
                    <div className="w-full lg:w-1/2 relative group order-2 lg:order-1">
                        <div className="absolute inset-0 bg-teal-100 rounded-[2rem] transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                        <div className="relative z-10 bg-slate-50 w-full h-[500px] rounded-[2rem] border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full relative rounded-[1.5rem] overflow-hidden">
                                <img src={aboutImg} alt="Smart HMS" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 mb-2">
                            <span className="w-12 h-px bg-cyan-400"></span>
                            <span className="text-cyan-600 font-bold uppercase tracking-widest text-sm">About Smart HMS</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-slate-800 leading-tight">
                            Elevating Patient Care Through
                            <span className="text-teal-600"> Intelligent Automation</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Smart HMS is designed specifically for multi-specialty hospitals that demand high-performance functionality, seamless integrations, and intuitive interfaces. By centralizing all critical operations—from patient records to pharmacy and billing—we empower healthcare professionals to focus entirely on patient care.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmartHMSAbout;
