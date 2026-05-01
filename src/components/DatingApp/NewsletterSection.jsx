import React from "react";

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 border px-4 py-1 rounded-full text-sm">
            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
            Get Updates
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Stay Ahead with Our{" "}
          <span className="text-pink-500">Latest Updates</span>
        </h2>

        {/* Description */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Subscribe to our newsletter for exclusive updates and tips on the
          latest trends in app development solutions. Stay informed and never
          miss out on important updates!
        </p>

        {/* Subscribe Box */}
        <div className="flex items-center bg-white border rounded-full overflow-hidden max-w-xl mx-auto shadow-sm">

          <input
            type="email"
            placeholder="Enter your email here"
            className="flex-1 px-6 py-3 outline-none text-gray-700"
          />

          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 font-medium rounded-full m-1">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
};

export default NewsletterSection;