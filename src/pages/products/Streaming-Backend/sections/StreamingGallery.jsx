import React from "react";
import { Layout } from "lucide-react";

// Import Gallery Images
import g1 from "@/assets/streaming-img/streaminggallery1.jpg";
import g2 from "@/assets/streaming-img/streaminggallery2.jpg";
import g3 from "@/assets/streaming-img/streaminggallery3.jpg";
import g4 from "@/assets/streaming-img/streaminggallery4.jpg";
import g5 from "@/assets/streaming-img/streaminggallery5.jpg";
import g6 from "@/assets/streaming-img/streaminggallery6.jpg";

const galleryImages = [g1, g2, g3, g4, g5, g6];

const StreamingGallery = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-red-500 font-bold text-sm uppercase tracking-widest block">Product Gallery</span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
                        A Glimpse into the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 font-bold">User Interface</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="aspect-video bg-gray-50 border border-gray-100 rounded-[30px] flex items-center justify-center group overflow-hidden relative shadow-lg">
                            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StreamingGallery;
