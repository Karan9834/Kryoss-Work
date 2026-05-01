import React from 'react';

const industries = [
    {
        title: "K-12 Education",
        desc: "Interactive learning tools and simplified progress tracking for young learners.",
        img: "https://placehold.co/400x400/5b21b6/white?text=K-12+LMS"
    },
    {
        title: "Higher Education",
        desc: "Scalable platform for universities with research and collaboration modules.",
        img: "https://placehold.co/400x400/4c1d95/white?text=Higher+Ed+LMS"
    },
    {
        title: "Corporate Training",
        desc: "Onboarding and skill development with performance analytics for staff.",
        img: "https://placehold.co/400x400/1e1b4b/white?text=Corporate+LMS"
    },
    {
        title: "Professional Skills",
        desc: "Niche learning paths for technical skills and vocational certifications.",
        img: "https://placehold.co/400x400/312e81/white?text=Skills+LMS"
    },
    {
        title: "Language Learning",
        desc: "Gamified environments with audio/video support for linguistic mastery.",
        img: "https://placehold.co/400x400/4338ca/white?text=Language+LMS"
    },
    {
        title: "Health & Wellness",
        desc: "Specialized training for medical professionals and wellbeing coaches.",
        img: "https://placehold.co/400x400/6366f1/white?text=Wellness+LMS"
    }
];

const LmsBusinessWeSupport = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="text-center mb-16 px-4">
                    <span className="inline-block px-4 py-1 rounded-full border border-violet-200 bg-violet-50 text-sm font-bold text-violet-700 mb-6 uppercase tracking-widest">
                        Broad Educational Coverage
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-slate-800 mb-6">
                        Sectors We <span className="text-violet-700">Empower</span>
                    </h2>
                    <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed font-medium italic">
                        Our LMS solutions are engineered to be pedagogically flexible, supporting a wide range of learning styles and organizational needs.
                    </p>
                </div>

                {/* Industry Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {industries.map((item, index) => (
                        <div key={index} className="group relative rounded-[40px] overflow-hidden shadow-sm border border-violet-50 hover:border-violet-600 transition duration-500 flex flex-col bg-white hover:shadow-2xl hover:shadow-violet-200/50">
                             <div className="h-64 w-full overflow-hidden relative">
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                             </div>
                             <div className="p-8 flex-grow">
                                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-violet-700 transition duration-500">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                             </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LmsBusinessWeSupport;
