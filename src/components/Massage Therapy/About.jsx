import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== CENTER BADGE + HEADING ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full mb-6">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#EC2768] to-[#EB009D] rounded-full"></span>
            About Uber for Massage App
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl font-semibold leading-tight text-gray-800">
            Unlock the Future of Massage Therapy with Our{" "}
            <span className="bg-gradient-to-r from-[#EC2768] to-[#EB009D] text-transparent bg-clip-text">
              On-Demand App Solution
            </span>
          </h2>

        </div>


        {/* ===== MAIN SECTION ===== */}
        <div className="grid md:grid-cols-2 items-center gap-10">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://whitelabelfox.com/assets/images/uber-massage-therapy-app/fox-massage-page-about-us-image-medium.webp"
              alt="Massage App"
              className="w-full max-w-md"
            />
          </div>


          {/* RIGHT CONTENT BOX */}
          <div className="border rounded-3xl p-10">

            <div className="text-gray-700 space-y-5 text-[16px] leading-relaxed">

              <p>
                Offer your customers the convenience of booking massage therapy anytime,
                anywhere with our Uber for Massage app solution. KryossOne provides
                a customizable on-demand massage app that helps scale your spa business
                effortlessly.
              </p>

              <p>
                The massage industry has seen significant growth due to increased
                awareness about the benefits of massage therapy and stress management.
                In today’s busy world, people often struggle to find time for self-care
                and relaxation.
              </p>

              <p>
                Thanks to technological innovation, these challenges can be overcome
                with the introduction of the Uber for Massage app solution. This
                on-demand app allows users to book spa sessions from the comfort of
                their home.
              </p>

              <p>
                At KryossOne, we offer a customizable on-demand Uber for Massage
                therapy app solution to help you grow your business with quick
                deployment and easy customization.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;