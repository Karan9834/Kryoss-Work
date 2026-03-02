import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}

        <div className="text-center mb-12">

          <div className="flex justify-center mb-3">
            <div className="flex items-center gap-2 border px-4 py-1 rounded-full bg-white">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
              Get Help
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-sky-600">Us</span>
          </h2>

        </div>



        <div className="grid md:grid-cols-2 gap-8">


          {/* LEFT BOX WITH IMAGE */}

          <div
            className="
              rounded-3xl
              overflow-hidden
              relative
              min-h-[450px]
              text-white
              flex
              flex-col
              justify-between
              p-8
            "
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1556740749-887f6717d7e4)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            {/* overlay */}

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10">

              <h3 className="text-xl font-semibold mb-6">
                Building On-Demand Solutions
                with Modern Technology
              </h3>


              {/* whatsapp */}

              <div className="flex items-center gap-3 mb-4">

                <div className="bg-green-500 p-3 rounded-full">
                  <FaWhatsapp />
                </div>

                <div>
                  <p>WhatsApp</p>
                  <p className="font-bold">
                    +91 79849 31943
                  </p>
                </div>

              </div>



              {/* email */}

              <div className="flex items-center gap-3 mb-6">

                <div className="bg-blue-500 p-3 rounded-full">
                  <FaEnvelope />
                </div>

                <div>
                  <p>Email</p>
                  <p className="font-bold">
                    sales@whitelabelfox.com
                  </p>
                </div>

              </div>



              <button className="bg-green-600 px-5 py-2 rounded-full">
                Schedule Meeting
              </button>

            </div>

          </div>



          {/* FORM WITH BLUR BACKGROUND */}

          <div
            className="
              rounded-3xl
              p-8
              backdrop-blur-xl
              bg-white/60
              border
              shadow-lg
            "
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1492724441997-5dc865305da7)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            {/* blur overlay */}

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6">

              <div className="grid gap-4">

                <input
                  placeholder="Name"
                  className="border rounded-full px-4 py-3"
                />

                <input
                  placeholder="Email"
                  className="border rounded-full px-4 py-3"
                />


                <div className="grid md:grid-cols-2 gap-4">

                  <input
                    placeholder="Contact Number"
                    className="border rounded-full px-4 py-3"
                  />

                  <select className="border rounded-full px-4 py-3">
                    <option>Select Product</option>
                    <option>Car Rental</option>
                    <option>Taxi App</option>
                    <option>Delivery App</option>
                  </select>

                </div>



                <select className="border rounded-full px-4 py-3">
                  <option>Select Budget</option>
                  <option>$500</option>
                  <option>$1000</option>
                  <option>$2000+</option>
                </select>



                <textarea
                  rows="4"
                  placeholder="Message"
                  className="border rounded-xl px-4 py-3"
                ></textarea>



                <button
                  className="
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-500
                    text-white
                    py-3
                    rounded-full
                    font-semibold
                  "
                >
                  Contact Us
                </button>

              </div>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
};

export default ContactSection;