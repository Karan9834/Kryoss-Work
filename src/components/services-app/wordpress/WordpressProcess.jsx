import React from "react";

const process = [
    {
        number: "01",
        title: "Project Briefing & Requirement Gathering",
        desc: "We start by understanding your client's technical requirements, design expectations & timeline so every decision during development aligns with the business objective.",
    },
    {
        number: "02",
        title: "NDA Signing & Project Kickoff",
        desc: "Before any work begins we sign a mutual NDA to protect your client data and business relationships. Once signed we assign a dedicated project manager and development team.",
    },
    {
        number: "03",
        title: "Planning, Architecture & Tech Stack Finalization",
        desc: "We define the WordPress architecture, select the right tech stack including themes, plugins or headless setup and create a structured project plan.",
    },
    {
        number: "04",
        title: "Design Review & WordPress Development",
        desc: "Our developers start building custom themes and WooCommerce stores based on approved designs while sharing regular sprint updates.",
    },
    {
        number: "05",
        title: "Quality Assurance & Performance Testing",
        desc: "Every deliverable goes through rigorous QA including cross-browser testing, mobile responsiveness, page speed optimization and security audits.",
    },
    {
        number: "06",
        title: "Delivery, Handoff & Ongoing Support",
        desc: "We deliver clean, fully documented WordPress builds ready for your client and offer post-launch maintenance and support under your brand.",
    },
];

const OurProcess = () => {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* heading */}
                <div className="text-center mb-16">

                    <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-sm mb-4">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Our Process
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Our White Label{" "}
                        <span className="text-orange-500">
                            WordPress Development Process
                        </span>
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                        A structured transparent process separates a reliable white label
                        partner from vendors that keep you guessing. Here’s exactly how we
                        work from your first brief to final delivery.
                    </p>

                </div>

                {/* cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {process.map((item, index) => (

                        <div
                            key={index}
                            className="group border border-gray-200 rounded-2xl p-8 bg-white transition-all duration-300 hover:border-orange-400 hover:shadow-xl hover:bg-orange-50/30"
                        >

                            {/* number */}
                            <div className="text-[60px] font-bold text-gray-200 mb-4 transition-colors duration-300 group-hover:text-orange-500">
                                {item.number}
                            </div>

                            {/* title */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-orange-500">
                                {item.title}
                            </h3>

                            {/* description */}
                            <p className="text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default OurProcess;