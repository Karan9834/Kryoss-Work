import React from "react";

const blogs = {
  main: {
    title: "Build a Roadside Assistance App like Uber for Tow Truck",
    img: "https://source.unsplash.com/800x600/?tow-truck,illustration,vector",
  },
  rightTop: {
    title: "Kickstart Your Handyman App like Uber: Feature & Cost",
    img: "https://source.unsplash.com/600x400/?handyman,illustration,vector",
  },
  rightBottom: {
    title: "Build an On-Demand Uber Massage App For Startup Business",
    img: "https://source.unsplash.com/600x400/?massage,illustration,vector",
  },
};

const RelatedBlogs = () => {
  return (
    <section className="py-28 px-6 md:px-16 bg-[#fffaf0]">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-600 text-sm inline-block mb-6">
            Blogs
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Our <span className="text-yellow-600">Related Blogs</span>
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and tips in the
            on-demand app industry. Explore our newest blogs to gain valuable
            knowledge and ideas to grow your business!
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT LARGE BLOG */}
          <a
            href="#"
            className="group bg-white rounded-3xl overflow-hidden border border-yellow-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={blogs.main.img}
                alt="Main Blog"
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-600 transition">
                {blogs.main.title}
              </h3>
            </div>
          </a>

          {/* RIGHT SIDE STACK */}
          <div className="flex flex-col gap-10">

            {/* Top */}
            <a
              href="#"
              className="group flex bg-white rounded-3xl overflow-hidden border border-yellow-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={blogs.rightTop.img}
                alt="Blog"
                className="w-48 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-8 flex items-center">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition">
                  {blogs.rightTop.title}
                </h3>
              </div>
            </a>

            {/* Bottom */}
            <a
              href="#"
              className="group flex bg-white rounded-3xl overflow-hidden border border-yellow-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={blogs.rightBottom.img}
                alt="Blog"
                className="w-48 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-8 flex items-center">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition">
                  {blogs.rightBottom.title}
                </h3>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogs;