import React from "react";
import Uberblog1 from "../../assets/transport-uber-img/Uberblog1.webp"
import Uberblog2 from "../../assets/transport-uber-img/Uberblog2.webp"
import Uberblog3 from "../../assets/transport-uber-img/Uberblog3.webp"


const blogs = [
    {
        id: 1,
        title: "How to Build an App Like Wingz: Business Model Explained",
        image: Uberblog1
    },
    {
        id: 2,
        title:
            "How Can Uber App Clone Script Helpful Your Taxi Business?",
        image: Uberblog2
    },
    {
        id: 3,
        title:
            "How to Launch On-Demand Uber Bike Ride For Startup Business?",
        image: Uberblog3
    },
];

const BlogsSection = () => {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <span className="inline-flex items-center gap-2 px-4 py-1 border rounded-full text-sm text-gray-600 mb-4">
                        <span className="w-2 h-2 bg-black rounded-full" />
                        Industry Insights
                    </span>

                    <h2 className="text-4xl font-semibold text-gray-900">
                        Expertise & <span className="text-black">Strategic Guidance</span>
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                        Remain at the forefront of the mobility landscape with the latest engineering shifts and
                        business logic. Explore our expert analyses to acquire the proprietary knowledge required
                        to accelerate your enterprise trajectory.
                    </p>
                </div>

                {/* Blogs Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Big Blog */}
                    <div className="group border-2 border-black rounded-3xl p-5 hover:shadow-lg transition">
                        <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl">
                            <img
                                src={blogs[0].image}
                                alt={blogs[0].title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-black transition">
                            {blogs[0].title}
                        </h3>
                    </div>

                    {/* Right Side Blogs */}
                    <div className="flex flex-col gap-10">
                        {blogs.slice(1).map((blog) => (
                            <div
                                key={blog.id}
                                className="group border-2 border-black rounded-3xl p-5 flex flex-col md:flex-row gap-6 hover:shadow-lg transition"
                            >
                                <div className="md:w-1/2 w-full aspect-[16/9] overflow-hidden rounded-2xl flex-shrink-0">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="md:w-1/2 flex items-center">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black transition">
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