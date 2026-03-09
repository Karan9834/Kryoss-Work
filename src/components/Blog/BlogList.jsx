import React from "react";

const blogs = [
  {
    id: 1,
    title:
      "Best Ride-Hailing Apps in Malaysia 2026: Compare Options in Malaysia",
    desc: "Find the best ride-hailing apps available in Malaysia with this easy comparison of fares, payment options, and key benefits",
    img: "https://journal-portal.whitelabelfox.com/blog-assets/image/blog-images/best-ride-hailing-apps-in-malaysia.webp",
    time: "11 min read",
    date: "13 February, 2026",
    author: "Viral Kacha – CEO & Sales Head",
  },
  {
    id: 2,
    title:
      "Is Uber Available in Italy? 10 Best Ride-Sharing Apps for Tourists & Locals",
    desc: "Find out which ride-sharing apps work best in Italy by comparing prices, coverage, and real-world use cases.",
    img: "https://journal-portal.whitelabelfox.com/blog-assets/image/blog-images/10-best-ride-sharing-apps-in-italy.webp",
    time: "18 min read",
    date: "06 February, 2026",
    author: "Viral Kacha – CEO & Sales Head",
  },
  {
    id: 3,
    title:
      "The Web Design Services Question No One Asks: Who Is This Site Really For?",
    desc: "Stop designing a website for “everyone.” Find out who your ideal users are and how to create a site that drives better leads and sales.",
    img: "https://journal-portal.whitelabelfox.com/blog-assets/image/blog-images/Web-Design-Services-Question-No-One-Asks.webp",
    time: "5 min read",
    date: "22 January, 2026",
    author: "Viral Kacha – CEO & Sales Head",
  },
  {
    id: 4,
    title:
      "No Studio, No Problem: How AI Backgrounds Help Small Brands Compete Visually",
    desc: "Small brands can now create premium-looking visuals with AI backgrounds. Reduce production costs, launch faster campaigns, and build customer trust in seconds.",
    img: "https://journal-portal.whitelabelfox.com/blog-assets/image/blog-images/professional-visuals-without-studio.webp",
    time: "4 min read",
    date: "19 January, 2026",
    author: "Viral Kacha – CEO & Sales Head",
  },
];

const BlogList = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      
      {/* HEADING */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">
          Discover Insights & <span className="text-orange-500">Latest Trends</span>
        </h2>

        <p className="text-gray-600 max-w-5xl mx-auto">
          Search our blog to explore expert insights, industry trends, and the
          latest updates on app development, technology, and business solutions.
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