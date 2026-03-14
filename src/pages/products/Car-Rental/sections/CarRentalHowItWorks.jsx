import React, { useState } from "react";
import customerStep1 from "@/assets/carrental-app-img/carrentalhowitwork1.webp";
import customerStep2 from "@/assets/carrental-app-img/carrentalhowitwork2.webp";
import customerStep3 from "@/assets/carrental-app-img/carrentalhowitwork3.webp";
import customerStep4 from "@/assets/carrental-app-img/carrentalhowitwork4.webp";
import customerStep5 from "@/assets/carrental-app-img/carrentalhowitwork5.webp";
import customerStep6 from "@/assets/carrental-app-img/carrentalhowitwork6.webp";
import hostStep1 from "@/assets/carrental-app-img/carrentalhowitwork7.webp";
import hostStep2 from "@/assets/carrental-app-img/carrentalhowitwork8.webp";
import hostStep3 from "@/assets/carrental-app-img/carrentalhowitwork9.webp";
import hostStep4 from "@/assets/carrental-app-img/carrentalhowitwork10.webp";
import hostStep5 from "@/assets/carrental-app-img/carrentalhowitwork11.webp";
import hostStep6 from "@/assets/carrental-app-img/carrentalhowitwork12.webp";

const customerSteps = [
    {
        title: "Registration",
        desc: "Customers create an account by entering their basic details and verifying their identity for a secure rental experience.",
        image: customerStep1
    },
    {
        title: "Search Vehicle",
        desc: "Users search for available vehicles based on location, rental date, and their preferred vehicle type.",
        image: customerStep2
    },
    {
        title: "Booking Request",
        desc: "Customers select the desired vehicle and send a booking request which will be reviewed by the host.",
        image: customerStep3
    },
    {
        title: "Make Payment",
        desc: "After confirmation, customers can pay securely through multiple payment options like cards or digital wallets.",
        image: customerStep4
    },
    {
        title: "Receive Vehicle",
        desc: "Customers visit the vehicle pickup location shared by the host and collect the car for their trip.",
        image: customerStep5
    },
    {
        title: "Rate the Service",
        desc: "After the rental period, customers can rate the service and leave feedback to help others.",
        image: customerStep6
    }
];

const hostSteps = [
    {
        title: "Registration",
        desc: "Car owners register on the platform by submitting their details and verifying their identity.",
        image: hostStep1
    },
    {
        title: "List Vehicle",
        desc: "Hosts add their vehicles with details like model, pricing, and availability schedule.",
        image: hostStep2
    },
    {
        title: "Add Vehicle Slot",
        desc: "Hosts manage vehicle availability by setting rental slots and booking conditions.",
        image: hostStep3
    },
    {
        title: "Receive Bookings",
        desc: "Hosts receive booking requests and can approve or decline based on availability.",
        image: hostStep4
    },
    {
        title: "Collect Vehicle",
        desc: "Hosts prepare the vehicle and coordinate the handover process with the renter.",
        image: hostStep5
    },
    {
        title: "Handover Vehicle",
        desc: "After the trip, hosts verify the vehicle condition and complete the rental process.",
        image: hostStep6
    }
];

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState("customer");

    const steps = activeTab === "customer" ? customerSteps : hostSteps;

    return (
        <section className="py-24 bg-[#f6f9fc]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 px-4 py-1 rounded-full text-sm">
                        ● How App Works
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-800">
                    How Our Car Rental App Works{" "}
                    <span className="text-blue-600">for Both Customers and Hosts</span>
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    Discover how our car rental platform connects renters and vehicle
                    owners through a seamless booking process designed for convenience,
                    transparency, and efficiency.
                </p>

                {/* Toggle */}
                <div className="flex justify-center mt-10">
                    <div className="flex bg-blue-900 rounded-full p-1">

                        <button
                            onClick={() => setActiveTab("customer")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === "customer"
                                ? "bg-white text-blue-900"
                                : "text-white"
                                }`}
                        >
                            Customer App
                        </button>

                        <button
                            onClick={() => setActiveTab("host")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === "host"
                                ? "bg-white text-blue-900"
                                : "text-white"
                                }`}
                        >
                            Host App
                        </button>

                    </div>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group bg-[#eaf3f9] rounded-2xl p-6 border border-transparent hover:border-blue-500 transition duration-300 hover:-translate-y-1"
                        >

                            <h3 className="text-xl font-semibold text-blue-700 group-hover:italic transition">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                                {step.desc}
                            </p>

                            {/* Image */}
                            <div className="mt-6 flex justify-center">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-full max-w-[220px] object-contain"
                                />
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default HowItWorks;