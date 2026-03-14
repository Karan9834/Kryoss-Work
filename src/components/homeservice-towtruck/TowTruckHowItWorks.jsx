import React from "react";

const steps = [
    {
        number: "01",
        title: "Login/Signup",
        desc: "A user can easily log in or quickly sign up by providing information or through social sites like Facebook, Instagram, Google, or Apple accounts.",
    },
    {
        number: "02",
        title: "Search Provider",
        desc: "A user can search for the nearest towing person; they can view the towing profile details with name, distance, service pricing, ratings, etc.",
    },
    {
        number: "03",
        title: "Place Order",
        desc: "After checking the towing provider profile and pricing; the user can choose the service based on their requirements and place the request.",
    },
    {
        number: "04",
        title: "Provider Offer Service",
        desc: "After accepting user requests, the provider arrives at the user location and provides the towing service.",
    },
    {
        number: "05",
        title: "Secure Payment",
        desc: "Once the service is complete, the user has flexible payment options like cash, card, and in-app wallet.",
    },
    {
        number: "06",
        title: "Rating & Review",
        desc: "Once payment is complete, the user and provider can give reviews and ratings to each other based on the service experience.",
    },
];

const HowItWorks = () => {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Label */}
                <div className="flex justify-center mb-6">
                    <span className="border rounded-full px-4 py-1 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        How App Works
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-semibold mb-6">
                    How the Uber for{" "}
                    <span className="text-blue-600">Tow Trucks</span> App Works
                </h2>

                {/* Description */}
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
                    Our Uber for tow trucks app provides a seamless solution for both users and tow truck providers,
                    ensuring quick and easy access to roadside assistance whenever needed.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="border rounded-2xl p-8 transition hover:border-blue-500"
                        >
                            {/* Number */}
                            <div className="text-5xl font-semibold text-gray-200 mb-4">
                                {step.number}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-3">
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

export default HowItWorks;