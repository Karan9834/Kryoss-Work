import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    budget: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#f4f6f7] to-[#e8f0ed]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-[#d6e6c4] bg-white px-4 py-1 rounded-full text-sm text-gray-700 mb-4">
            <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
            Get Help
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Contact <span className="text-[#6dbb1a]">Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE - GLASS INFO BOX */}
          <div className="relative backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl p-10 shadow-xl">

            <h3 className="text-2xl font-semibold mb-6">
              Building On-Demand Solutions with Modern Technology
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 flex items-center justify-center rounded-full">
                  <FaWhatsapp className="text-green-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">WhatsApp</p>
                  <p className="font-semibold text-lg">+91 79849 31943</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 flex items-center justify-center rounded-full">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Write to us</p>
                  <p className="font-semibold text-lg">
                    sales@whitelabelfox.com
                  </p>
                </div>
              </div>

              <button className="mt-6 bg-gradient-to-r from-[#6dbb1a] to-[#4a9c12] text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition duration-300">
                Schedule Meeting →
              </button>

            </div>

            {/* Optional Illustration Placeholder */}
            <div className="mt-10 opacity-60">
              <img
                src="https://images.unsplash.com/photo-1581090700227-4c4f50a6c3e0"
                alt="Support"
                className="rounded-xl"
              />
            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-lg p-10 space-y-6"
          >

            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6dbb1a]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6dbb1a]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">
                  Contact Number
                </label>
                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6dbb1a]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Product
                </label>
                <select
                  name="product"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6dbb1a]"
                >
                  <option>Select Product</option>
                  <option>Taxi App</option>
                  <option>Food Delivery App</option>
                  <option>Grocery App</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Budget</label>
              <select
                name="budget"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6dbb1a]"
              >
                <option>Select your budget</option>
                <option>$5k - $10k</option>
                <option>$10k - $20k</option>
                <option>$20k+</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6dbb1a]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6dbb1a] to-[#4a9c12] text-white py-3 rounded-full font-semibold shadow-md hover:scale-105 transition duration-300"
            >
              Contact Us
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;