import React from "react";
import { Apple, Smartphone, LayoutDashboard } from "lucide-react";
import weprovide from "../../assets/PestControl/weprovide.webp";

const MultiPlatform = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* badge */}
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 border rounded-full px-4 py-1 text-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            What We Provide
          </span>
        </div>

        {/* heading */}
        <h2 className="text-center text-4xl font-semibold mb-4">
          Multi-Platform Pest Control Solution
          <span className="text-orange-500">
            {" "}Android, iOS & Web Admin Panel
          </span>
        </h2>

        {/* description */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          We offer a fully integrated pest control app solution across multiple
          platforms—Android, iOS, and a robust Web Admin Panel. Whether you're
          serving customers via mobile apps or managing operations through the
          admin panel, we ensure a seamless and efficient experience.
        </p>

        {/* main container */}
        <div className="bg-[#f7efe4] border border-orange-200 rounded-3xl p-8 md:p-12 grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            {/* CARD 1 */}
            <div className="border border-orange-300 rounded-2xl p-6 bg-white">

              <div className="flex items-center gap-3 mb-3">

                <div className="flex gap-2">
                  <div className="w-10 h-10 flex items-center justify-center border border-orange-400 rounded-lg text-orange-500">
                    <Smartphone size={18} />
                  </div>

                  <div className="w-10 h-10 flex items-center justify-center border border-orange-400 rounded-lg text-orange-500">
                    <Apple size={18} />
                  </div>
                </div>

              </div>

              <h3 className="text-orange-500 font-semibold mb-2">
                Android & iOS
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Our pest control app is available on both Android and iOS,
                providing users with a seamless experience on their preferred
                devices. With real-time tracking, secure payments, and easy
                booking.
              </p>

              <div className="flex flex-wrap gap-3">

                <span className="border border-orange-400 text-orange-500 px-4 py-1 rounded-full text-sm">
                  Customer Android + iOS App
                </span>

                <span className="border border-orange-400 text-orange-500 px-4 py-1 rounded-full text-sm">
                  Provider Android + iOS App
                </span>

                <span className="border border-orange-400 text-orange-500 px-4 py-1 rounded-full text-sm">
                  Store Owner + iOS App
                </span>

              </div>

            </div>


            {/* CARD 2 */}
            <div className="border border-orange-300 rounded-2xl p-6 bg-white">

              <div className="flex items-center gap-3 mb-3">

                <div className="w-10 h-10 flex items-center justify-center border border-orange-400 rounded-lg text-orange-500">
                  <LayoutDashboard size={18} />
                </div>

              </div>

              <h3 className="text-orange-500 font-semibold mb-2">
                Web Admin Panel
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Our Web Admin Panel empowers you to manage your pest control
                business with ease. From overseeing service bookings to managing
                providers and payments.
              </p>

              <div className="flex flex-wrap gap-3">

                <span className="border border-orange-400 text-orange-500 px-4 py-1 rounded-full text-sm">
                  Super Admin Web Panel
                </span>

                <span className="border border-orange-400 text-orange-500 px-4 py-1 rounded-full text-sm">
                  Dispatcher Web Panel
                </span>

                <span className="border border-orange-400 text-orange-500 px-4 py-1 rounded-full text-sm">
                  Billing Admin Account
                </span>

                <span className="border border-orange-400 text-orange-500 px-4 py-1 rounded-full text-sm">
                  Static Landing Page Website
                </span>

              </div>

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="flex justify-center">

            <div className="bg-gradient-to-br from-[#2c1205] to-[#7a3c11] rounded-3xl p-6 w-full max-w-lg flex justify-center">

              <img
                src={weprovide}
                alt="mobile apps"
                className="w-full max-w-sm"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MultiPlatform;