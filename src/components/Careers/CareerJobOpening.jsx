import react from 'react';

const CareerJobOpening = () => {
    const jobs = [
        {
            title: "BDE / Sales Executive",
            desc: "Drive lead generation, client acquisition, and deal closures for our B2B technology and app development services. Engage with global prospects, understand their business needs, and convert opportunities into long-term partnerships.",
            exp: "1 - 4 Year of Experience",
        },
        {
            title: "Business Analyst",
            desc: "Analyze business requirements, map workflows, and translate client needs into clear product and technical documentation. Work closely with sales, product, and development teams to ensure accurate project scope and successful delivery.",
            exp: "0 - 2 Year of Experience",
        },
        {
            title: "SEO / Digital Marketing Executive",
            desc: "Plan, execute, and optimize SEO and digital marketing campaigns to drive qualified traffic and leads across web and social platforms. Work closely with content and tech teams to improve rankings, conversions, and brand visibility.",
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
                        Job Openings
                    </div>

                    <h2 className="text-4xl font-semibold mb-4">
                        Explore <span className="text-orange-500">Our Current Openings</span>
                    </h2>

                    <p className="text-orange-500 font-medium mb-2">
                        Note: <span className="text-gray-700 font-normal">Apply only if you are from Rajkot or Saurashtra region</span>
                    </p>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover exciting career opportunities at White Label Fox! Check out
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
                                    Rajkot Location Only
                                </span>

                                <span className="border px-4 py-1 rounded-full text-sm">
                                    Work From Office
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