import React from "react";

const blogs = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    badge: "Case Study",
    title: "Building a High-Performance Ride Booking Platform for Urban Mobility",
    desc: "Explore how we engineered a scalable ride-booking solution with real-time tracking, seamless payments, and optimized driver allocation.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    badge: "Case Study",
    title: "Designing an Intuitive SaaS Dashboard for Better User Experience",
    desc: "Learn how we transformed a complex platform into a clean, user-friendly dashboard that improved engagement and streamlined workflows.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    badge: "Case Study",
    title: "Scaling a Digital Product with AI-Driven Automation Features",
    desc: "Discover how we integrated AI capabilities into a product to automate processes, reduce manual effort, and enhance overall efficiency.",
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
          Explore Our Featured Work
        </h2>
      </div>

      {/* Paragraph */}
      <p className="text-gray-600 text-center max-w-5xl mx-auto mb-12">
        Take a closer look at how we design and develop impactful digital
        products for our clients, solving real-world challenges with scalable
        and innovative solutions.
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

              {/* Badge */}
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