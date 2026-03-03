import React from "react";

const HomeCleaningChooseUs = () => {
  const points = [
    "Get your on-demand house cleaning app live in just 5 working days, enabling customers to connect instantly with professional cleaners.",
    "Customize the app to suit your business requirements, incorporating unique features and branding that enhance the user experience and make it truly yours.",
    "Designed with both homeowners and cleaners in mind, the app ensures a smooth, seamless experience for all users, making it easy for everyone to navigate.",
    "Our Uber for House Cleaning App is built to scale as your business grows. With robust security features, your users' data is always protected, ensuring the app’s reliability.",
    "Keep users informed with real-time notifications about new service requests, cleaning updates, and important alerts, ensuring communication is always clear.",
    "Effortlessly manage your entire business through an intuitive admin panel, overseeing user management, payments, bookings, and more in one central location." ];

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
           <span className="text-[#55D7FF]"> Why Choose Our Uber for</span> House Cleaning App?
          </h2>
          <p>Our Uber for House Cleaning App is the perfect solution for launching your on-demand cleaning services quickly and efficiently. Here’s why our app is the best choice for your business</p>

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

export default HomeCleaningChooseUs;















