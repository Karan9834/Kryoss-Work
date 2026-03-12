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

const EcommerceWhyUs = () => {
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
                            Your Trusted White Label Ecommerce{" "}
                        </span>App Development Agency
                    </h2>
                    <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        As a leading White Label Ecommerce App Development Agency, we deliver scalable, fully branded Ecommerce solutions designed to drive real business growth. Our White Label Ecommerce App Development Service focuses on quality, transparency, and faster time-to-market.
                    </p>
                </div>

                {/* Complex Grid Layout - Refactored to remove vertical gaps */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                    {/* LEFT COLUMN (Cards 1 & 3) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/* Card 1: Future-Ready (Tall) */}
                        <div className="bg-[#f0f4ff] rounded-[40px] p-10 flex flex-col h-full border border-[#dce4ff]">
                            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Proven Track Record</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                When you're looking for ECommerce website development services, we can be your best choice. With years of experience, we've delivered high-performing online stores for all sizes of businesses.
                            </p>
                            <div className="mt-auto flex items-center justify-center">
                                <img src={futureReadyImg} alt="Future-Ready Solutions" className="w-full h-auto object-contain" />
                            </div>
                        </div>

                        {/* Card 3: Data-Driven Metrics */}
                        <div className="bg-[#f0f9ff] rounded-[40px] p-10 flex flex-col border border-[#e0f2fe]">
                            <h3 className="text-2xl font-semibold text-sky-900 mb-4">Result-Driven Approach</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Our focus is always on results. We don’t just build websites; we build online stores that help you achieve your business goals. Whether it’s increasing sales, improving customer engagement, or boosting brand visibility, we work closely with you to deliver measurable outcomes.
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
                                <h3 className="text-2xl font-semibold text-orange-900 mb-4">Strong Security Measures</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Security is our top priority. We implement robust security measures to protect your store and customer data from fraud and unauthorized access. With secure payment gateways, data encryption, and regular security audits, we ensure your online store remains safe and trustworthy.
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
                                <h3 className="text-2xl font-semibold text-green-900 mb-4">Complete Transparency</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Transparency is at the core of our process. From planning to launch, we keep you informed every step of the way. You’ll have full visibility into project progress, timelines, and deliverables. No hidden costs or surprises—just clear communication and honest collaboration.
                                </p>
                                <div className="mt-auto flex items-center justify-center">
                                    <img src={flexibleImg} alt="Flexible Models" className="w-full h-auto object-contain" />
                                </div>
                            </div>

                            {/* Card 5: High Retention */}
                            <div className="bg-[#f5f3ff] rounded-[40px] p-10 flex flex-col border border-[#ede9fe] h-full">
                                <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Fast Turnaround</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    We know that time is money in business. That’s why we focus on fast turnaround times without compromising on quality. Our streamlined development process ensures your e-commerce store is launched quickly, allowing you to start selling and growing your business sooner.
                                </p>
                                <div className="mt-auto flex items-center justify-center">
                                    <img src={retentionImg} alt="High Retention" className="w-full h-auto object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 6: Delivering Results (Vertical Large) */}
                    <div className="lg:col-span-6 bg-[#fffbf0] rounded-[40px] p-10 flex flex-col border border-[#fef3c7]">
                        <h3 className="text-2xl font-semibold text-amber-900 mb-4">Flexible Engagement Models</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We offer flexible engagement models to suit your needs. Whether you need a complete e-commerce solution, custom features, or ongoing support, we can tailor our services to match your requirements. Choose the model that works best for you and scale your business with confidence.
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
                                <h3 className="text-xl font-semibold text-sky-900 mb-3">SEO-Optimized Development</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    We keep SEO at the core while developing your eCommerce stores so your customers can easily find you on the web. The result? More traffic = qualified shoppers who are looking for what you sell.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 flex items-center justify-center">
                                <img src={prototypingImg} alt="Prototyping & MVP" className="w-full h-auto object-contain" />
                            </div>
                        </div>

                        {/* Card 8: Transparent Processes */}
                        <div className="bg-[#f0fdf4] rounded-[40px] px-10 py-8 flex flex-col md:flex-row gap-6 border border-[#dcfce7] h-full">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-green-900 mb-3">Cutting-Edge Tech Stack</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Our eCommerce website developers use a modern tech stack to provide you with a future-ready platform. This ensures your online eCommerce store runs smoothly today and tomorrow.
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

export default EcommerceWhyUs;
