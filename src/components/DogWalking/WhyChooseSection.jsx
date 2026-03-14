import React from "react";
import why1 from "../../assets/DogWalking/why1.webp"
import why2 from "../../assets/DogWalking/why2.webp"

const WhyChooseSection = () => {
  return (
    <section className="bg-black text-white py-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* TOP PART */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">


          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={why1}
              alt="team"
              className="w-[360px] object-contain"
            />
          </div>

          {/* RIGHT TEXT */}
          <div>

            <div className="inline-flex items-center border border-white/30 rounded-full px-3 py-1 text-xs mb-5">
              Get Your Digital Footprint
            </div>

            <h2 className="text-3xl font-semibold mb-5 leading-snug">
              Launch Your <span className="text-green-400">Dog Walking App</span> in Just 5 Days
            </h2>

            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
              Get your dog walking app up and running in just 5 working days with our quick and efficient deployment solution. Skip the long development cycles and launch a fully operational dog walking platform without the usual delays.
            </p>

            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
              Our pre-built dog walking app offers a fast-track way to connect pet owners with trusted walkers, with essential features integrated from day one. Enjoy features like booking management, real-time tracking, secure payments, and more—all in a seamless app.
            </p>

            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
              The dog walking app comes with a robust, scalable platform that grows as your business expands. Say goodbye to lengthy development timelines and focus on providing excellent service to your customers.
            </p>

            <p className="text-gray-300 text-sm leading-relaxed">
              Launch quickly, scale efficiently, and deliver a smooth, reliable pet care experience with our ready-to-use dog walking app.
            </p>

          </div>

        </div>


        {/* WHY CHOOSE */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center border border-white/30 rounded-full px-3 py-1 text-xs mb-4">
            Why Choose Us
          </div>

          <h2 className="text-3xl font-semibold">
            Why Choose Us for <span className="text-green-400">Dog Walking</span> App Development?
          </h2>

        </div>


        {/* SINGLE IMAGE */}
        <div className="flex justify-center mb-16">

          <img
            src={why2}
            alt="workflow"
            className="max-w-[800px] w-full object-contain"
          />

        </div>


        {/* BULLET POINTS */}
        <div className="grid md:grid-cols-2 gap-10 text-gray-300 text-sm leading-relaxed">

          <ul className="space-y-4 list-disc pl-5">
            <li>
              Our Dog Walking App development solution is the perfect way to quickly launch your pet care business with minimal hassle.
            </li>

            <li>
              Keep dog owners and walkers informed with real-time updates on walk status, progress, and notifications.
            </li>

            <li>
              Get your dog walking app up and running in just 5 working days.
            </li>
          </ul>

          <ul className="space-y-4 list-disc pl-5">
            <li>
              Designed with ease of use in mind, ensuring a smooth experience for both customers and walkers.
            </li>

            <li>
              Built to grow with your business with a scalable and secure platform.
            </li>

            <li>
              Tailor the app to suit your unique business needs and branding.
            </li>
          </ul>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseSection;