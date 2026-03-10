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

          {/* Card */}
          {[
            {
              title: "Dog walking app",
              desc: "Launch a dog walking service with ease, offering pet owners a platform to book walks.",
              img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
              bg: "bg-[#F3EEDB]",
            },
            {
              title: "Food Delivery App",
              desc: "Create a seamless food delivery experience allowing restaurants and customers to connect instantly.",
              img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
              bg: "bg-[#F5E6D7]",
              span: "lg:col-span-2",
            },
            {
              title: "Grocery Delivery App",
              desc: "Provide an easy way for users to shop for groceries and have them delivered.",
              img: "https://images.unsplash.com/photo-1542838132-92c53300491e",
              bg: "bg-[#DCEBD9]",
            },
            {
              title: "Home Cleaning Service",
              desc: "Offer a reliable platform for booking home cleaning services.",
              img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
              bg: "bg-[#E1EDF8]",
            },
            {
              title: "Uber tutor",
              desc: "Revolutionize tutoring services by offering students a way to book tutors.",
              img: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
              bg: "bg-[#EEE7F8]",
            },
            {
              title: "Uber Beauty",
              desc: "Set up a beauty service booking platform allowing users to book at-home beauty treatments.",
              img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
              bg: "bg-[#F5DDE3]",
              span: "md:col-span-2",
            },
            {
              title: "Uber For Taxi",
              desc: "Launch a taxi-hailing service with a powerful app.",
              img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
              bg: "bg-[#E2E9F3]",
            },
            {
              title: "Uber For Electrician",
              desc: "Provide customers with a quick and easy way to book electricians.",
              img: "https://whitelabelfox.com/assets/images/bento-grid/uber-for-electrician.webp",
              bg: "bg-[#F2E3E3]",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.bg} ${item.span || ""} rounded-3xl p-8 flex flex-col justify-between min-h-[260px] overflow-hidden`}
            >

              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                <p className="text-gray-700 text-sm max-w-[320px]">
                  {item.desc}
                </p>
              </div>

              <img
                src={item.img}
                alt={item.title}
                className="mt-6 w-full max-h-[160px] object-contain self-end"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ExploreApps;