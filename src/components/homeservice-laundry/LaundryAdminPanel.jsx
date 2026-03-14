import React from "react";
import {
    LayoutDashboard,
    Wallet,
    Bell,
    Percent,
    ClipboardList,
    Users,
} from "lucide-react";
import Laundryadminpanel from "../../assets/homeservice-laundry-img/Laundryadminpanel.webp";

const LaundryAdminPanel = () => {
    const features = [
        {
            icon: LayoutDashboard,
            title: "Dashboard",
            desc: "Admins can monitor service requests, users, providers, commissions and revenue.",
        },
        {
            icon: Wallet,
            title: "Settle Payment",
            desc: "Track payments and manage completed and pending transactions.",
        },
        {
            icon: Bell,
            title: "Push Notifications",
            desc: "Send customised notifications to customers and providers.",
        },
        {
            icon: Percent,
            title: "Commission Management",
            desc: "Manage provider commissions and payouts.",
        },
        {
            icon: ClipboardList,
            title: "Order Monitoring",
            desc: "Track orders, update status and generate reports.",
        },
        {
            icon: Users,
            title: "Manage Customers & Providers",
            desc: "Manage users, approve providers and handle queries.",
        },
    ];

    return (
        <section className="py-24 bg-white">

            {/* HEADING */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-10">
                <span className="border border-teal-200 rounded-full px-4 py-1.5 text-xs font-medium inline-flex items-center gap-2 mb-6 bg-teal-50 text-teal-800 uppercase tracking-wider">
                    <span className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></span>
                    Web Admin Panel
                </span>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    <span className="text-teal-700">Admin Panel Features</span> <br className="hidden md:block" /> for Seamless Management
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    Our admin panel provides powerful tools to manage laundry services,
                    payments, customers, and providers efficiently.
                </p>
            </div>

            {/* GREEN IMAGE SECTION */}
            <div className="bg-[#0d6a63] py-16 md:py-24 mb-12 overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 flex justify-center">
                    <img
                        src={Laundryadminpanel}
                        alt="Admin Panel"
                        className="w-full max-w-[800px] h-auto rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                    />
                </div>
            </div>

            {/* CARDS */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-[#f8faf9] rounded-[40px] p-8 md:p-12 border border-teal-50 shadow-sm">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white border border-teal-100 rounded-3xl p-8 flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-6 hover:shadow-lg hover:border-teal-300 transition-all duration-300 group"
                                >
                                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-teal-50 group-hover:bg-teal-700 rounded-2xl transition-colors duration-300">
                                        <Icon size={28} className="text-teal-700 group-hover:text-white" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default LaundryAdminPanel;