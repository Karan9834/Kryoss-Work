import contact from "../../../assets/DogWalking/contact-us.webp";

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center mb-12">

          <span className="px-4 py-1 text-sm bg-green-100 text-green-600 rounded-full">
            Get Help
          </span>

          <h2 className="text-3xl font-semibold mt-3">
            Contact <span className="text-green-600">Us</span>
          </h2>

        </div>


        {/* GRID */}

        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* LEFT CARD */}

          <div className="bg-green-50 rounded-2xl p-8 flex flex-col justify-between">

            <div>

              <h3 className="text-xl font-semibold mb-6">
                Building On-Demand Solutions with
                Modern Technology
              </h3>


              {/* CONTACT INFO */}

              <div className="space-y-5">

                {/* WHATSAPP */}

                <div className="flex items-center gap-3">

                  <div className="bg-green-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
                    📱
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">WhatsApp</p>
                    <p className="font-medium text-sm">+91 79849 31943</p>
                  </div>

                </div>


                {/* EMAIL */}

                <div className="flex items-center gap-3">

                  <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
                    ✉️
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-medium text-sm">
                      contact@yourcompany.com
                    </p>
                  </div>

                </div>

              </div>


              {/* BUTTON */}

              <button className="mt-6 bg-green-600 text-white px-5 py-2.5 rounded-full text-sm hover:bg-green-700 transition">
                Schedule Meeting
              </button>

            </div>


            {/* IMAGE */}

            <div className="mt-6">

              <img
                src={contact}
                alt="support"
                className="max-h-36 object-contain"
              />

            </div>

          </div>



          {/* RIGHT FORM */}

          <div className="border border-gray-200 rounded-2xl p-8 flex flex-col justify-between">

            <div className="space-y-5">

              {/* NAME */}

              <div>
                <label className="text-xs text-gray-600">
                  Name
                </label>

                <input
                  type="text"
                  className="w-full mt-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>


              {/* EMAIL */}

              <div>
                <label className="text-xs text-gray-600">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full mt-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>


              {/* CONTACT + PRODUCT */}

              <div className="grid grid-cols-2 gap-3">

                <div>
                  <label className="text-xs text-gray-600">
                    Contact Number
                  </label>

                  <input
                    type="text"
                    className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-600">
                    Product
                  </label>

                  <select className="w-full mt-1 border rounded-lg px-3 py-2 text-sm">
                    <option>Select Product</option>
                  </select>

                </div>

              </div>


              {/* BUDGET */}

              <div>
                <label className="text-xs text-gray-600">
                  Budget
                </label>

                <select className="w-full mt-1 border rounded-lg px-3 py-2 text-sm">
                  <option>Select your budget</option>
                </select>

              </div>


              {/* MESSAGE */}

              <div>
                <label className="text-xs text-gray-600">
                  Message
                </label>

                <textarea
                  rows="3"
                  className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
                ></textarea>

              </div>

            </div>


            {/* BUTTON */}

            <div className="text-center mt-6">

              <button className="bg-green-600 text-white px-7 py-2.5 rounded-full text-sm hover:bg-green-700 transition">
                Contact Us
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}