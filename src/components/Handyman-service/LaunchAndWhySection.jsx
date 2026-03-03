import React from "react";
import leftImage from "../../assets/Handyman/HandymanLaunch.webp"; 
import topImage from "../../assets/Handyman/hansymanwhy.webp";     
const LaunchAndWhySection = () => {
  return (
    <section className="bg-black text-white py-28 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">

        {/* ===================== SECTION 1 ===================== */}
        {/* IMAGE LEFT – TEXT RIGHT */}

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">

          {/* LEFT IMAGE */}
          <div>
            <img
              src={leftImage}
              alt="Handyman Launch"
              className="w-full max-w-lg mx-auto"
            />
          </div>

          {/* RIGHT TEXT */}
          <div>

            <span className="px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-400 text-sm inline-block mb-6">
              Easy Launch
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              Get Your Handyman App Like{" "}
              <span className="text-yellow-400">
                Uber Developed
              </span>{" "}
              in a Few Days!
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Our customizable Uber-like app for handyman businesses provides your customers
              with an efficient way to book and access professional help whenever they need it.
              The feature-rich application is carefully designed to streamline business
              processes — starting from appointment booking and secure payments to real-time
              tracking — ensuring a completely hassle-free experience for all parties involved.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              No matter whether you want to start offering plumbing, carpentry, car washing,
              electrical repairs, or other handyman services, our ready-to-launch solution
              helps you go live in just a few days. Our on-demand handyman clone developers
              build scalable systems that adapt to your growing business requirements.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Whether you're just entering the market or planning to scale your operations,
              our flexible and performance-driven architecture ensures that your handyman
              service platform always remains efficient, competitive, and profitable.
            </p>

          </div>
        </div>



        {/* ===================== SECTION 2 ===================== */}
        {/* IMAGE TOP – TEXT BELOW */}

        <div className="text-center mb-12">

          <span className="px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-400 text-sm inline-block mb-6">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            What Makes Our Handyman Clone App{" "}
            <span className="text-yellow-400">
              Worthy for Your Business?
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our customer-centric handyman clone app provides complete control at your
            fingertips. From building your branded identity to managing customer demand,
            everything is designed to simplify operations while maximizing growth.
          </p>

        </div>


        {/* IMAGE ABOVE TEXT */}
        <div className="flex justify-center mb-16">
          <img
            src={topImage}
            alt="Why Choose Us"
            className="w-full max-w-3xl"
          />
        </div>


        {/* LONG CONTENT BELOW IMAGE */}
        <div className="grid md:grid-cols-2 gap-16">

          <div>
            <ul className="space-y-6 text-gray-300 leading-relaxed">
              <li>
                • Build a unique identity for your handyman business with a custom
                brand logo and name, helping you establish professional credibility
                and long-term recognition in the market.
              </li>

              <li>
                • Reach your customers wherever they are with a handyman clone app
                designed to work seamlessly across Android, iOS, and Web platforms,
                ensuring accessibility without limitations.
              </li>

              <li>
                • Get your handyman business up and running in no time. Our rapid
                app development process ensures you're ready to offer services
                within days — not months.
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-6 text-gray-300 leading-relaxed">
              <li>
                • Whether your customers are located in different regions or speak
                different languages, multi-currency and multi-language support
                ensures that your platform serves a global audience effortlessly.
              </li>

              <li>
                • Whether it's a minor technical query or a major system upgrade,
                our dedicated technical support team ensures your platform operates
                smoothly without interruptions.
              </li>

              <li>
                • As your business grows, our scalable architecture adapts to your
                needs, ensuring you're never held back by technical limitations
                or infrastructure constraints.
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LaunchAndWhySection;