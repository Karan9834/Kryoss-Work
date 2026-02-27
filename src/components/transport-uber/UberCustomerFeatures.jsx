import React from 'react';
import { Truck, Navigation, MessageCircle, DollarSign, Clock, ShieldCheck, Heart, User } from 'lucide-react';

const customerFeatures = [
    {
        title: "Multiple Vehicle Types",
        desc: "Choose from a wide range of vehicles to suit your budget and needs.",
        icon: Truck
    },
    {
        title: "Multi-Stop Trips",
        desc: "Add multiple destinations in a single trip for maximum convenience.",
        icon: Navigation
    },
    {
        title: "In-App Chat & Call",
        desc: "Communicate directly with your driver without sharing personal numbers.",
        icon: MessageCircle
    },
    {
        title: "Fare Estimation",
        desc: "Get an accurate fare estimate before you book your ride.",
        icon: DollarSign
    },
    {
        title: "Schedule Rides",
        desc: "Book your rides in advance for stress-free travel planning.",
        icon: Clock
    },
    {
        title: "Panic Button (SOS)",
        desc: "Safety first with a dedicated emergency button for instant help.",
        icon: ShieldCheck
    },
    {
        title: "Favorite Locations",
        desc: "Save your home, office, and frequent spots for quick booking.",
        icon: Heart
    },
    {
        title: "Live Tracking",
        desc: "Share your trip status and track your ride in real-time.",
        icon: User
    }
];

const UberCustomerFeatures = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-10 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-5/12 space-y-8">
                        <div className="inline-block bg-orange-100 text-primary font-bold px-4 py-1 rounded-full text-sm">
                            Customer App
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Loaded with Features for <span className="text-primary">Seamless Experience</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our customer-centric design ensures that every ride is comfortable, safe, and easy to book. We've thought of every detail to keep your users coming back.
                        </p>

                        <div className="aspect-[4/5] bg-gray-100 rounded-[3rem] border-2 border-dashed border-gray-200 flex items-center justify-center p-12">
                            <div className="text-center">
                                <span className="text-6xl mb-4 block">📱</span>
                                <p className="text-gray-400 font-bold">Customer App Mockup</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-7/12 grid sm:grid-cols-2 gap-8">
                        {customerFeatures.map((feature, idx) => (
                            <div key={idx} className="p-8 border border-gray-100 rounded-3xl hover:border-primary/20 hover:shadow-lg transition-all group bg-white shadow-sm">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                                <p className="text-gray-500 leading-relaxed text-[15px]">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UberCustomerFeatures;
