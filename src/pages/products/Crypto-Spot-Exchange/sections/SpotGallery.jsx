import React from 'react';
import g1 from "../../../../assets/cryptospot-img/cryptospotgallery1.jpg";
import g2 from "../../../../assets/cryptospot-img/cryptospotgallery2.jpg";
import g3 from "../../../../assets/cryptospot-img/cryptospotgallery3.jpg";
import g4 from "../../../../assets/cryptospot-img/cryptospotgallery4.jpg";
import g5 from "../../../../assets/cryptospot-img/cryptospotgallery5.jpg";
import g6 from "../../../../assets/cryptospot-img/cryptospotgallery6.jpg";

const SpotGallery = () => {
    const galleryImages = [g1, g2, g3, g4, g5, g6];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-blue-600 font-bold text-sm uppercase tracking-widest block">Interface Preview</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1A1C3C]">
                        Masterful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Trading Experience</span>
                    </h2>
                    <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-semibold">
                        A seamless, responsive interface designed for both novice traders and professional desk operators.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="aspect-video bg-white border-8 border-white rounded-[3rem] shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden group">
                            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpotGallery;
