import React from "react";

const B2BWholesaleCTA = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-[#0f2c4c] to-[#1b4f7a] text-white relative overflow-hidden">

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    Launch Your B2B Wholesale Platform Today
                </h2>

                {/* Description */}
                <p className="text-gray-200 mt-5 text-lg leading-relaxed max-w-2xl mx-auto">
                    Build a powerful digital wholesale portal that connects suppliers,
                    distributors, and retailers. Simplify bulk ordering, pricing
                    management, and business transactions through a single scalable
                    platform.
                </p>

                {/* CTA Button */}
                <div className="mt-8">
                    <a
                        href="https://preview.codecanyon.net/item/wholesale-b2b-wholesale-pricing-customer-groups-for-botble-ecommerce/full_screen_preview/61763729"
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

export default B2BWholesaleCTA;