import React from "react";
import tutorabout from "../../assets/homeservice-tutor-img/tutoraboutus1.png"
const AboutUs = () => {
    return (
        <section className="w-full bg-[#f6f6f6] py-16 sm:py-20">
            <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">

                {/* WHITE ROUNDED BOX */}
                <div className="rounded-[28px] bg-white px-6 py-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:px-10 lg:px-14">

                    {/* TOP BADGE */}
                    <div className="mb-6 flex justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-1 text-sm font-medium text-gray-700">
                            <span className="h-3 w-3 rounded-full bg-[#f5b301]" />
                            Uber-Inspired Tutor Ecosystem
                        </span>
                    </div>

                    {/* HEADING */}
                    <h2 className="mx-auto mb-12 max-w-[900px] text-center text-[28px] font-semibold leading-snug text-[#2b2b2b] sm:text-[34px] md:text-[40px]">
                        Launch Your Premier{" "}
                        <span className="text-[#f5a623]">On-Demand Tutoring Platform</span>{" "}
                        – Vyom Solutions
                    </h2>

                    {/* CONTENT */}
                    <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">

                        {/* LEFT IMAGE (SINGLE IMAGE ONLY) */}
                        <div className="w-full lg:w-1/2 lg:pt-30">
                            <div className="relative mx-auto w-full max-w-[500px]">

                                {/* IMAGE PLACEHOLDER */}

                                <img src={tutorabout}
                                    alt="tutor about us"
                                    className="w-full h-full scale-110 rounded-3xl shadow-2xl object-cover" />


                            </div>
                        </div>

                        {/* RIGHT TEXT */}
                        <div className="w-full text-[15px] leading-[1.8] text-gray-700 lg:w-1/2">
                            <p className="mb-6">
                                Our specialized instructor booking framework facilitates seamless
                                coordination between learners and educators. As the demand for
                                remote education continues to grow, our solution provides a
                                secure, digital-first environment for personalized learning.
                                Through our Uber-style interface, students can effortlessly
                                identify and book qualified local experts.
                            </p>

                            <p className="mb-6">
                                At Vyom Solutions, our veteran engineering team focuses on
                                architecting sophisticated, custom education marketplaces. We
                                deliver a complete end-to-end ecosystem, encompassing dedicated
                                interfaces for students and tutors, alongside powerful
                                administrative management portals. Our flexible tutor clone
                                script is engineered with every core utility needed for a
                                robust launch.
                            </p>

                            <p className="mb-6">
                                Our distinction lies in our rapid deployment methodology,
                                enabling project completion in just 5 business days. Once your
                                specialized configuration is finalized, our rigorous quality
                                assurance protocol guarantees a production-ready launch on both
                                major mobile marketplaces.
                            </p>

                            <p>
                                Partner with Vyom Solutions for a frictionless digital
                                transformation. With our industry-leading turnaround times,
                                feature-rich logic, and professional white-label frameworks,
                                you will possess a high-conversion application that accelerates
                                your business growth and achieves verifiable success.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;