import { MessageCircle } from "lucide-react";
import React from 'react';

const CRMProCTA = () => {
    return (
        <section className="py-24 bg-blue-600 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8">
                    Ready to Transform Your <span className="opacity-80">Sales Pipeline?</span>
                </h2>
                <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto italic font-medium leading-relaxed">
                    Join hundreds of successful businesses that have upgraded their operations with CRM PRO. Start your journey today.
                </p>
                <a 
                    href="https://preview.codecanyon.net/item/crm-pro-crm-software-for-contact-company-opportunity-quote-email-task-tickets-and-more/full_screen_preview/47922180" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition duration-300 shadow-2xl shadow-blue-900/20"
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

export default CRMProCTA;
