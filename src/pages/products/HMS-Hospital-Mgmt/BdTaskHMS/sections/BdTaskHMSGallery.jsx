import React from "react";
import gallery1 from "@/assets/bdtaskhms-img/bdtaskhmsgallery1.webp";
import gallery2 from "@/assets/bdtaskhms-img/bdtaskhmsgallery2.webp";
import gallery3 from "@/assets/bdtaskhms-img/bdtaskhmsgallery3.webp";
import gallery4 from "@/assets/bdtaskhms-img/bdtaskhmsgallery4.webp";
import gallery5 from "@/assets/bdtaskhms-img/bdtaskhmsgallery5.webp";
import gallery6 from "@/assets/bdtaskhms-img/bdtaskhmsgallery6.webp";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const BdTaskHMSGallery = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4">
                    <span className="text-purple-800 font-bold text-sm uppercase tracking-widest block">Interface Preview</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">
                        Streamline Your Independent{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #6b21a8, #d946ef)" }}>
                            Clinic Core.
                        </span>
                    </h2>
                    <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed font-medium px-4">
                        Clean layouts designed for agile practice owners, medical practitioners, and front-desk staff to manage operations seamlessly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {galleryImages.map((img, index) => (
                        <div key={index}
                            className="aspect-video bg-slate-50 border-4 sm:border-8 border-slate-50 rounded-[2rem] sm:rounded-[3rem] shadow-2xl hover:shadow-purple-900/10 hover:scale-105 transition-all duration-500 overflow-hidden group flex items-center justify-center">
                            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BdTaskHMSGallery;
