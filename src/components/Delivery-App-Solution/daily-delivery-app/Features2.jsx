import React from "react"; 

const Features2 = () => {
  const features = [
    {
      title: "Easy Login",
      desc: "Let drivers seamlessly log into the app with an appealing interface, ensuring quick access to emerging tools and functionalities.",
      icon: "/provider/icon1.png",
    },
    {
      title: "My Deliveries",
      desc: "Stay organized & informed with dedicated section to view upcoming deliveries, manage schedules & track delivery statuses in real-time. .",
      icon: "/provider/icon2.png",
    },
    {
      title: "Check Route",
      desc: "Stay on the right path with route optimization features that offer smart and clear directions and minimize delivery time.",
      icon: "/provider/icon3.png",
    },
    {
      title: "Manage Profiles",
      desc: "Let drivers manage and update profiles effortlessly, ensuring accurate information and enhancing communication with admin.",
      icon: "/provider/icon4.png",
    },
       {
      title: "In-App Call",
      desc: "Communicate directly with customers or support team within the app, allowing quick resolutions and improving customer service.",
      icon: "/provider/icon3.png",
    },
    {
      title: "Navigation Assistance",
      desc: "Utilize integrated navigation tools to navigate to delivery locations with ease, reducing the chances of delays or missed deliveries.",
      icon: "/provider/icon4.png",
    },
   
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== Center Content ===== */}
        <div className="text-center max-w-6xl mx-auto mb-16">

          
         <div className="inline-flex items-center gap-2 border border-white/40 px-4 py-1.5 rounded-full text-sm mb-6">
          <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#003C52] to-[#01B49E] rounded-full"></span>
          
Features
        </div>

          <h3 className="text-lg sm:text-4xl font-bold text-gray-700 mb-6">Key Features of 
           <span className="bg-gradient-to-r from-[#003C52] to-[#01B49E] text-transparent bg-clip-text">  the Driver App </span> 
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
      Our Driver app offers an effortless experience with essential features for smooth deliveries:
          </p>

        </div>

        {/* ===== Layout ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-driver-app-ui-features.webp"
              alt="Provider Admin Panel"
              className="w-full max-w-lg lg:max-w-xl rounded-2xl shadow-xl"
              // style={{backgroundColor: "#F4D9FF"}}
            />
          </div>

          {/* RIGHT SCROLLABLE CARDS */}
          <div className="max-h-[600px] overflow-y-auto pr-3 space-y-6 scrollbar-thin">

            {features.map((item, index) => (
              <div
                key={index}
                className="group border rounded-2xl p-6 transition duration-300
                           border-[#003C52]
                           hover:bg-gradient-to-r 
                           hover:from-[#003C52] 
                           hover:to-[#01B49E] 
                           hover:text-black"
              >

                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-3">

                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />

                  <h4 className="font-semibold text-lg bg-gradient-to-r from-[#003C52] to-[#01B49E] text-transparent bg-clip-text hover:text-white">
                    {item.title}
                  </h4>

                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 group-hover:text-white/90 transition">
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

export default Features2;