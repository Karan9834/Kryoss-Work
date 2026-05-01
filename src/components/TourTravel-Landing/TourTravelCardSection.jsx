import { Link } from 'react-router-dom';
import React from 'react';
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
                {/* Header - Updated Typography */}
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-px bg-sky-400"></div>
                        {/* Badge - Updated: text-[14px] font-bold tracking-wider uppercase */}
                        <span className="text-amber-600 text-[14px] font-bold tracking-wider uppercase">
                            Our Products
                        </span>
                        <div className="w-8 h-px bg-sky-400"></div>
                    </div>
                    
                    {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                        Our Premium <span className="text-sky-600">Travel Solutions</span>
                    </h2>
                    
                    {/* Description - 16px, weight 400, line-height 1.6 */}
                    <p className="text-[16px] font-normal leading-[1.6] text-gray-500 max-w-2xl mx-auto">
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

                            {/* TITLE AND DESCRIPTION - Updated Typography */}
                            <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
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

                {/* Bottom note - Updated Typography */}
                <div className="text-center mt-16">
                    <p className="text-[14px] font-normal leading-[1.6] text-gray-400">
                        ✦ More travel solutions coming soon ✦
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TourTravelCardSection;