import React from "react";

const CustomerBenefitsSection = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Top Center Content ===== */}
        <div className="text-center max-w-6xl mx-auto mb-20">

          <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-sm text-gray-700 mb-6">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
            Customer-Centric Benefits
          </div>

          <h2 className="text-[38px] font-semibold mb-6">
            How Our Carpooling App Script Benefits Your Customers
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our Carpooling App Script is designed to provide an exceptional
            experience for your customers. By implementing this ready-to-use,
            customizable solution, you can offer a seamless, reliable, and
            convenient ride-sharing service. Here’s how it benefits your customers.
          </p>

        </div>

        {/* ===== Bottom Left Content + Right Image ===== */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Paragraph Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-md">

            <p>
              <strong>Convenient Ride Booking:</strong> Customers can easily
              book rides in just a few taps, making it simple to find the most
              convenient ride options available anytime and anywhere.
            </p>

            <p>
              <strong>Real-Time Ride Tracking:</strong> With integrated GPS and
              real-time tracking, customers can monitor their rides, ensuring
              they feel informed and confident throughout the journey.
            </p>

            <p>
              <strong>Multiple Payment Options:</strong> Offering various payment
              methods including card, wallet, and cash gives customers the
              flexibility to choose what suits them best.
            </p>

            <p>
              <strong>Ride Sharing with Friends and Family:</strong> Customers
              can share ride details with contacts, making group coordination
              simple and reducing travel costs.
            </p>

            <p>
              <strong>Ratings & Reviews:</strong> Customers can rate drivers and
              leave feedback, creating a trustworthy and quality-driven ecosystem.
            </p>

            <p>
              <strong>24/7 Availability:</strong> Your customers can book rides
              anytime, ensuring transportation is always accessible when needed.
            </p>

            <p>
              <strong>Cost-Effective Rides:</strong> Carpooling helps customers
              save money by sharing rides with others traveling in the same direction.
            </p>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://whitelabelfox.com/assets/images/carpooling-clone-script/Carpool-on-demand-app-benifits-image.webp"
              alt="Customer Benefits"
              className="w-full max-w-lg"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CustomerBenefitsSection;





