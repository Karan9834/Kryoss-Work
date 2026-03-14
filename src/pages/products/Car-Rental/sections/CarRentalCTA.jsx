import React from "react";

const CTASection = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-[#0f2c4c] to-[#1b4f7a] text-white relative overflow-hidden">

            {/* Container */}
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    Launch Your Car Rental Platform Today
                </h2>

                {/* Description */}
                <p className="text-gray-200 mt-5 text-lg leading-relaxed max-w-2xl mx-auto">
                    Start your own car rental business with our powerful and scalable
                    car rental app solution. Manage vehicles, bookings, payments, and
                    customers effortlessly from one platform.
                </p>

                {/* Button */}
                <div className="mt-8">
                    <a
                        href="https://preview.codecanyon.net/item/carento-car-dealer-rental-booking-laravel-system/full_screen_preview/55782539"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-sky-200 transition duration-300 shadow-lg"
                    >
                        Try Live Demo
                    </a>
                </div>

            </div>

            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>

        </section>
    );
};

export default CTASection;