import React from 'react';

// Import assets from src/assets folder
import landingImg from '../../assets/Fantasy sports/landing.jpg';
import betlab1 from '../../assets/Fantasy sports/Betlab/1....jpg';
import betlab2 from '../../assets/Fantasy sports/Betlab/2....jpg';
import betlab3 from '../../assets/Fantasy sports/Betlab/3....jpg';
import betpro1 from '../../assets/Fantasy sports/Betpro fantasy/1...jpg';
import betpro2 from '../../assets/Fantasy sports/Betpro fantasy/2...jpg';

const FantasySportsGallery = () => {
    const galleryItems = [
        { img: landingImg, title: "Platform Landing" },
        { img: betlab1, title: "Betlab Dashboard" },
        { img: betlab2, title: "Betlab Live Matches" },
        { img: betlab3, title: "Betlab User Profile" },
        { img: betpro1, title: "BetPro Leagues" },
        { img: betpro2, title: "BetPro Tournaments" }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    {/* Badge */}
                    <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-[12px] font-medium tracking-[0.05em] uppercase">
                        Platform Showcase
                    </div>
                    {/* Heading */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                        Internal <span className="text-green-600">Product Preview</span>
                    </h2>
                    {/* Description */}
                    <p className="text-gray-500 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto">
                        Take a look at the sophisticated interfaces of our Fantasy Sports platforms, designed for engaging user experiences and high availability during live events.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-[16/10] overflow-hidden">
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FantasySportsGallery;
