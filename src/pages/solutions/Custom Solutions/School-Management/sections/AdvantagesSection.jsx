import React from "react";
import image1 from "../../../../../assets/School-Manage/advantages.png"
const advantages = [
  {
    number: "1",
    title: "User Friendly Interface",
    desc: "Interface of this system is very Simple, user friendly and easy to use of this system.",
  },
  {
    number: "2",
    title: "Online School System",
    desc: "You can do all your work online, manage school and students online without any installation of any program/software in your computer.",
  },
  {
    number: "3",
    title: "Increase Daily Productivity",
    desc: "It helps administrators of schools boost their productivity and reduce the time and effort required to manage schools and accurately organize school data.",
  },
  {
    number: "4",
    title: "Customizable",
    desc: "Our systems are customizable & scalable. You can choose the features according to priority and set them for easy access in the dashboard.",
  },
  {
    number: "5",
    title: "Anywhere Access Right From Your Palm",
    desc: "It is a web and mobile-based application which features a centralized data storage structure which helps administrators, students, teachers and parents to access data from anywhere and anytime on iPhone and Android devices.",
  },
  {
    number: "6",
    title: "Save Money & Improve Student Engagement",
    desc: "It makes the work and functioning of school processes extremely easy to save time and cut down the administrative costs and focus on improving student success.",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="w-full font-['Inter'] relative overflow-hidden bg-white">

      {/* 🔥 CONTAINER - 2 COLUMN LAYOUT */}
      <div className="flex flex-col md:flex-row min-h-[600px] md:min-h-[700px]">

        {/* 🔥 LEFT SIDE - IMAGE (50% WIDTH, FULL HEIGHT) */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src={image1}
            alt="School Management Advantages"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* OPTIONAL OVERLAY GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
        </div>

        {/* 🔥 RIGHT SIDE - CONTENT (50% WIDTH) */}
        <div className="w-full md:w-1/2 py-16 md:py-20 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white">

          {/* HEADER - NOT EDGE TO EDGE */}
          <div className="max-w-xl">

            {/* PILL */}
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-orange-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-cyan-500"></span>
              Advantages
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">
                Kryoss Work?
              </span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base mb-8">
              Kryoss Work provides a set of tools, that enables school administrators to smoothly 
              run the institution and do so in a way that demonstrates efficiency, cost-savings and ingenuity.
            </p>

          </div>

          {/* ADVANTAGES LIST */}
          <div className="space-y-5 max-w-xl">

            {advantages.map((item) => (
              <div key={item.number} className="group flex gap-4">
                
                {/* NUMBER BADGE */}
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-cyan-500 text-white text-sm font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    {item.number}
                  </div>
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* MOBILE IMAGE (SHOWS ONLY ON MOBILE) */}
      <div className="block md:hidden w-full px-6 pb-8">
        <img
          src={image1}
          alt="School Management Advantages"
          className="w-full h-64 object-cover rounded-2xl shadow-lg"
        />
      </div>

    </section>
  );
};

export default AdvantagesSection;