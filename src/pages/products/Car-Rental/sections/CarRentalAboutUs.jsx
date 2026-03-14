import React from "react";
import carrentalaboutimg from "@/assets/carrental-app-img/carrentalabout.webp";

const AboutCarRental = () => {
    return (
        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-8">

                <div className="grid lg:grid-cols-2 gap-4 items-center">

                    {/* LEFT IMAGE */}
                    <div className="relative flex justify-center lg:justify-start">

                        <img src={carrentalaboutimg}
                            alt="About Car Rental App"
                            className="w-full h-full object-cover rounded-3xl" />
                        {/* </div> */}

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="border border-blue-200 rounded-3xl p-8 lg:p-12 bg-white shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About Car Rental App
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
                            Build a Profitable Car Rental Business with
                            <span className="text-blue-600"> Our Advanced Car Rental Script</span>
                        </h2>

                        {/* Paragraph 1 */}
                        <p className="text-gray-600 leading-relaxed">
                            Our Car Rental App Script is a modern and scalable platform
                            designed to simplify the way people rent vehicles online.
                            It enables businesses to manage bookings, vehicles,
                            and customer interactions efficiently from a single dashboard.
                        </p>

                        {/* Paragraph 2 */}
                        <p className="text-gray-600 leading-relaxed">
                            Whether you're launching a startup or expanding an existing
                            rental service, this solution provides everything needed to
                            operate a successful car rental platform including real-time
                            booking management, secure payments, and powerful analytics.
                        </p>

                        {/* Paragraph 3 */}
                        <p className="text-gray-600 leading-relaxed">
                            With its flexible architecture and customizable features,
                            our platform helps businesses deliver a seamless rental
                            experience while maximizing operational efficiency and revenue.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AboutCarRental;