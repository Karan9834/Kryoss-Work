import React from "react";

const RelatedBlogs = () => {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold mb-4">
          Our <span className="text-green-600">Related Blogs</span>
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Stay updated with the latest trends, insights, and tips in the on-demand app
          industry. Explore our newest blogs to gain valuable knowledge and ideas to
          grow your business!
        </p>


        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8">


          {/* LEFT BIG BLOG */}
          <div className="border border-green-400 rounded-3xl overflow-hidden bg-white">

            <img
              src="https://whitelabelfox.com/assets/images/blog-section/pet-dog-translator-apps.webp"
              alt="blog"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <h3 className="text-green-600 font-semibold text-lg leading-snug">
                Do Pet Translator Apps Work? Unveiling the Science Behind
                Dog Translator Apps & More
              </h3>
            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">


            {/* BLOG 2 */}
            <div className="border border-green-400 rounded-3xl p-5 flex items-center gap-6 bg-white">

              <img
                src="https://whitelabelfox.com/assets/images/blog-section/rovers-business-model.webp"
                alt="blog"
                className="w-40 h-28 object-cover rounded-xl"
              />

              <h3 className="font-semibold text-gray-800">
                Analyzing the Growth and Strategy of Rover’s Business Model
              </h3>

            </div>


            {/* BLOG 3 */}
            <div className="border border-green-400 rounded-3xl p-5 flex items-center gap-6 bg-white">

              <img
                src="https://whitelabelfox.com/assets/images/blog-section/factors-consider-creating-beauty-app-for-salon-business.webp"
                alt="blog"
                className="w-40 h-28 object-cover rounded-xl"
              />

              <h3 className="font-semibold text-gray-800">
                Factors to Consider While Creating a Beauty App for Salon Business
              </h3>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
};

export default RelatedBlogs;