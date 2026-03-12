import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Flutter App Development",
    desc: "Build high-performance cross-platform mobile apps using Flutter with a single codebase.",
    icon: "/icons/flutter.png",
    link: "/services/flutter-app-development",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Kotlin App Development",
    desc: "Modern Android app development using Kotlin for better performance and safety.",
    icon: "/icons/kotlin.png",
    link: "/services/kotlin-app-development",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Android App Development",
    desc: "Custom Android applications designed to deliver seamless user experiences.",
    icon: "/icons/android.png",
    link: "/services/android-app-development",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "iOS App Development",
    desc: "Native iOS apps developed with high performance and elegant UI.",
    icon: "/icons/ios.png",
    link: "/services/ios-app-development",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "MVP App Development",
    desc: "Launch your startup idea quickly with a minimum viable product.",
    icon: "/icons/mvp.png",
    link: "/services/mvp-app-development",
    gradient: "from-pink-500 to-rose-500",
  },
//   {
//     title: "White Label Web Development",
//     desc: "Expand your agency services with our white label development solutions.",
//     icon: "/icons/web.png",
//     link: "/services/white-label-web-development",
//     gradient: "from-indigo-500 to-purple-500",
//   },
  {
    title: "Laravel Development",
    desc: "Powerful web applications using Laravel with scalable architecture.",
    icon: "/icons/laravel.png",
    link: "/services/laravel-development",
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "WordPress Development",
    desc: "Professional websites and CMS solutions built on WordPress.",
    icon: "/icons/wordpress.png",
    link: "/services/wordpress-development",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Ecommerce Development",
    desc: "Build secure and scalable ecommerce platforms for your online business.",
    icon: "/icons/ecommerce.png",
    link: "/services/ecommerce-development",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const ServicesPage = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>

          <p className="leading-relaxed mb-8 text-lg">
            We have a team of professionals in Web Development, Designing,
            Mobile App Development, SEO, and Graphic Designing. We specialize
            in Laravel, MERN, MEAN Stack Development, WordPress, Codeigniter,
            and modern mobile technologies.
          </p>

          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition"
          >
            Contact Us
          </Link>

        </div>
      </section>


      {/* SERVICES SECTION */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:-translate-y-3 hover:shadow-2xl transition duration-300"
              >

                {/* ICON */}
                <div
                  className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r ${service.gradient}`}
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10 h-10"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 mb-6">
                  {service.desc}
                </p>

                {/* EXPLORE */}
                <Link
                  to={service.link}
                  className="flex items-center justify-center gap-2 text-blue-600 font-semibold hover:gap-3 transition"
                >
                  Explore
                  <ArrowRight size={18} />
                </Link>

              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default ServicesPage;