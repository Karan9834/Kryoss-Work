import React, { useState } from "react";
import {
    ClipboardList,
    UtensilsCrossed,
    Package,
    Clock,
    MessageCircle,
    CreditCard,
    LayoutDashboard,
    Settings,
    Bell,
    Users,
    BarChart3,
    Store
} from "lucide-react";

const supportAutomationFeatures = [
    {
        icon: ClipboardList,
        title: "Automated Ticket Creation",
        desc: "Automatically generate support tickets when customers submit queries or issues through chat or forms."
    },
    {
        icon: MessageCircle,
        title: "AI Chat Responses",
        desc: "Provide instant responses to common customer questions using an intelligent AI chatbot."
    },
    {
        icon: Package,
        title: "Knowledge Base Integration",
        desc: "Connect the bot with your help center or FAQ database to deliver accurate support information."
    },
    {
        icon: Clock,
        title: "Real-Time Customer Assistance",
        desc: "Respond to customer inquiries instantly without waiting for human support agents."
    },
    {
        icon: Bell,
        title: "Customer Notifications",
        desc: "Automatically notify customers about ticket updates, responses, and issue resolutions."
    },
    {
        icon: CreditCard,
        title: "Secure Data Handling",
        desc: "Ensure all customer interactions and data are processed securely and safely."
    }
];

const supportManagementFeatures = [
    {
        icon: LayoutDashboard,
        title: "Centralized Support Dashboard",
        desc: "Monitor all customer conversations, tickets, and chatbot activity from one dashboard."
    },
    {
        icon: Settings,
        title: "Bot Training & Customization",
        desc: "Train your support bot with company knowledge, FAQs, and workflows."
    },
    {
        icon: Store,
        title: "Multi-Channel Support",
        desc: "Handle customer support requests from websites, mobile apps, and messaging platforms."
    },
    {
        icon: Users,
        title: "Agent & Team Management",
        desc: "Assign support tickets to team members and manage support roles easily."
    },
    {
        icon: Bell,
        title: "Real-Time Alerts",
        desc: "Get instant notifications when new customer queries or high-priority tickets arrive."
    },
    {
        icon: BarChart3,
        title: "Support Analytics",
        desc: "Track response times, ticket resolution rates, and customer satisfaction metrics."
    }
];

const Features = () => {
    const [tab, setTab] = useState("support");

    const features = tab === "support" ? supportAutomationFeatures : supportManagementFeatures;

    return (
        <section className="py-24 bg-[#eef5fb]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 px-4 py-1 rounded-full text-sm">
                        ● Features
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-800">
                    Powerful Features That Make Your{" "}
                    <span className="text-blue-600">Customer Support Bot</span> Stand Out
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    From AI-powered chat automation to advanced support analytics,
                    our Customer Support Bot provides everything businesses need
                    to handle customer queries efficiently and deliver fast,
                    reliable support experiences.
                </p>

                {/* Toggle */}
                <div className="flex justify-center mt-10">

                    <div className="flex bg-gradient-to-r from-blue-500 to-blue-900 rounded-full p-1">

                        <button
                            onClick={() => setTab("support")}
                            className={`px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition ${
                                tab === "support"
                                    ? "bg-white text-blue-900"
                                    : "text-white"
                            }`}
                        >
                            🤖 Support Automation
                        </button>

                        <button
                            onClick={() => setTab("management")}
                            className={`px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition ${
                                tab === "management"
                                    ? "bg-white text-blue-900"
                                    : "text-white"
                            }`}
                        >
                            📊 Support Management
                        </button>

                    </div>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group rounded-2xl border border-blue-200 bg-white p-6 transition duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-800 hover:text-white"
                            >

                                <div className="flex items-start gap-4">

                                    {/* Icon */}
                                    <div className="p-3 rounded-xl border border-blue-200 bg-white group-hover:bg-white/20 group-hover:border-white/30 transition">

                                        <Icon
                                            size={26}
                                            className="text-blue-600 group-hover:text-white transition"
                                        />

                                    </div>

                                    {/* Content */}
                                    <div>

                                        <h3 className="text-lg font-semibold">
                                            {feature.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 group-hover:text-white/90 mt-2 leading-relaxed">
                                            {feature.desc}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default Features;