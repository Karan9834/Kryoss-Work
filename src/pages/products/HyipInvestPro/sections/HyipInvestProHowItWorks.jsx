import React from "react";

const steps = [
    {
        number: "01",
        title: "Platform Setup",
        desc: "Deploy the script quickly via your hosting environment. Launch the core administration panel securely."
    },
    {
        number: "02",
        title: "Configure Packages",
        desc: "Design unique investment returns, define maturation times, and customize interest thresholds effortlessly."
    },
    {
        number: "03",
        title: "Payment Integration",
        desc: "Activate required local and global payment gateways using pre-built API configurations instantly."
    },
    {
        number: "04",
        title: "Investor Registration",
        desc: "Users arrive, verify their accounts with 2FA, and inject capital via liquid deposit options."
    },
    {
        number: "05",
        title: "Automated Returns",
        desc: "Internal cron-triggers calculate and securely distribute profits directly into user wallet balances."
    }
];

const HyipInvestProHowItWorks = () => {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
                        Workflow
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        How InvestPro Operates
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Launch a robust, fully automated high-yield portal in five simple steps utilizing
                        our advanced backend architecture.
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

export default HyipInvestProHowItWorks;
