import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/blog/Building a Scalable Ride-Hailing Platform for a Growing Urban Market.png";
import blog3 from "../../assets/blog/Crafting a Conversion-Focused SaaS Dashboard for Better User Engagement.jpg";
import blog4 from "../../assets/blog/Helping Brands Scale Faster with AI-Powered Visual Content Solutions.png";

const blogs = [
  {
    id: 1,
    slug: "high-performance-ride-booking",
    img: blog1,
    badge: "Case Study",
    title: "Building a High-Performance Ride Booking Platform for Urban Mobility",
    desc: "Explore how we engineered a scalable ride-booking solution with real-time tracking, seamless payments, and optimized driver allocation.",
  },
  {
    id: 2,
    slug: "intuitive-saas-dashboard",
    img: blog3,
    badge: "Case Study",
    title: "Designing an Intuitive SaaS Dashboard for Better User Experience",
    desc: "Learn how we transformed a complex platform into a clean, user-friendly dashboard that improved engagement and streamlined workflows.",
  },
  {
    id: 3,
    slug: "ai-driven-automation",
    img: blog4,
    badge: "Case Study",
    title: "Scaling a Digital Product with AI-Driven Automation Features",
    desc: "Discover how we integrated AI capabilities into a product to automate processes, reduce manual effort, and enhance overall efficiency.",
  },
];

const PopularBlogs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

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
              <p className="text-gray-600 text-sm mb-5">
                {blog.desc}
              </p>

              {/* VIEW MORE */}
              <Link
                to={`/blog/${blog.slug}`}
                className="text-orange-500 text-sm font-semibold flex items-center gap-2 hover:translate-x-1 transition-transform inline-flex"
              >
                View More <span>→</span>
              </Link>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default PopularBlogs;