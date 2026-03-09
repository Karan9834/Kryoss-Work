import React from "react";
import {
    LayoutDashboard,
    BarChart3,
    MapPin,
    LineChart,
    FileText,
    DollarSign,
    Users,
    MessageSquare,
    Bell
} from "lucide-react";
import Multiadminimg from "../../../assets/delivery-multiservice-img/Multiadmin.webp";
const adminFeatures = [
    {
        icon: LayoutDashboard,
        title: "Dashboard Overview",
        desc: "Regarding delivery operations, an easy-to-use dashboard lets you see the entire process at a glance. It also allows you to monitor performance and main metrics."
    },
    {
        icon: BarChart3,
        title: "Performance Monitoring",
        desc: "Track delivery network metrics in real time to understand performance. Eliminate constraints, find the shortest paths, and operate smoothly in every situation."
    },
    {
        icon: MapPin,
        title: "Order Tracking",
        desc: "Monitor order status from order placement to delivery with top-notch tracking features. Supervise the status of orders and resolve any problems."
    },
    {
        icon: LineChart,
        title: "Analytics and Reporting",
        desc: "Get detailed analysis and reports on your business to identify how it performs and make decisions based on data."
    },
    {
        icon: FileText,
        title: "Content Management",
        desc: "Update the information on your products, special offers, and the store to create interest and variety for your audience."
    },
    {
        icon: DollarSign,
        title: "Revenue Management",
        desc: "Monitor sources of income, handle cash resources, and generate financial reports for steady growth and development."
    },
    {
        icon: Users,
        title: "User Management",
        desc: "Intuitively organize users, including customers, drivers, or store owners, without effort. Establish efficient communication processes and provide security for all the parties involved."
    },
    {
        icon: MessageSquare,
        title: "Feedback Management",
        desc: "Conduct surveys with customers and drivers and get feedback from store chain owners. Employ the insights to change the level of service delivery and thus increase customer satisfaction."
    },
    {
        icon: Bell,
        title: "Notifications and Alerts",
        desc: "Besides a unique user interface, it provides customizable notifications and alerts about important events and updates to keep all the stakeholders connected with the business."
    }
];

const AdminPanelSection = () => {
    return (

        <section className="bg-white pt-24">

            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* badge */}

                <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm text-gray-600 mb-6">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Admin Panel Features
                </div>

                {/* heading */}

                <h2 className="text-4xl font-semibold mb-4">
                    Admin Panel Features for{" "}
                    <span className="text-cyan-500">
                        Seamless Delivery Business Management
                    </span>
                </h2>

                <p className="text-gray-500 max-w-3xl mx-auto mb-12">
                    Our admin panel provides a complete set of features so you can efficiently
                    manage orders, track deliveries, and monitor performance.
                </p>

                {/* image */}

                <div className="relative z-10">
                    <img
                        src={Multiadminimg}
                        className="mx-auto w-[900px] max-w-full"
                    />
                </div>

            </div>

            {/* gradient section */}

            <div className="bg-gradient-to-r from-sky-400 to-green-400 -mt-32 pt-40 pb-24">

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {adminFeatures.map((feature, index) => {

                        const Icon = feature.icon;

                        return (

                            <div
                                key={index}
                                className="bg-white rounded-3xl p-8 shadow-sm"
                            >

                                <div className="flex items-start gap-4">

                                    <div className="p-3 border rounded-full">
                                        <Icon className="text-gray-700" size={22} />
                                    </div>

                                    <div>

                                        <h4 className="text-lg font-semibold mb-2 text-cyan-600">
                                            {feature.title}
                                        </h4>

                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {feature.desc}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );
};

export default AdminPanelSection;