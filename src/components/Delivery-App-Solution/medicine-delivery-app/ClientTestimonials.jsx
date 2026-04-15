import { Link } from 'react-router-dom';

import React from 'react';
import { motion } from 'framer-motion';

const ClientTestimonials = () => {
    const testimonials = [
        {
            name: "Ibrahim Medyan",
            location: "Jordan",
            desc: "Mr. Medyan from Jordan discussed his journey after selecting our distribution platform, noting the exceptional clarity in dialogue and robust system integrity.",
            videoId: "cuU7_6vTdhc"
        },
        {
            name: "A. Borkar",
            location: "Papua New Guinea",
            desc: "Mr. Borkar from Papua New Guinea valued the expedited delivery scheduled alongside our consistent technical assistance, maintaining continuity throughout.",
            videoId: "kk3zIuMX_OA"
        },
        {
            name: "R. Sertima",
            location: "Trinidad and Tobago",
            desc: "Mr. Sertima from Trinidad and Tobago appreciated the ethical standards, openness, and strategic assistance provided for his logistics initiative.",
            videoId: "IBS0Dl7elJk"
        },
        {
            name: "E. Ramos",
            location: "Philippines",
            desc: "Ms. Ramos from the Philippines articulated her satisfaction, highlighting our capacity to implement the software exactly as conceptualized.",
            videoId: "z99Bn7GFypc"
        }
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight"
                    >
                        Client Insights Regarding{' '}
                        <span className="text-teal-600">Collaborating With Us</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all group"
                        >
                            <div className="relative aspect-video bg-gray-900">
                                <iframe
                                    src={`https://www.youtube.com/embed/${t.videoId}?si=placeholder`}
                                    title={t.name}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-base font-bold text-gray-900 font-nunito mb-1">
                                    {t.name}
                                </h3>
                                <p className="text-xs text-teal-600 font-ibm-plex font-semibold mb-2">
                                    {t.location}
                                </p>
                                <p className="text-gray-600 text-xs font-ibm-plex leading-relaxed line-clamp-3">
                                    {t.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link to="/company/testimonials"  className="inline-block px-8 py-3 rounded-full font-bold text-white text-sm hover:scale-105 transition-transform shadow-lg"
                        style={{ background: 'linear-gradient(90deg, #1A9B9E 0%, #002B2C 100%)' }}>
                        View 20 More Testimonials
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonials;
