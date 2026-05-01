import React from "react";

const steps = [
    {
        number: "01",
        title: "Complete Installation",
        desc: "Initially install the core betting source alongside your high-availability web hosting environments."
    },
    {
        number: "02",
        title: "Configure Odds",
        desc: "Instantly adjust market settings, default odds parameters, and your preferred payout margins securely."
    },
    {
        number: "03",
        title: "Connect Gateways",
        desc: "Activate robust payment modules allowing deposits globally for frictionless transactions."
    },
    {
        number: "04",
        title: "Style Branding",
        desc: "Modify default storefront designs and adjust color schemes to mimic your local authority's layout."
    },
    {
        number: "05",
        title: "Acquire & Trade",
        desc: "Go live, distribute promotional chips, and accept sportsbook volumes globally right away."
    }
];

const BetLabHowItWorks = () => {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <span className="bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full text-sm">
                        Workflow
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        How BetLab Operates
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Launch your premium sports betting portal in just a few simple steps using our
                        high-availability, master deployment solution.
                    </p>

                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-10">

                    {steps.slice(0, 3).map((step, index) => (
                        <div key={index} className="text-center relative">

                            <div className="text-emerald-500 text-4xl font-bold mb-4">
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

                            <div className="text-emerald-500 text-4xl font-bold mb-4">
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

export default BetLabHowItWorks;
