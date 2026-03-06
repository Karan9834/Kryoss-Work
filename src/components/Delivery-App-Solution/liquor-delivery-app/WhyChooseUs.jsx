import React from "react";

const WhyChooseUs = () => {
  const points = [
  "Get your Alcohol Delivery App live and running in just 5 working days, so you can start serving customers right away.",
  "Tailor the app to your specific business needs, services, and branding, creating a unique experience for your customers.", 
  "Enjoy a simple, intuitive design that ensures a seamless experience for both customers and delivery drivers.",
  "Built to grow with your business, with robust features and security to protect user data and ensure reliable performance.",
  "Keep customers updated with real-time notifications about their orders, deliveries, and any important updates.",
  "Whether you’re a small eatery looking to go digital or a large hotel chain seeking seamless delivery solutions, our script adapts to your unique needs.."
  
  
  ];

  return (
    <section className="py-14  text-white"
    style={{background:"linear-gradient(0deg, #1F030F 0%, #2C0617 100%)"}}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Top Center Content ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 text-sm mb-6">
            <span className="w-2.5 h-2.5 bg-gradient-to-r bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text rounded-full"></span>
          
            Why Choose Us
          </div>

          <h2 className="text-[38px] font-semibold">    Why Choose 
           <span className="bg-gradient-to-r bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text text-transparent bg-clip-text">Our Alcohol Delivery App?</span> 
          </h2>
          <p>Our Alcohol Delivery App Clone Script is the perfect solution for launching your liquor delivery business with minimal hassle. Here's why it's the best choice:</p>

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
              <div className="mt-2 w-3 h-3 bg-gradient-to-r bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text rounded-full flex-shrink-0"></div>
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















