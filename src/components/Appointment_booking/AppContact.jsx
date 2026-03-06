import contact from "../../assets/DogWalking/contact-us.webp";
export default function ContactSection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-4">
          <span className="border px-4 py-1 rounded-full text-sm">
            Get Help
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
          Contact <span className="text-blue-600">Us</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Card */}
          <div className="bg-gradient-to-b from-[#cfe3e0] to-[#bcd4d2] p-10 rounded-3xl relative">

            <h3 className="text-xl font-semibold mb-6">
              Building On-demand Solutions with Modern Technology Solutions.
            </h3>

            {/* WhatsApp */}
            <div className="flex items-center gap-4 mb-6">

              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-white">
                W
              </div>

              <div>
                <p className="text-sm text-gray-600">WhatsApp</p>
                <p className="font-semibold">+91 79849 31943</p>
              </div>

            </div>

            {/* Email */}
            <div className="flex items-center gap-4 mb-6">

              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white">
                @
              </div>

              <div>
                <p className="text-sm text-gray-600">Write to us</p>
                <p className="font-semibold">
                  sales@whitelabelfox.com
                </p>
              </div>

            </div>

            {/* Button */}
            <button className="bg-green-500 text-white px-6 py-3 rounded-full font-medium">
              Schedule Meeting
            </button>

            {/* Image Placeholder */}
            <img
              src={contact}
              alt="contact illustration"
              className="absolute bottom-0 right-6 w-40"
            />

          </div>

          {/* Right Form */}
          <div className="border rounded-3xl p-10">

            <form className="space-y-5">

              <div>
                <label>Name:</label>
                <input
                  className="w-full border rounded-xl p-3 mt-1"
                />
              </div>

              <div>
                <label>Email:</label>
                <input
                  className="w-full border rounded-xl p-3 mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label>Contact Number:</label>
                  <input className="w-full border rounded-xl p-3 mt-1" />
                </div>

                <div>
                  <label>Product</label>
                  <select className="w-full border rounded-xl p-3 mt-1">
                    <option>Select Product</option>
                  </select>
                </div>

              </div>

              <div>
                <label>Budget</label>
                <select className="w-full border rounded-xl p-3 mt-1">
                  <option>Select your budget</option>
                </select>
              </div>

              <div>
                <label>Message:</label>
                <textarea
                  rows="4"
                  className="w-full border rounded-xl p-3 mt-1"
                ></textarea>
              </div>

              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full">
                Contact Us
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}