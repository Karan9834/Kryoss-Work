import React from "react";
import contact from "../../../assets/DogWalking/contact-us.webp";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <h2 className="text-3xl font-semibold text-center mb-12">
          Contact <span className="text-blue-500">Us</span>
        </h2>


        {/* Grid Layout */}

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT CARD */}

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 flex flex-col justify-between h-full">

            <div>

              <h3 className="text-xl font-semibold mb-6">
                Building On-Demand Solutions with Modern Technology
              </h3>


              {/* WhatsApp */}

              <div className="flex items-center gap-4 mb-6">

                <div className="w-10 h-10 bg-green-500 rounded-full"></div>

                <div>
                  <p className="text-gray-500 text-sm">WhatsApp</p>
                  <p className="font-semibold text-lg">
                    +91 79849 31943
                  </p>
                </div>

              </div>


              {/* Email */}

              <div className="flex items-center gap-4 mb-8">

                <div className="w-10 h-10 bg-blue-500 rounded-full"></div>

                <div>
                  <p className="text-gray-500 text-sm">Write to us</p>
                  <p className="font-semibold">
                    sales@yourcompany.com
                  </p>
                </div>

              </div>


              {/* Schedule Meeting Button */}

              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
                Schedule Meeting
              </button>

            </div>


            {/* Image Area (you will replace image) */}

            <div className="flex justify-end mt-6">

              <img
                src={contact}
                alt="support"
                className="w-40"
              />

            </div>

          </div>



          {/* CONTACT FORM */}

          <div className="border rounded-3xl p-8 h-full">

            <div className="space-y-5">

              {/* Name */}

              <div>
                <label className="text-sm font-medium">Name:</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>


              {/* Email */}

              <div>
                <label className="text-sm font-medium">Email:</label>
                <input
                  type="email"
                  className="w-full border rounded-lg p-2 mt-1"
                />
              </div>


              {/* Contact + Product */}

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label className="text-sm font-medium">
                    Contact Number:
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2 mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Product
                  </label>

                  <select className="w-full border rounded-lg p-2 mt-1">
                    <option>Select Product</option>
                    <option>Flutter App</option>
                    <option>Taxi App</option>
                    <option>Delivery App</option>
                  </select>

                </div>

              </div>


              {/* Budget */}

              <div>
                <label className="text-sm font-medium">Budget</label>

                <select className="w-full border rounded-lg p-2 mt-1">
                  <option>Select your budget</option>
                  <option>$1000 - $5000</option>
                  <option>$5000 - $10000</option>
                  <option>$10000+</option>
                </select>

              </div>


              {/* Message */}

              <div>
                <label className="text-sm font-medium">Message:</label>

                <textarea
                  rows="4"
                  className="w-full border rounded-lg p-2 mt-1"
                ></textarea>
              </div>


              {/* Contact Button */}

              <div className="text-center pt-4">

                <button className="bg-blue-600 text-white px-8 py-2 rounded-full hover:bg-blue-700 transition">
                  Contact Us
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}