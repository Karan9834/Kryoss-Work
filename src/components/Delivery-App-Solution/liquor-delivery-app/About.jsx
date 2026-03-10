import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* BADGE */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 border border-[#55D7FF] text-black px-4 py-1.5 rounded-full text-sm">
            <span className="w-2 h-2 bg-gradient-to-r from-[#921E4B] to-[#4A011D] rounded-full"></span>
            About Alcohol Delivery
          </span>
        </div>
{/* linear-gradient(90deg, #921E4B 0%, #4A011D 102.98%); */}
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-6">
          Scale Your Liquor Delivery Business with Our{" "}
          <span className="bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text">
            Alcohol Delivery App Solution
          </span>
        </h2>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-14">

          {/* LEFT IMAGE */}
          <div>
            <img
              src="https://whitelabelfox.com/assets/images/alcohol-delivery-app-solution/Fox-Alcohol-about-us-image.webp"
              alt="Alcohol Delivery App"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              As customer demand for alcohol delivery grows, a traditional setup
              won't suffice. Our Alcohol Delivery App Clone Script empowers liquor
              businesses to automate and scale operations quickly and efficiently.
              This ready-to-launch solution connects all stakeholders in the alcohol
              delivery ecosystem, ensuring smooth and seamless operations.
            </p>

            <p className="text-gray-700 font-semibold mb-4">
              With our feature-packed app, you can:
            </p>

            {/* FEATURE LIST */}
            <ul className="space-y-4 text-gray-600">

              <li className="flex gap-3">
                <span className="text-[#4A011D] font-bold">•</span>
                <span>
                  <strong>Manage Orders Efficiently:</strong> View, accept, and track orders in real time.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#4A011D] font-bold">•</span>
                <span>
                  <strong>Monitor Customer and Store Data:</strong> Stay updated on orders, customers, and liquor stores.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#4A011D] font-bold">•</span>
                <span>
                  <strong>Optimize Delivery Operations:</strong> Add and manage delivery providers, track vehicle details and more.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#4A011D] font-bold">•</span>
                <span>
                  <strong>Analyze & Improve:</strong> Use comprehensive reports to make data-driven decisions and grow your business.
                </span>
              </li>

            </ul>

            <p className="text-gray-600 mt-6 leading-relaxed">
              Our user-friendly alcohol delivery clone app script offers a seamless
              experience—from placing an order online to a swift and secure payment
              checkout option.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Our Alcohol Delivery App Script provides a seamless experience for
              customers, from placing an order to making a secure payment. Ready
              to get started? Check out our live demo!
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;