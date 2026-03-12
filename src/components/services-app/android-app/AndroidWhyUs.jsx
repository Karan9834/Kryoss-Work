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

const AndroidWhyUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 text-sm mb-6">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        Why Choose Us
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-semibold leading-snug max-w-4xl mx-auto">

                        <span className="text-orange-500">
                            Your Trusted White Label Android{" "}
                        </span>App Development Agency
                    </h2>
                    <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        As a leading White Label Android App Development Agency, we deliver scalable, fully branded Android solutions designed to drive real business growth. Our White Label Android App Development Service focuses on quality, transparency, and faster time-to-market.
                    </p>
                </div>

                {/* Complex Grid Layout - Refactored to remove vertical gaps */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                    {/* LEFT COLUMN (Cards 1 & 3) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/* Card 1: Future-Ready (Tall) */}
                        <div className="bg-[#f0f4ff] rounded-[40px] p-10 flex flex-col h-full border border-[#dce4ff]">
                            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Dedicated Android Developers</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Choose us for Android app development. We build native and cross-platform apps with precision, aligning with your goals.
                            </p>
                            <div className="mt-auto flex items-center justify-center">
                                <img src={futureReadyImg} alt="Future-Ready Solutions" className="w-full h-auto object-contain" />
                            </div>
                        </div>

                        {/* Card 3: Data-Driven Metrics */}
                        <div className="bg-[#f0f9ff] rounded-[40px] p-10 flex flex-col border border-[#e0f2fe]">
                            <h3 className="text-2xl font-semibold text-sky-900 mb-4">Flexible Hiring Models</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Every client is different, so we offer flexible hiring models. Choose what works best and scale as your business grows.
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
                                <h3 className="text-2xl font-semibold text-orange-900 mb-4">Desirable Customizations</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Before jumping into Android mobile application development, our experts ensure to understand your business goals and users. This helps us to customize or develop an Android app that delivers a personalized experience. Our Android app developers ensure creating solutions that reflect your brand identity.
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
                                <h3 className="text-2xl font-semibold text-green-900 mb-4">Integrity & Transparency</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    We believe in earning the trust of our clients with Android app development services. From day one, we stick to clear timelines and quality. No surprise or confusion, just a transparent development process.
                                </p>
                                <div className="mt-auto flex items-center justify-center">
                                    <img src={flexibleImg} alt="Flexible Models" className="w-full h-auto object-contain" />
                                </div>
                            </div>

                            {/* Card 5: High Retention */}
                            <div className="bg-[#f5f3ff] rounded-[40px] p-10 flex flex-col border border-[#ede9fe] h-full">
                                <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Customer-Centric Approach</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    We understand one simple truth: if your app doesn’t satisfy your customers, it won’t succeed. So we create everything with your users in mind. After understanding your targeted audience, we develop an Android app that solves their problems and keeps them coming back.
                                </p>
                                <div className="mt-auto flex items-center justify-center">
                                    <img src={retentionImg} alt="High Retention" className="w-full h-auto object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 6: Delivering Results (Vertical Large) */}
                    <div className="lg:col-span-6 bg-[#fffbf0] rounded-[40px] p-10 flex flex-col border border-[#fef3c7]">
                        <h3 className="text-2xl font-semibold text-amber-900 mb-4">Successful Play Store Submission</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Due to evolving policies and stricter review processes, getting your app approved on the Apple App Store and Google Play Store can feel overwhelming. That’s where our team steps in—we guide you through every step of the launch process so you can move forward with confidence and focus on growing your business.

                            From compliance checks to submission best practices, we ensure your app meets all requirements and gets approved without delays. We also provide post-submission support, handle rejections, and make necessary revisions to keep your launch plan on track.
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
                                <h3 className="text-xl font-semibold text-sky-900 mb-3">Success Ratio</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Choosing us as a custom Android app development company means choosing a team that delivers value. Our proven methodology ensures your Android app is delivered on time and within your budget. No excuses or surprises -just a true commitment. When we commit, we give equal care to your project.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 flex items-center justify-center">
                                <img src={prototypingImg} alt="Prototyping & MVP" className="w-full h-auto object-contain" />
                            </div>
                        </div>

                        {/* Card 8: Transparent Processes */}
                        <div className="bg-[#f0fdf4] rounded-[40px] px-10 py-8 flex flex-col md:flex-row gap-6 border border-[#dcfce7] h-full">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-green-900 mb-3">End-to-End App Development Support</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Our full-stack approach helps us take care of the whole thing. Whether you're starting with an idea or have a prototype, we help shape it into a fully functional Android app that your users love. No need to coordinate with separate designers, mobile app coders, or testers - you get it all under one roof with us.
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

export default AndroidWhyUs;
