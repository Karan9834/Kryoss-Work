import React from "react";
import crmaboutimg from "@/assets/salescrm-img/salescrmabout.jpg";
const SalesCRMAboutUs = () => {
    return (
        <section className="py-24 bg-[#eef2ff]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src={crmaboutimg}
                            alt="CRM Dashboard"
                            className="w-full max-w-lg rounded-3xl shadow-xl object-cover"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="bg-white border border-indigo-100 rounded-3xl p-8 lg:p-12 shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm px-4 py-2 rounded-full w-fit">
                            ● About Platform
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                            What is an <span className="text-indigo-600">Enterprise CRM?</span>
                        </h2>

                        {/* Paragraphs */}
                        <p className="text-gray-600 leading-relaxed">
                            An Enterprise CRM (Customer Relationship Management) system helps
                            businesses manage customer interactions, track leads, and streamline
                            their entire sales process from initial contact to final conversion.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our CRM platform provides a centralized dashboard where sales teams
                            can monitor pipelines, manage contacts, track activities, and gain
                            valuable insights into customer behavior and sales performance.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            With automation tools, businesses can assign leads, schedule follow-ups,
                            send reminders, and reduce manual work—allowing teams to focus more on
                            closing deals and building strong customer relationships.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Whether you are a startup or a large enterprise, this CRM system
                            scales with your business, helping improve productivity, boost
                            revenue, and deliver a better customer experience.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default SalesCRMAboutUs;