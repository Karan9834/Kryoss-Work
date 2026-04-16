import React from "react";

const blogs = [
  {
    title: "The Economics of Bidding: Why the InDrive Model is Winning",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    featured: true,
  },
  {
    title:
      "Scaling Your Mobility Startup: Lessons from Global Ride-Hailing Giants",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title:
      "Future-Proofing Your Transport App: Essential Tech Stack Trends for 2025",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
];

const BlogSection = () => {
  return (
    <section className="w-full py-24 bg-[#f6f7f6]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border border-[#cfe7a5] bg-white px-4 py-1 rounded-full text-sm text-gray-700">
            <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
            Blogs
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-4">
          Explore the <span className="text-[#6dbb1a]">Strategic Innovations</span> in Modern Mobility
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Industry Intelligence: Stay updated with the latest trends, insights, and expert tips
          in the on-demand app industry. Explore our newest blogs to
          gain valuable knowledge and grow your business.
        </p>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT - FEATURED BLOG */}
          <div className="border border-[#8bc34a] rounded-3xl overflow-hidden bg-white hover:shadow-xl transition duration-300 cursor-pointer">

            <img
              src={blogs[0].image}
              alt="Blog"
              className="w-full h-[320px] object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold leading-snug">
                {blogs[0].title}
              </h3>
            </div>

          </div>

          {/* RIGHT - TWO STACKED BLOGS */}
          <div className="flex flex-col gap-8">

            {blogs.slice(1).map((blog, index) => (
              <div
                key={index}
                className="flex gap-6 border border-[#8bc34a] rounded-3xl bg-white overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <img
                  src={blog.image}
                  alt="Blog"
                  className="w-[220px] h-[160px] object-cover"
                />

                <div className="flex items-center pr-6">
                  <h3 className="text-lg font-semibold leading-snug">
                    {blog.title}
                  </h3>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogSection;