import React from "react";
import Laundryblog1 from "../../assets/homeservice-laundry-img/Laundryblog1.webp"
import Laundryblog2 from "../../assets/homeservice-laundry-img/Laundryblog2.webp"
import Laundryblog3 from "../../assets/homeservice-laundry-img/Laundryblog3.webp"


const blogs = [
    {
        id: 1,
        title: "Building a Smart Home Manager App Like AT&T: A Step-By-Step Guide",
        image: Laundryblog1
    },
    {
        id: 2,
        title:
            "Launch on-demand House Cleaning app for your Business",
        image: Laundryblog2
    },
    {
        id: 3,
        title:
            "How to Build an On-demand babysitting App?",
        image: Laundryblog3
    },
];

const BlogsSection = () => {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    {/* Badge - Updated Typography */}
                    <span className="inline-flex items-center gap-2 px-4 py-1 border rounded-full text-[12px] font-medium tracking-[0.05em] uppercase text-gray-600 mb-4">
                        <span className="w-2 h-2 bg-blue-400 rounded-full" />
                        Blogs
                    </span>

                    {/* Heading - Updated Typography */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
                        Our <span className="text-blue-900">Related Blogs</span>
                    </h2>

                    {/* Description - Updated Typography */}
                    <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600 max-w-3xl mx-auto">
                        Stay updated with the latest trends, insights, and tips in the on-demand app industry. Explore our newest blogs to gain valuable knowledge and ideas to grow your business!
                    </p>
                </div>

                {/* Blogs Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Big Blog */}
                    <div className="group border-2 border-blue-400 rounded-3xl p-5 hover:shadow-lg transition">
                        <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl">
                            <img
                                src={blogs[0].image}
                                alt={blogs[0].title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Blog Title - Updated Typography */}
                        <h3 className="mt-6 text-[18px] md:text-[20px] font-semibold text-gray-900 group-hover:text-blue-400 transition leading-[1.4]">
                            {blogs[0].title}
                        </h3>
                    </div>

                    {/* Right Side Blogs */}
                    <div className="flex flex-col gap-10">
                        {blogs.slice(1).map((blog) => (
                            <div
                                key={blog.id}
                                className="group border-2 border-blue-400 rounded-3xl p-5 flex flex-col md:flex-row gap-6 hover:shadow-lg transition"
                            >
                                <div className="md:w-1/2 w-full aspect-[16/9] overflow-hidden rounded-2xl flex-shrink-0">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="md:w-1/2 flex items-center">
                                    {/* Blog Title - Updated Typography */}
                                    <h3 className="text-[16px] md:text-[18px] font-semibold text-gray-900 group-hover:text-blue-400 transition leading-[1.4]">
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