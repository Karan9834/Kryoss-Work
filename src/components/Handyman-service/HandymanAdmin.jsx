import React from "react";
import {
  LayoutDashboard,
  Users,
  Tag,
  CreditCard,
  Bell,
  Star,
} from "lucide-react";

import adminImage from "../../assets/Handyman/handymanservice.webp";

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    desc: "With a powerful admin panel, the admin can see the site statics like total services request, revenue, new user, and all handyman services.",
  },
  {
    icon: Users,
    title: "Manage User/Provider",
    desc: "Admin can view all the detailed information of the user and professionals, including their status, and efficiently manage their profile.",
  },
  {
    icon: Tag,
    title: "Promo Code",
    desc: "Admin can add or modify promo code details including name, offer type like amount, offer value, usage limit, and expiration date.",
  },
  {
    icon: CreditCard,
    title: "Payment Setting",
    desc: "Admin can manage the payment settings of the site like service-wise commission, tax percentage, and payment methods to pay for services.",
  },
  {
    icon: Bell,
    title: "Notification",
    desc: "Admin can send the mass notification message to all users and handyman professionals.",
  },
  {
    icon: Star,
    title: "Rating & Review",
    desc: "Admin can see the review & ratings of services with all user’s details.",
  },
];

const SuperAdminSection = () => {
  return (
    <section className="py-16 md:py-28 px-4 md:px-16 bg-white">

      <div className="max-w-7xl mx-auto text-center">

        {/* Pill */}
        <div className="flex justify-center mb-4 md:mb-6">
          <span className="px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-600 text-xs md:text-sm">
            Super Web Admin Panel
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">
          <span className="text-yellow-600">
            Functionality Included in Super Admin
          </span>{" "}
          for Our Handyman Clone
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-16 text-sm md:text-base">
          Features we include during handyman app development to help you
          maintain complete control over your business and revenue.
        </p>

        {/* Yellow Mockup Container */}
        <div className="relative mb-16 md:mb-28">
          <div
            className="
              mx-auto
              bg-yellow-500
              rounded-3xl md:rounded-[60px]
              w-full max-w-5xl
              h-[200px] sm:h-[260px] md:h-[360px]
              flex items-center justify-center
              relative
            "
          >
            <img
              src={adminImage}
              alt="Admin Panel"
              className="
                w-[90%]
                sm:w-[80%]
                md:w-[850px]
                object-contain
                md:absolute
                md:left-1/2
                md:-translate-x-1/2
                md:-bottom-20
              "
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-[#f3f3f3]
                  border border-yellow-400
                  rounded-2xl md:rounded-[22px]
                  p-5 md:p-6
                  transition duration-300
                  hover:shadow-lg
                "
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-yellow-500 
                                flex items-center justify-center text-white 
                                mb-4">
                  <Icon size={20} />
                </div>

                <h4 className="text-base md:text-lg font-semibold mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default SuperAdminSection;