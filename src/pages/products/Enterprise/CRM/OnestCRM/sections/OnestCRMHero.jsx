import React from 'react';
import onestcrmhero from '@/assets/onestcrm-img/onestcrmhero.jpg';

const OnestCRMHero = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#047857] overflow-hidden py-32">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-10">
                    <div className="inline-block">
                        <span className="px-5 py-2 rounded-2xl bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-md">
                            One Stop Solution
                        </span>
                    </div>
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                        Power Your Business with <span className="text-emerald-400">Onest CRM</span> Ecosystem
                    </h1>
                    <p className="text-emerald-50/70 text-lg leading-relaxed max-w-xl italic font-medium">
                        The ultimate management platform for modern enterprises. Streamline your operations, manage customers, and grow your business with Onest CRM.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <a 
                            href="https://preview.codecanyon.net/item/one-stop-crm-customer-relation-management-system/full_screen_preview/45217456" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative px-10 py-5 bg-white text-[#064e3b] font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-emerald-900/40"
                        >
                            <span className="relative z-10">Live Demo</span>
                            <div className="absolute inset-0 rounded-2xl bg-emerald-50 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </a>
                    </div>
                </div>

                <div className="relative max-w-lg mx-auto md:ml-auto">
                    <div className="absolute -inset-4 bg-white/5 rounded-[40px] blur-2xl rotate-3"></div>
                    <div className="relative rounded-[40px] border-4 border-white/10 overflow-hidden shadow-2xl transform hover:-rotate-2 transition-transform duration-700 bg-emerald-900/50 backdrop-blur-xl">
                        <img 
                            src={onestcrmhero} 
                            alt="Onest CRM Dash" 
                            className="w-full h-auto opacity-90 group-hover:opacity-100 transition duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnestCRMHero;
