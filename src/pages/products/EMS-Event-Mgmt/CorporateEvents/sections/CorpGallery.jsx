import React from "react";
import gallery1 from "../../../../../assets/corporateems-img/corporateemsgallery1.jpg";
import gallery2 from "../../../../../assets/corporateems-img/corporateemsgallery2.jpg";
import gallery3 from "../../../../../assets/corporateems-img/corporateemsgallery3.jpg";
import gallery4 from "../../../../../assets/corporateems-img/corporateemsgallery4.jpg";
import gallery5 from "../../../../../assets/corporateems-img/corporateemsgallery5.jpg";
import gallery6 from "../../../../../assets/corporateems-img/corporateemsgallery6.jpg";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const CorpGallery = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest block">Dashboard Preview</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-900">
                        The Organizer's{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #4f46e5, #0891b2)" }}>
                            Command Center
                        </span>
                    </h2>
                    <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
                        Real-time attendance tracking, sponsor dashboards, session heatmaps and NPS command panels — all from one screen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((img, index) => (
                        <div key={index}
                            className="aspect-video bg-white border-8 border-white rounded-[3rem] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden group">
                            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorpGallery;
