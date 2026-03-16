import React from "react";

const steps = [
    {
        title: "Create Patient Account",
        desc: "Patients sign up and complete their health profile securely."
    },
    {
        title: "Search Doctors",
        desc: "Browse available doctors by specialization and availability."
    },
    {
        title: "Book Appointment",
        desc: "Choose a convenient time slot and confirm consultation."
    },
    {
        title: "Video Consultation",
        desc: "Connect with doctors via secure video call for diagnosis."
    },
    {
        title: "Get Prescription",
        desc: "Doctors provide digital prescriptions and follow-up advice."
    }
];

const TelemedicineHowItWorks = () => {
    return (
        <section className="py-24 bg-[#ecfeff]">

            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-20">

                    <span className="bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm">
                        Process
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        How Telemedicine Platform Works
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Our telemedicine platform simplifies healthcare access by allowing
                        patients and doctors to connect digitally in a few easy steps.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative border-l-2 border-teal-200">

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`mb-16 ml-10 ${index % 2 === 0 ? "text-left" : "text-left"
                                }`}
                        >

                            {/* Dot */}
                            <div className="absolute -left-3 w-6 h-6 bg-teal-500 rounded-full border-4 border-white"></div>

                            {/* Content */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-teal-100">

                                <h3 className="text-lg font-semibold text-gray-900">
                                    {index + 1}. {step.title}
                                </h3>

                                <p className="text-gray-600 mt-2">
                                    {step.desc}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default TelemedicineHowItWorks;