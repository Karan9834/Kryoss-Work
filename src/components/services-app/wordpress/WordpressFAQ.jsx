import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "What is white label WordPress development?",
        a: "White label WordPress development means outsourcing WordPress design and development work to a specialized team that delivers the project under your brand name."
    },
    {
        q: "How does white label WordPress development work for agencies?",
        a: "Agencies partner with a white label team that handles development while the agency manages the client relationship."
    },
    {
        q: "Is my client data safe with a white label WordPress development company?",
        a: "Yes, reputable white label partners sign NDAs and follow strict security practices to ensure client data protection."
    },
    {
        q: "What types of WordPress projects can be outsourced?",
        a: "Anything from custom themes, WooCommerce stores, plugin development, headless WordPress, and ongoing maintenance."
    },
    {
        q: "What is the difference between white label development and outsourcing?",
        a: "White label development allows agencies to deliver work under their brand while outsourcing usually reveals the third-party provider."
    },
    {
        q: "How much does white label WordPress development cost?",
        a: "Pricing depends on project complexity, required features, and timeline but it is generally more cost-effective than hiring in-house developers."
    },
    {
        q: "How long does it take to complete a white label WordPress project?",
        a: "Typical projects take anywhere from a few days to several weeks depending on scope and customization."
    },
    {
        q: "Can Kryoss Work handle maintenance and support?",
        a: "Yes, many white label providers offer ongoing maintenance, security updates, and performance monitoring."
    },
    {
        q: "Do you provide white label WooCommerce development?",
        a: "Yes, WooCommerce stores, payment integrations, and custom features are commonly handled under white label partnerships."
    },
    {
        q: "Why should I choose Kryoss Work as my partner?",
        a: "Kryoss Work provides experienced developers, secure NDA workflows, fast delivery, and scalable WordPress solutions."
    }
];

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* heading */}

                <div className="text-center mb-16">

                    <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-sm mb-4">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        FAQs
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold">
                        <span className="text-orange-500">Frequently</span> Asked Question
                    </h2>

                </div>

                {/* grid */}

                <div className="grid md:grid-cols-2 gap-x-16">

                    {faqs.map((item, index) => {

                        const isOpen = openIndex === index;

                        return (

                            <div
                                key={index}
                                className="border-b border-gray-200 py-6 cursor-pointer"
                                onClick={() => toggle(index)}
                            >

                                {/* question */}

                                <div className="flex justify-between items-center gap-6">

                                    <h3 className="text-lg font-medium text-gray-900">
                                        {item.q}
                                    </h3>

                                    {/* icon */}

                                    <div className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">

                                        {isOpen ? (
                                            <Minus size={16} />
                                        ) : (
                                            <Plus size={16} />
                                        )}

                                    </div>

                                </div>

                                {/* answer */}

                                {isOpen && (
                                    <p className="text-gray-600 mt-4 leading-relaxed pr-6">
                                        {item.a}
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

export default FAQ;