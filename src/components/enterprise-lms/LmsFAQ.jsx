import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "What defines a Next-Gen Learning Management System?",
        a: "A next-gen LMS is characterized by its learner-centric design, AI-driven personalization, support for micro-learning, and seamless integration with modern productivity tools."
    },
    {
        q: "Does the platform support SCORM and xAPI standards?",
        a: "Yes, our LMS is fully compatible with SCORM 1.2/2004, AICC, and xAPI standards, ensuring your existing content library works perfectly from day one."
    },
    {
        q: "How does it handle virtual classrooms and live sessions?",
        a: "Our system features deep integrations with Zoom, Microsoft Teams, and Google Meet, allowing instructors to host live webinars and track attendance automatically."
    },
    {
        q: "What measures are in place for student data security?",
        a: "We implement enterprise-grade encryption, GDPR compliance, and advanced role-based access control to ensure that all learner progress and personal data remain secure."
    },
    {
        q: "Can we migrate data from Moodle, Teachable, or other platforms?",
        a: "Absolutely. We offer specialized migration tools and assistance to transfer your courses, student records, and historical data from any major LMS platform seamlessly."
    },
    {
        q: "Does the system support multi-language and localized content?",
        a: "Yes, our LMS features a comprehensive localization engine that supports content and interface translation for over 50 languages, perfect for global academies."
    }
];

const LmsFAQ = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-violet-100/50 blur-3xl rounded-full -ml-32 -mt-32"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100/50 blur-3xl rounded-full -mr-32 -mb-32"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Heading */}
                <h2 className="text-center text-4xl font-semibold mb-14 leading-snug text-slate-800">
                    Common <span className="text-violet-700">Educational</span> Inquiries
                </h2>

                {/* faq list */}
                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => {
                        const isOpen = open === index;

                        return (
                            <div key={index} className="border-b border-violet-100 py-8 last:border-none group cursor-pointer" onClick={() => toggle(index)}>
                                <div className="flex justify-between items-center w-full text-left">
                                    <h3 className={`text-xl font-semibold transition-all duration-300 ${isOpen ? 'text-violet-700 scale-[1.02]' : 'text-slate-700 group-hover:text-violet-600'}`}>
                                        {faq.q}
                                    </h3>
                                    <span className={`ml-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm ${isOpen ? 'bg-violet-600 text-white rotate-180' : 'bg-violet-50 text-violet-600 group-hover:bg-violet-100'}`}>
                                        {isOpen ? <Minus size={22} /> : <Plus size={22} />}
                                    </span>
                                </div>

                                {/* answer */}
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-slate-500 leading-relaxed text-[16px] italic pr-12">
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

export default LmsFAQ;
