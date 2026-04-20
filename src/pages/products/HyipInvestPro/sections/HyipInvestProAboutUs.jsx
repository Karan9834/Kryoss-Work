import React from "react";
import about from "../../../../assets/Mlm products/Hyp invest pro/about us 1.jpg"

const HyipInvestProAboutUs = () => {
    return (
        <section className="py-24 bg-[#f4f7ff]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-6 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start w-full max-w-[526px] aspect-[526/501]">
                        <img
                            src={about}
                            alt="Hyip InvestPro Interface"
                            className="w-full h-full rounded-3xl shadow-xl object-cover"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="bg-white border border-blue-100 rounded-3xl p-8 lg:p-12 shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About Hyip InvestPro
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                            The Ultimate <span className="text-blue-600">Investment Platform</span> Engine
                        </h2>

                        {/* Paragraphs */}
                        <p className="text-gray-600 leading-relaxed">
                            Hyip InvestPro is an enterprise-level investment management architecture built
                            to process heavy operational loads seamlessly. We have engineered the core to
                            guarantee completely secure and instantly distributed capital gains.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            With our advanced backend system, administrators can spin up diverse
                            investment schemas, custom time-based maturation logic, and comprehensive
                            referral networks in seconds—meaning zero manual calculations.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our platform actively integrates with 20+ automated global crypto and flat
                            payment gateways out-of-the-box, giving your users unparalleled
                            access to liquid deposits globally.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Start operating a highly scalable, fully compliant investment hub that
                            saves you thousands on deployment costs while giving your community
                            a truly professional financial environment.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default HyipInvestProAboutUs;
