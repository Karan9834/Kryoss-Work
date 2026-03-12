import React from "react";
import blog1 from "../../../assets/FlutterApp/blog1.webp";
import blog2 from "../../../assets/FlutterApp/blog2.webp";
import blog3 from "../../../assets/FlutterApp/blog3.webp";

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-12">

          <span className="px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
            Blogs
          </span>

          <h2 className="text-3xl font-semibold mt-4">
            Recent <span className="text-blue-600">Blogs</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore helpful articles about mobile app development,
            delivery platforms, and digital product strategies
            designed to help your business grow faster.
          </p>

        </div>


        {/* Grid */}

        <div className="grid lg:grid-cols-2 gap-8">


          {/* LEFT BIG BLOG */}

          <div className="border border-blue-500 rounded-3xl overflow-hidden hover:shadow-lg transition">

            <img
              src={blog1}
              alt=""
              className="w-full h-64 object-cover"
            />

            <div className="p-6">

              <h3 className="text-lg font-semibold text-blue-600">
                Top 10 South African Food Delivery Apps to Watch in 2024
              </h3>

            </div>

          </div>


          {/* RIGHT BLOGS */}

          <div className="flex flex-col gap-8">


            {/* BLOG CARD */}

            <div className="border border-blue-500 rounded-3xl p-4 flex items-center gap-6 hover:shadow-md transition">

              <img
                src={blog2}
                alt="blog"
                className="w-40 h-24 object-cover rounded-xl"
              />

              <h3 className="font-semibold text-gray-800">
                Top 10 Food Delivery Apps in Brazil
              </h3>

            </div>


            {/* BLOG CARD */}

            <div className="border border-blue-500 rounded-3xl p-4 flex items-center gap-6 hover:shadow-md transition">

              <img
                src={blog3}
                alt="blog"
                className="w-40 h-24 object-cover rounded-xl"
              />

              <h3 className="font-semibold text-gray-800">
                How Does GrubHub Work? Understanding the Business Model
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}