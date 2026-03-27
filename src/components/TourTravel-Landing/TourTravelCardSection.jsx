import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Map } from 'lucide-react';
import card1Img from '../../assets/tourlanding-img/tourlandingcard1.png';
import card2Img from '../../assets/tourlanding-img/tourlandingcard2.png';

const TourTravelCardSection = () => {
    const cards = [
        {
            title: "Tour & Travel Booking App",
            desc: "A full-featured OTA-style booking platform for flights, hotels, and packages.",
            path: "/products/prime/tour-travel-booking-app",
            features: [
                "Flight & Hotel Search",
                "Tour Package Builder",
                "Real-time Availability",
                "Multi-Currency Payments",
                "Customer & Agent Apps",
                "Trip Itinerary Manager",
            ],
            icon: Plane,
            themeColor: "text-sky-600",
            bgColor: "bg-sky-50",
            accentColor: "bg-sky-500",
        },
        {
            title: "Travel Agency Management",
            desc: "A comprehensive back-office solution for travel agencies and tour operators.",
            path: "/products/prime/travel-agency-management",
            features: [
                "Agent Commission System",
                "Booking Management",
                "Vendor & Supplier Portal",
                "Dynamic Pricing Engine",
                "Analytics Dashboard",
                "CRM Integration",
            ],
            icon: Map,
            themeColor: "text-amber-600",
            bgColor: "bg-amber-50",
            accentColor: "bg-amber-500",
        },
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

                <div className="grid lg:grid-cols-2 gap-12">
                    {cards.map((card, index) => (
                        <Link
                            to={card.path}
                            key={index}
                            className="group relative flex flex-col items-center text-center p-2 rounded-[40px] border-2 border-gray-100 transition-all duration-500 hover:scale-[1.02] bg-white shadow-xl hover:border-sky-100"
                        >
                            {/* Image Section */}
                            <div className={`w-full  ${card.bgColor} rounded-[36px] overflow-hidden relative mb-6 flex items-center justify-center`}>
                                <img src={index === 0 ? card1Img : card2Img} alt={card.title} className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full px-8 pb-10 space-y-8">
                                <div className="space-y-2">
                                    <h3 className={`text-xl font-bold text-[#1E293B] group-hover:${card.themeColor} transition-colors uppercase tracking-tight`}>{card.title}</h3>
                                    <div className={`h-1 w-20 ${card.accentColor} mx-auto rounded-full`}></div>
                                </div>

                                <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-left">
                                    {card.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className={`w-1.5 h-1.5 ${card.accentColor} rounded-full`}></div>
                                            <span className="text-sm font-bold text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Link>
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
