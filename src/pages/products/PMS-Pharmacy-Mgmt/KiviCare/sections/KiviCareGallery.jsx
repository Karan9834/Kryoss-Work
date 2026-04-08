import React from "react";
import gallery1 from "@/assets/kivicarepms-img/kivicarepmsgallery1.webp";
import gallery2 from "@/assets/kivicarepms-img/kivicarepmsgallery2.webp";
import gallery3 from "@/assets/kivicarepms-img/kivicarepmsgallery3.webp";
import gallery4 from "@/assets/kivicarepms-img/kivicarepmsgallery4.png";
import gallery5 from "@/assets/kivicarepms-img/kivicarepmsgallery5.png";
import gallery6 from "@/assets/kivicarepms-img/kivicarepmsgallery6.png";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const KiviCareGallery = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4">
                    <span className="text-sky-600 font-bold text-sm uppercase tracking-widest block">Operational Hub</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                        Hospital Sync: The Clinical{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #0284c7, #10b981)" }}>
                            Control Center.
                        </span>
                    </h2>
                    <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed font-bold tracking-tight px-4">
                        Real-time visualization of ward stocks, medication rounds, and fulfillment status across your entire medical facility.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {galleryImages.map((img, index) => (
                        <div key={index}
                            className="aspect-video bg-white border-4 sm:border-8 md:border-[12px] border-slate-50 rounded-[2rem] sm:rounded-[3rem] shadow-2xl hover:shadow-sky-500/10 hover:scale-105 transition-all duration-500 overflow-hidden group">
                            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KiviCareGallery;
