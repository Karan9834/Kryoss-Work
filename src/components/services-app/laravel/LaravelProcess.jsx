import React from "react";

const steps = [
    {
        number: "01",
        title: "Requirement Analysis & NDA",
        desc: "We sign a strict NDA and analyze your project scope, technical needs, and client expectations before development begins.",
    },
    {
        number: "02",
        title: "Architecture & Planning",
        desc: "Our experts design scalable system architecture and define sprint milestones for smooth laravel backend development.",
    },
    {
        number: "03",
        title: "UI Integration & Development",
        desc: "We build secure APIs, modules, and databases using best coding practices for high-performance laravel application development.",
    },
    {
        number: "04",
        title: "Agile Sprint Execution",
        desc: "Projects are executed in structured Agile sprints with weekly updates, live demos, and clear milestone tracking.",
    },
    {
        number: "05",
        title: "QA Testing & Security Checks",
        desc: "We perform manual and automated testing to ensure performance, security, and stability before final delivery.",

    },
    {
        number: "06",
        title: "Deployment & Launch Support",
        desc: "We deploy on AWS, DigitalOcean, or preferred cloud platforms and provide 1-year technical support with DevOps monitoring.",
    },
];

const OurProcess = () => {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-14">

                    <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm mb-4">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Our Process
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Our White Label{" "}
                        <span className="text-orange-500">
                            Laravel Development Process
                        </span>
                    </h2>

                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our structured Agile + Scrum methodology ensures every white label
                        laravel development solution is delivered on time, securely, and
                        under your brand with complete transparency.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {steps.map((step, index) => (

                        <div
                            key={index}
                            className="group rounded-2xl border p-8 transition-all duration-300
              
              
                                     shadow-lg
                                    border-gray-200

              hover:border-orange-400 hover:shadow-xl"
                        >

                            {/* Number */}
                            <div
                                className="text-5xl font-bold mb-4 transition
               
                                        
                                         text-gray-300 group-hover:text-orange-500"

                            >
                                {step.number}
                            </div>

                            {/* Title */}
                            <h3
                                className="text-xl font-semibold mb-3 transition
                
                                        
                                         group-hover:text-orange-500"

                            >
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {step.desc}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default OurProcess;