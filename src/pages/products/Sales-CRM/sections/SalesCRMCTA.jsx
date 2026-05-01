import { MessageCircle } from "lucide-react";
import React from "react";

const CRMCTA = () => {
    return (
        <section className="py-24 bg-[#1e1b4b]">

            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Ready to Transform Your Sales Process?
                </h2>

                <p className="text-gray-400 mt-4">
                    Manage leads, automate workflows, and close deals faster with our
                    enterprise CRM solution.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                        href="https://preview.codecanyon.net/item/sales-saas-business-sales-crm/full_screen_preview/30241292"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-200 transition"
                    >
                        Try Live Demo
                    </a>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
                </div>

            </div>

        </section>
    );
};

export default CRMCTA;