import React from 'react';
import { CheckCircle2, ShoppingBag, Store, MapPin, LayoutDashboard } from 'lucide-react';

const Ecosystem = () => {
    const modules = [
        {
            title: "Customer App",
            desc: "Intuitive food search, easy ordering, and real-time tracking for end users.",
            icon: <ShoppingBag className="text-[#FF5722]" size={24} />,
            color: "bg-orange-50"
        },
        {
            title: "Restaurant Web Panel",
            desc: "Efficient menu management, order processing, and earnings tracking for stores.",
            icon: <Store className="text-blue-600" size={24} />,
            color: "bg-blue-50"
        },
        {
            title: "Delivery Partner App",
            desc: "Instant order alerts, optimized route navigation, and payout management.",
            icon: <MapPin className="text-green-600" size={24} />,
            color: "bg-green-50"
        },
        {
            title: "Admin Dashboard",
            desc: "Centralized control for user management, commission settings, and reporting.",
            icon: <LayoutDashboard className="text-purple-600" size={24} />,
            color: "bg-purple-50"
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-10 lg:px-20 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 px-4">
                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Complete Food Ordering App <br />
                        <span className="text-[#FF5722]">Development Ecosystem</span>
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-base">
                        Our solution provides a complete ecosystem for your business, ensuring seamless interaction
                        between customers, restaurant partners, delivery drivers, and the administrator.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Illustration */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-[#FF5722]/5 rounded-full blur-3xl group-hover:bg-[#FF5722]/10 transition-all duration-500"></div>
                        <img
                            src="https://whitelabelfox.com/assets/images/online-food-ordering-app/fox-food-about-us.webp"
                            alt="Food Delivery Ecosystem"
                            className="relative w-full h-auto z-10 drop-shadow-2xl"
                        />
                    </div>

                    {/* Right: Modules */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {modules.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-[#FF5722] font-semibold text-sm cursor-pointer hover:gap-3 transition-all">
                                    Learn More <CheckCircle2 size={16} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
