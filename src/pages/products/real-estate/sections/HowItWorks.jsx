import React, { useState } from "react";

const supportAutomationSteps = [
    {
        title: "Customer Sends a Query",
        desc: "Customers submit questions or support requests through chat, website forms, or messaging platforms."
    },
    {
        title: "Bot Receives the Request",
        desc: "The customer support bot instantly receives the query and analyzes the message."
    },
    {
        title: "AI Generates a Response",
        desc: "The bot uses its trained knowledge base to provide accurate answers to common customer questions."
    },
    {
        title: "Instant Reply to Customer",
        desc: "Customers receive immediate responses without waiting for a human support agent."
    },
    {
        title: "Escalation to Human Agent",
        desc: "If the issue requires further help, the bot forwards the request to a human support representative."
    },
    {
        title: "Issue Resolution & Feedback",
        desc: "The issue gets resolved and customers can share feedback about their support experience."
    }
];

const supportManagementSteps = [
    {
        title: "Setup Knowledge Base",
        desc: "Add FAQs, product guides, and support documentation to train the customer support bot."
    },
    {
        title: "Configure Bot Workflows",
        desc: "Define conversation flows and automated responses for common customer issues."
    },
    {
        title: "Monitor Conversations",
        desc: "Track all chatbot conversations and customer queries in a centralized dashboard."
    },
    {
        title: "Manage Support Tickets",
        desc: "Create and assign support tickets for issues that require human intervention."
    },
    {
        title: "Analyze Support Performance",
        desc: "Measure response time, ticket resolution rate, and customer satisfaction metrics."
    },
    {
        title: "Improve Customer Experience",
        desc: "Use insights and analytics to optimize chatbot responses and support efficiency."
    }
];

const HowItWorks = () => {
    const [tab, setTab] = useState("support");

    const steps = tab === "support" ? supportAutomationSteps : supportManagementSteps;

    return (
        <section className="py-24 bg-[#ffffff]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 px-4 py-1 rounded-full text-sm">
                        ● How System Works
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-800">
                    How Does Our <span className="text-blue-600">Real Estate Agency</span> Work?
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    Our AI-powered customer support bot helps businesses handle
                    customer queries instantly and efficiently. Here's how the
                    complete workflow operates from receiving a query to resolving
                    customer issues.
                </p>

                {/* Toggle */}
                <div className="flex justify-center mt-10">

                    <div className="flex bg-gradient-to-r from-blue-500 to-blue-900 rounded-full p-1">

                        <button
                            onClick={() => setTab("support")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${tab === "support" ? "bg-white text-blue-900" : "text-white"
                                }`}
                        >
                            ● Support Automation
                        </button>

                        <button
                            onClick={() => setTab("management")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${tab === "management" ? "bg-white text-blue-900" : "text-white"
                                }`}
                        >
                            ● Support Management
                        </button>

                    </div>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-gray-200 rounded-2xl p-6 transition duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-800 hover:text-white hover:shadow-lg"
                        >

                            {/* Step Number */}
                            <h3 className="text-xl font-semibold">
                                {index + 1}. {step.title}
                            </h3>

                            <p className="text-gray-600 group-hover:text-white/90 mt-3 text-sm leading-relaxed">
                                {step.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default HowItWorks;