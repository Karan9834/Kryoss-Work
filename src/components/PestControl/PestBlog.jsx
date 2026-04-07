import React from "react";

export default function RelatedBlogs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-4">
          <span className="border px-4 py-1 rounded-full text-sm">
            Blogs
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold mb-4">
          Our <span className="text-orange-500">Related Blogs</span>
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Stay updated with the latest trends, insights, and tips in the
          on-demand app industry. Explore our newest blogs to gain valuable
          knowledge and ideas to grow your business!
        </p>

        {/* Blog Layout */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT BIG BLOG */}
          <div className="border border-orange-300 rounded-3xl overflow-hidden">

            {/* Image */}
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              {/* Add your blog image */}
              <span className="text-gray-400">Blog Image</span>
            </div>

            {/* Text */}
            <div className="p-6">
              <p className="text-xs text-gray-500 mb-2">
                Kryoss Work
              </p>

              <h3 className="text-lg font-semibold leading-snug">
                Do Pet Translator Apps Work? Unveiling the Science Behind
                Dog Translator Apps & More!
              </h3>
            </div>

          </div>

          {/* RIGHT BLOGS */}
          <div className="flex flex-col gap-6">

            {/* Blog 1 */}
            <div className="border border-orange-300 rounded-3xl p-5 flex gap-5 items-center">

              <div className="w-40 h-28 bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-gray-400 text-sm">
                  Image
                </span>
              </div>

              <h3 className="font-semibold text-lg leading-snug">
                Start Your Own On-Demand Pest Control App
              </h3>

            </div>

            {/* Blog 2 */}
            <div className="border border-orange-300 rounded-3xl p-5 flex gap-5 items-center">

              <div className="w-40 h-28 bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-gray-400 text-sm">
                  Image
                </span>
              </div>

              <h3 className="font-semibold text-lg leading-snug">
                On-demand Tutor App Development: Check Benefits,
                Ideas, and Features Right Here!
              </h3>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}