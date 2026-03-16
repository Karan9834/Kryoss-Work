import React, { useState } from "react";

const appointmentBookingSteps = [
    {
        title: "Browse Salon Services",
        desc: "Customers explore beauty services such as haircuts, hairstyling, spa treatments, skincare, manicure, and pedicure."
    },
    {
        title: "Choose Service & Time Slot",
        desc: "Select the desired salon service and pick a convenient date and time for the appointment."
    },
    {
        title: "Select Salon or Stylist",
        desc: "Users can choose their preferred salon branch or professional stylist for the service."
    },
    {
        title: "Confirm Appointment",
        desc: "Review the service details, pricing, and appointment schedule before confirming the booking."
    },
    {
        title: "Visit Salon for Service",
        desc: "The customer visits the salon at the scheduled time and receives the selected beauty treatment."
    },
    {
        title: "Payment & Feedback",
        desc: "Customers complete secure payment and share ratings or feedback about their salon experience."
    }
];

const salonManagementSteps = [
    {
        title: "Salon Registration",
        desc: "Salon owners register their business and create a professional profile on the platform."
    },
    {
        title: "Service & Stylist Setup",
        desc: "Add beauty services, pricing, and assign professional stylists to specific services."
    },
    {
        title: "Receive Appointment Requests",
        desc: "Salon managers receive real-time booking requests from customers."
    },
    {
        title: "Manage Appointments",
        desc: "Salon staff can confirm, reschedule, or cancel appointments from the management dashboard."
    },
    {
        title: "Provide Beauty Services",
        desc: "Stylists perform the scheduled services for customers at the salon."
    },
    {
        title: "Track Revenue & Performance",
        desc: "Salon owners can monitor bookings, earnings, and customer feedback through analytics."
    }
];

const HowItWorks = () => {
    const [tab, setTab] = useState("booking");

    const steps = tab === "booking" ? appointmentBookingSteps : salonManagementSteps;

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
                    How Does Our <span className="text-blue-600">Salon Booking System</span> Work?
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
                    Our salon booking platform simplifies the process of scheduling
                    beauty appointments and managing salon operations. Here’s how
                    the complete workflow runs from appointment booking to service completion.
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
                            ● Appointment Booking
                        </button>

                        <button
                            onClick={() => setTab("salon")}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                                tab === "salon" ? "bg-white text-blue-900" : "text-white"
                            }`}
                        >
                            ● Salon Management
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