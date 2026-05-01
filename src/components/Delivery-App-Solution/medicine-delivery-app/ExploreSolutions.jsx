import React from 'react';
import { motion } from 'framer-motion';

const ExploreSolutions = () => {
    const solutions = [
        { name: "Gojek Clone App", href: "/gojek-clone/overview", icon: "🌐" },
        { name: "Uber Clone App", href: "/products/transport/uber-clone", icon: "🚗" },
        { name: "Food Delivery App", href: "/products/delivery/food-delivery", icon: "🍕" },
        { name: "Medicine Delivery App", href: "/products/delivery/medicine-delivery", icon: "💊" },
        { name: "Handyman Service App", href: "/products/home-service/handyman", icon: "🛠️" },
        { name: "Carpool Ride App", href: "/products/transport/blablacar-clone", icon: "👥" },
        { name: "Indrive Clone App", href: "/products/transport/indrive-clone", icon: "🚖" },
        { name: "Delivery Anything App", href: "/products/delivery/multi-delivery", icon: "📦" }
    ];

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight"
                    >
                        Discover Our <span className="text-teal-600">Virtual Distribution Architectures</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-600"
                    >
                        Review our high-performance on-demand ecosystems and identify the optimal framework for your specific operational requirements.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {solutions.map((sol, index) => (
                        <motion.a
                            key={index}
                            href={sol.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white border border-gray-100 p-5 rounded-2xl text-center hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer"
                        >
                            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                                {sol.icon}
                            </div>
                            <h3 className="text-sm font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                                {sol.name}
                            </h3>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploreSolutions;
