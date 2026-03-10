import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import contact from "../../assets/DogWalking/contact-us.webp"

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-4">
          <span className="border px-4 py-1 rounded-full text-sm">
            Get Help
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-10">
          Contact <span className="text-pink-500">Us</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* LEFT BOX */}
          <div className="bg-green-50 rounded-2xl p-8 flex flex-col justify-between h-full relative">

            <div>

              <h3 className="text-xl font-semibold mb-6">
                Building On-demand Solutions with Modern Technology Solutions.
              </h3>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-green-500 text-white p-3 rounded-full">
                  <FaWhatsapp />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">WhatsApp</p>
                  <p className="font-semibold">+91 79849 31943</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-500 text-white p-3 rounded-full">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Write to us</p>
                  <p className="font-semibold">
                    sales@whitelabelfox.com
                  </p>
                </div>
              </div>

              <button className="bg-green-600 text-white px-6 py-2 rounded-full font-medium">
                Schedule Meeting
              </button>

            </div>

            {/* IMAGE PLACEHOLDER */}
            <div className="mt-6">
              <img
                src={contact}
                alt="support"
                className="w-40"
              />
            </div>

          </div>

          {/* RIGHT FORM BOX */}
          <div className="bg-white border rounded-2xl p-8 shadow-sm flex flex-col justify-between h-full">

            <form className="space-y-4">

              <div>
                <label className="text-sm">Name:</label>
                <input className="w-full border rounded-lg p-2 mt-1" />
              </div>

              <div>
                <label className="text-sm">Email:</label>
                <input className="w-full border rounded-lg p-2 mt-1" />
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label className="text-sm">Contact Number</label>
                  <input className="w-full border rounded-lg p-2 mt-1" />
                </div>

                <div>
                  <label className="text-sm">Product</label>
                  <select className="w-full border rounded-lg p-2 mt-1">
                    <option>Select Product</option>
                  </select>
                </div>

              </div>

              <div>
                <label className="text-sm">Budget</label>
                <select className="w-full border rounded-lg p-2 mt-1">
                  <option>Select your budget</option>
                </select>
              </div>

              <div>
                <label className="text-sm">Message</label>
                <textarea
                  rows="3"
                  className="w-full border rounded-lg p-2 mt-1"
                ></textarea>
              </div>

              <div className="text-center pt-2">
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full">
                  Contact Us
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;