import React from "react";

const BlogsSection = () => {
  const blogs = [
    {
      title: "Top 10 South African Food Delivery Apps to Look for in 2024",
      img: "https://whitelabelfox.com/assets/images/blog-section/top-10-south-african-food-delivery-apps-in-2024.webp",
      link: "#",
    },
    {
      title: "Subscription (SaaS) Based Food Delivery App Solution",
      img: "https://whitelabelfox.com/assets/images/blog-section/subscription-food-delivery-solution.webp",
      
      link: "#",
    },
    {
      title: "How to Launch Your Own Local Food Delivery App Like Postmates?",
      img: "https://whitelabelfox.com/assets/images/blog-section/local-food-delivery-app-like-postmates.webp",
     
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
       <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-sm text-gray-700 bg-white">
            <span className="w-2.5 h-2.5 bg-pink-500 rounded-full"></span>
            Blogs
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center mb-4 ">
          Our <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text"> Related Blogs</span>
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          Stay updated with the latest trends, insights, and tips in the
          on-demand app industry. Explore our newest blogs to gain valuable
          knowledge and ideas to grow your business!
        </p>

        {/* Blog Layout */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Big Card */}
          <a
            href={blogs[0].link}
            className="group lg:col-span-2 bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={blogs[0].img}
              alt=""
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold group-hover:text-blue-600 transition mb-3">
                {blogs[0].title}
              </h3>

              <p className="text-gray-600">{blogs[0].desc}</p>
            </div>
          </a>

          {/* Right Side */}
          <div className="flex flex-col gap-8">

            {/* Card 2 */}
            <a
              href={blogs[1].link}
              className="group flex bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={blogs[1].img}
                alt=""
                className="w-40 object-cover"
              />

              <div className="p-5 flex flex-col justify-center">
                <h3 className="text-lg font-semibold group-hover:text-blue-600 transition mb-2">
                  {blogs[1].title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {blogs[1].desc}
                </p>
              </div>
            </a>

            {/* Card 3 */}
            <a
              href={blogs[2].link}
              className="group flex bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={blogs[2].img}
                alt=""
                className="w-40 object-cover"
              />

              <div className="p-5 flex flex-col justify-center">
                <h3 className="text-lg font-semibold group-hover:text-blue-600 transition mb-2">
                  {blogs[2].title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {blogs[2].desc}
                </p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;