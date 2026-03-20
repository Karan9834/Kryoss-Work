import React from "react";
import {
  ShoppingCart,
  CreditCard,
  Truck,
  BarChart3,
  Users,
  Package,
  Bell,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Smart Checkout",
    desc: "Optimized checkout flow to boost conversions.",
    gradient: "from-purple-500 via-pink-500 to-blue-500",
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    desc: "Multiple payment gateways with full security.",
    gradient: "from-red-500 via-pink-500 to-orange-500",
    bg: "bg-red-100",
    text: "text-red-600",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Real-time shipping and delivery tracking.",
    gradient: "from-blue-500 via-indigo-500 to-cyan-500",
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Detailed insights to grow your store smarter.",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    bg: "bg-indigo-100",
    text: "text-indigo-600",
  },
  {
    icon: Users,
    title: "Customer Management",
    desc: "Manage users and engagement easily.",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    bg: "bg-green-100",
    text: "text-green-600",
  },
  {
    icon: Package,
    title: "Inventory Control",
    desc: "Track stock and automate restocking.",
    gradient: "from-pink-500 via-rose-500 to-red-500",
    bg: "bg-pink-100",
    text: "text-pink-600",
  },
  {
    icon: Bell,
    title: "Notifications",
    desc: "Send updates, offers, and reminders.",
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
  {
    icon: Globe,
    title: "Global Selling",
    desc: "Sell worldwide with multi-currency support.",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    bg: "bg-cyan-100",
    text: "text-cyan-600",
  },
];

const Features = () => {
  return (
    <section className="w-full bg-[#fafafa] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            E-Commerce Features that
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
              Drive Growth
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition duration-500 hover:-translate-y-3 hover:shadow-xl overflow-hidden"
              >
                
                {/* 🔥 TOP ANIMATED LINE */}
                <span className={`absolute top-0 left-[-100%] w-full h-[2px] bg-gradient-to-r ${feature.gradient} group-hover:left-0 transition-all duration-700 ease-out`}></span>

                {/* 👻 WATERMARK ICON */}
                <Icon className="absolute right-4 bottom-4 w-20 h-20 text-gray-100 opacity-40 group-hover:scale-110 transition duration-500" />

                {/* 🌈 BOTTOM RIGHT GRADIENT BLOB */}
                <div className={`absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-tr ${feature.gradient} opacity-10 blur-2xl`} />

                {/* ICON */}
                <div className={`relative z-10 w-12 h-12 flex items-center justify-center rounded-xl mb-5 transition duration-300 group-hover:rotate-6 group-hover:scale-110 ${feature.bg}`}>
                  <Icon className={`${feature.text}`} size={22} />
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition">
                  {feature.title}
                </h3>

                {/* DESC */}
                <p className="relative z-10 text-sm text-gray-600 leading-relaxed">
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

export default Features;