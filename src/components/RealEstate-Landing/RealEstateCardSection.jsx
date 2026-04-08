import { Link } from 'react-router-dom';
import React from 'react';

import { Home, Building2 } from 'lucide-react';
import card1Img from '../../assets/realestatelanding-img/realestatelandingcard1.jpg';
import card2Img from '../../assets/realestatelanding-img/realestatelandingcard2.jpg';

const RealEstateCardSection = () => {
    const cards = [
        {
            title: "EstateLab: Property Listing Portal",
            image: card1Img,
            desc: "A comprehensive real estate marketplace for buying, selling, and renting properties.",
            path: "/products/prime/property-listing-portal",
        },
        {
            title: "Selio: Real Estate Agency",
            image: card2Img,
            desc: "A powerful back-office management system for agencies and property developers.",
            path: "/products/prime/real-estate-solution",
        }
    ];

    return (
        <section id="realestate-products" className="py-16 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-px bg-emerald-400"></div>
                        <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">
                            Our Products
                        </span>
                        <div className="w-8 h-px bg-emerald-400"></div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E293B]">
                        Our Premium <span className="text-emerald-600">Real Estate Solutions</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Choose the ideal platform to transform your property business into a modern, digital-first experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {cards.map((card, index) => (
                        <div key={index} className="text-center">
                            {/* CLICKABLE IMAGE */}
                            <Link
                                to={card.path}
                                className="cursor-pointer group block"
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className={`w-full rounded-xl border-[5px] border-transparent hover:border-emerald-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover`}
                                />
                            </Link>

                            {/* TITLE AND DESCRIPTION */}
                            <p className="mt-4 text-sm md:text-base">
                                <Link to={card.path} className="text-emerald-600 font-semibold hover:underline">
                                    {card.title}
                                </Link>{" "}
                                <span className="text-gray-700">
                                    - {card.desc}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div className="text-center mt-16">
                    <p className="text-sm text-gray-400 font-medium">
                        ✦ More real estate solutions coming soon ✦
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RealEstateCardSection;
