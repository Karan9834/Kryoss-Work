import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const technologies = [
  {
    title: "Hire Android Developers",
    desc: "Hire our Android app developers to execute your dream business app. Our experts build world-class mobile products.",
    gradient: "from-green-200 to-green-100",
  },
  {
    title: "Hire Angular JS Developers",
    desc: "AngularJS is widely used for powerful single-page applications. Our developers have 9+ years experience.",
    gradient: "from-red-200 to-orange-100",
  },
  {
    title: "Hire Codeigniter Developers",
    desc: "Enroll our expert CodeIgniter developers to enhance your web project and scale your application.",
    gradient: "from-yellow-200 to-yellow-100",
  },
  {
    title: "Hire Flutter Developers",
    desc: "Build Android & iOS apps with a single codebase using Flutter. Fast development and beautiful UI.",
    gradient: "from-blue-200 to-cyan-100",
  },
  {
    title: "Hire iOS Developers",
    desc: "Get world-class iOS developers with extensive experience building complex mobile applications.",
    gradient: "from-purple-200 to-indigo-100",
  },
  {
    title: "Hire Laravel Developers",
    desc: "Hire Laravel experts for scalable web applications, customization, and enterprise-grade solutions.",
    gradient: "from-pink-200 to-rose-100",
  },
  {
    title: "Hire MEAN Stack Developers",
    desc: "Hire MEAN stack developers to handle both frontend and backend web development efficiently.",
    gradient: "from-emerald-200 to-teal-100",
  },
  {
    title: "Hire MERN Stack Developers",
    desc: "Build scalable web applications using MERN stack with modern architecture.",
    gradient: "from-indigo-200 to-purple-100",
  },
  {
    title: "Hire PHP Developers",
    desc: "Hire expert PHP developers to create dynamic websites and enterprise web solutions.",
    gradient: "from-orange-200 to-yellow-100",
  },
  {
    title: "Hire React Developers",
    desc: "Acquire experienced React developers to build high-performance modern web applications.",
    gradient: "from-cyan-200 to-blue-100",
  },
];

const HireDevelopersPage = () => {
  return (
    <div>

    {/* HERO SECTION */}
<section className="py-24 text-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
style={{
  backgroundImage: "linear-gradient(98.43deg, rgba(196, 241, 255, 0.57) 0.24%, #ffecd8 99.06%)"
}}
>

  {/* background blur shapes */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

  <div className="max-w-4xl mx-auto px-6 relative z-10">

    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
      Hire Dedicated Developers Team In India
    </h1>

    <p className="text-gray-600 mb-4 text-lg">
      Are you looking to hire a dedicated resource?
    </p>

    <p className="text-gray-600 leading-relaxed mb-12">
      Add a highly skilled developer to your team to accomplish your
      business dream. Abservetech assists you to achieve your business
      needs by assigning the right expertise at the right moment.
      Our tailored services allow clients to choose the best developer
      team for their web and mobile projects with transparent communication.
    </p>

    {/* FEATURES */}
    <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">

      {[
        "Dedicated Developers",
        "Flexible Hiring Model",
        "Daily Reporting",
        "Agile Development",
        "Transparent Pricing",
        "Expert Team Support",
      ].map((point, i) => (
        <div
          key={i}
          className="flex items-center gap-3 bg-white shadow-md px-4 py-3 rounded-xl hover:shadow-lg transition"
        >
          <Check className="text-green-500" size={18} />
          <span className="text-gray-700">{point}</span>
        </div>
      ))}

    </div>

    <Link
      to="/contact"
      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition"
    >
      Contact Us
    </Link>

  </div>
</section>


{/* TRIAL SECTION */}
<section className="py-20 bg-gradient-to-r "
// style={{ backgroundColor: "rgb(40, 5, 43)" }}
>

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 items-center gap-10  shadow-lg rounded-2xl p-10"
    style={{ backgroundColor: "rgb(40, 5, 43)" }}
    >

      <div>
        <h2 className="text-3xl font-bold leading-snug text-white">
          Hire Dedicated Developer And Get 7-day Trial Period*
        </h2>

        <p className="text-white mt-4 text-lg">
          If you are not satisfied, we will refund your money —
          no questions asked!
        </p>
      </div>

      <div className="text-center md:text-right">
        <Link
          to="/contact"
          className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          Contact Us
        </Link>
      </div>

    </div>

  </div>
</section>


      {/* TECHNOLOGY SECTION */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            We Offer Developers In Following Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-lg bg-gradient-to-br ${tech.gradient} hover:-translate-y-2 transition`}
              >

                <h3 className="text-xl font-semibold mb-4">
                  {tech.title}
                </h3>

                <p className="text-gray-700 mb-6">
                  {tech.desc}
                </p>

                <button className="flex items-center gap-2 text-blue-700 font-medium">
                  Explore <ArrowRight size={18} />
                </button>

              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default HireDevelopersPage;