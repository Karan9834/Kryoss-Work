import React from 'react';
import { BarChart3, ShieldCheck, Settings, Users, PieChart, BellRing } from 'lucide-react';

const AdminDashboard = () => {
    const adminTools = [
        { title: "Revenue Analysis", icon: <BarChart3 className="text-orange-600" /> },
        { title: "Fleet Management", icon: <ShieldCheck className="text-blue-600" /> },
        { title: "Global Settings", icon: <Settings className="text-gray-600" /> },
        { title: "User Management", icon: <Users className="text-green-600" /> },
        { title: "Report Generation", icon: <PieChart className="text-purple-600" /> },
        { title: "Instant Alerts", icon: <BellRing className="text-red-600" /> }
    ];

    return (
        <section className="py-16 px-4 sm:px-10 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div className="space-y-6">
                        <div className="inline-block bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full font-bold text-xs tracking-wide">
                            ADMIN CONTROL CENTER
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-primary">
                            The Most Comprehensive <br />
                            <span className="text-[#FF5722]">Admin Dashboard</span>
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed">
                            Take full control of your business operations with our data-rich admin panel.
                            Manage everything from commissions and pricing to restaurant payouts and
                            delivery fleet monitoring in real-time.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3 pt-3">
                            {adminTools.map((tool, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100 cursor-default">
                                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center">
                                        {React.cloneElement(tool.icon, { size: 18 })}
                                    </div>
                                    <span className="font-bold text-gray-800 text-xs whitespace-nowrap">{tool.title}</span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-[#FF5722] transition-all shadow-xl hover:-translate-y-1">
                            Explore Admin Panel Demo
                        </button>
                    </div>

                    {/* Right: Dashboard Image */}
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FF5722]/5 rounded-full blur-[100px] -z-10"></div>
                        <div className="rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-[8px] border-white">
                            <img
                                src="https://whitelabelfox.com/assets/images/online-food-ordering-app/food-delivery-script-admin-panel-features.webp"
                                alt="Admin Dashboard Mockup"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminDashboard;
