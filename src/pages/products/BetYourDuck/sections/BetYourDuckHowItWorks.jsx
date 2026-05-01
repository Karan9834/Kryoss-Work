import React from "react";

const steps = [
    {
        number: "01",
        title: "Platform Launch",
        desc: "Initially install and connect the BetYourDuck exchange to secure, high-speed hosting nodes."
    },
    {
        number: "02",
        title: "Market Rules",
        desc: "Configure the available sports interfaces, specific minimum bets, and exchange fee limits securely."
    },
    {
        number: "03",
        title: "Peer-to-Peer",
        desc: "Users arrive and propose wagers against specific match outcomes—or match opposing community bets."
    },
    {
        number: "04",
        title: "Match Escrow",
        desc: "Once an opposing bet is matched, funds are safely pooled and escrowed instantly via our backend."
    },
    {
        number: "05",
        title: "Execute & Payout",
        desc: "After the final sports result, the winning party is automatically paid out, while the platform retains its defined cut."
    }
];

const BetYourDuckHowItWorks = () => {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <span className="bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full text-sm">
                        Workflow
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        How BetYourDuck Plays
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        A revolutionized social betting system replacing traditional 'House' models
                        using pure peer-to-peer gameplay mechanics.
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

export default BetYourDuckHowItWorks;
