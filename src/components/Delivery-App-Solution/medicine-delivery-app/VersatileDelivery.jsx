import React from 'react';
import { motion } from 'framer-motion';

const VersatileDelivery = () => {
    const solutions = [
        { name: "Grocery Delivery", icon: "🛒", color: "bg-green-50 border-green-200", href: "/products/delivery/grocery-delivery" },
        { name: "Medicine Delivery", icon: "💊", color: "bg-teal-50 border-teal-200", href: "/products/delivery/medicine-delivery" },
        { name: "Flower Delivery", icon: "💐", color: "bg-pink-50 border-pink-200", href: "#" },
        { name: "Courier Delivery", icon: "📦", color: "bg-amber-50 border-amber-200", href: "#" },
        { name: "Meat Delivery", icon: "🥩", color: "bg-red-50 border-red-200", href: "#" },
        { name: "Fuel Delivery", icon: "⛽", color: "bg-yellow-50 border-yellow-200", href: "#" },
        { name: "Stationary Delivery", icon: "📚", color: "bg-blue-50 border-blue-200", href: "#" },
        { name: "Alcohol Delivery", icon: "🍷", color: "bg-purple-50 border-purple-200", href: "/products/delivery/liquor-delivery" }
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
                        Comprehensive Distribution Frameworks{' '}
                        <span className="text-teal-600">For Your Enterprise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-600"
                    >
                        Should you require additional on-demand logistics architectures for groceries, floral supplies, pharmaceuticals, or more, we tailor our core distribution engineering to suit your startup's specific trajectory.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {solutions.map((sol, index) => (
                        <motion.a
                            key={index}
                            href={sol.href}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`${sol.color} border p-5 rounded-2xl text-center hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer`}
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

export default VersatileDelivery;
