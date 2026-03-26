import React from 'react';
import g1 from "../../../../assets/retailpos-img/retailposgallery1.jpg";
import g2 from "../../../../assets/retailpos-img/retailposgallery2.jpg";
import g3 from "../../../../assets/retailpos-img/retailposgallery3.jpg";
import g4 from "../../../../assets/retailpos-img/retailposgallery4.jpg";
import g5 from "../../../../assets/retailpos-img/retailposgallery5.jpg";
import g6 from "../../../../assets/retailpos-img/retailposgallery6.jpg";

const RetailGallery = () => {
    const galleryImages = [g1, g2, g3, g4, g5, g6];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-20 space-y-6">
                <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest block">The Visual Experience</span>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1E293B]">
                    Market-Winning <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-indigo-600 to-amber-500">User Interface</span>
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-semibold">
                    A multi-platform interface designed for speed and simplicity. Whether on tablet or desktop, the experience remains consistent and powerful.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {galleryImages.map((img, index) => (
                    <div key={index} className="aspect-video bg-white border border-gray-100 rounded-[50px] flex items-center justify-center group overflow-hidden relative shadow-2xl hover:translate-y-[-10px] transition-all duration-500">
                        <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RetailGallery;
