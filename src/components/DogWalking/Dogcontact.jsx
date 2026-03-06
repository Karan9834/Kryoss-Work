import React from "react";
import contact from "../../assets/DogWalking/contact-us.webp";

const ContactSection = () => {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 text-sm">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
            Get Help
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold mb-16">
          Contact <span className="text-green-600">Us</span>
        </h2>


        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <div className="bg-gradient-to-b from-green-100 to-blue-100 rounded-3xl p-8 relative">

            <h3 className="text-xl font-semibold mb-8">
              Building On-demand Solutions with Modern Technology Solutions.
            </h3>

            {/* WhatsApp */}
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                💬
              </div>
              <div>
                <p className="text-sm text-gray-600">WhatsApp</p>
                <p className="font-semibold">+91 79849 31943</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                ✉️
              </div>
              <div>
                <p className="text-sm text-gray-600">Write to us</p>
                <p className="font-semibold">sales@whitelabelfox.com</p>
              </div>
            </div>

            {/* Button */}
            <button className="bg-green-600 text-white px-6 py-3 rounded-full font-medium">
              Schedule Meeting
            </button>

            {/* Image Placeholder */}
            <img
              src={contact}
              alt="support"
              className="absolute bottom-0 right-4 w-48"
            />

          </div>


          {/* FORM */}
          <div className="border border-gray-300 rounded-3xl p-8 bg-white">

            <form className="space-y-5">

              <div>
                <label className="text-sm">Name:</label>
                <input
                  type="text"
                  className="w-full border rounded-xl px-4 py-2 mt-1"
                />
              </div>

              <div>
                <label className="text-sm">Email:</label>
                <input
                  type="email"
                  className="w-full border rounded-xl px-4 py-2 mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm">Contact Number:</label>
                  <input
                    type="text"
                    className="w-full border rounded-xl px-4 py-2 mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm">Product</label>
                  <select className="w-full border rounded-xl px-4 py-2 mt-1">
                    <option>Select Product</option>
                    <option>Dog Walking App</option>
                    <option>Food Delivery</option>
                    <option>Taxi App</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm">Budget</label>
                <select className="w-full border rounded-xl px-4 py-2 mt-1">
                  <option>Select your budget</option>
                  <option>$1000 - $5000</option>
                  <option>$5000 - $10000</option>
                </select>
              </div>

              <div>
                <label className="text-sm">Message:</label>
                <textarea
                  rows="4"
                  className="w-full border rounded-xl px-4 py-2 mt-1"
                ></textarea>
              </div>

              <button className="bg-green-600 text-white px-6 py-3 rounded-full font-medium">
                Contact Us
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;