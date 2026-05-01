import React, { useState } from "react";

const serviceBookingSteps = [
    {
        title: "Browse Available Services",
        desc: "Customers explore various home services such as plumbing, electrical repair, cleaning, and appliance maintenance."
    },
    {
        title: "Select Service & Schedule",
        desc: "Choose the required service, preferred date, and time for the service appointment."
    },
    {
        title: "Find Nearby Professionals",
        desc: "The platform connects users with verified service providers available in their location."
    },
    {
        title: "Confirm Booking",
        desc: "Review service details, pricing, and provider information before confirming the booking."
    },
    {
        title: "Service Professional Visits",
        desc: "The assigned handyman arrives at the scheduled time and performs the requested service."
    },
    {
        title: "Payment & Service Completion",
        desc: "Customers securely complete payment and rate the service experience after the job is finished."
    }
];

const providerManagementSteps = [
    {
        title: "Register as a Service Provider",
        desc: "Professionals sign up on the platform and submit their service skills and experience."
    },
    {
        title: "Verification & Profile Setup",
        desc: "The admin verifies provider details and activates their service profile."
    },
    {
        title: "Receive Service Requests",
        desc: "Service providers receive booking notifications from customers in their service area."
    },
    {
        title: "Accept & Manage Jobs",
        desc: "Providers can accept or reject service requests and manage their work schedule."
    },
    {
        title: "Complete Assigned Tasks",
        desc: "Professionals perform the service at the customer's location as scheduled."
    },
    {
        title: "Track Earnings & Performance",
        desc: "Service providers can view completed jobs, earnings, and customer ratings in their dashboard."
    }
];

const HowItWorks = () => {
    const [tab, setTab] = useState("booking");

    const steps = tab === "booking" ? serviceBookingSteps : providerManagementSteps;

    return (
        <section className="py-24 bg-[#ffffff]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 px-4 py-1 rounded-full text-sm">
                        ● How App Works
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-800">
                    How Does Our <span className="text-blue-600">Handyman Service App</span> Work?
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    Our handyman platform simplifies the process of booking home
                    services and managing service professionals. Here’s how the
                    complete workflow operates from booking to service completion.
                </p>

                {/* Toggle */}
                <div className="flex justify-center mt-10">

                    <div className="flex bg-gradient-to-r from-blue-500 to-blue-900 rounded-full p-1">

                        <button
                            onClick={() => setTab("booking")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                                tab === "booking" ? "bg-white text-blue-900" : "text-white"
                            }`}
                        >
                            ● Service Booking
                        </button>

                        <button
                            onClick={() => setTab("providers")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                                tab === "providers" ? "bg-white text-blue-900" : "text-white"
                            }`}
                        >
                            ● Provider Workflow
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