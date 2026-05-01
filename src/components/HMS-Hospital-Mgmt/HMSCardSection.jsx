import { Link } from 'react-router-dom';
import React from 'react';
import card1 from "@/assets/hmslanding-img/hms.jpg";
import card2 from "@/assets/hmslanding-img/sh.jpg";

const HMSCardSection = () => {
    const cards = [
        {
            title: "Smart HMS",
            desc: "The central nervous system for multi-specialty hospitals.",
            path: "/products/enterprise/hms-hospital/smart-hms",
            image: card1
        },
        {
            title: "BdTask HMS",
            desc: "Lightweight, scalable solution for independent clinics and outpatient networks.",
            path: "/products/enterprise/hms-hospital/bdtask-hms",
            image: card2
        }
    ];

    return (
        <section id="hms-cards" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-px bg-teal-200"></div>
                        <span className="text-cyan-600 text-[12px] font-medium tracking-[0.05em] uppercase">
                            Our Products
                        </span>
                        <div className="w-8 h-px bg-cyan-200"></div>
                    </div>

                    {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-cyan-600 to-emerald-500">
                            Specialized Healthcare Modules
                        </span>
                    </h2>
                    
                    {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                    <p className="text-[#4A4B5E] text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto mt-6">
                        Choose the specialized platform that fits your institution's specific healthcare needs perfectly.
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
                                {card.image ? (
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full rounded-xl border-[5px] border-transparent group-hover:border-teal-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-48 bg-teal-50 rounded-xl border-[5px] border-transparent group-hover:border-teal-500 flex items-center justify-center transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03]">
                                        <span className="text-teal-400 font-semibold uppercase tracking-widest text-[12px]">Image Placeholder</span>
                                    </div>
                                )}
                            </Link>

                            {/* TITLE AND DESCRIPTION - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                            <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                <Link to={card.path} className="text-teal-600 font-semibold hover:underline">
                                    {card.title}
                                </Link>{" "}
                                <span className="text-gray-700">
                                    - {card.desc}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HMSCardSection;