import React from "react";
import webadmin from "../../assets/PestControl/webadmin.webp";
import {
  LayoutDashboard,
  Wallet,
  Ticket,
  UserCog,
  Users,
  Star
} from "lucide-react";

const features = [
  {
    icon: <LayoutDashboard size={24} />,
    title: "Dashboard",
    desc: "Admin has a lot of duty to handle. With the powerful dashboard, the admin can view new users & provider lists, statistica, etc.",
  },
  {
    icon: <Wallet size={24} />,
    title: "Manage Payment",
    desc: "Admin can payment such as admin commission, provider commission, promo code, and payment types.",
  },
  {
    icon: <Ticket size={24} />,
    title: "Promo Code",
    desc: "Admin can add, edit or delete new promo codes with information like name, timing, and availability.",
  },
  {
    icon: <UserCog size={24} />,
    title: "Manage Provider",
    desc: "An admin can manage providers’ information. They have the option to add, edit, blogged or delete provider account.",
  },
  {
    icon: <Users size={24} />,
    title: "Manage Users",
    desc: "An admin can add, edit, or delete users’ accounts. Also, they have the option to view users’ all details.",
  },
  {
    icon: <Star size={24} />,
    title: "Review & Rating",
    desc: "An admin can view the review and rating of the provider with all user details provided in the system.",
  },
];

const WebAdminPanel = () => {
  return (
    <section className="bg-white pt-24">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* small badge */}
        <div className="inline-flex items-center gap-2 border px-4 py-1 rounded-full text-sm mb-6">
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
          Web Admin Panel
        </div>

        {/* heading */}
        <h2 className="text-4xl font-semibold mb-4">
          Web Admin Panel
          <span className="text-orange-500">
            {" "}Features for Complete Control
          </span>
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Our intuitive web admin panel gives you full control over your pest control
          business. From managing users and service providers to monitoring bookings,
          payments, and performance.
        </p>

        {/* dashboard image */}
        <div className="flex justify-center relative z-10 -mb-24 md:-mb-32 px-4">
  <img
    src={webadmin}
    alt="admin dashboard"
    className="w-full max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-4xl rounded-2xl border-4 border-yellow-300 shadow-xl"
  />
</div>
      </div>

      {/* DARK SECTION */}
      <div
        className="pt-36 pb-20"
        style={{
          background:
            "linear-gradient(90deg,#2a1700,#3a1f00,#2a1700)"
        }}
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="group border border-yellow-500/40 rounded-2xl p-7 bg-gradient-to-r from-[#3a2505] to-[#5a3a10] text-white transition duration-300 hover:bg-white hover:text-black"
              >

                {/* icon */}
                <div className="flex items-center gap-4 mb-4">

                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-500 text-white group-hover:text-yellow-500 group-hover:bg-yellow-100 transition">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                </div>

                <p className="text-sm text-gray-200 group-hover:text-gray-600">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default WebAdminPanel;