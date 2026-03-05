import React from "react";

const WhyChooseUs = () => {
  const points = [
    "Get your On-Demand Beauty App up and running within just 5 working days, allowing you to connect clients with professional beauticians instantly.",
    "Customize the app to meet your business’s unique needs, incorporating tailored features and branding to enhance the user experience.",
    "Enjoy an intuitive design that ensures a smooth and seamless experience for both users and beauticians, making the platform easy to navigate.",
    "Built to scale, our app grows alongside your business, with robust security measures in place to protect user data and ensure app reliability.",
    "Keep your users informed with instant notifications for new bookings, service updates, and other important alerts.",
    "Take full control of your app with an easy-to-use admin panel that enables you to manage users, payments, and all other key activities from one central dashboard." ];

  return (
    <section className="py-14  text-white"
    style={{background:"linear-gradient(0deg, #1F030F 0%, #2C0617 100%)"}}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Top Center Content ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 text-sm mb-6">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
          
            Why Choose Us
          </div>

          <h2 className="text-[38px] font-semibold">
           <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text"> Why Choose Our</span> Uber for Beauty App?
          </h2>
          <p>Our Uber for Beauty App is the ultimate solution for quickly and efficiently launching your beauty service business. Here’s why our app stands out as the best choice:</p>

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
              <div className="mt-2 w-3 h-3 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full flex-shrink-0"></div>
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















