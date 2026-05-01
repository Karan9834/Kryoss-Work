import React from 'react';
import g1 from '@/assets/onestcrm-img/onestcrmgallery1.png';
import g2 from '@/assets/onestcrm-img/onestcrmgallery2.png';
import g3 from '@/assets/onestcrm-img/onestcrmgallery3.png';
import g4 from '@/assets/onestcrm-img/onestcrmgallery4.png';
import g5 from '@/assets/onestcrm-img/onestcrmgallery5.png';
import g6 from '@/assets/onestcrm-img/onestcrmgallery6.png';

const OnestCRMGallery = () => {
    const images = [g1, g2, g3, g4, g5, g6];

    return (
        <section className="py-24 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-6 leading-tight font-semibold">
                        Visualizing <span className="text-emerald-600">Onest CRM</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto italic">
                        Explore the high-fidelity user interface designed for total business orchestration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((img, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-[40px] border-8 border-white shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 aspect-video">
                            <img 
                                src={img} 
                                alt={`Onest CRM Gallery ${i + 1}`} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-1000" 
                            />
                            <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OnestCRMGallery;
