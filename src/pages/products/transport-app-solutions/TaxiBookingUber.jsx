import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';

const TaxiBookingUber = () => {
    return (
        <div className="product-page">
            <Helmet>
                <title>Taxi Booking App Like Uber | KryossWork</title>
                <meta name="description" content="Launch your own car booking platform with our Uber clone script." />
            </Helmet>

            {/* Hero Section */}
            <section className="bg-orange-50 py-20">
                <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-12">
                    <div className="space-y-6">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                            Taxi Booking App Like <span className="text-primary">Uber</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            Launch your own high-performance ride-hailing business with our ready-made, scalable Uber clone solution.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-orange-600 transition-all">Get a Free Quote</button>
                            <button className="border border-primary text-primary px-8 py-3 rounded-md font-bold hover:bg-orange-50 transition-all">Download Brochure</button>
                        </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <img src="/placeholder.svg" alt="Uber Clone" className="w-full h-auto" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Core Features</h2>
                    <p className="text-gray-500">Everything you need to run a successful taxi business.</p>
                </div>
                <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Real-time Tracking", desc: "Live location of drivers for users" },
                        { title: "Multiple Payments", desc: "Cash, Card, Wallet and more" },
                        { title: "In-App Chat", desc: "Seamless communication" },
                        { title: "Admin Panel", desc: "Powerful backend to manage everything" },
                        { title: "Driver App", desc: "Dedicated app for driver partners" },
                        { title: "Promo Codes", desc: "Discounts and referral systems" }
                    ].map((item, idx) => (
                        <div key={idx} className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all space-y-3">
                            <CheckCircle className="text-primary" />
                            <h3 className="font-bold text-xl">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary py-16">
                <div className="container mx-auto px-4 text-center space-y-6 text-white">
                    <h2 className="text-3xl lg:text-4xl font-bold">Ready To Launch Your App?</h2>
                    <p className="text-white/80 max-w-2xl mx-auto">Join the 250+ businesses that have scaled with KryossWork software solutions.</p>
                    <button className="bg-white text-primary px-10 py-4 rounded-md font-bold hover:bg-gray-100 transition-all inline-flex items-center gap-2">
                        Talk To Our Experts <ArrowRight />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default TaxiBookingUber;
