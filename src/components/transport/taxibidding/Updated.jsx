import React, { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
  };

  return (
    <section className="w-full py-24 bg-[#f6f7f6]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Top Pill */}
        <div className="inline-flex items-center gap-2 border border-[#d6e6c4] bg-white px-4 py-1 rounded-full text-sm text-gray-700 mb-6">
          <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
          Get Updates
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Stay Ahead with Our{" "}
          <span className="text-[#6dbb1a]">Latest Updates</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Subscribe to our newsletter for exclusive updates, insights,
          and tips on the latest trends in app development solutions.
          Stay informed and never miss an important update!
        </p>

        {/* Email Input */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm overflow-hidden max-w-2xl mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 outline-none text-gray-700"
          />

          <button
            type="submit"
            className="bg-[#6dbb1a] hover:bg-[#5aa014] text-white px-8 py-4 font-medium transition duration-300"
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
};

export default NewsletterSection;