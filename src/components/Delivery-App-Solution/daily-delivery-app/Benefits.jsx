import React from "react";

const Benefits = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Top Center Content ===== */}
        <div className="text-center max-w-6xl mx-auto mb-20">

          <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-sm text-gray-700 mb-6">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#003C52] to-[#01B49E] rounded-full"></span>
            Benefits
          </div>

          <h2 className="text-[38px] font-semibold mb-6">
           Revolutionize Your Milk Delivery <span className="bg-gradient-to-r from-[#003C52] to-[#01B49E] text-transparent bg-clip-text">Business with Our On-Demand Solution</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Revolutionize your milk delivery operations with our app, designed to simplify order management and real-time delivery tracking, ensuring seamless customer connections.
          </p>

        </div>

        {/* ===== Bottom Left Content + Right Image ===== */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Paragraph Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-md">

            <p>
           Our on-demand milk delivery app is equipped with modern features that enable entrepreneurs to manage their operations more efficiently. With an intuitive interface, the app ensures seamless order handling, delivery dispatching, and real-time customer updates. This user-friendly platform empowers milk delivery businesses to deliver exceptional service while reducing operational complexities, making the process more efficient and scalable.
            </p>

            <p>
             Leveraging advanced technology, our milk delivery solution helps businesses tap into new markets, increase their customer base, and scale rapidly. With supporting modules and a comprehensive digital experience, you can revamp how you manage deliveries, boosting customer satisfaction and business growth effortlessly. The app provides everything you need to run a smooth and modern milk delivery service, ensuring you stay ahead in a competitive market.
            </p>

           

          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-benefits.webp"
              alt="Customer Benefits"
              className="w-full max-w-lg"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Benefits;





