import React from "react";
import dogs from "../../assets/DatingApp/datingdogs.webp";
import food from "../../assets/DatingApp/datingfood.webp";
import grocery from "../../assets/DatingApp/datingrocery.webp";
import cleaning from "../../assets/DatingApp/datinghomecleaning.webp";
import tutor from "../../assets/DatingApp/datingtutor.webp";
import beauty from "../../assets/DatingApp/datingbeauty.webp";
import taxi from "../../assets/DatingApp/datingtaxi.webp";
import electrician from "../../assets/DatingApp/datingelectrician.webp";
const apps = [
  {
    title: "Dog walking app",
    text: "Launch a dog walking service with ease, offering pet owners an efficient platform to book walks for their pets.",
    bg: "bg-[#ECE6D6]",
    img: dogs,
    col: "col-span-1",
  },
  {
    title: "Food Delivery App",
    text: "Create a seamless food delivery experience, allowing restaurants and customers to connect instantly.",
    bg: "bg-[#F3E6D6]",
    img: food,
    col: "col-span-1",
  },
  {
    title: "Grocery Delivery App",
    text: "Provide an easy way for users to shop for groceries and have them delivered to their doorstep.",
    bg: "bg-[#E3F1E3]",
    img: grocery,
    col: "row-span-2",
  },
  {
    title: "Home Cleaning Service",
    text: "Offer a reliable platform for booking home cleaning services.",
    bg: "bg-[#E4EEF7]",
    img: cleaning,
    col: "",
  },
  {
    title: "Uber tutor",
    text: "Revolutionize tutoring services by offering students an easy way to book professional tutors.",
    bg: "bg-[#EDE6F4]",
    img: tutor,
    col: "",
  },
  {
    title: "Uber Beauty",
    text: "Set up a beauty service booking platform allowing users to book at-home treatments.",
    bg: "bg-[#F3E3EA]",
    img: beauty,
    col: "col-span-2",
  },
  {
    title: "Uber For Taxi",
    text: "Launch a taxi-hailing service with a powerful booking system.",
    bg: "bg-[#E6EDF7]",
    img: taxi,
    col: "",
  },
  {
    title: "Uber For Electrician",
    text: "Provide customers with an easy way to book electricians.",
    bg: "bg-[#F4E5E3]",
    img: electrician,
    col: "",
  },
];

const OnDemandApps = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="inline-block border px-4 py-1 rounded-full text-sm mb-4">
            Businesses We Support
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Explore Our <span className="text-pink-500">Diverse Range</span> of On-Demand Apps
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We offer a variety of ready-to-launch, customizable on-demand apps to suit your
            business needs.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[220px]">

          {apps.map((app, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 relative overflow-hidden ${app.bg} ${app.col}`}
            >

              <h3 className="text-lg font-semibold mb-2">
                {app.title}
              </h3>

              <p className="text-sm text-gray-600 max-w-[260px]">
                {app.text}
              </p>

              {/* IMAGE PLACEHOLDER */}
              <div className="absolute bottom-0 right-0 w-44 h-44">
                <img
                  src={app.img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OnDemandApps;