import React from "react";

const RevPTCAboutUs = () => {
    return (
        <section className="py-24 bg-[#f4f7ff]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-6 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start w-full max-w-[526px] aspect-[526/501]">
                        <img
                            src="/Products/RevPtc1.png"
                            alt="revPTC Interface"
                            className="w-full h-full rounded-3xl shadow-xl object-cover"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="bg-white border border-blue-100 rounded-3xl p-8 lg:p-12 shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About revPTC
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                            The Complete <span className="text-blue-600">MLM Solution</span> Hub
                        </h2>

                        {/* Paragraphs */}
                        <p className="text-gray-600 leading-relaxed">
                            revPTC is an enterprise-grade multi-level marketing platform engineered to handle
                            complex downlines and real-time commission payouts precisely without error.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            With our highly secure dashboard, network owners can intuitively manage
                            spill-overs, placement preferences, capping rules, and dynamic
                            matrix expansions instantaneously without touching the core codebase.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our platform easily scales to process millions of transactions, automatically
                            handling flat and percentage-based referral deductions alongside global crypto
                            and local withdrawal gateways natively.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Launch your professional network marketing firm leveraging our battle-tested
                            technology capable of driving astronomical community growth sustainably.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default RevPTCAboutUs;
