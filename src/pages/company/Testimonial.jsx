import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialPage = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            position: "CEO, TechStart Inc.",
            rating: 5,
            text: "Absolutely transformative! The team delivered beyond our expectations. Our platform efficiency increased by 40% within the first month.",
            pattern: "pattern-1",
            date: "March 2024"
        },
        {
            id: 2,
            name: "Michael Chen",
            position: "CTO, Global Solutions",
            rating: 5,
            text: "The most professional team we've worked with. They understood our requirements perfectly and delivered a solution that exceeded our expectations.",
            pattern: "pattern-2",
            date: "February 2024"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            position: "Product Manager, InnovateHub",
            rating: 4,
            text: "Great experience working with Kryoss. The team is responsive, knowledgeable, and truly cares about delivering quality.",
            pattern: "pattern-3",
            date: "January 2024"
        },
        {
            id: 4,
            name: "David Kim",
            position: "Founder, StartUp Labs",
            rating: 5,
            text: "Outstanding work! The attention to detail and commitment to excellence is remarkable. Our users love the new interface.",
            pattern: "pattern-4",
            date: "December 2023"
        },
        {
            id: 5,
            name: "Lisa Thompson",
            position: "Operations Director, Elite Services",
            rating: 4,
            text: "Very impressed with the quality of work and communication throughout the project. The team went above and beyond.",
            pattern: "pattern-5",
            date: "November 2023"
        },
        {
            id: 6,
            name: "James Wilson",
            position: "Marketing Head, BrandBoost",
            rating: 5,
            text: "A game-changer for our business! The solution provided has streamlined our workflows and saved us countless hours.",
            pattern: "pattern-1",
            date: "October 2023"
        },
        {
            id: 7,
            name: "Priya Sharma",
            position: "VP Engineering, DataFlow",
            rating: 4,
            text: "Solid work from a reliable team. They delivered on time and within budget. The post-launch support has been fantastic.",
            pattern: "pattern-2",
            date: "September 2023"
        },
        {
            id: 8,
            name: "Robert Taylor",
            position: "CEO, Taylor Enterprises",
            rating: 5,
            text: "Exceptional service from start to finish. The team's expertise in their domain is unmatched. They turned our vision into reality.",
            pattern: "pattern-3",
            date: "August 2023"
        },
        {
            id: 9,
            name: "Amanda White",
            position: "Creative Director, DesignStudio",
            rating: 5,
            text: "The best decision we made was partnering with this team. They are creative, technical, and strategic all at once.",
            pattern: "pattern-4",
            date: "July 2023"
        },
        {
            id: 10,
            name: "Brian Martinez",
            position: "COO, LogisticsPro",
            rating: 5,
            text: "Incredible attention to detail and customer service. The platform they built has transformed our daily operations completely.",
            pattern: "pattern-5",
            date: "June 2023"
        },
        {
            id: 11,
            name: "Natalie Brooks",
            position: "Founder, CreativeEdge",
            rating: 4,
            text: "Very professional team with excellent technical skills. They brought our vision to life and the results exceeded our expectations.",
            pattern: "pattern-1",
            date: "May 2023"
        },
        {
            id: 12,
            name: "Andrew Park",
            position: "Tech Lead, InnovateCorp",
            rating: 5,
            text: "The best development team we've partnered with. Their expertise in modern technologies is outstanding and they delivered ahead of schedule.",
            pattern: "pattern-2",
            date: "April 2023"
        }
    ];

    const getPatternClass = (pattern) => {
        const patterns = {
            'pattern-1': 'bg-gradient-to-br from-purple-400 via-pink-400 to-red-400',
            'pattern-2': 'bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400',
            'pattern-3': 'bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400',
            'pattern-4': 'bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400',
            'pattern-5': 'bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400',
        };
        return patterns[pattern] || patterns['pattern-1'];
    };

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Star 
                    key={i} 
                    className={`w-4 h-4 ${i <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 fill-gray-200'}`} 
                />
            );
        }
        return stars;
    };

    // Duplicate testimonials for seamless marquee effect
    const marqueeTestimonials = [...testimonials, ...testimonials];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950 text-white">
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="flex-1 text-left">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block px-4 py-1.5 mb-6 text-[12px] font-medium tracking-[0.05em] text-purple-400 uppercase border border-purple-400/30 rounded-full bg-purple-400/10"
                            >
                                Success Stories
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] mb-6"
                            >
                                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Clients Say</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="max-w-xl text-[16px] md:text-[18px] font-normal leading-[1.6] text-slate-400"
                            >
                                We take pride in delivering excellence. Explore how businesses across the globe
                                have grown and succeeded with our cutting-edge technology solutions.
                            </motion.p>
                        </div>

                        {/* Right Side - Decorative Pattern */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex-1 flex justify-center lg:justify-end"
                        >
                            <div className="relative w-full max-w-md">
                                <div className="relative grid grid-cols-4 gap-3 p-4">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/20 backdrop-blur-sm"></div>
                                    ))}
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-purple-600/40 to-blue-600/40 backdrop-blur-md rounded-2xl rotate-45 border border-purple-400/30 shadow-xl">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                        <Quote className="w-8 h-8 text-purple-300" />
                                    </div>
                                </div>
                                <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-purple-400/30 rounded-tl-2xl"></div>
                                <div className="absolute -top-3 -right-3 w-16 h-16 border-r-2 border-t-2 border-blue-400/30 rounded-tr-2xl"></div>
                                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-2 border-b-2 border-blue-400/30 rounded-bl-2xl"></div>
                                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-purple-400/30 rounded-br-2xl"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Marquee Testimonials Section - Row 1 (Right to Left) */}
            <section className="py-16 bg-white overflow-hidden">
                <div className="container mx-auto px-6 mb-12 text-center">
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900 mb-4">
                        What Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Clients Say</span>
                    </h2>
                    <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600 max-w-2xl mx-auto">
                        Real stories from real clients who have transformed their businesses with our solutions
                    </p>
                </div>

                {/* Marquee Row 1 - Right to Left */}
                <div className="relative overflow-hidden py-4">
                    <div className="animate-marquee-right-to-left flex gap-6 w-max">
                        {marqueeTestimonials.map((testimonial, index) => (
                            <div
                                key={`marquee1-${testimonial.id}-${index}`}
                                className="w-[380px] flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                            >
                                <div className="flex gap-1 mb-3">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <p className="text-gray-600 text-[14px] font-normal leading-[1.6] mb-4 line-clamp-3">
                                    "{testimonial.text}"
                                </p>
                                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                                    <div className={`w-10 h-10 rounded-full ${getPatternClass(testimonial.pattern)} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                                        {getInitials(testimonial.name)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-[14px]">{testimonial.name}</h4>
                                        <p className="text-gray-500 text-[11px] font-normal">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Marquee Row 2 - Left to Right (Opposite Direction) */}
                <div className="relative overflow-hidden py-4 mt-4">
                    <div className="animate-marquee-left-to-right flex gap-6 w-max">
                        {[...marqueeTestimonials].reverse().map((testimonial, index) => (
                            <div
                                key={`marquee2-${testimonial.id}-${index}`}
                                className="w-[380px] flex-shrink-0 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100"
                            >
                                <div className="flex gap-1 mb-3">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <p className="text-gray-600 text-[14px] font-normal leading-[1.6] mb-4 line-clamp-3">
                                    "{testimonial.text}"
                                </p>
                                <div className="flex items-center gap-3 pt-3 border-t border-purple-100">
                                    <div className={`w-10 h-10 rounded-full ${getPatternClass(testimonial.pattern)} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                                        {getInitials(testimonial.name)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-[14px]">{testimonial.name}</h4>
                                        <p className="text-gray-500 text-[11px] font-normal">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 p-12 md:p-20 text-center text-white shadow-2xl">
                        <div className="relative z-10">
                            <motion.h2
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-6"
                            >
                                Ready to start your project?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-purple-100/80 mb-10 max-w-2xl mx-auto"
                            >
                                Join the hundreds of happy clients who have transformed their business with our expertise. Let's create something extraordinary together.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap justify-center gap-4"
                            >
                                <Link to="/company/contact" className="group relative px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-white/20 overflow-hidden text-[14px] md:text-[15px] tracking-[0.01em]">
                                    <span className="relative z-10">Get In Touch</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </Link>
                                <Link to="/products" className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-[14px] md:text-[15px] tracking-[0.01em]">
                                    View Our Works
                                </Link>
                            </motion.div>
                        </div>
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]"></div>
                    </div>
                </div>
            </section>

            {/* Custom CSS for Marquee Animations */}
            <style>{`
                @keyframes marquee-right-to-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes marquee-left-to-right {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-marquee-right-to-left {
                    animation: marquee-right-to-left 30s linear infinite;
                }

                .animate-marquee-left-to-right {
                    animation: marquee-left-to-right 30s linear infinite;
                }

                .animate-marquee-right-to-left:hover,
                .animate-marquee-left-to-right:hover {
                    animation-play-state: paused;
                }

                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default TestimonialPage;