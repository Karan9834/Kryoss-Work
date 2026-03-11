import React from "react";

// Image Imports
import futureReadyImg from "../../../assets/services-kotlin-img/Future-Ready-Solutions.webp";
import expertiseImg from "../../../assets/services-kotlin-img/Kotlin-Multi-Platform-Expertise.webp";
import metricsImg from "../../../assets/services-kotlin-img/Data-Driven-Metrics.webp";
import flexibleImg from "../../../assets/services-kotlin-img/Flexible-Models.webp";
import retentionImg from "../../../assets/services-kotlin-img/High-Retention.webp";
import resultsImg from "../../../assets/services-kotlin-img/We-Believe-in-Delivering-Results.webp";
import prototypingImg from "../../../assets/services-kotlin-img/Prototyping-MVP-Development.webp";
import transparentImg from "../../../assets/services-kotlin-img/Transparent-Processes.webp";

const KotlinWhatMakeUsBest = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 text-sm mb-6">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        What Makes Us the Best?
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-semibold leading-snug max-w-4xl mx-auto">
                        Why Partner with White Label Fox for{" "}
                        <span className="text-orange-500">
                            White Label Kotlin App Development Services?
                        </span>
                    </h2>
                    <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Leverage over 8 years of industry-leading expertise in delivering high-growth clone applications and custom product engineering. We combine deep technical proficiency in Kotlin Multiplatform with a B2B-centric approach, offering guaranteed 1-year support, full source code ownership.
                    </p>
                </div>

                {/* Complex Grid Layout - Refactored to remove vertical gaps */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                    {/* LEFT COLUMN (Cards 1 & 3) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/* Card 1: Future-Ready (Tall) */}
                        <div className="bg-[#f0f4ff] rounded-[40px] p-10 flex flex-col h-full border border-[#dce4ff]">
                            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Future-Ready Solutions</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                As a Kotlin app development company, we create future-ready solutions using modern tech. Our optimized solution delivers seamless experiences across all devices.
                            </p>
                            <div className="mt-auto flex items-center justify-center">
                                <img src={futureReadyImg} alt="Future-Ready Solutions" className="w-full h-auto object-contain" />
                            </div>
                        </div>

                        {/* Card 3: Data-Driven Metrics */}
                        <div className="bg-[#f0f9ff] rounded-[40px] p-10 flex flex-col border border-[#e0f2fe]">
                            <h3 className="text-2xl font-semibold text-sky-900 mb-4">Data-Driven Metrics</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Performance is how fast your app loads. We use performance metrics to improve efficiency and maximize your ROI.
                            </p>
                            <div className="flex items-center justify-center">
                                <img src={metricsImg} alt="Data-Driven Metrics" className="w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN (Cards 2, 4, 5) */}
                    <div className="lg:col-span-8 flex flex-col gap-6 h-full">
                        {/* Card 2: Expertise (Wide) */}
                        <div className="bg-[#fff7ed] rounded-[40px] p-10 flex flex-col md:flex-row gap-8 border border-[#feedd7]">
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-orange-900 mb-4">Kotlin Multi-Platform Expertise</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Looking to develop a Kotlin app without paying higher costs? Our Kotlin app developers specialize in developing a multi-platform support system with a single codebase.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 flex items-center justify-center">
                                <img src={expertiseImg} alt="Kotlin Multi-Platform Expertise" className="w-full h-auto object-contain" />
                            </div>
                        </div>

                        {/* Nested Grid for 4 and 5 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                            {/* Card 4: Flexible Models */}
                            <div className="bg-[#f0fdf4] rounded-[40px] p-10 flex flex-col border border-[#dcfce7] h-full">
                                <h3 className="text-2xl font-semibold text-green-900 mb-4">Flexible Models</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    We implement a unique approach for every client's project. With our flexible hiring models, we make it easier for you to get your app development requirements satisfied effectively. We prioritize your vision at every step of development to deliver the best results.
                                </p>
                                <div className="mt-auto flex items-center justify-center">
                                    <img src={flexibleImg} alt="Flexible Models" className="w-full h-auto object-contain" />
                                </div>
                            </div>

                            {/* Card 5: High Retention */}
                            <div className="bg-[#f5f3ff] rounded-[40px] p-10 flex flex-col border border-[#ede9fe] h-full">
                                <h3 className="text-2xl font-semibold text-indigo-900 mb-4">High Retention</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Our Kotlin mobile app experts build solutions, ensuring a 90% client retention rate. With advanced features and performance, Kotlin apps help you build long-term relationships with your clients.
                                </p>
                                <div className="mt-auto flex items-center justify-center">
                                    <img src={retentionImg} alt="High Retention" className="w-full h-auto object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 6: Delivering Results (Vertical Large) */}
                    <div className="lg:col-span-6 bg-[#fffbf0] rounded-[40px] p-10 flex flex-col border border-[#fef3c7]">
                        <h3 className="text-2xl font-semibold text-amber-900 mb-4">We Believe in Delivering Results</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We've helped turn ideas into powerful solutions from fintech to healthcare and more sectors. Our focus on quality & user experience has helped us gain happy partners. Our agile development process ensures faster delivery and transparent communication.
                        </p>
                        <div className="flex items-center justify-center">
                            <img src={resultsImg} alt="We Believe in Delivering Results" className="w-full h-[320px] object-contain" />
                        </div>
                    </div>

                    {/* Right column for 7 and 8 */}
                    <div className="lg:col-span-6 flex flex-col gap-6">
                        {/* Card 7: Prototyping & MVP */}
                        <div className="bg-[#f0f9ff] rounded-[40px] px-10 py-8 flex flex-col md:flex-row gap-6 border border-[#e0f2fe] h-full">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-sky-900 mb-3">Prototyping & MVP Development</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    We're a top Kotlin app development company that specializes in MVP and prototyping development. Perfect for startups and big brands who are looking to maximize their business growth and profits. Every Prototyping and MVP we develop delivers open funding opportunities.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 flex items-center justify-center">
                                <img src={prototypingImg} alt="Prototyping & MVP" className="w-full h-auto object-contain" />
                            </div>
                        </div>

                        {/* Card 8: Transparent Processes */}
                        <div className="bg-[#f0fdf4] rounded-[40px] px-10 py-8 flex flex-col md:flex-row gap-6 border border-[#dcfce7] h-full">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-green-900 mb-3">Transparent Processes</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    With us, you're never left guessing, we make you part of it. From the initial step to the final deployment, we give you complete visibility throughout the project development lifecycle.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 flex items-center justify-center">
                                <img src={transparentImg} alt="Transparent Processes" className="w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KotlinWhatMakeUsBest;
