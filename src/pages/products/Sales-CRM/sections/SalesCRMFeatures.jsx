import React from "react";
import { Users, BarChart3, Workflow, Bell, Shield, Database } from "lucide-react";

const SalesCRMFeatures = () => {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Powerful CRM Features to Grow Your Business
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Everything you need to manage leads, automate workflows, and close
                        deals faster — all in one platform.
                    </p>
                </div>

                {/* Main Layout */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* BIG FEATURE */}
                    <div className="lg:col-span-1 bg-indigo-600 text-white rounded-3xl p-8 flex flex-col justify-between">
                        <div>
                            <Workflow size={36} />
                            <h3 className="text-xl font-semibold mt-4">
                                Smart Sales Pipeline
                            </h3>
                            <p className="mt-3 text-indigo-100">
                                Track leads across different stages and visualize your entire
                                sales journey in one place.
                            </p>
                        </div>
                    </div>

                    {/* OTHER FEATURES */}
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">

                        <div className="border border-indigo-100 p-6 rounded-2xl hover:shadow-md transition">
                            <Users className="text-indigo-600" />
                            <h4 className="font-semibold mt-3">Lead Management</h4>
                            <p className="text-sm text-gray-600 mt-2">
                                Capture, assign, and manage leads efficiently.
                            </p>
                        </div>

                        <div className="border border-indigo-100 p-6 rounded-2xl hover:shadow-md transition">
                            <BarChart3 className="text-indigo-600" />
                            <h4 className="font-semibold mt-3">Analytics Dashboard</h4>
                            <p className="text-sm text-gray-600 mt-2">
                                Real-time reports to track performance and revenue.
                            </p>
                        </div>

                        <div className="border border-indigo-100 p-6 rounded-2xl hover:shadow-md transition">
                            <Bell className="text-indigo-600" />
                            <h4 className="font-semibold mt-3">Automated Reminders</h4>
                            <p className="text-sm text-gray-600 mt-2">
                                Never miss follow-ups with smart notifications.
                            </p>
                        </div>

                        <div className="border border-indigo-100 p-6 rounded-2xl hover:shadow-md transition">
                            <Shield className="text-indigo-600" />
                            <h4 className="font-semibold mt-3">Secure Data</h4>
                            <p className="text-sm text-gray-600 mt-2">
                                Enterprise-grade security for your customer data.
                            </p>
                        </div>

                        <div className="border border-indigo-100 p-6 rounded-2xl hover:shadow-md transition">
                            <Database className="text-indigo-600" />
                            <h4 className="font-semibold mt-3">Centralized Database</h4>
                            <p className="text-sm text-gray-600 mt-2">
                                Store all customer interactions in one place.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default SalesCRMFeatures;