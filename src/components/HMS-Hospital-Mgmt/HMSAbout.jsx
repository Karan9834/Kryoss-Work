import React from 'react';
import { Activity, ShieldCheck, Stethoscope } from 'lucide-react';
import aboutImg from "@/assets/hmslanding-img/hmslandingabout.jpg";

const HMSAbout = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Interactive Image Placeholder */}
                    <div className="relative group perspective-1000 order-2 lg:order-1">
                        <div className="relative h-[550px] w-full bg-white rounded-[2.5rem] p-4 shadow-2xl border border-teal-100 transform transition-transform duration-700 group-hover:rotate-y-2">
                            <div className="w-full h-full bg-slate-100 rounded-[2rem] overflow-hidden relative flex flex-col items-center justify-center border-t-0 border-teal-200">
                                <img src={aboutImg} alt="HMS About" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8 order-1 lg:order-2">
                        {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-50 border border-teal-100">
                            <ShieldCheck className="w-5 h-5 text-teal-600" />
                            <span className="text-teal-700 text-[12px] font-medium tracking-[0.05em] uppercase">About Our HMS</span>
                        </div>

                        {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                        <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-slate-900">
                            Compassionate Care <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                                Meets Smart Technology
                            </span>
                        </h2>

                        {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                        <p className="text-slate-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                            Managing a healthcare facility shouldn't be a diagnostic puzzle. Our Hospital Management System is designed from the ground up to reduce administrative load, optimize bed management, and let doctors focus purely on what matters: patient care.
                        </p>

                        {/* Feature List - Updated typography */}
                        <div className="grid sm:grid-cols-2 gap-6 pt-6">
                            {[
                                { title: "HIPAA Compliant", desc: "Military-grade data protection." },
                                { title: "EHR Integration", desc: "Seamless electronic health records." },
                                { title: "Automated Billing", desc: "Reduce claim denials effortlessly." },
                                { title: "Telemedicine Ready", desc: "Built-in virtual consultation tools." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-teal-50 transition-colors duration-300 border border-transparent hover:border-teal-100">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-teal-500/20">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <div>
                                        {/* Feature Title - Updated: text-[15px] md:text-[16px] font-bold */}
                                        <h4 className="font-bold text-[15px] md:text-[16px] text-slate-800">{item.title}</h4>
                                        {/* Feature Description - Updated: text-[12px] md:text-[13px] font-normal */}
                                        <p className="text-slate-500 text-[12px] md:text-[13px] font-normal mt-1">{item.desc}</p>
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

export default HMSAbout;