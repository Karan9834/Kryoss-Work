import React from 'react';
import { CheckCircle2, GraduationCap, Users, ShieldCheck, Zap } from 'lucide-react';
import aboutImg from "@/assets/smslanding-img/smslandingabout.jpg";

const SMSAbout = () => {
    const highlights = [
        {
            icon: <Users className="text-blue-500" size={20} />,
            title: "Student Management",
            text: "Efficiently manage student data, profiles, and academic records."
        },
        {
            icon: <CheckCircle2 className="text-emerald-500" size={20} />,
            title: "Attendance Tracking",
            text: "Automated attendance marking and detailed reporting for all classes."
        },
        {
            icon: <ShieldCheck className="text-indigo-500" size={20} />,
            title: "Security & Privacy",
            text: "Enterprise-grade security to ensure sensitive institutional data remains protected."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <div className="relative group order-2 lg:order-1">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-emerald-100 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                        <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                            <img
                                src={aboutImg}
                                alt="Modern School Management"
                                className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>

                            {/* Floating Card - Updated typography */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                                        <Zap fill="currentColor" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-[16px] md:text-[18px]">Next-Gen Education</h4>
                                        <p className="text-blue-600 font-semibold text-[11px] md:text-[12px] uppercase tracking-[0.05em]">Smart AI-Driven Insights</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8 order-1 lg:order-2">
                        {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[12px] font-medium tracking-[0.05em] uppercase">
                            <GraduationCap size={14} />
                            <span>About Our Platform</span>
                        </div>

                        {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                        <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
                            Transforming Institutions <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500">
                                Beyond the Classroom
                            </span>
                        </h2>

                        {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                        <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                            Our School Management System (SMS) is built to unify administrators, teachers, parents, and students. By automating complex workflows, we allow educators to focus on what matters most—teaching.
                        </p>

                        {/* Feature Highlights - Updated typography */}
                        <div className="space-y-6 pt-4">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="flex gap-4 group cursor-default">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-blue-200 group-hover:text-white transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        {/* Feature Title - Updated: text-[16px] md:text-[18px] font-bold */}
                                        <h4 className="font-bold text-[16px] md:text-[18px] text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {item.title}
                                        </h4>
                                        {/* Feature Description - Updated: text-[13px] md:text-[14px] font-normal */}
                                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal">
                                            {item.text}
                                        </p>
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

export default SMSAbout;