import React from "react";

const blogs = [
  {
    id: 1,
    img: "https://journal-portal.whitelabelfox.com/blog-assets/image/blog-images/taxi-booking-apps-in-uk.webp",
    badge: "Popular",
    title: "Top 12 Taxi Booking Apps in the UK - 2026 Updated",
    desc: "Discover the Best 12 Taxi booking apps dominating the UK market and make your travel experiences more convenient than ever!",
  },
  {
    id: 2,
    img: "https://journal-portal.whitelabelfox.com/blog-assets/image/blog-images/best-ride-hailing-apps-in-malaysia.webp",
    badge: "Popular",
    title:
      "Best Ride-Hailing Apps in Malaysia 2026: Compare Options in Malaysia",
    desc: "Find the best ride-hailing apps available in Malaysia with this easy comparison of fares, payment options, and key benefits",
  },
  {
    id: 3,
    img: "https://journal-portal.whitelabelfox.com/blog-assets/image/blog-images/10-best-ride-sharing-apps-in-italy.webp",
    badge: "Popular",
    title:
      "Is Uber Available in Italy? 10 Best Ride-Sharing Apps for Tourists & Locals",
    desc: "Find out which ride-sharing apps work best in Italy by comparing prices, coverage, and real-world use cases.",
  },
];

const PopularBlogs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Badge */}
      <div className="text-center mb-4">
        <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">
          Blogs
        </span>
      </div>

      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold">
          Browse Our Latest Blogs
        </h2>
      </div>

      {/* Paragraph */}
      <p className="text-gray-600 text-center max-w-5xl mx-auto mb-12">
        Dive into our collection of insightful blogs, where we share industry
        trends, helpful guides, and expert advice to empower your business
        journey.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={blog.img}
              alt="blog"
              className="w-full h-[200px] object-cover"
            />

            {/* Content */}
            <div className="p-6">

              {/* Popular badge */}
              <span className="text-orange-500 text-sm font-semibold">
                {blog.badge}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold mt-2 mb-3">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {blog.desc}
              </p>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default PopularBlogs;