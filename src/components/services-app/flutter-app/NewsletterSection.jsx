import React from "react";

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Tag */}

        <span className="inline-flex items-center px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
          Get Updates
        </span>


        {/* Heading */}

        <h2 className="text-3xl md:text-4xl font-semibold mt-6">
          Stay Ahead with Our{" "}
          <span className="text-blue-600">Latest Updates</span>
        </h2>


        {/* Description */}

        <p className="text-gray-500 mt-4">
          Subscribe to our newsletter for exclusive updates and insights
          on modern app development solutions. Stay informed about new
          technologies and industry trends.
        </p>


        {/* Email Box */}

        <div className="mt-8 flex items-center justify-between border rounded-full p-1 max-w-lg mx-auto">

          <input
            type="email"
            placeholder="Enter your email here"
            className="flex-1 px-4 py-2 outline-none rounded-full"
          />

          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}