import React from "react";
import { motion } from "framer-motion";
import newsPortalDevImage from "../../../../../assets/News-Solution/why.png";

const WhyChooseNewsPortal = () => {
  const features = [
    {
      id: "1",
      title: "Top Stories Section",
      description:
        "Features the hottest news/ latest/ most trendy articles in this module, those have get more likes.",
    },
    {
      id: "2",
      title: "Breaking News",
      description:
        "Smooth assimilation of extensions & plugins to get real time sales data.",
    },
    {
      id: "3",
      title: "Lead Management",
      description:
        "This column on the website features the breaking news section revealing the top most news to the site visitors.",
    },
    {
      id: "4",
      title: "Site Search",
      description:
        "The site search module allows the users to search inside the categories.",
    },
    {
      id: "5",
      title: "Advertisement",
      description:
        "Advertisement module can be controlled from admin section and display flash & static images.",
    },
    {
      id: "6",
      title: "Video",
      description:
        "Video can be uploaded in news stories, interviews, photo gallery & advertisement.",
    },
  ];

  return (
    <section className="w-full bg-[#f3f3f3] py-16">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">

        {/* LEFT IMAGE */}
        <div className="md:w-1/2">
          <img
            src={newsPortalDevImage}
            alt="News Portal"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 bg-[#f3f3f3] px-8 py-10">

          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            <span className="text-red-600">Why</span> Choose News Porals Development
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm mb-8 leading-relaxed">
            We offer one roof solution to your internet existence necessities.
            We also offer web consultancy, web designing, redesigning of accessible websites.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {features.map((item) => (
              <div key={item.id} className="flex gap-4">

                {/* NUMBER */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 font-semibold">
                  {item.id}
                </div>

                {/* TEXT */}
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    <span className="text-red-600">{item.title}</span>
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseNewsPortal;