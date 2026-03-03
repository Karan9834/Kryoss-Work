import React from "react";

const AdminPanelSection = () => {
  const features = [
    {
      icon: "/admin/icon1.png",
      title: "Powerful Dashboard",
      desc: "Our software offers a user-friendly dashboard with powerful management tools, displaying highlights in graphical form.",
    },
    {
      icon: "/admin/icon2.png",
      title: "Manage Users & Driver",
      desc: "Admin can see & manage both users & drivers details with name, email, contact details, city, and ride details.",
    },
    {
      icon: "/admin/icon3.png",
      title: "Manage Car Models",
      desc: "Admin can add and edit car models through admin panels and remove any car models.",
    },
    {
      icon: "/admin/icon4.png",
      title: "Date Validations",
      desc: "Admin can set date validation to manage booking window and other date settings.",
    },
    {
      icon: "/admin/icon5.png",
      title: "Earning Report",
      desc: "Admin can manage earning reports daily, weekly, monthly and yearly.",
    },
    {
      icon: "/admin/icon6.png",
      title: "Mass Notification",
      desc: "Admin can send push notifications to all users and drivers or specific conditions.",
    },
    {
      icon: "/admin/icon7.png",
      title: "Manage Ride",
      desc: "Admin can complete or cancel rides in case of unacceptable circumstances.",
    },
    {
      icon: "/admin/icon8.png",
      title: "Payment Settings",
      desc: "Admin can set payment settings like commission, tax percentages and more.",
    },
  ];

  return (
    <section
      className="py-14 mt-20 text-white"
      style={{
        background: "linear-gradient(180deg, #00458E 0%, #000328 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-sm text-gray-700 mb-6">
          <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
          Web Admin Panel
        </div>

        {/* Heading */}
        <h2 className="text-[40px] font-semibold mb-6">
          Carpooling Clone Script Admin Features
        </h2>

        <p className="text-lg text-white/80 max-w-5xl mx-auto mb-16">
          Our carpooling clone script offers powerful admin features, including
          easy management of rides, payments, and user accounts.
        </p>

        {/* Image */}
        <div className="mb-20">
          <img
            src="https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-admin-panel-features-image.webp"
            alt="Admin Panel"
            className="w-full rounded-2xl"
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">

          {features.map((item, index) => (
            <div
              key={index}
              className="group flex gap-5 bg-white/10 p-6 rounded-2xl border border-white/20 transition duration-300 hover:bg-white"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-14 h-14"
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-black transition">
                  {item.title}
                </h3>

                <p className="text-white/80 text-sm leading-relaxed group-hover:text-gray-700 transition">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AdminPanelSection;
















