import React from "react";

const Newsletter = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}

        <div className="mb-6">
          <span className="px-4 py-1 text-sm border rounded-full text-slate-600">
            Get Updates
          </span>
        </div>

        {/* Heading */}

        <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
          Stay Ahead with Our{" "}
          <span className="text-indigo-500">Latest Updates</span>
        </h2>

        {/* Description */}

        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive updates, and tips on the
          latest trends in app development solutions. Stay informed and never
          miss out on important updates!
        </p>

        {/* Input */}

        <div className="mt-10 flex items-center border border-slate-300 rounded-full overflow-hidden max-w-xl mx-auto">

          <input
            type="email"
            placeholder="Enter your email here"
            className="flex-1 px-6 py-3 outline-none text-sm"
          />

          <button className="bg-indigo-500 text-white px-6 py-3 font-semibold hover:bg-indigo-600 transition">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;