import React, { useState } from "react";

const serviceBookingSteps = [
{
    title: "Browse Property Listings",
    desc: "Users explore available residential and commercial properties listed on the platform."
},
{
    title: "Apply Filters & Search",
    desc: "Buyers filter properties based on location, price, property type, and other preferences."
},
{
    title: "View Property Details",
    desc: "Users check detailed property information including images, price, location, and amenities."
},
{
    title: "Contact Agent or Owner",
    desc: "Interested buyers can contact the property owner or agent directly through the platform."
},
{
    title: "Schedule Property Visit",
    desc: "Users can request a property visit or schedule a meeting with the agent."
},
{
    title: "Finalize Deal",
    desc: "Buyers proceed with negotiations, booking, or purchasing the property."
}
];

const providerManagementSteps = [
{
    title: "Register as a Property Agent",
    desc: "Real estate agents or property owners sign up to list their properties on the platform."
},
{
    title: "Profile Verification",
    desc: "Admin verifies the agent or owner profile before allowing property listings."
},
{
    title: "Add Property Listings",
    desc: "Agents upload property details including images, pricing, and location."
},
{
    title: "Manage Inquiries",
    desc: "Agents receive inquiries from interested buyers and respond directly."
},
{
    title: "Schedule Property Visits",
    desc: "Agents coordinate property viewings with potential buyers."
},
{
    title: "Close Property Deals",
    desc: "Agents finalize deals and manage successful property transactions."
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
                   How Does Our  <span className="text-blue-600">Property Listing Portal </span> Work?
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    Our property platform simplifies the process of booking home
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