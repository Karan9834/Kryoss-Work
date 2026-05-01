import React from "react";

const steps = [
    {
        number: "01",
        title: "Deploy Foundation",
        desc: "Start by connecting Enefti core dependencies to your existing game engines or websites."
    },
    {
        number: "02",
        title: "Setup Item Collections",
        desc: "Establish metadata structures, properties, and rarities for your digital game inventory."
    },
    {
        number: "03",
        title: "Player Registration",
        desc: "Instantly onboard players via decentralized wallets avoiding complex login flows."
    },
    {
        number: "04",
        title: "Implement Mechanics",
        desc: "Enable breeding, leveling, staking, and trading of those items across your community."
    },
    {
        number: "05",
        title: "Scale Ecosystems",
        desc: "Host tournaments, distribute earnings, and integrate expanding content natively."
    }
];

const EneftiHowItWorks = () => {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
                        Workflow
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        How Enefti GameFi Engine Works
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Create captivating player experiences in just a few simple steps using our
                        high-performance Web3 gaming platform.
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

export default EneftiHowItWorks;
