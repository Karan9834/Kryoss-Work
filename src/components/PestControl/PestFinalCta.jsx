import React from "react";

export default function NewsletterSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="mb-4">
          <span className="border px-4 py-1 rounded-full text-sm">
            Get Updates
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-4">
          Stay Ahead with Our{" "}
          <span className="text-orange-500">
            Latest Updates
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive updates, and tips on the
          latest trends in app development solutions. Stay informed and never
          miss out on important Update!
        </p>

        {/* Email Input */}
        <div className="flex justify-center">
          <div className="flex w-full max-w-xl border rounded-full overflow-hidden">

            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 px-6 py-4 outline-none"
            />

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 font-medium">
              Subscribe
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}