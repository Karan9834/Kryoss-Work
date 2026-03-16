import React from "react";

const steps = [
    {
        number: "01",
        title: "Business Account Registration",
        desc: "Retailers, distributors, or partners create their business accounts and get verified to access the wholesale ordering platform."
    },
    {
        number: "02",
        title: "Browse Product Catalog",
        desc: "Business buyers can explore the complete wholesale catalog with product details, stock availability, and bulk pricing tiers."
    },
    {
        number: "03",
        title: "Bulk Order Placement",
        desc: "Customers can quickly add large quantities of products to their cart and place bulk orders in just a few steps."
    },
    {
        number: "04",
        title: "Custom Pricing & Discounts",
        desc: "The platform automatically applies wholesale pricing, tiered discounts, or negotiated rates for business customers."
    },
    {
        number: "05",
        title: "Order Processing",
        desc: "Suppliers receive the order, manage inventory, and prepare shipments using the integrated order management system."
    },
    {
        number: "06",
        title: "Delivery & Order Tracking",
        desc: "Retailers can track their shipments and receive updates until the order is delivered successfully."
    }
];

const B2BHowItWorks = () => {
    return (
        <section className="py-24 bg-[#eef2ff]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
                        How It Works
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-900">
                    How Our <span className="text-blue-600">B2B Wholesale Platform</span> Works
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    Our platform simplifies wholesale commerce by connecting suppliers
                    and business buyers through a streamlined digital ordering system.
                </p>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 mt-20">

                    {steps.map((step, index) => (
                        <div key={index} className="relative">

                            {/* Step Number */}
                            <div className="text-5xl font-bold text-blue-200 mb-4">
                                {step.number}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {step.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default B2BHowItWorks;