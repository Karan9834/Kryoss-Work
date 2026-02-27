import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Gavel, DollarSign, Shield, Clock } from 'lucide-react';

const TaxiBiddingApp = () => {
    return (
        <div className="product-page">
            <Helmet>
                <title>Taxi Bidding App Like inDrive | On-demand Bidding Solution | KryossWork</title>
                <meta name="description" content="Build your own on-demand taxi bidding platform like inDrive. Let passengers and drivers negotiate fares in real-time." />
            </Helmet>

            {/* Hero Section */}
            <section className="bg-orange-50 py-20">
                <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-12">
                    <div className="space-y-6">
                        <div className="inline-block bg-orange-100 text-primary px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                            Negotiation-Based Booking
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                            Taxi Bidding App Like <span className="text-primary">inDrive</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            Empower your users with a fair-price taxi booking platform. Launch your on-demand bidding ecosystem where drivers and riders decide the fare together.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">Get a Free Quote</button>
                            <button className="border border-primary text-primary px-8 py-3 rounded-md font-bold hover:bg-orange-50 transition-all">Live Demo</button>
                        </div>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
                        <img src="/placeholder.svg" alt="Taxi Bidding App" className="w-full h-auto rounded-2xl" />
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How Bidding Works</h2>
                        <p className="text-gray-500 text-lg">A transparent process that ensures satisfaction for both riders and drivers.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center space-y-4 p-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto text-primary">
                                <DollarSign size={32} />
                            </div>
                            <h3 className="font-bold text-xl">1. Set Your Price</h3>
                            <p className="text-gray-500">Passenger offers a fair price for their trip based on estimated distance.</p>
                        </div>
                        <div className="text-center space-y-4 p-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto text-primary">
                                <Gavel size={32} />
                            </div>
                            <h3 className="font-bold text-xl">2. Driver Counter-Offers</h3>
                            <p className="text-gray-500">Drivers can accept the offer or send a counter-bid based on their availability.</p>
                        </div>
                        <div className="text-center space-y-4 p-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto text-primary">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="font-bold text-xl">3. Real-time Selection</h3>
                            <p className="text-gray-500">Rider chooses the best offer based on price, rating, and arrival time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Advanced Features</h2>
                        <p className="text-gray-500">Powerful modules designed for a seamless bidding experience.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Smart Bidding Engine", icon: <Gavel className="text-primary" />, desc: "Proprietary algorithm for fair price range suggestions." },
                            { title: "Real-time Tracking", icon: <Shield className="text-primary" />, desc: "GPS integration for live location and route sharing." },
                            { title: "Driver Verification", icon: <Shield className="text-primary" />, desc: "Multi-step background checks and document verification." },
                            { title: "In-App Wallet", icon: <DollarSign className="text-primary" />, desc: "Secure digital payments and instant driver payouts." },
                            { title: "Rating System", icon: <CheckCircle className="text-primary" />, desc: "Transparent review system for both riders and drivers." },
                            { title: "Dynamic Fare Limits", icon: <Clock className="text-primary" />, desc: "Admin-defined price boundaries to prevent abuse." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all space-y-4">
                                <div className="p-3 bg-orange-50 w-max rounded-lg">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-xl">{item.title}</h3>
                                <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20" />
                <div className="container mx-auto px-4 text-center space-y-8 text-white relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold">Launch Your Bidding Platform Today</h2>
                    <p className="text-white/80 max-w-3xl mx-auto text-lg">
                        Ready to disrupt the taxi industry with a bidding-based solution? Our team is standing by to help you build the next big thing.
                    </p>
                    <div className="pt-4">
                        <button className="bg-white text-primary px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center gap-3 shadow-2xl">
                            Request Demo <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TaxiBiddingApp;
