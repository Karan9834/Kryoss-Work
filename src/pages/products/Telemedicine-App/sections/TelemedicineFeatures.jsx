import React from "react";
import {
    Video,
    CalendarCheck,
    FileText,
    MessageCircle,
    ShieldCheck,
    Activity
} from "lucide-react";

const features = [
    {
        icon: Video,
        title: "Video Consultation",
        desc: "Patients can connect with doctors instantly through secure HD video calls from anywhere."
    },
    {
        icon: CalendarCheck,
        title: "Appointment Scheduling",
        desc: "Patients can easily book, manage, and reschedule appointments with doctors."
    },
    {
        icon: FileText,
        title: "Digital Prescriptions",
        desc: "Doctors can generate and send prescriptions digitally after online consultations."
    },
    {
        icon: MessageCircle,
        title: "Secure Chat Messaging",
        desc: "Patients and doctors can communicate securely through private messaging."
    },
    {
        icon: ShieldCheck,
        title: "Medical Data Security",
        desc: "All patient records and consultations are protected with secure encryption."
    },
    {
        icon: Activity,
        title: "Health Records Management",
        desc: "Patients can store medical history, reports, and prescriptions in one place."
    }
];

const TelemedicineFeatures = () => {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm">
                        Platform Features
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-4">
                        Healthcare Features Built for Modern Telemedicine
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Our telemedicine platform provides powerful digital healthcare
                        tools that help doctors and patients communicate efficiently.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-10">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-[#ecfeff] border border-teal-100 rounded-2xl p-8 hover:shadow-xl transition"
                            >

                                <div className="w-14 h-14 flex items-center justify-center bg-teal-100 rounded-xl mb-5 group-hover:bg-teal-600 transition">
                                    <Icon size={26} className="text-teal-600 group-hover:text-white" />
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default TelemedicineFeatures;