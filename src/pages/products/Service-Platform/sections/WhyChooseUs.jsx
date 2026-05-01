import React from "react";
import {
  ShieldCheck,
  Star,
  Zap,
  Users,
  Clock,
  BadgeCheck,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    desc: "Every service provider is carefully verified for quality and trust.",
  },
  {
    icon: Star,
    title: "Top Rated Services",
    desc: "Choose from highly rated professionals based on real reviews.",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    desc: "Book services in seconds with a fast and seamless process.",
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    desc: "Join a growing community of satisfied users and service providers.",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    desc: "Professionals arrive on time, ensuring reliable service delivery.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    desc: "We ensure high-quality service standards across all categories.",
  },
];

const ServiceWhyChoose = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Our Platform
          </h2>
          <p className="mt-4 text-gray-600">
            We make service booking simple, reliable, and efficient for everyone.
          </p>
        </div>

        {/* ===== CARDS ===== */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >

                {/* Gradient Border Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-orange-500/10 blur-xl"></div>

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center transition group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="w-0 h-0.5 bg-orange-500 mt-4 group-hover:w-full transition-all duration-300"></div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ServiceWhyChoose;