import React from "react";

const NewsletterSection = () => {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 text-sm mb-6">
          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
          Get Updates
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-5">
          Stay Ahead with Our{" "}
          <span className="text-green-600">Latest Updates</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Subscribe to our newsletter for exclusive updates, and tips on the
          latest trends in app development solutions. Stay informed and never
          miss out on important Update!
        </p>

        {/* Email Input */}
        <div className="flex items-center max-w-xl mx-auto border border-gray-300 rounded-full overflow-hidden">

          <input
            type="email"
            placeholder="Enter your email here"
            className="flex-1 px-6 py-4 outline-none bg-transparent"
          />

          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 m-2 rounded-full font-medium transition">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
};

export default NewsletterSection;