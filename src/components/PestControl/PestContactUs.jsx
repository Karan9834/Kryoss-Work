import React from "react";
import { Phone, Mail } from "lucide-react";
import pestcontact from "../../assets/DogWalking/contact-us.webp";

export default function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-4">
          <span className="border px-4 py-1 rounded-full text-sm">
            Get Help
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-4xl font-semibold mb-16">
          Contact <span className="text-orange-500">Us</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <div className="bg-[#d9e7e5] rounded-3xl p-10 relative">

            <h3 className="text-xl font-semibold mb-8 leading-relaxed">
              Building On-demand Solutions with Modern Technology Solutions.
            </h3>

            {/* Whatsapp */}
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-500 text-white p-3 rounded-full">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-600">WhatsApp</p>
                <p className="font-semibold text-lg">
                  +91 79849 31943
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-500 text-white p-3 rounded-full">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-600">Write to us</p>
                <p className="font-semibold">
                  sales@whitelabelfox.com
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="bg-green-600 text-white px-6 py-3 rounded-full font-medium">
              Schedule Meeting
            </button>

            {/* Image Placeholder */}
            <div className="absolute bottom-0 right-6">
               <img src={pestcontact} className="w-32 object-contain" />
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="border rounded-3xl p-10">

            <form className="space-y-5">

              <div>
                <label className="text-sm">Name:</label>
                <input
                  type="text"
                  className="w-full border rounded-xl p-3 mt-1"
                />
              </div>

              <div>
                <label className="text-sm">Email:</label>
                <input
                  type="email"
                  className="w-full border rounded-xl p-3 mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label className="text-sm">Contact Number:</label>
                  <input
                    type="text"
                    className="w-full border rounded-xl p-3 mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm">Product</label>
                  <select className="w-full border rounded-xl p-3 mt-1">
                    <option>Select Product</option>
                    <option>Uber Clone</option>
                    <option>Food Delivery</option>
                    <option>Taxi App</option>
                  </select>
                </div>

              </div>

              <div>
                <label className="text-sm">Budget</label>
                <select className="w-full border rounded-xl p-3 mt-1">
                  <option>Select your budget</option>
                  <option>$1000 - $3000</option>
                  <option>$3000 - $7000</option>
                  <option>$7000+</option>
                </select>
              </div>

              <div>
                <label className="text-sm">Message:</label>
                <textarea
                  rows="4"
                  className="w-full border rounded-xl p-3 mt-1"
                />
              </div>

              <div className="text-center pt-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium">
                  Contact Us
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}