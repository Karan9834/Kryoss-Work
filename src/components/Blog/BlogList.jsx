import React from "react";

const blogs = [
  {
    id: 1,
    title:
      "Building a Scalable Ride-Hailing Platform for a Growing Urban Market",
    desc: "How we helped a mobility startup launch a high-performance ride-hailing app with real-time tracking, smart pricing, and seamless user experience across multiple cities.",
    img: "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?q=80&w=1200&auto=format&fit=crop",
    time: "12 min read",
    date: "18 March, 2026",
    author: "Product Engineering Team",
  },
  {
    id: 2,
    title:
      "Designing a Multi-Country Taxi App Experience for Global Travelers",
    desc: "A deep dive into how we built a cross-border ride-booking solution with localized pricing, multilingual support, and reliable driver networks.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    time: "15 min read",
    date: "10 March, 2026",
    author: "Product Engineering Team",
  },
  {
    id: 3,
    title:
      "Crafting a Conversion-Focused SaaS Dashboard for Better User Engagement",
    desc: "Learn how we redesigned a SaaS platform with intuitive UI/UX, improving user retention, simplifying workflows, and boosting overall product efficiency.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    time: "8 min read",
    date: "28 February, 2026",
    author: "Product Engineering Team",
  },
  {
    id: 4,
    title:
      "Helping Brands Scale Faster with AI-Powered Visual Content Solutions",
    desc: "Discover how we built an AI-driven design tool that enables businesses to create high-quality marketing visuals instantly without expensive production setups.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    time: "6 min read",
    date: "20 February, 2026",
    author: "Product Engineering Team",
  },
];

const BlogList = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">

      {/* HEADING */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">
          Explore Our Work & <span className="text-orange-500">Product Stories</span>
        </h2>

        <p className="text-gray-600 max-w-5xl mx-auto">
          Dive into real-world case studies showcasing how we design, build,
          and scale digital products that solve complex problems and deliver
          measurable business results.
        </p>
      </div>

      {/* SEARCH */}
      <div className="flex justify-center mb-14 gap-3">
        <input
          type="text"
          placeholder="Search Here..."
          className="border px-4 py-3 w-[550px] rounded-lg outline-none"
        />

        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
          Search
        </button>
      </div>

      {/* BLOG CARDS */}
      <div className="grid md:grid-cols-2 gap-10">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={blog.img}
              alt="blog"
              className="w-full h-[230px] object-cover"
            />

            {/* CONTENT */}
            <div className="p-6">

              <h3 className="text-xl font-semibold mb-3">
                {blog.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {blog.desc}
              </p>

              {/* META */}
              <div className="text-sm text-gray-500 flex flex-wrap items-center gap-2">
                <span>{blog.time}</span>
                <span>|</span>
                <span>{blog.date}</span>
                <span>|</span>
                <span>{blog.author}</span>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default BlogList;