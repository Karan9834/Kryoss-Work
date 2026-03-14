import React from "react";
import {
    LayoutDashboard,
    CreditCard,
    ClipboardList,
    Users,
    UserCheck,
    MapPin
} from "lucide-react";
import Towtruckadminpanel from "../../assets/homeservice-towtruck-img/Towadminpanel.webp";
const features = [
    {
        icon: LayoutDashboard,
        title: "Dashboard",
        desc: "The admin can view all user, provider, ongoing services in the application, new request & more with a powerful dashboard."
    },
    {
        icon: CreditCard,
        title: "Payment",
        desc: "Admin can manage the payment setting of towing services, commission, tax percentages, and payment type."
    },
    {
        icon: ClipboardList,
        title: "Manage Services",
        desc: "An admin can manage the services ongoing, completed, pending, and cancel with all information."
    },
    {
        icon: Users,
        title: "Manage User",
        desc: "Admin can manage registered users details and provide better roadside assistance."
    },
    {
        icon: UserCheck,
        title: "Manage Provider",
        desc: "Admin verifies towing provider registration requests before they offer services."
    },
    {
        icon: MapPin,
        title: "Real-Time Tracking",
        desc: "Admin can track provider movement during towing service with real-time monitoring."
    }
];

const AdminPanelSection = () => {
    return (
        <section className="pt-12 bg-white">

            {/* heading */}
            <div className="max-w-7xl mx-auto px-6 text-center">

                <span className="border rounded-full px-4 py-1 text-sm inline-flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Web Admin Panel
                </span>

                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                    <span className="text-blue-600">Super Admin Features</span> for Roadside Assistance App
                </h2>

                <p className="text-gray-600 max-w-3xl mx-auto mb-16">
                    Manage users, track services, and monitor performance with the powerful super admin panel of our Uber for tow trucks app.
                </p>

            </div>


            {/* IMAGE */}
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <img
                    src={Towtruckadminpanel}
                    alt="Admin Panel"
                    className="w-full rounded-3xl border-4 border-blue-200 shadow-xl"
                />
            </div>


            {/* BLUE SECTION */}
            <div className="bg-gradient-to-r from-[#0f5c8f] to-[#083a5c] -mt-40 pt-56 pb-20">

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 shadow-md"
                            >
                                {/* icon */}
                                <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-blue-300 mb-4 transition-all duration-300 group-hover:bg-blue-600">
                                    <Icon
                                        size={26}
                                        className="text-blue-600 transition group-hover:text-white"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600">
                                    {feature.desc}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}
export default AdminPanelSection;