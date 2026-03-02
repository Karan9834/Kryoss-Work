import React from "react";
import {
    LayoutDashboard,
    Bike,
    Bell,
    FileText,
    Users,
    CalendarCheck,
} from "lucide-react";
import adminpanel from "../../assets/transport-bikeride-img/adminpanel.webp";
/* ---------- ICON WRAPPER ---------- */
const IconWrap = ({ children }) => (
    <div className="w-12 h-12 rounded-full bg-[#e8fff7] flex items-center justify-center text-[#0b9f7a] shrink-0">
        {children}
    </div>
);

/* ---------- DATA ---------- */
const adminFeatures = [
    {
        title: "Dashboard",
        desc: "Dashboard represents the total site statics, ride statics, revenue details in graphical form. Admin can view recent rides with status.",
        icon: <LayoutDashboard size={22} strokeWidth={1.8} />,
    },
    {
        title: "Today’s Ride",
        desc: "Admin can view today’s ride requests with user, driver, pickup & destination, fare, time and status.",
        icon: <Bike size={22} strokeWidth={1.8} />,
    },
    {
        title: "Mass Notification",
        desc: "Admin can send mass notifications to all users, drivers or both using push notifications.",
        icon: <Bell size={22} strokeWidth={1.8} />,
    },
    {
        title: "Statements",
        desc: "Admin can check daily, weekly, monthly and yearly ride statements including revenue and ride status.",
        icon: <FileText size={22} strokeWidth={1.8} />,
    },
    {
        title: "Online Providers",
        desc: "Admin can see currently online drivers with name, email, city, profile status and ride history.",
        icon: <Users size={22} strokeWidth={1.8} />,
    },
    {
        title: "Manual Booking",
        desc: "Admin can manually book rides with user contact, location, date & time and assign nearest driver.",
        icon: <CalendarCheck size={22} strokeWidth={1.8} />,
    },
];

const BikeAdminPanel = () => {
    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* HEADING */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 text-sm mb-5">
                        <span className="w-2 h-2 rounded-full bg-[#0b9f7a]" />
                        Admin Panel Features
                    </div>

                    <h2 className="text-[36px] lg:text-[42px] font-bold text-gray-900 mb-4">
                        Powerful <span className="text-[#0b9f7a]">Web Admin Panel</span> for Easy Management
                    </h2>

                    <p className="text-gray-600 max-w-3xl mx-auto leading-[28px]">
                        Manage rides, drivers, payments, and analytics effortlessly with our
                        feature-rich web admin panel designed for seamless business operations.
                    </p>
                </div>

                {/* LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                    {/* LEFT IMAGE (GREEN ONLY HERE) */}
                    <div className="relative">
                        <div className="bg-[#0a5c45] rounded-[28px] p-8">
                            <img
                                src={adminpanel}
                                alt="Admin Panel Preview"
                                className="w-full h-[520px] object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT SCROLLABLE CARDS */}
                    <div>
                        <div
                            className="h-[520px] overflow-y-auto space-y-8 pr-4"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            {/* Hide scrollbar for webkit */}
                            <style>
                                {`
                  .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}
                            </style>

                            {adminFeatures.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                                >
                                    <div className="flex items-start gap-5">
                                        <IconWrap>{item.icon}</IconWrap>

                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-[26px]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BikeAdminPanel;