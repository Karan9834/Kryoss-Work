import React from "react";
import {
  Truck,
  HeartPulse,
  Store,
  ShieldCheck,
  Landmark,
  Video,
  Sprout,
  Package,
  Wrench,
  Share2,
  Car
} from "lucide-react";

const industries = [
  {
    icon: <Truck size={28} />,
    title: "Hyperlocal Delivery",
    color: "text-amber-600",
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Healthcare",
    color: "text-red-500",
  },
  {
    icon: <Store size={28} />,
    title: "Marketplace",
    color: "text-green-600",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Insurance",
    color: "text-blue-600",
  },
  {
    icon: <Landmark size={28} />,
    title: "Banking & Financial Service",
    color: "text-amber-600",
  },
  {
    icon: <Video size={28} />,
    title: "Video Streaming",
    color: "text-red-500",
  },
  {
    icon: <Sprout size={28} />,
    title: "Agriculture",
    color: "text-green-600",
  },
  {
    icon: <Package size={28} />,
    title: "Logistics",
    color: "text-blue-600",
  },
  {
    icon: <Wrench size={28} />,
    title: "Handyman",
    color: "text-amber-600",
  },
  {
    icon: <Share2 size={28} />,
    title: "Social Media",
    color: "text-green-600",
  },
  {
    icon: <Car size={28} />,
    title: "Transportation",
    color: "text-red-500",
  },
];

const IndustrySection = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}

        <div className="text-center mb-6">
          <span className="px-4 py-1 text-sm border rounded-full text-slate-600">
            Industry We Serve
          </span>
        </div>

        {/* Heading */}

        <h2 className="text-center text-3xl lg:text-4xl font-bold text-slate-800 max-w-4xl mx-auto">
          Tailored White Label MVP App Development Solutions for{" "}
          <span className="text-indigo-500">Every Industry</span>
        </h2>

        <p className="text-center text-slate-600 max-w-3xl mx-auto mt-6">
          We provide high-performance industry-specific frameworks designed to
          meet the operational needs of multiple sectors while ensuring fast
          launch and seamless user experience.
        </p>


        {/* Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {industries.map((item, index) => (

            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition h-[230px]"
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                  {item.icon}
                </div>

                <h3 className={`text-lg font-semibold ${item.color}`}>
                  {item.title}
                </h3>

              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Our MVP experts develop scalable platforms tailored for this
                industry, enabling fast launch and seamless operations.
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default IndustrySection;