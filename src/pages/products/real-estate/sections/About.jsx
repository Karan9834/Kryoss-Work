import React from "react";
import realEstateAbout from "@/assets/real-estate-img/realEstateAbout.png";

const About = () => {
    return (
        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">

                        <img src={realEstateAbout}
                            alt="Carpool App"
                            className="w-full h-full object-cover rounded-3xl" />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="border border-blue-200 rounded-3xl p-8 lg:p-12 bg-white shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About Real Estate CRM
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
                            What is a <span className="text-blue-600">Real Estate CRM?</span>
                        </h2>

{/* Paragraph */}
<p className="text-gray-600 leading-relaxed">
    A Customer Support Bot is an intelligent AI-powered solution designed
    to help businesses handle customer queries instantly and efficiently.
    It can automatically respond to common questions, guide users through
    services or products, and provide quick assistance through websites,
    mobile apps, and messaging platforms.
</p>

<p className="text-gray-600 leading-relaxed">
    Our Customer Support Bot solution provides a ready-to-use platform for
    startups, businesses, and enterprises looking to automate their
    customer support operations. It includes essential features like
    automated responses, live chat integration, ticket creation, FAQ
    handling, and seamless communication with customers.
</p>

<p className="text-gray-600 leading-relaxed">
    With a fully customizable and scalable architecture, the bot can easily
    adapt to different industries such as e-commerce, SaaS platforms,
    healthcare services, and online marketplaces. Businesses can train the
    bot with their knowledge base to deliver accurate and personalized
    responses to customer inquiries.
</p>

<p className="text-gray-600 leading-relaxed">
    Whether you are managing a small business website or a large customer
    support center, our Customer Support Bot helps reduce response time,
    improve customer satisfaction, and handle thousands of support
    requests automatically without increasing operational costs.
</p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;