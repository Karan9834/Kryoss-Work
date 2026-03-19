import React, { useState } from "react";
import {
    LayoutDashboard,
    Users,
    Store,
    Package,
    BarChart3,
    ShieldCheck,
    Calculator,
    UserCheck,
    MessageSquare,
    TrendingUp,
    ClipboardCheck,
} from "lucide-react";

const ErpFeatures = () => {
    const [activeTab, setActiveTab] = useState("admin");

    const adminFeatures = [
        {
            icon: LayoutDashboard,
            title: "Central Dashboard",
            desc: "A powerful, real-time overview of your entire business operations from a single screen.",
        },
        {
            icon: Users,
            title: "User Role Management",
            desc: "Define custom roles and permissions to ensure data security and departmental accountability.",
        },
        {
            icon: Store,
            title: "Multi-Branch Support",
            desc: "Manage multiple business locations or branches seamlessly with centralized data control.",
        },
        {
            icon: Package,
            title: "Inventory Oversight",
            desc: "Monitor stock levels across all locations and automate reordering processes.",
        },
        {
            icon: BarChart3,
            title: "Financial Analytics",
            desc: "Deep dive into profit/loss statements, balance sheets, and cash flow with automated reporting.",
        },
        {
            icon: ShieldCheck,
            title: "Data Security",
            desc: "Enterprise-grade security with regular backups and encrypted data storage.",
        },
    ];

    const moduleFeatures = [
        {
            icon: Calculator,
            title: "Advanced Accounting",
            desc: "Automated bookkeeping, tax calculations, and multi-currency billing support.",
        },
        {
            icon: UserCheck,
            title: "HRM & Payroll",
            desc: "Streamlined employee tracking, attendance, leave management, and payroll processing.",
        },
        {
            icon: MessageSquare,
            title: "Integrated CRM",
            desc: "Manage customer relationships, track leads, and improve client communication.",
        },
        {
            icon: TrendingUp,
            title: "Sales & Purchase",
            desc: "Track the entire sales cycle and manage supplier relationships effortlessly.",
        },
        {
            icon: ClipboardCheck,
            title: "Project Management",
            desc: "Assign tasks, track deadlines, and monitor project progress in real-time.",
        },
        {
            icon: BarChart3,
            title: "Dynamic Reporting",
            desc: "Generate custom reports in various formats like PDF and Excel for data-driven decisions.",
        },
    ];

    const features = activeTab === "admin" ? adminFeatures : moduleFeatures;

    return (
        <section className="py-24 bg-blue-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Capsule */}
                <div className="flex justify-center mb-4">
                    <span className="border border-blue-600 rounded-full px-4 py-1 text-sm flex items-center gap-2 text-blue-700 bg-white">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        Features
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-semibold mb-4 text-[#1a1a1a]">
                    Key Features of Our <span className="text-blue-700">ERP Solution</span>
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
                    Our ERP solution offers a range of powerful features designed to streamline
                    service booking, management, and delivery.
                </p>

                {/* Toggle Buttons */}
                <div className="flex justify-center mb-16">
                    <div className="bg-blue-700 rounded-full p-2 flex gap-2">

                        <button
                            onClick={() => setActiveTab("admin")}
                            className={`px-6 py-2 rounded-full flex items-center gap-2 transition ${activeTab === "admin"
                                ? "bg-white text-blue-700"
                                : "text-white"
                                }`}
                        >
                            Admin Infrastructure
                        </button>

                        <button
                            onClick={() => setActiveTab("modules")}
                            className={`px-6 py-2 rounded-full transition ${activeTab === "modules"
                                ? "bg-white text-blue-700"
                                : "text-white"
                                }`}
                        >
                            Business Modules
                        </button>

                    </div>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8">

                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl p-8 shadow-sm transition border border-transparent hover:border-blue-600"
                            >
                                <div className="flex items-start gap-4">

                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-600 transition">
                                        <Icon
                                            size={22}
                                            className="text-blue-600 group-hover:text-white"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {item.desc}
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

export default ErpFeatures;
