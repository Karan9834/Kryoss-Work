import React from 'react';
import { Pill, Activity, ShieldCheck, HeartPulse } from 'lucide-react';
import aboutImg from "@/assets/pmslanding-img/pmslandingabout.jpg";

const PMSAbout = () => {
    const highlights = [
        {
            icon: <Pill className="text-emerald-500" size={20} />,
            title: "Smart Inventory",
            text: "Real-time stock tracking with predictive ordering and expiration alerts."
        },
        {
            icon: <Activity className="text-teal-500" size={20} />,
            title: "Prescription Sync",
            text: "Seamless integration with e-prescriptions for accurate dispensing."
        },
        {
            icon: <ShieldCheck className="text-[#00BFA5]" size={20} />,
            title: "Regulatory Compliance",
            text: "Fully compliant with local healthcare regulations and safety standards."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <div className="relative group order-2 lg:order-1">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                        <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                            <img
                                src={aboutImg}
                                alt="Modern Pharmacy Management"
                                className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>

                            {/* Floating Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                        <HeartPulse size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-gray-900 text-lg uppercase tracking-tight">Healthcare Excellence</h4>
                                        <p className="text-emerald-600 font-bold text-xs tracking-widest uppercase">Patient-Centric Care</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-bold uppercase tracking-wider shadow-sm">
                            <Activity size={16} />
                            <span>Clinical Operations Reimagined</span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                            Precision In Every <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-900">
                                Prescription Process
                            </span>
                        </h2>

                        <p className="text-gray-600 text-xl leading-relaxed font-medium">
                            Our Pharmacy Management System is more than just software—it's a clinical ecosystem built for accuracy, compliance, and patient wellness.
                        </p>

                        <div className="space-y-6 pt-4">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="flex gap-4 group cursor-default">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg group-hover:text-emerald-600 transition-colors duration-300 tracking-tight uppercase">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-500 font-medium leading-relaxed">
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

export default PMSAbout;
