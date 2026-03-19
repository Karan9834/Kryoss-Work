import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "What defines a Next-Gen ERP System?",
        a: "A next-gen ERP is characterized by its cloud-native architecture, modular scalability, and built-in AI for predictive analytics, moving beyond legacy monolithic structures."
    },
    {
        q: "How does the ROI manifest for an enterprise?",
        a: "ROI typically manifests through significant reductions in operational friction, elimination of data silos, and a 25-40% increase in inter-departmental processing speeds."
    },
    {
        q: "Is cross-departmental integration truly seamless?",
        a: "Yes, our platform uses a unified data schema that ensures real-time updates across finance, HR, supply chain, and CRM modules without intermediate syncing."
    },
    {
        q: "What security protocols are in place?",
        a: "We utilize multi-layer encryption (AES-256), SOC 2 compliance standards, and biometric role-based access controls to safeguard sensitive corporate intelligence."
    },
    {
        q: "Can we migrate from SAP or Oracle easily?",
        a: "We provide specialized ETL (Extract, Transform, Load) pipelines that automate 80% of the migration process from legacy ERP providers to our modern architecture."
    },
    {
        q: "How do you handle global multi-currency operations?",
        a: "Our finance module features real-time exchange rate integration and automated localized tax compliance for over 150 jurisdictions globally."
    }
];

const ErpFAQ = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-center text-4xl font-semibold mb-14 leading-snug">
                    Common <span className="text-blue-700">Enterprise</span> Inquiries
                </h2>

                {/* faq list */}
                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => {
                        const isOpen = open === index;

                        return (
                            <div key={index} className="border-b border-gray-100 py-6 last:border-none group cursor-pointer" onClick={() => toggle(index)}>
                                <div className="flex justify-between items-center w-full text-left">
                                    <h3 className={`text-lg font-medium transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>
                                        {faq.q}
                                    </h3>
                                    <span className={`ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'}`}>
                                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                    </span>
                                </div>

                                {/* answer */}
                                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ErpFAQ;
