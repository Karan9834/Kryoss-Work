import React from "react";
import Bikeblog1 from "../../assets/transport-bikeride-img/Bikeblog1.webp"
import Bikeblog2 from "../../assets/transport-bikeride-img/Bikeblog2.webp"
import Bikeblog3 from "../../assets/transport-bikeride-img/Bikeblog3.webp"


const blogs = [
    {
        id: 1,
        title: "Launch Your Own Bike Taxi Business with MoveIt Clone in the Philippines",
        image: Bikeblog1
    },
    {
        id: 2,
        title:
            "How Can Uber App Clone Script Helpful Your Taxi Business?",
        image: Bikeblog2
    },
    {
        id: 3,
        title:
            "How to Launch On-Demand Uber Bike Ride For Startup Business?",
        image: Bikeblog3
    },
];

const BlogsSection = () => {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 px-4 py-1 border rounded-full text-sm text-gray-600 mb-4">
                        <span className="w-2 h-2 bg-[#0b9f7a] rounded-full" />
                        Blogs
                    </span>

                    <h2 className="text-4xl font-semibold text-gray-900">
                        Our <span className="text-[#0b9f7a]">Related Blogs</span>
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        Stay updated with the latest trends, insights, and tips in the on-demand app industry. Explore our newest blogs to gain valuable knowledge and ideas to grow your business!
                    </p>
                </div>

                {/* Blogs Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Big Blog */}
                    <div className="group border-2 border-[#0b9f7a] rounded-3xl p-5 hover:shadow-lg transition">
                        <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl">
                            <img
                                src={blogs[0].image}
                                alt={blogs[0].title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-[#0b9f7a] transition">
                            {blogs[0].title}
                        </h3>
                    </div>

                    {/* Right Side Blogs */}
                    <div className="flex flex-col gap-10">
                        {blogs.slice(1).map((blog) => (
                            <div
                                key={blog.id}
                                className="group border-2 border-[#0b9f7a] rounded-3xl p-5 flex flex-col md:flex-row gap-6 hover:shadow-lg transition"
                            >
                                <div className="md:w-1/2 w-full aspect-[16/9] overflow-hidden rounded-2xl flex-shrink-0">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="md:w-1/2 flex items-center">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#0b9f7a] transition">
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

export default BlogsSection;