import React from "react";

const WebAdminPanel = () => {
  const features = [
    {
      icon: "",
      title: "Dashboard Overview",
      desc: "Gain a complete comprehension of the delivery business’s performance, which includes the acquisition of statistical data relating to orders.",
    },
     {
      icon: "",
      title: "Menu Management",
      desc: "Quickly implement the system on your existing menus, add new dishes and price updates, and organize categories to keep menus fresh and attractive.",
    },
     {
      icon: "",
      title: "Promotions & Discounts",
      desc: "Develop and run promotional campaigns, discount offers, and loyalty programs to attract new customers and retain existing ones, resulting in more sales.",
    },
     {
      icon: "",
      title: "Analytics & Reports",
      desc: "Get insights on sales performance and operations. Managers are provided with the critical information required for making informed business decisions.",
    },
     {
      icon: "",
      title: "Order Management",
      desc: "Track the orders coming in real-time, assign orders to drivers or delivery persons and monitor delivery status to have a seamless order fulfilment process.",
    },
     {
      icon: "",
      title: "Multi-Location Support",
      desc: "Make it simple for management to oversee several locations from a single admin panel to take charge of operations and develop a cohesive brand experience.",
    },
    
  ];

  return (
    <section
      className="py-14 mt-20 text-white"
      style={{
        // background: "linear-gradient(180deg, #00458E 0%, #000328 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-sm text-gray-700 mb-6">
          <span className="w-2.5 h-2.5 bg-[#4A011D] rounded-full"></span>
          Web Admin Panel
        </div>

        {/* Heading */}
        <h2 className="text-[40px] font-semibold mb-6 text-black">Web  {" "}
       <span className=" bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text">Admin Panel Features</span> {" "}for Complete Control
        </h2>

        <p className="text-lg text-black/80 max-w-5xl mx-auto mb-16">
         Our Alcohol Delivery App Clone Script comes with a powerful Web Admin Panel that gives you complete control over your business operations. From managing orders to monitoring performance, this easy-to-use panel ensures smooth administration of your liquor delivery service.
        </p>

        {/* Image */}
        <div className="mb-20">
          <img
            src="https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-admin-panel-features-image.webp"
            alt="Admin Panel"
            className="w-full rounded-2xl"
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left bg-gradient-to-r from-[#921E4B] to-[#4A011D] m-4 p-10"
       >

          {features.map((item, index) => (
            <div
              key={index}
              className="group flex gap-5 bg-gradient-to-r from-[#984b69] to-[#843c58] p-6 rounded-2xl border border-white/20 transition duration-300 hover:bg-white"
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

                <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition">
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
















