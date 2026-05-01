import React from "react";

export default function DiverseApps() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="border px-4 py-1 text-sm rounded-full">
            Businesses We Support
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-4xl font-semibold">
          Explore Our <span className="text-orange-500">Diverse Range</span> of On-Demand Apps
        </h2>

        <p className="text-center text-gray-500 max-w-3xl mx-auto mt-4 mb-14">
          We offer a variety of ready-to-launch customizable on-demand apps to suit your business needs.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Dog Walking */}
          <div className="relative bg-[#efe7d7] rounded-3xl p-6 overflow-hidden">
            <h3 className="font-semibold text-lg text-yellow-700">
              Dog walking app
            </h3>

            <p className="text-sm text-gray-600 mt-2 max-w-xs">
              Launch a dog walking service with ease offering pet owners an efficient platform.
            </p>

            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1"
              className="absolute bottom-0 right-6 w-28 object-contain"
            />
          </div>

          {/* Food Delivery */}
          <div className="relative bg-[#f4e6d8] rounded-3xl p-6 overflow-hidden md:col-span-2">
            <h3 className="font-semibold text-lg text-orange-600">
              Food Delivery App
            </h3>

            <p className="text-sm text-gray-600 mt-2 max-w-sm">
              Create a seamless food delivery experience allowing restaurants and customers to connect instantly.
            </p>

            <div className="absolute bottom-4 right-6 flex gap-3">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                className="w-14 h-14 rounded-xl object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
                className="w-14 h-14 rounded-xl object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1512058564366-c9e3e046f6c8"
                className="w-14 h-14 rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Grocery BIG */}
          <div className="relative bg-[#d9eadf] rounded-3xl p-6 row-span-2 overflow-hidden">
            <h3 className="font-semibold text-lg text-green-700">
              Grocery Delivery App
            </h3>

            <p className="text-sm text-gray-600 mt-2 max-w-xs">
              Provide an easy way for users to shop for groceries and have them delivered to their doorstep.
            </p>

            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e"
              className="absolute bottom-0 right-4 w-32 object-contain"
            />
          </div>

          {/* Home Cleaning */}
          <div className="relative bg-[#dbe8f4] rounded-3xl p-6 overflow-hidden">
            <h3 className="font-semibold text-lg text-blue-700">
              Home Cleaning Service
            </h3>

            <p className="text-sm text-gray-600 mt-2 max-w-xs">
              Offer a reliable platform for booking home cleaning services.
            </p>

            <img
              src="https://cdn-icons-png.flaticon.com/512/995/995053.png"
              className="absolute bottom-4 right-6 w-16"
            />
          </div>

          {/* Uber Tutor */}
          <div className="relative bg-[#e6dff2] rounded-3xl p-6 overflow-hidden">
            <h3 className="font-semibold text-lg text-purple-700">
              Uber tutor
            </h3>

            <p className="text-sm text-gray-600 mt-2 max-w-xs">
              Revolutionize tutoring services by offering students an easy way to book tutors.
            </p>

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
              className="absolute bottom-0 right-6 w-24 object-contain"
            />
          </div>

          {/* Uber Beauty */}
          <div className="relative bg-[#f3dde4] rounded-3xl p-6 md:col-span-2 overflow-hidden">
            <h3 className="font-semibold text-lg text-pink-700">
              Uber Beauty
            </h3>

            <p className="text-sm text-gray-600 mt-2 max-w-sm">
              Set up a beauty service booking platform allowing users to book at-home beauty treatments.
            </p>

            <div className="absolute bottom-4 right-6 flex gap-3">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
                className="w-14 h-14 rounded-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
                className="w-14 h-14 rounded-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8"
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Taxi */}
          <div className="relative bg-[#dbe4f1] rounded-3xl p-6 overflow-hidden">
            <h3 className="font-semibold text-lg text-blue-700">
              Uber For Taxi
            </h3>

            <p className="text-sm text-gray-600 mt-2 max-w-xs">
              Launch a taxi-hailing service with a powerful app providing users a convenient way to book rides.
            </p>

            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c"
              className="absolute bottom-0 right-4 w-28 object-contain"
            />
          </div>

          {/* Electrician */}
          <div className="relative bg-[#f2d9d6] rounded-3xl p-6 overflow-hidden">
            <h3 className="font-semibold text-lg text-red-600">
              Uber For Electrician
            </h3>

            <p className="text-sm text-gray-600 mt-2 max-w-xs">
              Provide customers with a quick and easy way to book electricians.
            </p>

            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
              className="absolute bottom-4 right-4 w-24 object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}