import React from 'react';
import g1 from "@/assets/webinar-img/webinargallery1.jpg";
import g2 from "@/assets/webinar-img/webinargallery2.jpg";
import g3 from "@/assets/webinar-img/webinargallery3.jpg";
import g4 from "@/assets/webinar-img/webinargallery4.jpg";
import g5 from "@/assets/webinar-img/webinargallery5.jpg";
import g6 from "@/assets/webinar-img/webinargallery6.jpg";

const WebinarGallery = () => {
    const galleryImages = [g1, g2, g3, g4, g5, g6];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-cyan-600 font-bold text-sm uppercase tracking-widest block">Dashboard Preview</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-900">
                        The Organizer's <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">Command Center</span>
                    </h2>
                    <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                        Powerful analytics, deep moderation blocks, and engagement tracking all visible from a single pane of glass.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="aspect-video bg-white border-8 border-white rounded-[3rem] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden group">
                            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                            <div className="absolute inset-0 bg-sky-900/0 group-hover:bg-sky-900/10 transition-colors duration-500 mix-blend-overlay pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebinarGallery;
