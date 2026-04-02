import React from "react";
import gal1 from "@/assets/mentorlms-img/mentorlmsgallery1.jpg";
import gal2 from "@/assets/mentorlms-img/mentorlmsgallery2.jpg";
import gal3 from "@/assets/mentorlms-img/mentorlmsgallery3.png";
import gal4 from "@/assets/mentorlms-img/mentorlmsgallery4.png";
import gal5 from "@/assets/mentorlms-img/mentorlmsgallery5.jpg";
import gal6 from "@/assets/mentorlms-img/mentorlmsgallery6.jpg";

const MentorLMSGallery = () => {
    const galleryImages = [gal1, gal2, gal3, gal4, gal5, gal6];

    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4">
                    <span className="text-purple-600 font-bold text-sm uppercase tracking-widest block">System Preview</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                        The Future of Learning{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                            in Your Hands.
                        </span>
                    </h2>
                    <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed font-medium px-4">
                        Explore the clean, intuitive, and modern user interface designed to maximize speed and minimize cognitive load for both instructors and students.
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

export default MentorLMSGallery;
