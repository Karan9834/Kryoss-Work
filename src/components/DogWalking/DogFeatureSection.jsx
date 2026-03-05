import React, { useState } from "react";
import {
  Users,
  PawPrint,
  Calendar,
  Star,
  Map,
  FileText,
  User,
  Clock,
  Bell,
  History,
  Wallet,
  Clipboard
} from "lucide-react";

const FeatureSection = () => {

  const [activeTab, setActiveTab] = useState("customer");

  const customerFeatures = [
    {
      icon: Users,
      title: "Find Nearby Professionals",
      desc: "Browse verified service professionals and check ratings easily."
    },
    {
      icon: PawPrint,
      title: "Manage Pet",
      desc: "Add pets by entering details such as name, weight, and breed."
    },
    {
      icon: Calendar,
      title: "Check Provider’s Availability",
      desc: "Select a caretaker and view availability before booking."
    },
    {
      icon: Star,
      title: "Reviews",
      desc: "Submit ratings and reviews based on your walking experience."
    },
    {
      icon: Map,
      title: "Real-time Tracking",
      desc: "Track the walker’s activity and stay connected with your pet."
    },
    {
      icon: FileText,
      title: "Walk History and Reports",
      desc: "Access past bookings and detailed service reports."
    }
  ];

  const providerFeatures = [
    {
      icon: User,
      title: "Manage Profile",
      desc: "Add services, experience, and all profile information."
    },
    {
      icon: Clock,
      title: "Availability Management",
      desc: "Set working hours and control service availability."
    },
    {
      icon: Clipboard,
      title: "Manage Bookings",
      desc: "View and manage upcoming pet service bookings."
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      desc: "Receive booking updates and important notifications."
    },
    {
      icon: History,
      title: "Service History",
      desc: "Check previous service requests and activities."
    },
    {
      icon: Wallet,
      title: "Manage Earnings",
      desc: "Track payments and view monthly or weekly earnings."
    }
  ];

  const features = activeTab === "customer" ? customerFeatures : providerFeatures;

  return (

    <section
      className="relative py-28 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg')"
      }}
    >

      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-green-600 rounded-full px-4 py-1 text-sm text-green-700 mb-6 bg-white">
          <span className="w-2 h-2 bg-green-600 rounded-full"></span>
          Distinct Features
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">
          Explore Unique Features of{" "}
          <span className="text-green-700">Dog Walking</span> App Development
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 mb-10">
          Showcase the unique features of our dog walking app designed for both
          customers and service providers.
        </p>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-14">
          <div className="flex bg-white shadow-md rounded-full p-1">

            <button
              onClick={() => setActiveTab("customer")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === "customer"
                  ? "bg-green-700 text-white"
                  : "text-green-700 hover:bg-green-50"
              }`}
            >
              Customer App
            </button>

            <button
              onClick={() => setActiveTab("provider")}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === "provider"
                  ? "bg-green-700 text-white"
                  : "text-green-700 hover:bg-green-50"
              }`}
            >
              Provider App
            </button>

          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 group"
              >

                {/* Icon */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-700 text-white p-4 rounded-full shadow-md group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold mt-6 mb-3 text-green-700">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>

  );
};

export default FeatureSection;