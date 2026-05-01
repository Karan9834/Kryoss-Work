import React from 'react';
import crmproabout from '../../../../../../assets/CRM pro/2.,.jpg';

const CRMProAbout = () => {
    return (
        <section className="py-24 bg-[#f8fafc] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-indigo-600/5 rounded-[48px] blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                    <div className="relative rounded-[48px] overflow-hidden shadow-2xl border-[12px] border-white">
                        <img 
                            src={crmproabout} 
                            alt="CRM PRO Concept" 
                            className="w-full h-auto transform group-hover:scale-110 transition duration-1000"
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-[1.2] font-semibold">
                        A New Standard in <span className="text-indigo-600 italic">Financial</span> & Relationship Engineering
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed italic">
                        CRM PRO is not just about tracking contacts. It's about orchestrating your entire business ecosystem. From intelligent lead scoring to integrated invoicing and financial tracking, we provide the tools to scale with absolute confidence.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: "Intelligent Scoring", desc: "Know where to focus." },
                            { title: "Financial Core", desc: "Integrated invoices." },
                            { title: "Opportunity Grid", desc: "Never miss a deal." },
                            { title: "Global Sync", desc: "Remote team harmony." }
                        ].map((item, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-indigo-200 transition-colors">
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

export default CRMProAbout;
