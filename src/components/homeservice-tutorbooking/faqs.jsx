import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "What defines a specialized Tutor-on-Demand solution?",
        a: "A Tutor-on-Demand solution is an optimized digital ecosystem that facilitates immediate synchronization between learners and geographically proximate or global educators. It simplifies the discovery, reservation, and settlement processes while empowering instructors to oversee their academic assignments."
    },
    {
        q: "What is the operational lifecycle of a learning platform?",
        a: "Learners identify instructors based on academic focus, proximity, or credentialing. Educators evaluate incoming inquiries, confirm sessions, and deliver instruction via digital or physical channels. Financial settlements and session auditing are integrated within the framework."
    },
    {
        q: "Is there flexibility to modify the instructional framework?",
        a: "Absolutely. The architecture is designed for full adaptability, allowing you to configure functional modules, aesthetic signatures, unique branding, and diverse financial portals to align with your specific commercial objectives."
    },
    {
        q: "What is the projected timeline for platform deployment?",
        a: "By leveraging our pre-engineered modular solution, your educational marketplace can be production-ready within a hyper-brief window, with actual duration depending on specific structural adjustments and verification cycles."
    },
    {
        q: "Which mission-critical functionalities are integrated?",
        a: "Core modules include advanced instructor discovery, immediate session reservation, autonomous coordination, protected fiscal gateways, real-time alerts, participant testimonials, and comprehensive administrative oversight."
    },
    {
        q: "Are financial transactions protected within the system?",
        a: "Yes, our architecture incorporates industry-standard encryption protocols and elite financial gateways to guarantee that all instructional settlements are protected, transparent, and auditable for both participants."
    },
    {
        q: "Can the educational ecosystem expand alongside my venture?",
        a: "Our framework is constructed on resilient, extensible architecture designed to accommodate significant increases in participant volume, instructional sessions, and transaction velocity without compromising system stability."
    },
    {
        q: "Through what mechanisms do learners identify instructors?",
        a: "Users can utilize sophisticated filtering parameters including academic specialty, professional experience, peer testimonials, temporal availability, and geographic location to identify their optimal instructional match."
    },
    {
        q: "Is autonomous schedule coordination available for instructors?",
        a: "Instructors possess total authority over their temporal availability, session logistics, and participant engagement directly through their dedicated professional interface."
    },
    {
        q: "What are the initial steps for platform acquisition?",
        a: "You can initiate the process by coordinating a product demonstration with our strategy team. We will facilitate the selection of appropriate modules, oversee configuration, and manage your successful market introduction."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Badge */}
                <div className="flex justify-center mb-4">
                    <span className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-sm">
                        <span className="w-2 h-2 rounded-full bg-orange-500" />
                        Knowledge Base
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-14">
                    Common{" "}
                    <span className="text-orange-500">Inquiries & Operational Insights</span>
                </h2>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {faqs.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4">
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left gap-4"
                            >
                                <span className="text-base md:text-lg font-medium text-gray-900">
                                    {item.q}
                                </span>
                                <span className="flex-shrink-0">
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-gray-600" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-600" />
                                    )}
                                </span>
                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
                                    {item.a}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQSection;