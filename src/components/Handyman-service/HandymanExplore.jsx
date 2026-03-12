import React from "react";

const ExploreAppsSection = () => {
  return (
    <section className="bg-[#fffaf0] py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-600 text-sm inline-block mb-4">
            Businesses We Support
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Explore Our{" "}
            <span className="text-yellow-600">
              Diverse Range
            </span>{" "}
            of On-Demand Apps
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto">
            We offer a variety of ready-to-launch, customizable on-demand apps
            to suit your business needs.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">

          {/* DOG WALKING */}
          <div className="bg-[#fff4d6] rounded-3xl p-8 pb-40 relative overflow-hidden border border-yellow-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Dog Walking App
            </h3>

            <p className="text-gray-700 mb-6">
              Launch a dog walking service with ease.
            </p>

            <img
              src="https://whitelabelfox.com/assets/images/bento-grid/dog-walking-app.webp"
              alt="Dogs"
              className="absolute bottom-0 right-0 w-56 md:w-64 object-contain"
            />
          </div>


          {/* FOOD DELIVERY */}
          <div className="md:col-span-2 bg-[#ffe9b3] rounded-3xl p-8 pb-44 relative overflow-hidden border border-yellow-300 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">
              Food Delivery App
            </h3>

            <p className="text-gray-800 mb-6">
              Create a seamless food delivery experience.
            </p>

            <img
              src="https://whitelabelfox.com/assets/images/bento-grid/food-delivery-app.webp"
              alt="Food"
              className="absolute right-6 bottom-6 w-72 md:w-80 object-contain"
            />
          </div>


          {/* GROCERY DELIVERY */}
          <div className="md:row-span-2 bg-[#fff1c2] rounded-3xl p-8 pb-52 relative overflow-hidden border border-yellow-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Grocery Delivery App
            </h3>

            <p className="text-gray-800 mb-6">
              Provide an easy way for users to shop groceries.
            </p>

            <img
              src="https://whitelabelfox.com/assets/images/bento-grid/grocery-delivery-app.webp"
              alt="Groceries"
              className="absolute bottom-0 left-0 w-full max-h-[200px] md:max-h-[320px] object-contain"
            />
          </div>


          {/* HOME CLEANING */}
          <div className="bg-[#fff7db] rounded-3xl p-8 pb-40 relative overflow-hidden border border-yellow-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Home Cleaning Service
            </h3>

            <p className="text-gray-700 mb-6">
              Offer a reliable platform for booking home cleaning services.
            </p>

            <img
              src="https://whitelabelfox.com/assets/images/bento-grid/home-cleaning-service.webp"
              alt="Cleaning"
              className="absolute bottom-4 right-4 w-56 object-contain"
            />
          </div>


          {/* UBER TUTOR */}
          <div className="bg-[#fff4cc] rounded-3xl p-8 pb-40 relative overflow-hidden border border-yellow-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Uber Tutor
            </h3>

            <p className="text-gray-700 mb-6">
              Revolutionize tutoring services.
            </p>

            <img
              src="https://whitelabelfox.com/assets/images/bento-grid/uber-tutor.webp"
              alt="Tutor"
              className="absolute bottom-4 right-4 w-56 object-contain"
            />
          </div>


          {/* UBER BEAUTY */}
          <div className="md:col-span-2 bg-[#ffe8a3] rounded-3xl p-8 pb-44 relative overflow-hidden border border-yellow-300 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">
              Uber Beauty
            </h3>

            <p className="text-gray-800 mb-6">
              Set up a beauty service booking platform.
            </p>

            <img
              src="https://whitelabelfox.com/assets/images/bento-grid/uber-beauty.webp"
              alt="Beauty"
              className="absolute right-6 bottom-6 w-72 md:w-80 object-contain"
            />
          </div>


          {/* TAXI */}
          <div className="bg-[#fff3cc] rounded-3xl p-8 pb-40 relative overflow-hidden border border-yellow-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Uber For Taxi
            </h3>

            <p className="text-gray-800 mb-6">
              Launch a taxi-hailing service.
            </p>

            <img
              src="https://whitelabelfox.com/assets/images/bento-grid/uber-for-taxi.webp"
              alt="Taxi"
              className="absolute bottom-4 right-4 w-56 object-contain"
            />
          </div>


          {/* ELECTRICIAN */}
          <div className="bg-[#ffecc2] rounded-3xl p-8 pb-40 relative overflow-hidden border border-yellow-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Uber For Electrician
            </h3>

            <p className="text-gray-800 mb-6">
              Provide customers with a quick way to book electricians.
            </p>

            <img
              src="https://whitelabelfox.com/assets/images/bento-grid/uber-for-electrician.webp"
              alt="Electrician"
              className="absolute bottom-4 right-4 w-56 object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExploreAppsSection;