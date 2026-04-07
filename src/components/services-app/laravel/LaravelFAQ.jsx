import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
    {
        question: "What is a white label Laravel development company?",
        answer:
            "A white label Laravel development company builds Laravel applications for agencies and businesses that want to deliver projects under their own brand name without revealing the development partner."
    },
    {
        question: "How does a white label web development company work?",
        answer:
            "A white label partner works behind the scenes, developing applications while your agency communicates with the client and delivers the final solution under your brand."
    },
    {
        question: "Who should outsource Laravel development services?",
        answer:
            "Startups, agencies, SaaS companies, and enterprises that want to scale development quickly without hiring a full in-house team often outsource Laravel development."
    },
    {
        question: "Do you provide dedicated Laravel developers for agencies?",
        answer:
            "Yes, agencies can hire dedicated Laravel developers who work as an extension of their team and deliver projects under strict confidentiality."
    },
    {
        question: "Is white label Laravel development secure?",
        answer:
            "Yes. White label development follows NDA agreements, secure coding practices, and strict confidentiality to ensure your client relationships remain protected."
    },
    {
        question: "What industries do you serve with Laravel development?",
        answer:
            "We serve industries like eCommerce, logistics, healthcare, fintech, SaaS platforms, marketplaces, and enterprise web applications."
    },
    {
        question: "Do you offer post-launch support and DevOps?",
        answer:
            "Yes. We provide deployment, monitoring, maintenance, and DevOps support to ensure applications run smoothly after launch."
    },
    {
        question: "What technology stack do you use for Laravel development?",
        answer:
            "Our stack includes Laravel, MySQL, PostgreSQL, Redis, Docker, AWS, React, Vue, Tailwind CSS, and modern DevOps tools."
    },
    {
        question: "How long does a Laravel project take to complete?",
        answer:
            "Project timelines depend on complexity. Small projects may take a few weeks while enterprise platforms may take several months."
    },
    {
        question: "Why choose Kryoss Work as your Laravel development partner?",
        answer:
            "We provide experienced developers, NDA protection, scalable architecture, and fast delivery so agencies can confidently serve their clients."
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

                {/* Heading */}
                <div className="text-center mb-16">

                    <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-sm mb-4">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        FAQs
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold">
                        <span className="text-orange-500">Frequently</span> Asked Question
                    </h2>

                </div>

                {/* FAQ Grid */}
                <div className="grid md:grid-cols-2 gap-10">

                    {faqData.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200 pb-5">

                            {/* Question */}
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center text-left gap-6"
                            >

                                <h3 className="text-lg font-medium text-gray-800">
                                    {faq.question}
                                </h3>

                                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300">
                                    {openIndex === index ? (
                                        <Minus size={18} />
                                    ) : (
                                        <Plus size={18} />
                                    )}
                                </div>

                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <p className="text-gray-600 mt-4 leading-relaxed pr-8">
                                    {faq.answer}
                                </p>
                            )}

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default FAQ;