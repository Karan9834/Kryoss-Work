import React from "react";

const steps = [
    {
        number: "01",
        title: "Platform Launch",
        desc: "Deploy the secure source code via your web environment. Launch the core administration panel securely."
    },
    {
        number: "02",
        title: "Plan Architecture",
        desc: "Design unique unilevel, forced matrix, or step-based referral models defining direct and indirect referral limits."
    },
    {
        number: "03",
        title: "Monetize PTC",
        desc: "Create and attach high-conversion paid-to-click assignments seamlessly blending into network activities."
    },
    {
        number: "04",
        title: "Mass Registration",
        desc: "Users join via specific upline IDs dynamically placing them into the appropriate spots utilizing spillover logic."
    },
    {
        number: "05",
        title: "Automated Growth",
        desc: "Instant commission injections calculate deep genealogy paths, automatically crediting users flawlessly."
    }
];

const RevPTCHowItWorks = () => {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
                        Workflow
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        How revPTC Operates
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Launch a robust, fully automated marketing platform in five simple steps utilizing
                        our highly developed multi-level matrix backend.
                    </p>

                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-10">

                    {steps.slice(0, 3).map((step, index) => (
                        <div key={index} className="text-center relative">

                            <div className="text-blue-500 text-4xl font-bold mb-4">
                                {step.number}
                            </div>

                            <h3 className="text-xl font-semibold mb-2">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {step.desc}
                            </p>


                        </div>
                    ))}

                </div>

                {/* Second Row */}
                <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-3xl mx-auto">

                    {steps.slice(3).map((step, index) => (
                        <div key={index} className="text-center relative">

                            <div className="text-blue-500 text-4xl font-bold mb-4">
                                {step.number}
                            </div>

                            <h3 className="text-xl font-semibold mb-2">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {step.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default RevPTCHowItWorks;
