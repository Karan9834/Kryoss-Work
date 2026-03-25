import React from "react";
import g1 from "@/assets/travelagency-img/travelagencygallery1.jpg";
import g2 from "@/assets/travelagency-img/travelagencygallery2.jpg";
import g3 from "@/assets/travelagency-img/travelagencygallery3.jpg";
import g4 from "@/assets/travelagency-img/travelagencygallery4.jpg";
import g5 from "@/assets/travelagency-img/travelagencygallery5.jpg";
import g6 from "@/assets/travelagency-img/travelagencygallery6.jpg";

const galleryImages = [g1, g2, g3, g4, g5, g6];

const AgencyManagementGallery = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-amber-600 font-bold text-sm uppercase tracking-widest block">Product Gallery</span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E293B]">
                        A Glimpse into the <span className="text-amber-600">User Interface</span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                        Take a look inside the powerful admin panel designed for tour operators and travel agents.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((img, index) => (
                        <div key={index} className="aspect-video bg-gray-50 border border-gray-100 rounded-[30px] flex items-center justify-center group overflow-hidden relative shadow-lg hover:scale-[1.02] transition-all duration-500">
                             <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                             <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AgencyManagementGallery;
