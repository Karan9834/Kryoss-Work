import React from "react";

const blogs = {
  main: {
    title: "Top CrushOn AI Alternatives",
    desc: "What is Crushon AI? Top 10 Crushon AI Alternatives",
    img: "https://images.unsplash.com/photo-1517260739337-6799d239ce83",
  },

  right: [
    {
      title:
        "Step-by-Step Guide to Create Dating App like Tinder: Features, Cost & Time",
      img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
    },
    {
      title:
        "Blush AI Dating Clone: Future of Matchmaking at Your Fingertips",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    },
  ],
};

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-3">
          <span className="border px-4 py-1 rounded-full text-sm">
            Blogs
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          Our <span className="text-pink-500">Related Blogs</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-center max-w-3xl mx-auto mb-12">
          Stay updated with the latest trends, insights, and tips in the
          on-demand app industry. Explore our newest blogs to gain valuable
          knowledge and ideas to grow your business.
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT BIG BLOG */}
          <div className="border border-pink-400 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition">

            <img
              src={blogs.main.img}
              alt=""
              className="w-full h-64 object-cover"
            />

            <div className="p-5">

              <h3 className="text-xl font-semibold mb-2">
                {blogs.main.title}
              </h3>

              <p className="text-pink-500 font-medium">
                {blogs.main.desc}
              </p>

            </div>

          </div>

          {/* RIGHT SIDE BLOGS */}
          <div className="flex flex-col gap-6">

            {blogs.right.map((blog, index) => (
              <div
                key={index}
                className="border border-pink-400 rounded-2xl p-4 flex gap-5 items-center bg-white hover:shadow-lg transition"
              >

                <img
                  src={blog.img}
                  alt=""
                  className="w-40 h-24 object-cover rounded-lg"
                />

                <h3 className="font-medium text-gray-800">
                  {blog.title}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default BlogSection;