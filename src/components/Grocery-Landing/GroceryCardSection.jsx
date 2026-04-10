import { Link } from 'react-router-dom';
import React from 'react';
import card1Img from '../../assets/grocerylanding-img/grocerylandingcard1.jpg';
import card2Img from '../../assets/grocerylanding-img/grocerylandingcard2.jpg';

const GroceryCardSection = () => {
    const cards = [
        {
            title: "DTBasket Grocery App",
            description: "Complete Customer + Driver + Store Grocery Delivery Solution.",
            image: card1Img,
            path: "/products/delivery/grocery-delivery",
        },
        {
            title: "Ready Grocery",
            description: "Powerful Admin & Multi-Vendor Grocery Management System.",
            image: card2Img,
            path: "/products/grocery-delivery",
        }
    ];

    return (
        <section id="grocery-products" className="py-16 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header - Updated Typography */}
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-px bg-emerald-400"></div>
                        <span className="text-emerald-600 text-[14px] font-bold tracking-wider uppercase">
                            Grocery Solutions
                        </span>
                        <div className="w-8 h-px bg-emerald-400"></div>
                    </div>
                    
                    {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                        Our Premium <span className="text-emerald-600">Grocery Solutions</span>
                    </h2>
                    
                    {/* Description Text - 16px, weight 400, line-height 1.6 */}
                    <p className="text-[16px] font-normal leading-[1.6] text-gray-500 max-w-2xl mx-auto">
                        Pick the ideal platform to transform your grocery business into a modern, efficient digital experience.
                    </p>
                </div>

                {/* Products Grid */}
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
                                    className="w-full rounded-xl border-[5px] border-transparent hover:border-emerald-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-contain aspect-[16/9]"
                                />
                            </Link>

                            {/* TITLE AND DESCRIPTION - Updated Typography */}
                            <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6] transition-colors group-hover:text-emerald-600">
                                <Link to={card.path} className="text-emerald-600 font-semibold hover:underline">
                                    {card.title}
                                </Link>{" "}
                                <span className="text-gray-700">
                                    - {card.description}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div className="text-center mt-16">
                    <p className="text-[14px] font-normal leading-[1.6] text-gray-400">
                        ✦ More grocery solutions coming soon ✦
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GroceryCardSection;