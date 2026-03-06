import React from "react";
import { Mail, Phone, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-28 px-6 md:px-16 bg-[#fffaf0]">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-600 text-sm inline-block mb-6">
            Get Help
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Contact <span className="text-yellow-600">Us</span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* ================= LEFT SIDE ================= */}
          <div
            className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-end"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/900x900/?customer-support,office')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-10 p-10 text-white w-full">
              <h3 className="text-2xl font-semibold mb-8">
                Building On-Demand Solutions with Modern Technology.
              </h3>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">WhatsApp</p>
                    <p className="font-semibold text-lg">+91 79849 31943</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-yellow-500 p-3 rounded-full">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Write to us</p>
                    <p className="font-semibold text-lg">
                      sales@yourcompany.com
                    </p>
                  </div>
                </div>

                <button className="mt-6 inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 rounded-full font-medium shadow-lg">
                  Schedule Meeting
                  <Calendar size={18} />
                </button>

              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE FORM ================= */}
          <div className="bg-[#fdf3e3] rounded-3xl p-10 shadow-lg border border-yellow-200">

            <form className="space-y-6">

              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-white border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-white border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-700">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="w-full mt-2 px-4 py-3 rounded-xl bg-white border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-700">Product</label>
                  <select className="w-full mt-2 px-4 py-3 rounded-xl bg-white border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <option>Select Product</option>
                    <option>Handyman App</option>
                    <option>Food Delivery App</option>
                    <option>Taxi App</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-700">Budget</label>
                <select className="w-full mt-2 px-4 py-3 rounded-xl bg-white border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option>Select your budget</option>
                  <option>$1000 - $3000</option>
                  <option>$3000 - $7000</option>
                  <option>$7000+</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-700">Message</label>
                <textarea
                  rows="4"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-white border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-8 py-3 rounded-full font-medium shadow-lg"
                >
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