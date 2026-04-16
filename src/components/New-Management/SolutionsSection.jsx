import React from "react";
import sol1 from "../../assets/News-Management/sol1.png";
import sol2 from "../../assets/News-Management/sol2.jpg";
import sol3 from "../../assets/News-Management/sol3.jpg";
import sol4 from "../../assets/News-Management/sol4.jpeg";

const solutions = [
  {
    id: 1,
    title: "Content Creation & Management",
    description:
      "Streamline your editorial workflow with powerful tools for creating, editing, and managing news content at scale. Collaborate seamlessly across teams with role-based access.",
    image: sol1,
  },
  {
    id: 2,
    title: "AI-Powered Insights",
    description:
      "Leverage artificial intelligence to detect trends, suggest headlines, and optimize content performance. Stay ahead with real-time analytics and predictive insights.",
    image: sol2,
  },
  {
    id: 3,
    title: "Multi-Channel Distribution",
    description:
      "Publish your news across websites, mobile apps, and social platforms simultaneously. Ensure consistent delivery with automated distribution pipelines.",
    image: sol3,
  },
  {
    id: 4,
    title: "Enterprise Security & Scalability",
    description:
      "Built with enterprise-grade infrastructure ensuring high availability, data security, and scalability to handle millions of users and content pieces.",
    image: sol4,
  },
];

const SolutionsSection = () => {
  return (
    <section className="relative w-full bg-white py-28 overflow-hidden">

      {/* Background Glow - Orange Theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-100 blur-3xl opacity-30 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-100 blur-3xl opacity-20 rounded-full"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731608_1px,transparent_1px),linear-gradient(to_bottom,#f9731608_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 px-6 relative z-10">
        {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
          <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-orange-700">Comprehensive Solutions</span>
        </div>

        {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
        <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
          Our <span className="bg-gradient-to-r from-orange-600 to-amber-600 text-transparent bg-clip-text">Solutions</span>
        </h2>

        {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
        <p className="mt-6 text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600 max-w-2xl mx-auto">
          Designed to empower modern news organizations with scalable, intelligent, and efficient workflows.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* Center Line - Orange Gradient */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-orange-200 via-orange-400 to-orange-200 transform -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-28">
          {solutions.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="relative grid md:grid-cols-2 gap-12 items-center"
              >
                {/* NUMBER - Orange Theme - Updated typography */}
                <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:flex">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white flex items-center justify-center font-bold text-[18px] shadow-lg ring-4 ring-white">
                    {item.id}
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="md:hidden flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white flex items-center justify-center font-bold text-[16px] shadow-lg">
                    {item.id}
                  </div>
                </div>

                {/* LEFT / RIGHT CONTENT */}
                {isLeft ? (
                  <>
                    {/* TEXT */}
                    <div className="text-center md:text-right group">
                      {/* Card Title - Updated: text-[24px] md:text-[30px] font-bold leading-[1.3] */}
                      <h3 className="text-[24px] md:text-[30px] font-bold leading-[1.3] text-gray-900 group-hover:text-orange-600 transition duration-300 mb-4">
                        {item.title}
                      </h3>
                      {/* Card Description - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                      <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600">
                        {item.description}
                      </p>
                    </div>

                    {/* IMAGE */}
                    <div className="group flex justify-center">
                      <div className="relative overflow-hidden rounded-2xl shadow-lg transition duration-500 group-hover:shadow-2xl w-full max-w-md">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto rounded-2xl transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* IMAGE */}
                    <div className="group md:order-1 flex justify-center">
                      <div className="relative overflow-hidden rounded-2xl shadow-lg transition duration-500 group-hover:shadow-2xl w-full max-w-md">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto rounded-2xl transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* TEXT */}
                    <div className="text-center md:text-left group md:order-2">
                      {/* Card Title - Updated: text-[24px] md:text-[30px] font-bold leading-[1.3] */}
                      <h3 className="text-[24px] md:text-[30px] font-bold leading-[1.3] text-gray-900 group-hover:text-orange-600 transition duration-300 mb-4">
                        {item.title}
                      </h3>
                      {/* Card Description - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                      <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
    </section>
  );
};

export default SolutionsSection;