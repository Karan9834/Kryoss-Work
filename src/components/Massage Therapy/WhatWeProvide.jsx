import React from "react";

const WhatWeProvide = () => {
  return (
    <section
      className="py-20 text-white"
      style={{
        background:
          "linear-gradient(100.96deg, #3F2023 0.49%, #3A182E 25.37%, #2E1236 50.25%, #2E1236 75.12%, #3F2023 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm">
            <span className="w-2.5 h-2.5 bg-pink-500 rounded-full"></span>
            What We Provide
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
          Comprehensive <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text"> Uber for Massage App Solution</span> for all Platforms
        </h2>

        {/* Description */}
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16">
         Bring your conventional massage therapy business online with our innovative, fully customizable, and robust Uber for Massage app solution for Android and iOS. Experience the expertise of our professional developers and elevate your on-demand massage booking business.
        </p>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Logos */}
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <img src="/platform/android.png" className="h-10" alt="Android" />
              <img src="/platform/ios.png" className="h-10" alt="iOS" />
              <img src="/platform/web.png" className="h-10" alt="Web" />
            </div>

            {/* Platform Title */}
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">
              Android, iOS | Web Admin Panel
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-6">
              We provide a fully integrated, customizable Uber for Massage app solution that works seamlessly across Android, iOS, and Web platforms. Whether you're looking to reach customers on their mobile devices or via desktop, our solution ensures a smooth, high-quality experience for both users and service providers. With easy navigation, real-time booking, and efficient service delivery, you can expand your massage therapy business across all digital platforms effortlessly.
            </p>

            {/* Features */}
            <ul className="space-y-3">
              {[
                "Customer Android + iOS App",
                "Provider Android + iOS App",
                "Super Admin Web Panel",
                "Provider Web Panel",
                "Static Landing Page Website",
                "Billing Account",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-pink-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://whitelabelfox.com/assets/images/uber-beauty-app/Fox-Beauty-what-we-provide-section-UI.webp"
              alt="Platform Solution"
              className="w-full max-w-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;