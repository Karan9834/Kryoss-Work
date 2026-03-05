import React from "react";

const ExploreAppsSection = () => {
  return (
    <section className="bg-[#fffaf0] py-28 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
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
            to suit your business needs. From Dog Walking to Grocery Delivery
            and Beauty Services, our solutions help you enter diverse
            industries quickly and efficiently.
          </p>

        </div>

        {/* ===== GRID ===== */}
        <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">

          {/* DOG WALKING */}
          <div className="md:col-span-1 bg-[#fff4d6] rounded-3xl p-8 relative overflow-hidden border border-yellow-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Dog Walking App
            </h3>
            <p className="text-gray-700 mb-6">
              Launch a dog walking service with ease, offering pet owners
              an efficient platform to book walks for their pets.
            </p>

            <img
              src="https://source.unsplash.com/400x300/?dogs"
              alt="Dogs"
              className="absolute bottom-0 right-0 w-44 object-contain"
            />
          </div>


          {/* FOOD DELIVERY */}
          <div className="md:col-span-2 bg-[#ffe9b3] rounded-3xl p-8 relative overflow-hidden border border-yellow-300 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">
              Food Delivery App
            </h3>
            <p className="text-gray-800 mb-6">
              Create a seamless food delivery experience, allowing restaurants
              and customers to connect instantly.
            </p>

            <img
              src="https://source.unsplash.com/600x400/?food"
              alt="Food"
              className="absolute right-6 bottom-6 w-60 rounded-2xl shadow-md"
            />
          </div>


          {/* GROCERY DELIVERY (TALL) */}
          <div className="md:row-span-2 bg-[#fff1c2] rounded-3xl p-8 relative overflow-hidden border border-yellow-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Grocery Delivery App
            </h3>
            <p className="text-gray-800 mb-6">
              Provide an easy way for users to shop groceries and have them
              delivered to their doorstep.
            </p>

            <img
              src="https://source.unsplash.com/500x600/?groceries"
              alt="Groceries"
              className="absolute bottom-0 left-0 w-full object-cover opacity-95"
            />
          </div>


          {/* HOME CLEANING */}
          <div className="bg-[#fff7db] rounded-3xl p-8 relative overflow-hidden border border-yellow-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Home Cleaning Service
            </h3>
            <p className="text-gray-700 mb-6">
              Offer a reliable platform for booking home cleaning services,
              connecting users with skilled cleaners.
            </p>

            <img
              src="https://source.unsplash.com/400x300/?cleaning"
              alt="Cleaning"
              className="absolute bottom-4 right-4 w-40 rounded-xl shadow"
            />
          </div>


          {/* UBER TUTOR */}
          <div className="bg-[#fff4cc] rounded-3xl p-8 relative overflow-hidden border border-yellow-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Uber Tutor
            </h3>
            <p className="text-gray-700 mb-6">
              Revolutionize tutoring services by offering students an easy way
              to book professional tutors.
            </p>

            <img
              src="https://source.unsplash.com/400x300/?tutor,student"
              alt="Tutor"
              className="absolute bottom-4 right-4 w-40 rounded-xl shadow"
            />
          </div>


          {/* UBER BEAUTY */}
          <div className="md:col-span-2 bg-[#ffe8a3] rounded-3xl p-8 relative overflow-hidden border border-yellow-300 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">
              Uber Beauty
            </h3>
            <p className="text-gray-800 mb-6">
              Set up a beauty service booking platform, allowing users to book
              at-home beauty treatments and services.
            </p>

            <img
              src="https://source.unsplash.com/600x400/?beauty,salon"
              alt="Beauty"
              className="absolute right-6 bottom-6 w-56 rounded-2xl shadow-md"
            />
          </div>


          {/* TAXI */}
          <div className="bg-[#fff3cc] rounded-3xl p-8 relative overflow-hidden border border-yellow-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Uber For Taxi
            </h3>
            <p className="text-gray-800 mb-6">
              Launch a taxi-hailing service with a powerful app, providing users
              with a convenient and reliable way to book rides.
            </p>

            <img
              src="https://source.unsplash.com/400x300/?taxi"
              alt="Taxi"
              className="absolute bottom-4 right-4 w-40 rounded-xl shadow"
            />
          </div>


          {/* ELECTRICIAN */}
          <div className="bg-[#ffecc2] rounded-3xl p-8 relative overflow-hidden border border-yellow-200 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Uber For Electrician
            </h3>
            <p className="text-gray-800 mb-6">
              Provide customers with a quick and easy way to book electricians
              for their home or office needs.
            </p>

            <img
              src="https://source.unsplash.com/400x300/?electrician"
              alt="Electrician"
              className="absolute bottom-4 right-4 w-40 rounded-xl shadow"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExploreAppsSection;