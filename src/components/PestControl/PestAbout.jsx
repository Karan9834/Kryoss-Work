import React from "react";
import pestabout from "../../assets/PestControl/pestabout.webp";

const PestAbout = () => {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 text-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            About Pest Control App Development
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold mb-16">
          Uber for Pest Control{" "}
          <span className="text-orange-500">App Development</span>
        </h2>


        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">

            <img
              src={pestabout}
              alt="pest control app"
              className="max-w-lg w-full object-contain"
            />

          </div>


          {/* RIGHT TEXT */}
          <div className="space-y-6 text-gray-600 leading-relaxed">

            <p>
              A clean and pest-free environment is essential, but pests can still
              invade homes and businesses. Effective pest control is a constant
              concern, especially when pests spread diseases and allergens.
              Managing this can be tricky, especially with children or pets around.
            </p>

            <p>
              If you’re in the pest control industry or planning to start your own
              business, now is the perfect time to offer an on-demand solution.
              Our Uber-like pest control app allows users to schedule services
              whenever and wherever needed. This on-demand model meets the
              growing demand for immediate, reliable pest control.
            </p>

            <p>
              White Label Fox provides a customizable Uber for pest control clone
              script designed to fit your specific needs. The app is ready to use
              and can be tailored to provide seamless booking, payment, and
              service provider management. We offer solutions for both Android
              and iOS platforms, ensuring a wide reach.
            </p>

            <p>
              Our solution is easy to integrate, allowing you to launch your pest
              control service business quickly. With features like user accounts,
              real-time tracking, and secure payments, the app streamlines the
              entire process for both users and service providers.
            </p>

            <p>
              Ready to take your pest control business online? Our development
              team can have your custom app live in just 5 days. Get in touch with
              us today, and let’s start building your on-demand pest control
              solution.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PestAbout;