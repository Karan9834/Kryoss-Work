import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        q: "What is an Uber clone script?",
        a: "An Uber clone script is a ready-to-launch software solution that replicates the core features and functionality of the Uber ride-hailing app, allowing entrepreneurs to start their own taxi booking business quickly."
    },
    {
        q: "How much does it cost to build a taxi app like Uber?",
        a: "The cost varies based on features, customization, and platform (iOS, Android, or both). Our ready-made solution is significantly more cost-effective than building from scratch."
    },
    {
        q: "Is the Uber clone script scalable?",
        a: "Yes, our solution is built on a robust architecture that can handle thousands of drivers and concurrent ride requests as your business grows."
    },
    {
        q: "Do you provide the source code?",
        a: "Yes, we provide 100% source code ownership, allowing you to customize and host the software on your own servers."
    },
    {
        q: "Can I add more features in the future?",
        a: "Absolutely! The modular code structure allows for easy integration of new features and third-party services as your business evolves."
    }
];

const UberFAQ = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-10 lg:px-20">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-primary">Support</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h3>
                </div>

                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-100 last:border-0 py-2">
                                <AccordionTrigger className="text-left text-lg font-bold text-gray-800 hover:text-primary transition-colors hover:no-underline">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base leading-relaxed pt-4">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default UberFAQ;
