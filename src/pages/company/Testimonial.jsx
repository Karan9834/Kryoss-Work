import { Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';
import TestimonialSection from "../../components/Client-Testimonials/TestimonialSection";
import GoogleReviews from '../../components/Client-Testimonials/GoogleReviews';
import Testimonial from '../../components/Common/Testimonial';

const TestimonialPage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section - Left Content, Right Pattern */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950 text-white">
                {/* Background effects */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Left Content */}
                        <div className="flex-1 text-left">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-purple-400 uppercase border border-purple-400/30 rounded-full bg-purple-400/10"
                            >
                                Success Stories
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight"
                            >
                                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Clients Say</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="max-w-xl text-lg text-slate-400 leading-relaxed"
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
                                {/* Main pattern container */}
                                <div className="relative grid grid-cols-4 gap-3 p-4">
                                    {/* Pattern Row 1 */}
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/20 backdrop-blur-sm"></div>
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/20 backdrop-blur-sm"></div>
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/20 backdrop-blur-sm"></div>
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/20 backdrop-blur-sm"></div>
                                    
                                    {/* Pattern Row 2 */}
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 border border-indigo-400/20 backdrop-blur-sm"></div>
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/20 backdrop-blur-sm"></div>
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/20 backdrop-blur-sm"></div>
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 border border-indigo-400/20 backdrop-blur-sm"></div>
                                    
                                    {/* Pattern Row 3 */}
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/20 backdrop-blur-sm"></div>
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 border border-indigo-400/20 backdrop-blur-sm"></div>
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/20 backdrop-blur-sm"></div>
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/20 backdrop-blur-sm"></div>
                                    
                                    {/* Pattern Row 4 */}
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/20 backdrop-blur-sm"></div>
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/20 backdrop-blur-sm"></div>
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 border border-indigo-400/20 backdrop-blur-sm"></div>
                                    <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/20 backdrop-blur-sm"></div>
                                </div>

                                {/* Central decorative element */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-purple-600/40 to-blue-600/40 backdrop-blur-md rounded-2xl rotate-45 border border-purple-400/30 shadow-xl">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45">
                                        <svg className="w-8 h-8 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Corner decorations */}
                                <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-purple-400/30 rounded-tl-2xl"></div>
                                <div className="absolute -top-3 -right-3 w-16 h-16 border-r-2 border-t-2 border-blue-400/30 rounded-tr-2xl"></div>
                                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-2 border-b-2 border-blue-400/30 rounded-bl-2xl"></div>
                                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-purple-400/30 rounded-br-2xl"></div>

                                {/* Floating small dots */}
                                <div className="absolute -top-6 right-12 w-2 h-2 bg-purple-400 rounded-full"></div>
                                <div className="absolute -bottom-6 left-12 w-2 h-2 bg-blue-400 rounded-full"></div>
                                <div className="absolute top-1/3 -right-6 w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
                                <div className="absolute bottom-1/3 -left-6 w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Success Stories */}
            <TestimonialSection />

            {/* CTA Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 p-12 md:p-20 text-center text-white shadow-2xl">
                        <div className="relative z-10">
                            <motion.h2
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="text-4xl md:text-5xl font-bold mb-6"
                            >
                                Ready to start your project?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-purple-100/80 mb-10 max-w-2xl mx-auto"
                            >
                                Join the hundreds of happy clients who have transformed their business with our expertise. Let's create something extraordinary together.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap justify-center gap-4"
                            >
                                <Link to="/company/contact" className="group relative px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-white/20 overflow-hidden">
                                    <span className="relative z-10">Get In Touch</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </Link>
                                <Link to="/products" className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                                    View Our Works
                                </Link>
                            </motion.div>
                        </div>
                        {/* Abstract background blobs */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestimonialPage;