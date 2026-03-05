import React from "react"; 

const DevelopmentProcess = () => {
  const features = [
    {
      title: "Gathering Requirements",
      desc: "The first step is understanding your beauty business needs and goals. We collaborate closely with you to gather detailed requirements, ensuring the app is tailored to meet your objectives. This phase includes discussions about features, design preferences, and functionality to align the app with your vision for a seamless beauty service experience.",
      icon: "/provider/icon1.png",
    },
    {
      title: "Collect Thira-party Accounts",
      desc: "Next, we integrate essential third-party services, including payment gateways, messaging platforms, and location tracking. Configuring these accounts ensures your app functions smoothly, with secure transactions and real-time service updates. This step is critical for delivering a reliable, efficient user experience for both customers and beauticians.",
      icon: "/provider/icon2.png",
    },
    {
      title: "Design & Development",
      desc: "Our talented team of designers and developers work together to create a visually appealing, user-friendly interface while building robust functionality. The design is optimized for usability, and the app is developed using secure, scalable code, ensuring high performance and reliability across Android, iOS, and web platforms.",
      icon: "/provider/icon3.png",
    },
    {
      title: "Test and launch",
      desc: "Before launching, your app undergoes thorough testing to ensure everything works flawlessly. We test for bugs, compatibility, and performance, making necessary adjustments. Once we’re confident the app is ready, we launch it on the Play Store and App Store, bringing your on-demand beauty service platform to life for users to enjoy.",
      icon: "/provider/icon4.png",
    },
   
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== Center Content ===== */}
        <div className="text-center max-w-6xl mx-auto mb-16">

          
         <div className="inline-flex items-center gap-2 border border-white/40 px-4 py-1.5 rounded-full text-sm mb-6">
          <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
          
Development Process
        </div>

          <h3 className="text-lg sm:text-4xl font-bold text-gray-700 mb-6">
           <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">  Our Seamless </span> Development Process
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          We follow a structured approach to deliver your on-demand beauty app, ensuring a smooth experience from start to finish:
          </p>

        </div>

        {/* ===== Layout ===== */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://whitelabelfox.com/assets/images/uber-beauty-app/Fox-Beauty-development-process-vector.webp"
              alt="Provider Admin Panel"
              className="w-full max-w-lg lg:max-w-xl rounded-2xl shadow-xl"
              style={{backgroundColor: "#F4D9FF"}}
            />
          </div>

          {/* RIGHT SCROLLABLE CARDS */}
          <div className="max-h-[600px] overflow-y-auto pr-3 space-y-6 scrollbar-thin">

            {features.map((item, index) => (
              <div
                key={index}
                className="group border rounded-2xl p-6 transition duration-300
                           border-[#C739FF]
                           hover:bg-gradient-to-r 
                           hover:from-[#FF2485] 
                           hover:to-[#C739FF] 
                           hover:text-black"
              >

                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-3">

                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />

                  <h4 className="font-semibold text-lg text-[#C739FF] hover:text-white">
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

export default DevelopmentProcess;