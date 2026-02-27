import React from 'react';
import { Car, MapPin, Bike, Gavel, Users, Key } from 'lucide-react';

const services = [
    {
        title: "Taxi Ride",
        description: "Seamless daily door-to-door transportation for urban commute.",
        icon: Car,
        color: "bg-orange-100 text-orange-600"
    },
    {
        title: "Intercity Service",
        description: "Comfortable and safe rides for long-distance travel between cities.",
        icon: MapPin,
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Bike Ride",
        description: "Quick and affordable single-passenger travel through city traffic.",
        icon: Bike,
        color: "bg-green-100 text-green-600"
    },
    {
        title: "Taxi Bidding",
        description: "Allow users to bid for ride fares and choose the best offer from drivers.",
        icon: Gavel,
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "Taxi Pool",
        description: "Shared rides option to reduce travel costs and carbon footprint.",
        icon: Users,
        color: "bg-red-100 text-red-600"
    },
    {
        title: "Car Rental",
        description: "Flexible car hire options for self-drive or chauffeur-driven needs.",
        icon: Key,
        color: "bg-cyan-100 text-cyan-600"
    }
];

const UberServices = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-10 lg:px-20">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-primary">Diverse Solutions</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        One App for All Your Transportation Services
                    </h3>
                    <p className="text-lg text-gray-600">
                        Our Uber clone script is designed to handle multiple service models, ensuring your business stays ahead of the competition.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                <service.icon className="h-8 w-8" />
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UberServices;
