import { MessageCircle } from "lucide-react";
import React from 'react';
import crmprohero from '@/assets/crmpro-img/crmprohero.jpg';

const CRMProHero = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4338ca] overflow-hidden py-32">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-10">
                    <div className="inline-block">
                        <span className="px-5 py-2 rounded-2xl bg-white/10 border border-white/20 text-indigo-300 text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-md">
                            Enterprise Ready
                        </span>
                    </div>
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                        Revolutionize your <span className="text-indigo-400">Relationship</span> Management
                    </h1>
                    <p className="text-indigo-50/70 text-lg leading-relaxed max-w-xl italic font-medium">
                        The definitive CRM solution for scaling enterprises. CRM PRO provides deep insights, automated workflows, and global connectivity for your entire team.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <a 
                            href="https://preview.codecanyon.net/item/crm-pro-crm-software-for-contact-company-opportunity-quote-email-task-tickets-and-more/full_screen_preview/47922180" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative px-10 py-5 bg-white text-[#1e1b4b] font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-indigo-900/40"
                        >
                            <span className="relative z-10">Live Demo</span>
                            <div className="absolute inset-0 rounded-2xl bg-indigo-50 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </a>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
                    </div>
                </div>

                <div className="relative max-w-lg mx-auto md:ml-auto">
                    <div className="absolute -inset-4 bg-white/5 rounded-[40px] blur-2xl rotate-3"></div>
                    <div className="relative rounded-[40px] border-4 border-white/10 overflow-hidden shadow-2xl transform hover:-rotate-2 transition-transform duration-700 bg-indigo-900/50 backdrop-blur-xl">
                        <img 
                            src={crmprohero} 
                            alt="CRM PRO Dash" 
                            className="w-full h-auto opacity-90 group-hover:opacity-100 transition duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CRMProHero;
