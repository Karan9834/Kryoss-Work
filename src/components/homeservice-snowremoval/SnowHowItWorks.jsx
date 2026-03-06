import React from "react";
import { LogIn, Search, ShoppingCart, Truck, CreditCard, Star } from "lucide-react";

const steps = [
    {
        icon: LogIn,
        title: "1. Login/Signup",
        desc: "A user can log in or sign up by providing information or through social sites like Facebook or Google.",
    },
    {
        icon: Search,
        title: "2. Search Plowers",
        desc: "A user can search the nearest plowers; they can view the plowers’ profile details with name, distance, service pricing and ratings.",
    },
    {
        icon: ShoppingCart,
        title: "3. Place Order",
        desc: "After checking the provider profile and pricing, the user can choose the service based on their requirements and place the request.",
    },
    {
        icon: Truck,
        title: "4. Plower Offer Service",
        desc: "After accepting user requests, the provider arrives at the user location and provides the service.",
    },
    {
        icon: CreditCard,
        title: "5. Secure Payment",
        desc: "Once the service is complete, the user has flexible payment options like cash, card, and in-app wallet.",
    },
    {
        icon: Star,
        title: "6. Rating & Review",
        desc: "Once payment is complete, the user and provider can give reviews and ratings based on the service experience.",
    },
];

const SnowHowItWorks = () => {
    return (
        <section className="bg-white py-14">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="text-center mb-6">
                    <span className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        How Does App Works
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-semibold mb-6">
                    How Our Uber Snow Plow{" "}
                    <span className="text-blue-500">Service App Solution</span> Works
                </h2>

                {/* Paragraph */}
                <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16">
                    Our Uber for Snow Plow Service App Solution connects users with reliable
                    snow removal providers effortlessly. Customers can request services
                    through the app, while providers receive job details and manage tasks
                    with ease.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8">

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={index}
                                className="flex gap-6 border border-blue-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
                            >

                                {/* Icon */}
                                <div className="bg-blue-100 p-4 rounded-xl h-fit">
                                    <Icon size={32} className="text-gray-800" />
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default SnowHowItWorks;