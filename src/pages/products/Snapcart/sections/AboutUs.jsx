import React from "react";
import aboutimg from "../../../../assets/SnapCart/snapcartabout.png";
const AboutUs = () => {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">

      {/* 🔥 Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="w-full h-[100px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff7ed"
            d="M0,224L80,208C160,192,320,160,480,165.3C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192V320H0Z"
          ></path>
        </svg>
      </div>

      {/* 🔥 Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="w-full h-[120px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff7ed"
            d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160V320H0Z"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center order-2 lg:order-1">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-yellow-300 blur-3xl opacity-20 rounded-xl"></div>

          {/* Image */}
          <div className="relative bg-white p-3 rounded-xl shadow-xl border border-gray-100">
            <img
              src={aboutimg}
              alt="About us ecommerce"
              className="rounded-lg w-[650px] object-cover"
            />
          </div>

          {/* Floating Tag */}
          <div className="absolute -bottom-4 left-6 bg-white px-4 py-2 rounded-lg shadow text-xs font-medium">
            🚀 Growing Fast
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-1 lg:order-2">

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-5">
            About Us
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Empowering Businesses with{" "}
            <span className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Smart E-Commerce
            </span>
          </h2>

          {/* Text */}
          <p className="mt-5 text-gray-600 text-base leading-relaxed max-w-lg">
            We build powerful, scalable, and user-friendly e-commerce solutions
            that help businesses grow faster. From startups to enterprises, our
            platforms are designed to deliver seamless shopping experiences and
            maximize conversions.
          </p>

          {/* Points */}
          <div className="mt-6 space-y-3">
            <p className="text-sm text-gray-700">✔️ Mobile-first design approach</p>
            <p className="text-sm text-gray-700">✔️ Real-time analytics & insights</p>
            <p className="text-sm text-gray-700">✔️ Scalable & secure architecture</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;