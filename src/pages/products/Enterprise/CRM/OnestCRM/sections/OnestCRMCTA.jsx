import { MessageCircle } from "lucide-react";
import React from 'react';

const OnestCRMCTA = () => {
    return (
        <section className="py-24 bg-emerald-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-10">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 border-4 border-white rounded-[64px] rotate-12"></div>
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border-2 border-white rounded-[48px] -rotate-12"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 leading-tight font-semibold">
                    Ready to Orchestrate your <span className="underline decoration-emerald-300 underline-offset-8">Enterprise?</span>
                </h2>
                <p className="text-emerald-50 text-lg mb-12 max-w-2xl mx-auto italic font-medium leading-relaxed">
                    Deploy Onest CRM today and give your business the centralized engine it needs to dominate your industry.
                </p>
                <a 
                    href="https://preview.codecanyon.net/item/one-stop-crm-customer-relation-management-system/full_screen_preview/45217456" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-12 py-6 bg-white text-emerald-700 font-bold rounded-[32px] hover:bg-emerald-50 transition-all duration-300 shadow-2xl shadow-emerald-900/30 hover:scale-105"
                >
                    Live Demo
                </a>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
            </div>
        </section>
    );
};

export default OnestCRMCTA;
