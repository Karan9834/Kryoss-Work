import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
    {
        q: "What is white label ecommerce development?",
        a: "White label ecommerce development allows businesses to launch fully branded online stores using pre-built ecommerce solutions that can be customized and rebranded under their own identity."
    },
    {
        q: "How does a white label ecommerce platform work?",
        a: "A white label platform provides a ready-made ecommerce framework. Businesses customize the design, branding, and features while the core technology is already developed."
    },
    {
        q: "Who should use a white label ecommerce solution?",
        a: "Agencies, startups, and enterprises that want to launch ecommerce products quickly without building everything from scratch benefit the most from white label solutions."
    },
    {
        q: "What is the difference between white label ecommerce and custom development?",
        a: "White label solutions are faster and cost-effective since the base platform already exists, while custom development builds everything from scratch with complete flexibility."
    },
    {
        q: "How long does it take to launch a white label ecommerce website?",
        a: "Most white label ecommerce websites can be launched within a few weeks depending on customization requirements and integrations."
    },
    {
        q: "Can I fully customize my white label ecommerce platform?",
        a: "Yes, you can customize branding, UI/UX, features, integrations, and functionality according to your business needs."
    },
    {
        q: "Do I get ownership of the ecommerce website?",
        a: "Yes, most white label ecommerce solutions provide full ownership of your store, including branding and data."
    },
    {
        q: "Is white label ecommerce development scalable for global markets?",
        a: "Yes, modern ecommerce platforms support multi-currency, multi-language, and global payment gateways."
    },
    {
        q: "Is white label ecommerce development SEO-friendly?",
        a: "Yes, these platforms are usually optimized for SEO with features like customizable URLs, meta tags, and structured data."
    },
    {
        q: "What are the benefits of choosing a white label ecommerce solution?",
        a: "It reduces development time, lowers costs, allows faster market entry, and lets businesses focus on growth instead of building technology."
    }
];

const EcommerceFAQ = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm mb-4">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        FAQs
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Have Questions About Our{" "}
                        <span className="text-orange-500">
                            E-Commerce Website Development Services?
                        </span>
                    </h2>

                    <p className="text-gray-600 max-w-3xl mx-auto">
                        No matter whether you've a query related to which features to include,
                        development cost, time, and more. No jargon — we're here to solve all
                        your queries related to E-Commerce Web Development.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-5">

                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-full px-6 py-5 shadow-sm"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="flex items-center justify-between w-full text-left"
                            >
                                <span className="text-lg font-medium">
                                    {item.q}
                                </span>

                                <span className="w-8 h-8 flex items-center justify-center border rounded-full">
                                    {open === index ? (
                                        <Minus size={18} />
                                    ) : (
                                        <Plus size={18} />
                                    )}
                                </span>
                            </button>

                            {open === index && (
                                <div className="pt-4 text-gray-600 leading-relaxed">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default EcommerceFAQ;