import React from "react";

const HomeCleaningNewsletterSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
          Get Updates
        </span>

        {/* Heading */}
        <h2 className="text-4xl font-bold mt-4 mb-4">
          Stay Ahead with Our Latest Updates
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-10">
          Subscribe to our newsletter for exclusive updates, and tips on the
          latest trends in app development solutions. Stay informed and never
          miss out on important updates!
        </p>

        {/* Subscribe Input */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">

          {/* Input */}
          <input
            type="email"
            placeholder="Enter your email here"
            className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Button */}
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
            Subscribe
          </button>

        </div>
      </div>
    </section>
  );
};

export default HomeCleaningNewsletterSection;