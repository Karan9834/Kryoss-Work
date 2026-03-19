import React from 'react';
import {
    Database,
    Smartphone,
    Cloud,
    BookOpen,
    Layers,
    Layout
} from 'lucide-react';

const LmsWhatWeProvide = () => {
    const provisions = [
        {
            icon: Cloud,
            title: "Cloud Content Hosting",
            desc: "Secure and scalable cloud infrastructure to host your entire library of educational content."
        },
        {
            icon: Smartphone,
            title: "Cross-Platform Apps",
            desc: "High-performance mobile applications optimized for remote learning on any device."
        },
        {
            icon: Layout,
            title: "Adaptive Interface",
            desc: "User interfaces that respond to learner behavior and device specifications automatically."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Heading */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-violet-200 bg-violet-50 text-xs font-black text-violet-700 mb-6 uppercase tracking-widest">
                        Total Solutions
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
                        What We <span className="text-violet-700">Deliver</span> for Success
                    </h2>
                </div>

                {/* 3-Column Grid Layout (Different from ERP's 2-column layout) */}
                <div className="grid md:grid-cols-3 gap-10">
                    {provisions.map((item, index) => (
                        <div key={index} className="group p-10 rounded-[48px] bg-slate-50 border border-transparent hover:border-violet-200 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-violet-100/50">
                            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-lg group-hover:bg-violet-600 group-hover:rotate-12 transition-all duration-500">
                                <item.icon className="text-violet-600 group-hover:text-white transition-colors duration-500" size={36} />
                            </div>
                            
                            <h3 className="text-2xl font-semibold mb-4 text-slate-800 tracking-tight group-hover:text-violet-700 transition-colors">
                                {item.title}
                            </h3>
                            
                            <p className="text-slate-500 leading-relaxed italic text-sm">
                                {item.desc}
                            </p>

                            <div className="mt-8 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs font-semibold text-violet-600 uppercase tracking-widest">Learn More</span>
                                <div className="h-[2px] w-8 bg-violet-300"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-20 h-1 w-32 bg-violet-100 mx-auto rounded-full"></div>
            </div>
        </section>
    );
};

export default LmsWhatWeProvide;
