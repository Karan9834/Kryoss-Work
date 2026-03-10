import React from "react";

const GetUpdatesSection = () => {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 text-center">
                {/* Badge */}
                <div className="flex justify-center mb-5">
                    <span className="inline-flex items-center gap-2 px-4 py-1 border border-gray-300 rounded-full text-sm text-gray-600">
                        <span className="w-2 h-2 bg-[#0b9f7a] rounded-full" />
                        Get Updates
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                    Stay Ahead with Our{" "}
                    <span className="text-[#0b9f7a]">Latest Updates</span>
                </h2>

                {/* Description */}
                <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Subscribe to our newsletter for exclusive updates, and tips on the
                    latest trends in app development solutions. Stay informed and never
                    miss out on important Update!
                </p>

                {/* Input Box */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="relative w-full sm:w-[520px]">
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className="w-full h-14 px-6 pr-36 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 rounded-full bg-[#0b9f7a] text-white font-medium hover:bg-blue-600 transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetUpdatesSection;