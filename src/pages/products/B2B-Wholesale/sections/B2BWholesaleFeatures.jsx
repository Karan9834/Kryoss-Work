import React from "react";
import {
    Package,
    ShoppingCart,
    Layers,
    Users,
    BarChart3,
    Wallet,
    Truck,
    ShieldCheck,
    Settings,
} from "lucide-react";

const features = [
    {
        icon: Package,
        title: "Bulk Order Management",
        desc: "Allow retailers and distributors to place large product orders quickly with automated workflows and streamlined purchasing processes.",
    },
    {
        icon: Layers,
        title: "Tiered Pricing System",
        desc: "Set different pricing levels for various customer groups such as wholesalers, distributors, and premium buyers.",
    },
    {
        icon: ShoppingCart,
        title: "Quick Reordering",
        desc: "Business customers can reorder frequently purchased products instantly without browsing the entire catalog again.",
    },
    {
        icon: Users,
        title: "Business Customer Accounts",
        desc: "Manage multiple business buyers, assign roles, and control purchasing permissions within company accounts.",
    },
    {
        icon: BarChart3,
        title: "Sales Analytics Dashboard",
        desc: "Track wholesale performance, order trends, and customer activity through detailed analytics dashboards.",
    },
    {
        icon: Wallet,
        title: "Flexible Payment Options",
        desc: "Support multiple B2B payment models including invoices, credit limits, and standard payment gateways.",
    },
    {
        icon: Truck,
        title: "Order & Delivery Tracking",
        desc: "Track shipments, delivery status, and order fulfillment in real-time across multiple distribution channels.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Business Transactions",
        desc: "Enterprise-grade security ensures safe transactions, user authentication, and protected financial data.",
    },
    {
        icon: Settings,
        title: "Admin Control Panel",
        desc: "Platform administrators can manage products, customers, orders, pricing rules, and business settings from one dashboard.",
    },
];

const B2BFeatures = () => {
    return (
        <section className="py-20 bg-[#f6f8ff]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
                        Platform Features
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-900">
                    Powerful Features for a{" "}
                    <span className="text-blue-600">B2B Wholesale Platform</span>
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    Our B2B wholesale portal includes everything businesses need to
                    manage large-scale transactions, automate bulk ordering, and
                    simplify product distribution between suppliers and retailers.
                </p>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-xl transition duration-300 hover:-translate-y-1"
                            >

                                {/* Icon */}
                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-600 transition mb-6">

                                    <Icon
                                        size={26}
                                        className="text-blue-600 group-hover:text-white transition"
                                    />

                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default B2BFeatures;