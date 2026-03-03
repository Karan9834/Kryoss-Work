import React from "react";

const WhyChooseUsSection = () => {
  const points = [
    "With our Carpooling Clone Script, you can have your carpooling app live in just 5 working days—enabling you to start offering ride-sharing services immediately without the typical delays of custom development.",

    "The Carpooling App Script is highly adaptable, allowing you to tailor it to your business needs, from services to branding, giving you a unique, branded experience for both passengers and drivers.",

    "The app features a clean, intuitive interface, providing a smooth and seamless experience for users. Whether it’s passengers booking a ride or drivers accepting it, the process is simple and easy to follow.",

    "Our Carpooling Clone Script is designed for scalability, allowing you to grow your business efficiently. With robust security features, your platform remains reliable and safe for users, ensuring data protection.",

    "Keep both passengers and drivers updated with instant notifications about ride status, cancellations, and other important updates. This helps boost customer satisfaction and trust in your service.",

    "Manage everything effortlessly with the built-in admin dashboard. Track rides, payments, driver and passenger data, and more—all from a single, easy-to-use platform.",
  ];

  return (
    <section className="py-14 bg-[#00101A] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Top Center Content ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 text-sm mb-6">
            <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></span>
            Why Choose Us
          </div>

          <h2 className="text-[38px] font-semibold">
            Why Choose Our Carpooling Clone Script?
          </h2>

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
              <div className="mt-2 w-3 h-3 bg-cyan-400 rounded-full flex-shrink-0"></div>
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

export default WhyChooseUsSection;















