import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Map } from 'lucide-react';
import card1Img from '../../assets/tourlanding-img/tourlandingcard1.jpg';
import card2Img from '../../assets/tourlanding-img/tourlandingcard2.jpg';

const TourTravelCardSection = () => {
    const cards = [
        {
            title: "Tour Master: Tour & Travel Booking App",
            desc: "A full-featured OTA-style booking platform for flights, hotels, and packages.",
            path: "/products/prime/tour-travel-booking-app",
        },
        {
            title: "WooTour",
            desc: "A comprehensive back-office solution for travel agencies and tour operators.",
            path: "/products/prime/travel-agency-management",
        }
    ];

    return (
        <section id="tour-products" className="py-16 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-px bg-sky-400"></div>
                        <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">
                            Our Products
                        </span>
                        <div className="w-8 h-px bg-sky-400"></div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E293B]">
                        Our Premium <span className="text-sky-600">Travel Solutions</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Choose the perfect platform to launch your travel business and create unforgettable experiences for your customers.
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
                                    src={index === 0 ? card1Img : card2Img}
                                    alt={card.title}
                                    className="w-full rounded-xl border-[5px] border-transparent hover:border-sky-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                                />
                            </Link>

                            {/* TITLE AND DESCRIPTION */}
                            <p className="mt-4 text-sm md:text-base">
                                <Link to={card.path} className="text-sky-600 font-semibold hover:underline">
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
                        ✦ More travel solutions coming soon ✦
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TourTravelCardSection;
