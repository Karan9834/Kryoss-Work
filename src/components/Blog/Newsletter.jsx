import React from "react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gray-50"
    style={{
      border: "2px solid #AFE4F2",
      backgroundColor: "#E7F8FF",
      backgroundImage: "url(https://whitelabelfox.com/blog-assets/image/newsletter-bg.webp)"
    }}
    
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
         <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-sm text-gray-700 bg-white ">
            <span className="w-2.5 h-2.5 bg-orange-500 rounded-full"></span>
         Stay Tuned
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold mt-4 mb-4">
          Stay Updated with the Latest News
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-10">
         Subscribe to our newsletter for exclusive updates, product releases, and industry insights. Never miss out on important information to grow your business!
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
          <button className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-blue-700 transition">
            Subscribe
          </button>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;