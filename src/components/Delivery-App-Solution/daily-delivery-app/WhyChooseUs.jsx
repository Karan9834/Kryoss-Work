import React from "react";

const WhyChooseUs = () => {
  const points = [
  "Get your on-demand milk delivery app live in just 5 working days, not weeks, so you can start delivering fresh milk to customers without delay.",
  "Customize the app to suit your specific business needs, services, and branding, providing a unique user experience.", 
  "Enjoy a clean, easy-to-navigate design that ensures a smooth experience for both customers and drivers.",
  "Built to grow with your business, the app offers top-tier security to safeguard user data and ensure seamless service.",
  "Keep your customers informed with instant notifications about order status, deliveries, and any important updates.",
  "Gain full control with a user-friendly admin dashboard, enabling you to manage orders, payments, customers, and more from one central platform."
  
  
  ];

  return (
    <section className="py-14  text-white bg-[#001015]"
    // style={{background:"linear-gradient(0deg, #1F030F 0%, #2C0617 100%)"}}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Top Center Content ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 text-sm mb-6">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#003C52] to-[#01B49E] rounded-full"></span>
          
            Why Choose Us
          </div>

          <h2 className="text-[38px] font-semibold">    Why Choose Our
           <span className="bg-gradient-to-r from-[#003C52] to-[#01B49E] text-transparent bg-clip-text"> Milk Delivery App?</span> 
          </h2>
          <p>Our milk delivery app is the ideal solution for launching your milk delivery business quickly and with minimal effort. Here's why it's the best choice:</p>

        </div>

        {/* ===== Center Image ===== */}
        <div className="flex justify-center mb-20">
          <img
            src="https://whitelabelfox.com/assets/images/why-choose-us/why-choose-our-gojek-clone-script-image.webp"
            alt="Why Choose Our Script"
            className="w-full max-w-4xl rounded-2xl shadow-xl"
          />
        </div>

        {/* ===== 6 Points Grid ===== */}
        <div className="grid md:grid-cols-2 gap-12">

          {points.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-2 w-3 h-3 bg-gradient-to-r from-[#003C52] to-[#01B49E] rounded-full flex-shrink-0"></div>
              <p className="text-white/80 leading-relaxed text-sm">
                {item}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;















