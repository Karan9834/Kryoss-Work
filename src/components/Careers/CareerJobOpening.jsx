import React from 'react';

const CareerJobOpening = () => {
    const jobs = [
        {
            title: "Business Development Executive",
            desc: "Drive lead generation, client acquisition, and deal closures for our technology and digital services. Engage with prospects, understand their business needs, and convert opportunities into lasting partnerships.",
            exp: "1 - 4 Years of Experience",
        },
        {
            title: "Business Analyst",
            desc: "Analyze business requirements, map workflows, and translate client needs into clear technical documentation. Collaborate with sales, product, and development teams to ensure accurate project scope and successful delivery.",
            exp: "0 - 2 Years of Experience",
        },
        {
            title: "Digital Marketing Specialist",
            desc: "Plan, execute, and optimize digital marketing campaigns to drive qualified traffic and leads across web and social platforms. Work with content and tech teams to improve visibility, engagement, and conversions.",
            exp: "0 - 3 Years of Experience",
        },
    ];

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm text-gray-600 mb-4">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Career Opportunities
                    </div>

                    <h2 className="text-4xl font-semibold mb-4">
                        Join <span className="text-orange-500">Our Growing Team</span>
                    </h2>

                    <p className="text-orange-500 font-medium mb-2">
                        Note: <span className="text-gray-700 font-normal">Remote and hybrid options available for qualified candidates</span>
                    </p>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover exciting career opportunities at Kryoss Work! Check out
                        our latest job openings and find the perfect role that matches your
                        skills and passion.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="bg-white border rounded-3xl p-8 shadow-sm hover:shadow-md transition"
                        >

                            <h3 className="text-xl font-semibold mb-4">
                                {job.title}
                            </h3>

                            <p className="text-gray-600 mb-6">
                                {job.desc}
                            </p>

                            {/* Tags */}

                            <div className="flex flex-wrap gap-3 mb-6">

                                <span className="border px-4 py-1 rounded-full text-sm">
                                    {job.exp}
                                </span>

                                <span className="border px-4 py-1 rounded-full text-sm">
                                    Remote / Hybrid
                                </span>

                                <span className="border px-4 py-1 rounded-full text-sm">
                                    Full Time
                                </span>

                            </div>

                            {/* Button */}

                            <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-full hover:scale-105 transition">
                                Apply Now
                            </button>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default CareerJobOpening;