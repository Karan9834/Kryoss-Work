import React from "react";

const ExploreApps = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="border border-gray-300 rounded-full px-4 py-1 text-sm">
            Businesses We Support
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center mb-4">
          Explore Our <span className="text-green-600">Diverse Range</span> of On-Demand Apps
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          We offer a variety of ready-to-launch, customizable on-demand apps to suit your business needs.
        </p>


        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Dog Walking */}
          <div className="bg-[#F3EEDB] rounded-3xl p-8 relative min-h-[260px] overflow-hidden">
            <h3 className="text-xl font-semibold mb-2">Dog walking app</h3>
            <p className="text-gray-700 text-sm max-w-[260px]">
              Launch a dog walking service with ease, offering pet owners a platform to book walks.
            </p>

            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
              className="absolute bottom-0 right-0 w-56"
            />
          </div>


          {/* Food */}
          <div className="bg-[#F5E6D7] rounded-3xl p-8 relative min-h-[260px] overflow-hidden md:col-span-1 lg:col-span-2">
            <h3 className="text-xl font-semibold mb-2">Food Delivery App</h3>
            <p className="text-gray-700 text-sm max-w-[320px]">
              Create a seamless food delivery experience, allowing restaurants and customers to connect instantly.
            </p>

            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              className="absolute bottom-0 right-6 w-72"
            />
          </div>


          {/* Grocery */}
          <div className="bg-[#DCEBD9] rounded-3xl p-8 relative min-h-[280px] overflow-hidden">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Grocery Delivery App
            </h3>

            <p className="text-gray-700 text-sm max-w-[260px]">
              Provide an easy way for users to shop for groceries and have them delivered.
            </p>

            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e"
              className="absolute bottom-0 right-0 w-64"
            />
          </div>


          {/* Cleaning */}
          <div className="bg-[#E1EDF8] rounded-3xl p-8 relative min-h-[260px] overflow-hidden">
            <h3 className="text-xl font-semibold mb-2">
              Home Cleaning Service
            </h3>

            <p className="text-gray-700 text-sm max-w-[260px]">
              Offer a reliable platform for booking home cleaning services.
            </p>

            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
              className="absolute bottom-0 right-0 w-52"
            />
          </div>


          {/* Tutor */}
          <div className="bg-[#EEE7F8] rounded-3xl p-8 relative min-h-[260px] overflow-hidden">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Uber tutor
            </h3>

            <p className="text-gray-700 text-sm max-w-[260px]">
              Revolutionize tutoring services by offering students a way to book tutors.
            </p>

            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
              className="absolute bottom-0 right-0 w-52"
            />
          </div>


          {/* Beauty */}
          <div className="bg-[#F5DDE3] rounded-3xl p-8 relative min-h-[260px] overflow-hidden md:col-span-2">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">
              Uber Beauty
            </h3>

            <p className="text-gray-700 text-sm max-w-[320px]">
              Set up a beauty service booking platform allowing users to book at-home beauty treatments.
            </p>

            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e"
              className="absolute bottom-0 right-6 w-72"
            />
          </div>


          {/* Taxi */}
          <div className="bg-[#E2E9F3] rounded-3xl p-8 relative min-h-[260px] overflow-hidden">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Uber For Taxi
            </h3>

            <p className="text-gray-700 text-sm max-w-[260px]">
              Launch a taxi-hailing service with a powerful app.
            </p>

            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c"
              className="absolute bottom-0 right-0 w-64"
            />
          </div>


          {/* Electrician */}
          <div className="bg-[#F2E3E3] rounded-3xl p-8 relative min-h-[260px] overflow-hidden">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Uber For Electrician
            </h3>

            <p className="text-gray-700 text-sm max-w-[260px]">
              Provide customers with a quick and easy way to book electricians.
            </p>

            <img
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b"
              className="absolute bottom-0 right-0 w-56"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default ExploreApps;