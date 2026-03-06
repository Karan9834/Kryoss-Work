import React from "react";

const WebAdminPanel = () => {
  const features = [
    {
      icon: "/admin/icon1.png",
      title: "Manage Orders",
      desc: "Easily track, update, and oversee all incoming milk delivery orders in real time. Ensure smooth order processing and timely fulfillment with a centralized order management system.",
    },
    {
      icon: "/admin/icon2.png",
      title: "Manage Driver",
      desc: "Assign deliveries, track driver performance, and monitor real-time location to optimize logistics. Ensure efficient operations with seamless driver management tools.",
    },
    {
      icon: "/admin/icon3.png",
      title: "Dashboard statistics",
      desc: "Gain valuable business insights with real-time analytics on orders, revenue, active users, and delivery performance. Make data-driven decisions to optimize your milk delivery business.",
    },
    {
      icon: "/admin/icon4.png",
      title: "Manage Customers",
      desc: "Keep customer details organized, handle inquiries, and monitor user activity effortlessly. Provide better service by accessing customer preferences, order history, and subscriptions.",
    },
    {
      icon: "/admin/icon5.png",
      title: "Manage Subscriptions",
      desc: "Oversee customer subscriptions, modify plans, and automate recurring orders for hassle-free milk deliveries. Offer flexible plans to enhance customer retention and satisfaction.",
    },
    {
      icon: "/admin/icon6.png",
      title: "Geo-fencing",
      desc: "Set virtual boundaries to control delivery zones and manage multiple warehouses efficiently. Optimize routes, reduce delays, and streamline operations.",
    }
  ];

  return (
    <section
      className="py-14 mt-20 text-black"
      style={{
        // background: "linear-gradient(180deg, #00458E 0%, #000328 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-sm text-gray-700 mb-6">
          <span className="w-2.5 h-2.5 bg-[#003C52] rounded-full"></span>
          Web Admin Panel
        </div>

        {/* Heading */}
        <h2 className="text-[40px] font-semibold mb-6">
         Streamline Operations with an <span className="bg-gradient-to-r from-[#003C52] to-[#01B49E] text-transparent bg-clip-text">Advanced Admin Panel</span>
        </h2>

        <p className="text-lg text-black max-w-5xl mx-auto mb-16">
          Efficiently manage your entire milk delivery business with our powerful Super Admin panel. From tracking orders and managing users to setting pricing and analyzing performance, gain full control over your operations with ease.
        </p>

        {/* Image */}
        <div className="mb-20">
          <img
            src="https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-admin-panel.webp"
            alt="Admin Panel"
            className="w-full rounded-2xl"
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left p-4"
        style={{
          background: "linear-gradient(360deg, #001B25 0%, #003C52 100%)",
          // background: "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(92, 92, 92, 0.2) 100%)",
          borderRadius: "150px 150px 0px 0px;"
        }}
        >

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
                <h3 className="text-lg font-semibold  text-white mb-2 group-hover:text-black transition">
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

export default WebAdminPanel;
















