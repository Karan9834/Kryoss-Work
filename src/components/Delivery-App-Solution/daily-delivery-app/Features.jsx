import React from "react";

const Features = () => {
  const features = [
    {
      title: "Create Subscription",
      desc: "Let customers schedule their milk delivery and select from options like daily, alternate days or weekly, tailored to their needs.",
      icon: "/provider/icon1.png",
    },
    {
      title: "Place Order",
      desc: "Allow customers to order their favourite milk products in a single click as our user-friendly interface makes ordering easy and quick.",
      icon: "/provider/icon2.png",
    },
    {
      title: "Make Payment",
      desc: "Enable customers to make payment for their orders within the app with multiple secure and swift payment options.",
      icon: "/provider/icon3.png",
    },
    {
      title: "Set Vacation Mode",
      desc: "Allow customers to set their account to vacation mode to stop deliveries by entering valid dates and times temporarily.",
      icon: "/provider/icon4.png",
    },
    {
      title: "Past Orders",
      desc: "Allow easy access to past orders for easy reference, view details and make the reordering process easy.",
      icon: "/provider/icon5.png",
    },
    {
      title: "Orders Once",
      desc: "Customers can buy the products one time also without a subscription just like a normal delivery operations.",
      icon: "/provider/icon6.png",
    },
   
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== Center Content ===== */}
        <div className="text-center max-w-6xl mx-auto mb-16">
{/* linear-gradient(270deg, #003C52 0%, #01B49E 100%) */}
          
          <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-sm text-gray-700 mb-6">
          <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#003C52] to-[#01B49E] rounded-full"></span>
    Features
        </div>

          <h3 className="text-lg sm:text-4xl font-bold text-gray-700 mb-6">Key Features of 
           <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#003C52] to-[#01B49E] text-transparent bg-clip-text"> the Customer App</span> 
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
           Our customer app offers a seamless experience with powerful features:    </p>

        </div>

        {/* ===== Layout ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

  {/* LEFT SCROLLABLE CARDS */}
  <div className="max-h-[540px] overflow-y-auto pr-3 space-y-6 scrollbar-thin">

    {features.map((item, index) => (
      <div
        key={index}
        className="group border rounded-2xl p-6 transition duration-300
                   border-[#00454B]
                   hover:font-thin 
                   hover:text-white"
      >

        {/* Icon + Title */}
        <div className="flex items-center gap-4 mb-3">

          <img
            src={item.icon}
            alt={item.title}
            className="w-12 h-12 object-contain"
          />

          <h4 className="font-semibold text-lg bg-gradient-to-r from-[#003C52] to-[#01B49E] text-transparent bg-clip-text">
            {item.title}
          </h4>

        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 group-hover:text-black/90 transition">
          {item.desc}
        </p>

      </div>
    ))}

  </div>

  {/* RIGHT IMAGE */}
  <div className="flex justify-center">
    <img
      src="https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-customer-app-ui-features.webp"
      alt="Provider Admin Panel"
      className="w-full max-w-lg lg:max-w-xl rounded-2xl shadow-xl"
      // style={{background: "radial-gradient(59.06% 82.5% at 34.55% 19.49%, #45123D 0%"}}
    />
  </div>

</div>

      </div>
    </section>
  );
};

export default Features;