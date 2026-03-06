import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== BADGE + HEADING ===== */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-gray-300 
                          px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-[#003C52] to-[#01B49E] rounded-full"></span>
            Get Help
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold">
            Contact <span className="bg-gradient-to-r from-[#003C52] to-[#01B49E] text-transparent bg-clip-text">Us</span> 
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">

          {/* ================= LEFT SIDE ================= */}
          <div
            className="relative rounded-2xl overflow-hidden p-10 flex flex-col justify-start"
            style={{
              background:
                "linear-gradient(108.34deg, rgba(139, 224, 251, 0.2) 5.31%, rgba(136, 220, 144, 0.2) 94.04%)",
            }}
          >
            {/* Content Top Left */}
            <div className="z-10 space-y-8 max-w-md">

              <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                Building On-demand Solutions with Modern Technology Solutions.
              </h3>

              {/* WhatsApp */}
              <div>
                <p className="text-sm uppercase text-gray-500">WhatsApp</p>
                <h4 className="text-lg font-semibold">+91 79849 31943</h4>
              </div>

              {/* Email */}
              <div>
                <p className="text-sm uppercase text-gray-500">Write to us</p>
                <h4 className="text-lg font-semibold">
                  sales@whitelabelfox.com
                </h4>
              </div>

              {/* Schedule Meeting */}
              <button className="bg-black text-white 
                                 px-6 py-3 rounded-full 
                                 font-medium hover:scale-105 
                                 transition duration-300">
                Schedule Meeting
              </button>

            </div>

            {/* Image Bottom Right */}
            <img
              src="https://whitelabelfox.com/assets/images/contact-us/contact-us-image.webp"
              alt="contact"
              className="absolute bottom-0 right-0 w-64 md:w-72 object-contain"
            />
          </div>

          {/* ================= RIGHT SIDE FORM ================= */}
          <div className="bg-gray-50 rounded-2xl p-10 shadow-lg">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                           focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                           focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                           focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                           focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option>Select Product</option>
                <option>Gojek Clone App</option>
                <option>Uber Clone App</option>
                <option>Food Delivery App</option>
                <option>Medicine Delivery App</option>
                <option>Handyman Service App</option>
              </select>

              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                           focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option>Select Budget</option>
                <option>$1000 - $3000</option>
                <option>$3000 - $5000</option>
                <option>$5000 - $10000</option>
                <option>$10000+</option>
              </select>

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                           focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#003C52] to-[#01B49E] text-white 
                           py-3 rounded-full font-medium 
                           hover:bg-gray-800 transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;