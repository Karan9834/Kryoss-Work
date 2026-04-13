import { MessageCircle } from "lucide-react";
import React from "react";

const CTA = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-[#0f2c4c] to-[#1b4f7a] text-white relative overflow-hidden">

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    Start Your Real Estate Agency Platform Today
                </h2>

                {/* Description */}
                <p className="text-gray-200 mt-5 text-lg leading-relaxed max-w-2xl mx-auto">
                    Launch a powerful real estate agency platform that connects buyers and sellers
                    traveling in the same direction. Our carpool app helps reduce
                    traffic, lower travel costs, and create an eco-friendly
                    transportation solution for modern cities.
                </p>

                {/* Button */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                        href="https://preview.codecanyon.net/item/real-estate-agency-portal/full_screen_preview/6539169"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-sky-200 transition duration-300 shadow-lg"
                    >
                        Try Live Demo
                    </a>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
                </div>

            </div>

            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>

        </section>
    );
};

export default CTA;