import React from 'react';
import g1 from "../../../../assets/resturantpos-img/resturantposgallery1.jpg";
import g2 from "../../../../assets/resturantpos-img/resturantposgallery2.jpg";
import g3 from "../../../../assets/resturantpos-img/resturantposgallery3.jpg";
import g4 from "../../../../assets/resturantpos-img/resturantposgallery4.jpg";
import g5 from "../../../../assets/resturantpos-img/resturantposgallery5.jpg";
import g6 from "../../../../assets/resturantpos-img/resturantposgallery6.jpg";

const RestoGallery = () => {
    const galleryImages = [g1, g2, g3, g4, g5, g6];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest block">System Preview</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1E293B]">
                        A Glimpse into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-emerald-600 to-amber-500">Seamless Experience</span>
                    </h2>
                    <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-semibold">
                        A glimpse into the beautiful and functional interface designed to help your staff perform at their best.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="aspect-video bg-gray-50 border-8 border-indigo-50/30 rounded-[3rem] flex items-center justify-center group overflow-hidden relative shadow-2xl hover:scale-[1.02] transition-all duration-500">
                            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RestoGallery;
