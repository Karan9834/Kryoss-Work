import React from "react";
import telemedicineaboutimg from "@/assets/telemedicine-img/telemedicineabout.jpg";
const TelemedicineAbout = () => {
    return (
        <section className="py-24 bg-[#ecfeff]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src={telemedicineaboutimg}
                            alt="Telemedicine Healthcare Platform"
                            className="w-full max-w-lg rounded-3xl shadow-xl object-cover"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="bg-white border border-teal-100 rounded-3xl p-8 lg:p-12 shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm px-4 py-2 rounded-full w-fit">
                            ● About Platform
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                            What is a <span className="text-teal-600">Telemedicine App?</span>
                        </h2>

                        {/* Paragraphs */}
                        <p className="text-gray-600 leading-relaxed">
                            A telemedicine app enables patients to connect with healthcare
                            professionals remotely using digital technology. Through video
                            consultations, messaging, and online appointments, patients can
                            receive medical advice without visiting hospitals physically.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our telemedicine platform simplifies healthcare access by
                            connecting doctors and patients on a single digital system.
                            Patients can book appointments, consult doctors, receive
                            prescriptions, and manage their health records securely.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Doctors can manage patient appointments, conduct video
                            consultations, share prescriptions, and monitor patient
                            information directly from the platform's intuitive dashboard.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            This modern healthcare solution improves accessibility,
                            reduces waiting times, and allows healthcare providers to
                            reach more patients efficiently while maintaining secure
                            medical communication.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default TelemedicineAbout;