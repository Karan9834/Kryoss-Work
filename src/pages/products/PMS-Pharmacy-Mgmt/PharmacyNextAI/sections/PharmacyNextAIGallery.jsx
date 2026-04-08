import React from "react";
import gallery1 from "@/assets/pharmacynextaipms-img/pharmacynextaipmsgallery1.png";
import gallery2 from "@/assets/pharmacynextaipms-img/pharmacynextaipmsgallery2.png";
import gallery3 from "@/assets/pharmacynextaipms-img/pharmacynextaipmsgallery3.png";
import gallery4 from "@/assets/pharmacynextaipms-img/pharmacynextaipmsgallery4.png";
import gallery5 from "@/assets/pharmacynextaipms-img/pharmacynextaipmsgallery5.png";
import gallery6 from "@/assets/pharmacynextaipms-img/pharmacynextaipmsgallery6.png";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const PharmacyNextAIGallery = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4">
                    <span className="text-teal-600 font-bold text-sm uppercase tracking-widest block">System Preview</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                        The Future of Pharmacy{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #0d9488, #4f46e5)" }}>
                            in Your Hands.
                        </span>
                    </h2>
                    <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed font-medium px-4">
                        Explore the clean, intuitive, and modern user interface designed to maximize speed and minimize cognitive load for pharmacy staff.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {galleryImages.map((img, index) => (
                        <div key={index}
                            className="aspect-video bg-white border-4 sm:border-8 border-slate-50 rounded-[2rem] sm:rounded-[3rem] shadow-2xl hover:shadow-cyan-500/10 hover:scale-105 transition-all duration-500 overflow-hidden group">
                            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700  group-hover:scale-110" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PharmacyNextAIGallery;
