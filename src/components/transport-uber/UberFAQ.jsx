import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const uberFaqs = [
    {
        q: "How does an integrated mobility framework serve transportation enterprises?",
        a: "A high-performance mobility platform bridges the gap between passengers and service partners through a robust digital interface. This allows for real-time request handling, automated tracking, and secure financial reconciliation."
    },
    {
        q: "What is the most effective strategy for a rapid market entry?",
        a: "The most efficient path is leveraging a sophisticated, white-label architectural core that can be rapidly customized with your specific branding and feature requirements before deployment."
    },
    {
        q: "Which organizations should consider a dedicated transportation solution?",
        a: "A range of entities, including established fleet owners, ambitious tech entrepreneurs, regional mobility startups, and corporate logistics providers, can derive significant value from these platforms."
    },
    {
        q: "Is it possible to adapt the platform for regional operational nuances?",
        a: "Certainly. Our mobility framework can be precision-tuned to accommodate localized rate structures, city-specific logistics, partner management protocols, and regional regulatory compliance."
    },
    {
        q: "Does the architecture support heterogeneous service types in a single interface?",
        a: "Yes. The system is designed to seamlessly orchestrate diverse offerings—such as car-shares, courier services, premium executive transit, and last-mile delivery—within a unified user environment."
    },
    {
        q: "What is the typical timeframe from implementation to market launch?",
        a: "Subject to the level of custom engineering and rigorous quality assurance required, a full platform deployment generally occurs within a 4 to 8-week window."
    },
    {
        q: "Can the infrastructure handle significant volume increases over time?",
        a: "Absolutely. The platform utilizes an elastic architecture designed to scale effortlessly, supporting a growing volume of partners, participants, geographical regions, and service categories."
    },
    {
        q: "What diversified revenue structures are integrated into the system?",
        a: "The framework supports numerous monetization strategies, including per-journey commissions, partner subscription tiers, intelligent demand-based pricing, and structured service fees."
    },
    {
        q: "How are administrative tasks and journey oversight managed?",
        a: "Administrative leads maintain granular control through a centralized operational headquarters, enabling real-time journey monitoring, partner management, and financial auditing."
    },
    {
        q: "Are comprehensive safety protocols and security features standard?",
        a: "Yes. The platform incorporates rigid security measures, including multi-factor partner verification, integrated emergency response alerts, live trip telemetry, and encrypted payment processing."
    }
];

const UberFaqs = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* heading */}
                <div className="text-center mb-16">

                    <span className="border rounded-full px-4 py-1 text-sm inline-flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 bg-black rounded-full"></span>
                        Project Queries
                    </span>

                    <h2 className="text-4xl font-semibold">
                        Core System Intelligence & Inquiries
                    </h2>

                </div>


                {/* grid */}
                <div className="grid md:grid-cols-2 gap-x-16">

                    {uberFaqs.map((faq, index) => {

                        const isOpen = open === index;

                        return (
                            <div key={index} className="border-b py-6">

                                <button
                                    onClick={() => toggle(index)}
                                    className="flex justify-between items-center w-full text-left text-lg font-medium"
                                >

                                    {faq.q}

                                    <span className="border rounded-full p-1 ml-4">

                                        {isOpen ? (
                                            <Minus size={18} />
                                        ) : (
                                            <Plus size={18} />
                                        )}

                                    </span>

                                </button>

                                {isOpen && (
                                    <p className="mt-4 text-gray-600 leading-relaxed">
                                        {faq.a}
                                    </p>
                                )}

                            </div>
                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default UberFaqs;