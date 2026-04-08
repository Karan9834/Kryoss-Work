import React from 'react';
import onestcrmabout from '@/assets/onestcrm-img/onestcrmabout.jpg';

const OnestCRMAbout = () => {
    return (
        <section className="py-24 bg-[#f8fafc] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-emerald-600/5 rounded-[48px] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                    <div className="relative rounded-[48px] overflow-hidden shadow-2xl border-[12px] border-white">
                        <img 
                            src={onestcrmabout} 
                            alt="Onest CRM Concept" 
                            className="w-full h-auto transform group-hover:scale-110 transition duration-1000"
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-[1.2] font-semibold">
                        A Unified Vision for <span className="text-emerald-600 italic">Enterprise</span> Growth
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed italic">
                        Onest CRM brings all your business operations under one roof. We believe that true efficiency comes from consolidation—allowing you to manage your team, your customers, and your sales pipeline without switching screens.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: "Unified Data", desc: "No more data silos." },
                            { title: "Team Connect", desc: "Sync your workforce." },
                            { title: "Smart Pipeline", desc: "Track every deal." },
                            { title: "Omni Insights", desc: "Total business visibility." }
                        ].map((item, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-emerald-200 transition-colors">
                                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                <p className="text-sm text-slate-500 italic">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnestCRMAbout;
