import React from "react";
import ContactForm from "./ContactForm";

const Hero = () => {
  return (
    <>
      <section
        className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white pt-28 pb-40"
        style={{
          backgroundImage:
            "url(https://whitelabelfox.com/assets/images/contact-us-page/contact-us-main-slider-bg.webp)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Let’s Build{" "}
              <span className="text-orange-500">
                Something Great Together
              </span>
            </h1>

            <p className="text-lg leading-relaxed">
              Have questions or need a custom solution? Connect with our experts
              today and let’s discuss how we can help your business grow with
              cutting-edge digital solutions.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="relative">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS SECTION */}
      <section className="bg-gray-50 pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div>
            <div className="inline-flex items-center gap-2 border border-gray-300 px-4 py-1.5 rounded-full text-sm mb-6">
              <span className="w-2.5 h-2.5 bg-orange-400 rounded-full"></span>
              Connect With Us
            </div>

            <h2 className="text-4xl font-bold mb-4 text-orange-500">
              Reach Us Anytime, Anywhere.
            </h2>

            <p className="text-gray-600 mb-6">
              Have a question or need assistance? Call, email, or message us—we’re here to help.
            </p>

            {/* WhatsApp */}
            <p className="mt-8">
              <b className="text-xl">WhatsApp:</b><br />
              <a
                href="https://wa.me/918448909389"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-500 transition"
              >
                +91 84489 09389
              </a>
            </p>

            {/* Email */}
            <p className="mt-8">
              <b className="text-xl">Mail Us:</b><br />
              <a
                href="mailto:sales@zryoss.com"
                className="block text-gray-700 hover:text-orange-500 transition"
              >
                sales@zryoss.com
              </a>
              <a
                href="mailto:info@zryoss.com"
                className="block text-gray-700 hover:text-orange-500 transition"
              >
                info@zryoss.com
              </a>
            </p>

            {/* Call */}
            <p className="mt-8">
              <b className="text-xl">Call Us:</b><br />
              <a
                href="tel:+911169269633"
                className="text-gray-700 hover:text-orange-500 transition"
              >
                011 6926 9633
              </a>
              <br />
              <span className="text-sm text-gray-500">
                MON–FRI, 10AM–6PM
              </span>
            </p>

            {/* Gurgaon Address ONLY */}
            <p className="mt-8">
              <b className="text-xl">Our Base:</b><br />
              <a
                href="https://www.google.com/maps?q=JMD+Megapolis+Sohna+Road+Gurgaon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-orange-500 transition"
              >
                Office No. 837-A, 8th Floor, JMD Megapolis,
                Sohna Road, Gurgaon, Haryana
              </a>
            </p>

          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;