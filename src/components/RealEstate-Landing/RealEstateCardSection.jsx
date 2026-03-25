import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2 } from 'lucide-react';
import card1Img from '../../assets/realestatelanding-img/realestatelandingcard1.png';
import card2Img from '../../assets/realestatelanding-img/realestatelandingcard2.png';

const RealEstateCardSection = () => {
    const cards = [
        {
            title: "Property Listing Portal",
            desc: "A comprehensive real estate marketplace for buying, selling, and renting properties.",
            path: "/products/prime/property-listing-portal",
            features: [
                "Advanced Property Search",
                "Virtual Property Tours",
                "Agent & Buyer Profiles",
                "In-App Messaging",
                "EMI Calculator",
                "Multi-City Support",
            ],
            icon: Home,
            themeColor: "text-emerald-600",
            bgColor: "bg-emerald-50",
            accentColor: "bg-emerald-500",
        },
        {
            title: "Real Estate CRM Platform",
            desc: "A powerful back-office management system for agencies and property developers.",
            path: "/products/prime/real-estate-solution",
            features: [
                "Lead Management",
                "Agent Commission Tracking",
                "Document Management",
                "Property Analytics",
                "Inventory Dashboard",
                "Client Follow-up System",
            ],
            icon: Building2,
            themeColor: "text-amber-600",
            bgColor: "bg-amber-50",
            accentColor: "bg-amber-500",
        },
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

                <div className="grid lg:grid-cols-2 gap-12">
                    {cards.map((card, index) => (
                        <Link
                            to={card.path}
                            key={index}
                            className="group relative flex flex-col items-center text-center p-2 rounded-[40px] border-2 border-gray-100 transition-all duration-500 hover:scale-[1.02] bg-white shadow-xl hover:border-emerald-100"
                        >
                            {/* Image Section */}
                            <div className={`w-full h-80 ${card.bgColor} rounded-[36px] overflow-hidden relative mb-6 flex items-center justify-center`}>
                                <img src={index === 0 ? card1Img : card2Img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full px-8 pb-10 space-y-8">
                                <div className="space-y-2">
                                    <h3 className={`text-xl font-bold text-[#1E293B] ${index === 0 ? 'group-hover:text-emerald-600' : 'group-hover:text-amber-600'} transition-colors uppercase tracking-tight`}>{card.title}</h3>
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
                        ✦ More real estate solutions coming soon ✦
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RealEstateCardSection;
