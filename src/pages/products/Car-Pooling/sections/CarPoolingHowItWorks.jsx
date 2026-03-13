import React, { useState } from "react";

const findRideSteps = [
    {
        title: "Enter Route & Date",
        desc: "Enter your pickup location, destination, and travel date to begin your ride search."
    },
    {
        title: "View Available Rides",
        desc: "Browse through all available carpool rides that match your route instantly."
    },
    {
        title: "Apply Filters & Select Ride",
        desc: "Filter rides by seat availability, departure time, or price to find the best option."
    },
    {
        title: "Review Trip Details",
        desc: "Check driver profile, route stops, trip duration, and pricing before confirming."
    },
    {
        title: "Book Seat & Make Payment",
        desc: "Reserve your seat and pay securely using your preferred payment method."
    },
    {
        title: "Receive Trip Updates",
        desc: "Get instant booking confirmation and real-time trip updates until your ride begins."
    }
];

const publishRideSteps = [
    {
        title: "Enter Trip Location & Schedule",
        desc: "Add your starting point, destination, and preferred departure time."
    },
    {
        title: "Set Price & Seat Availability",
        desc: "Define your ride price per seat and choose the number of available seats."
    },
    {
        title: "Add Ride Preferences & Stops",
        desc: "Specify luggage policy, music preferences, or add intermediate stops."
    },
    {
        title: "Publish Ride Listing",
        desc: "Make your ride live so passengers traveling the same route can book instantly."
    },
    {
        title: "Manage Booking Requests",
        desc: "Review incoming requests and accept or reject passengers easily."
    },
    {
        title: "Start Trip & Complete Ride",
        desc: "Begin the ride, pick up confirmed passengers, and mark the trip complete."
    }
];

const CarpoolHowItWorks = () => {
    const [tab, setTab] = useState("find");

    const steps = tab === "find" ? findRideSteps : publishRideSteps;

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
                    How Does Our <span className="text-blue-600">Carpooling Clone App</span> Work?
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    Our carpool platform simplifies ride sharing for both riders and drivers.
                    Here’s how the complete journey works from start to finish.
                </p>

                {/* Toggle */}
                <div className="flex justify-center mt-10">

                    <div className="flex bg-gradient-to-r from-blue-500 to-blue-900 rounded-full p-1">

                        <button
                            onClick={() => setTab("find")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${tab === "find" ? "bg-white text-blue-900" : "text-white"
                                }`}
                        >
                            ● Find Ride
                        </button>

                        <button
                            onClick={() => setTab("publish")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${tab === "publish" ? "bg-white text-blue-900" : "text-white"
                                }`}
                        >
                            ● Publish Ride
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

export default CarpoolHowItWorks;