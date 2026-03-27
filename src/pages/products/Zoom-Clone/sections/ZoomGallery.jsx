import React from 'react';
import g1 from "@/assets/zoomclone-img/zoomclonegallery1.jpg";
import g2 from "@/assets/zoomclone-img/zoomclonegallery2.jpg";
import g3 from "@/assets/zoomclone-img/zoomclonegallery3.jpg";
import g4 from "@/assets/zoomclone-img/zoomclonegallery4.jpg";
import g5 from "@/assets/zoomclone-img/zoomclonegallery5.jpg";
import g6 from "@/assets/zoomclone-img/zoomclonegallery6.jpg";

const ZoomGallery = () => {
    const galleryImages = [g1, g2, g3, g4, g5, g6];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-purple-600 font-bold text-sm uppercase tracking-widest block">System Preview</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-900">
                        Visualizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Unified UX</span>
                    </h2>
                    <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                        A glimpse into our sleek, user-friendly interface designed to make hosting and joining meetings effortless.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="aspect-video bg-slate-50 border border-slate-100 rounded-[2rem] shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden group p-2">
                             <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/10 transition-colors duration-500"></div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ZoomGallery;
