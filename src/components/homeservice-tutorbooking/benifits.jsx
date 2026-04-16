import React from "react";
import benifits from "../../assets/homeservice-tutor-img/benifits.webp";
const BenefitsSection = () => {
    return (
        <section className="w-full bg-white py-4">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 px-4 py-1 border border-gray-300 rounded-full text-sm text-gray-700 mb-4">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        Strategic Advantages
                    </span>

                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
                        Value Propositions of our{" "}
                        <span className="text-orange-500">Instructional Ecosystem</span>
                    </h2>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* LEFT – TEXT */}
                    <div className="space-y-8 text-gray-700 leading-relaxed order-2 lg:order-1">
                        <p>
                            <span className="font-semibold text-gray-900">
                                Accelerated Expert Matching
                            </span>{" "}
                            Our specialized educational platform offers learners immediate 
                            connection with qualified instructors, facilitating an optimal 
                            match based on geographic proximity, academic focus, and 
                            availability. This guarantees a frictionless instructional 
                            journey for participants at any time.
                        </p>

                        <p>
                            <span className="font-semibold text-gray-900">
                                Autonomous Time Coordination
                            </span>{" "}
                            Learners and educators can effortlessly organize learning 
                            sessions that align with their personal obligations. The 
                            interface provides versatile tools for reservation and 
                            rescheduling, delivering the operational flexibility needed 
                            to synchronize education with lifestyle.
                        </p>

                        <p>
                            <span className="font-semibold text-gray-900">
                                Instant Operational Intel
                            </span>{" "}
                            Maintain awareness through instantaneous alerts regarding 
                            instructional bookings, session adjustments, and logistical 
                            reminders. These real-time communications guarantee that both 
                            participants remain synchronized, optimizing coordination and 
                            eliminating friction.
                        </p>

                        <p>
                            <span className="font-semibold text-gray-900">
                                Protected Financial Gateways
                            </span>{" "}
                            Our architecture incorporates premier settlement portals, 
                            guaranteeing that all educational transactions are protected 
                            and auditable. Users can execute payments with complete assurance 
                            and monitor their fiscal history through our integrated ledger.
                        </p>

                        <p>
                            <span className="font-semibold text-gray-900">
                                Extensible Enterprise Framework
                            </span>{" "}
                            Regardless of your current scale, our instructional framework 
                            is engineered to expand alongside your corporate growth. Its 
                            highly adaptable logic enables you to configure the ecosystem 
                            to satisfy your unique commercial objectives and brand identity.
                        </p>

                        <p>
                            <span className="font-semibold text-gray-900">
                                Sophisticated Oversight Infrastructure
                            </span>{" "}
                            Coordinate your instructional marketplace with precision via our 
                            centralized administrative interface. From monitoring session 
                            velocity to managing user demographics and financial settlements, 
                            our master dashboard delivers ultimate operational authority.
                        </p>
                    </div>

                    {/* RIGHT – IMAGE */}
                    <div className="relative flex justify-center items-center order-1 lg:order-2 mb-12 lg:mb-0">
                        {/* Background Shape - Centered behind image */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-b from-[#2b1d1d] to-[#3b2a2a] -z-10 opacity-20 lg:opacity-100"></div>

                        {/* Main Image */}
                        <img
                            src={benifits}
                            alt="Tutor App Benefits"
                            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto relative z-10 drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;