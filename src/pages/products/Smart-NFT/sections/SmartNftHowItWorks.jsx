import React from "react";

const steps = [
    {
        number: "01",
        title: "Install the Core",
        desc: "Start by deploying the core marketplace application or plugin onto your hosting environment."
    },
    {
        number: "02",
        title: "Configure Networks",
        desc: "The system allows you to select which EVM compatible blockchains you wish to connect."
    },
    {
        number: "03",
        title: "Generate Contracts",
        desc: "The smart system instantly generates secure factory contracts for minting."
    },
    {
        number: "04",
        title: "Customize Frontend",
        desc: "Modify the default layouts, adjust color themes, and refine the branding as needed."
    },
    {
        number: "05",
        title: "Launch & Trade",
        desc: "Open to the public, connect wallets, and start trading digital assets instantly."
    }
];

const SmartNftHowItWorks = () => {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
                        Workflow
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        How Smart NFT Works
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Launch your marketplace in just a few simple steps using our
                        smart Web3 deployment platform.
                    </p>

                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-10">

                    {steps.slice(0, 3).map((step, index) => (
                        <div key={index} className="text-center relative">

                            <div className="text-purple-500 text-4xl font-bold mb-4">
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

                            <div className="text-purple-500 text-4xl font-bold mb-4">
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

export default SmartNftHowItWorks;
