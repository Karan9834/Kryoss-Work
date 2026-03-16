import React, { useState } from "react";

const orderProcessingSteps = [
    {
        title: "Receive Online Orders",
        desc: "Orders are automatically received from multiple platforms like Swiggy, Zomato, and your own website in one dashboard."
    },
    {
        title: "Order Appears in Kitchen Dashboard",
        desc: "New orders instantly appear on the kitchen display system for chefs to begin preparation."
    },
    {
        title: "Food Preparation Starts",
        desc: "Kitchen staff prepares the order based on the details and instructions received in the POS system."
    },
    {
        title: "Order Status Updates",
        desc: "The system automatically updates order status such as preparing, ready, or out for delivery."
    },
    {
        title: "Delivery Partner Pickup",
        desc: "Once the order is ready, delivery partners receive the pickup notification."
    },
    {
        title: "Order Delivered to Customer",
        desc: "Customers receive their food while the system records order completion and updates sales data."
    }
];

const kitchenManagementSteps = [
    {
        title: "Setup Menu & Pricing",
        desc: "Add menu items, pricing, and categories inside the POS system to manage your food offerings."
    },
    {
        title: "Sync Menu Across Platforms",
        desc: "Automatically update menu items across all delivery platforms from a single dashboard."
    },
    {
        title: "Manage Inventory",
        desc: "Track ingredient stock levels and get alerts when supplies are running low."
    },
    {
        title: "Monitor Orders in Real-Time",
        desc: "View all active, preparing, and completed orders from a centralized control panel."
    },
    {
        title: "Track Sales & Revenue",
        desc: "Analyze daily revenue, best-selling dishes, and performance reports instantly."
    },
    {
        title: "Optimize Kitchen Operations",
        desc: "Use insights and automation to improve efficiency and scale your cloud kitchen business."
    }
];

const HowItWorks = () => {
    const [tab, setTab] = useState("orders");

    const steps = tab === "orders" ? orderProcessingSteps : kitchenManagementSteps;

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
                    How Does Our <span className="text-blue-600">Cloud Kitchen POS System</span> Work?
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    Our cloud kitchen POS platform simplifies online food order
                    management and kitchen operations. Here's how the complete
                    workflow runs smoothly from order placement to delivery.
                </p>

                {/* Toggle */}
                <div className="flex justify-center mt-10">

                    <div className="flex bg-gradient-to-r from-blue-500 to-blue-900 rounded-full p-1">

                        <button
                            onClick={() => setTab("orders")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                                tab === "orders" ? "bg-white text-blue-900" : "text-white"
                            }`}
                        >
                            ● Order Processing
                        </button>

                        <button
                            onClick={() => setTab("kitchen")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                                tab === "kitchen" ? "bg-white text-blue-900" : "text-white"
                            }`}
                        >
                            ● Kitchen Management
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