import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ShieldCheck, Gamepad2, CheckCircle, Smartphone, ArrowRight, Activity } from 'lucide-react';

import Testimonial from '../../../components/Common/Testimonial';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const FantasySports = () => {
    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center items-center text-center text-white bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-blue-900/50 z-0"></div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Fantasy App <span className="text-green-500">Products</span></h1>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-200">Fantasy Sports App Development Company</h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-8">
                        At Arka Softwares, we specialize in developing Fantasy Sports Software and mobile app Solutions, which are not only audience captive but also scalable, reliable and built-in adherence to all regulations and compliances.
                    </p>
                    <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all duration-300 flex items-center mx-auto shadow-lg hover:shadow-green-500/50">
                        Explore Our Solutions <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </motion.div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovative <span className="text-green-500">Fantasy Sports Solutions</span></h2>
                            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                                With a dedicated and creative sports app development team in place, we are always ahead of competitions and offer top-notch fantasy sports solutions to all our clients.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg mb-4">
                                As a leading fantasy sports app development company, we promise to cooperate in every aspect of a product life cycle that ranges from initial designing to final product delivery.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                With our fantasy sports software solutions, certified programmers provide specific skill sets that will add new and updated functionality to your sports system, whether it's golf, football, soccer, baseball, hockey, or cricket.
                            </p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:w-1/2 grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-md border hover:border-green-500 transition-colors">
                                <Activity className="w-12 h-12 text-green-500 mb-4" />
                                <h3 className="font-bold text-xl mb-2">Scalable Architecture</h3>
                                <p className="text-sm text-gray-500">Built for millions of active fantasy players.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-md border hover:border-green-500 transition-colors">
                                <Trophy className="w-12 h-12 text-green-500 mb-4" />
                                <h3 className="font-bold text-xl mb-2">Multiple Sports</h3>
                                <p className="text-sm text-gray-500">Cricket, Football, Soccer, Basketball, and more.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-md border hover:border-green-500 transition-colors col-span-2">
                                <ShieldCheck className="w-12 h-12 text-green-500 mb-4" />
                                <h3 className="font-bold text-xl mb-2">Regulation Compliant</h3>
                                <p className="text-sm text-gray-500">Adhering to strict legal guidelines and offering optimized security with real-time GPS tracking capabilities.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Products / Cards */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">Kryoss <span className="text-green-500">Fantasy Sports Products</span></h2>
                        <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mt-4"></div>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Explore our premium selection of fantasy gaming applications and solutions.</p>
                    </div>
                    <div className="flex flex-col gap-16 lg:gap-24 lg:px-12">
                        {[
                            { 
                                title: 'Kryoss 11', 
                                subtitle: 'Fantasy League Contest Sports',
                                desc: "Provides a fantasy gaming platform for multiple sports such as football, cricket, hockey, etc. Participants assemble imaginary or virtual teams composed of proxies of real players of a professional sport. Compete based on the statistical performance of those players.",
                                img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800"
                            },
                            { 
                                title: 'Kryoss King', 
                                subtitle: 'Fantasy Sports App',
                                desc: "Kryoss Kings clone app is a replica of the fantasy sports app DraftKings that extends various modes of drafting and fantasy gaming solutions. It offers daily and weekly fantasy games with real-time sports match results and leaderboards.",
                                img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800"
                            },
                            { 
                                title: 'Vyom Fantasy App', 
                                subtitle: 'FanDuel Clone App',
                                desc: "An online fantasy sports app like FanDuel that enables you to conduct daily fantasy sports contests and also bookmarking services. Access daily fantasy sports events in NFL, NBA, MLB, IPL, NHL, WHL, EPL, etc.",
                                img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800"
                            },
                            { 
                                title: 'Kryoss 365', 
                                subtitle: 'White Label Bet 365 Clone',
                                desc: "An all-inclusive sports betting solution housing a wide range of sports. Real time GPS tracking and Geofence is available to track location and issue unique tracking URLs.",
                                img: "https://images.unsplash.com/photo-1516131206008-dbb41c4886d5?auto=format&fit=crop&q=80&w=800"
                            },
                        ].map((prod, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <motion.div 
                                    key={idx} 
                                    initial={{ opacity: 0, y: 30 }} 
                                    whileInView={{ opacity: 1, y: 0 }} 
                                    viewport={{ once: true }}
                                    className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                                >
                                    <div className="w-full lg:w-1/2 flex justify-center">
                                        <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
                                            <div className="absolute inset-0 bg-green-500/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                            <img src={prod.img} alt={prod.title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                        </div>
                                    </div>
                                    
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                                        <div className="mb-2 md:mb-4">
                                            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">{prod.title}</h3>
                                            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase tracking-wider">
                                                {prod.subtitle}
                                            </span>
                                        </div>
                                        <p className="text-slate-600 text-lg leading-relaxed mb-8">{prod.desc}</p>
                                        
                                        <div className={`flex flex-wrap gap-4 justify-center lg:justify-start`}>
                                            <button className="flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/30 transition-all duration-300">
                                                <Smartphone className="w-5 h-5 mr-2" /> Playstore
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Shared Reusable Sections */}
            <OurWork />
            <Testimonial />
            <ContactUs />
        </div>
    );
};

export default FantasySports;
