import React from 'react';

// Import assets from src/assets folder
import hypInvest1 from '../../assets/Mlm products/Hyp invest pro/about us 1 ( any one ).jpg';
import hypInvest2 from '../../assets/Mlm products/Hyp invest pro/about us 1.jpg';
import revptc1 from '../../assets/Mlm products/Revptc/about us ( or).jpg';
import revptc2 from '../../assets/Mlm products/Revptc/about us 1..jpg';

const MLMGallery = () => {
    const galleryItems = [
        { img: hypInvest1, title: "Hyp Invest Pro Dashboard" },
        { img: hypInvest2, title: "Hyp Invest Analytics" },
        { img: revptc1, title: "RevPTC Overview" },
        { img: revptc2, title: "RevPTC User Panel" }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    {/* Badge */}
                    <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[12px] font-medium tracking-[0.05em] uppercase">
                        Platform Showcase
                    </div>
                    {/* Heading */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                        Internal <span className="text-blue-600">Product Preview</span>
                    </h2>
                    {/* Description */}
                    <p className="text-gray-500 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto">
                        Take a look at the sophisticated interfaces of our MLM and Investment platforms, designed for powerful downline management and seamless commission tracking.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

export default MLMGallery;
