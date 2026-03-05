import React, { useState } from "react";
import img1 from "../../assets/Car-rental/rental-app1.webp"
import img2 from "../../assets/Car-rental/rental-app2.webp"
import img3 from "../../assets/Car-rental/rental-app3.webp"
import img4 from "../../assets/Car-rental/rental-app4.webp"
import img5 from "../../assets/Car-rental/rental-app5.webp"
import img6 from "../../assets/Car-rental/rental-app6.webp"

const customerData = [
  {
    title: "Registration",
    text: "Customers need to register on the app by providing basic details and documents.",
    img: img1,
  },
  {
    title: "Search Vehicle",
    text: "Search vehicles based on location, date and preferences.",
    img: img2,
  },
  {
    title: "Booking Request",
    text: "Select vehicle and send booking request to host.",
    img: img3,
  },
  {
    title: "Make Payment",
    text: "Pay using debit card, credit card, wallet etc.",
    img: img4,
  },
  {
    title: "Receive Vehicle",
    text: "Reach location and receive the vehicle.",
    img: img5,
  },
  {
    title: "Rate the Service",
    text: "Give rating after ride experience.",
    img: img6,
  },
];

const hostData = [
  {
    title: "Add Vehicle",
    text: "Host adds vehicle details.",
    img: "/img1.png",
  },
  {
    title: "Receive Request",
    text: "Host receives booking request.",
    img: "/img2.png",
  },
  {
    title: "Accept Booking",
    text: "Host accepts the request.",
    img: "/img3.png",
  },
  {
    title: "Get Payment",
    text: "Host receives payment.",
    img: "/img4.png",
  },
  {
    title: "Deliver Car",
    text: "Give car to customer.",
    img: "/img5.png",
  },
  {
    title: "Get Review",
    text: "Receive rating.",
    img: "/img6.png",
  },
];

const HowAppWorks = () => {
  const [tab, setTab] = useState("customer");

  const data = tab === "customer" ? customerData : hostData;

  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-6xl mx-auto px-4">

        {/* ---------- HEADER ---------- */}

        <div className="text-center mb-10">

          {/* blue pill */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 bg-white shadow-sm">

              <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>

              <span className="text-sm text-gray-700">
                How App Works
              </span>

            </div>
          </div>


          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            How Our Car Rental App Works for Both Customers and Hosts
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore how our Car Rental App seamlessly connects customers and hosts,
            ensuring an easy rental experience.
          </p>

        </div>



        {/* ---------- TOGGLE ---------- */}

        <div className="flex justify-center mb-10">

          <div className="flex items-center bg-white border rounded-full p-1 shadow">

            <button
              onClick={() => setTab("customer")}
              className={`px-5 py-2 rounded-full transition ${
                tab === "customer"
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                  : "text-gray-600"
              }`}
            >
              Customer App
            </button>

            <button
              onClick={() => setTab("host")}
              className={`px-5 py-2 rounded-full transition ${
                tab === "host"
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                  : "text-gray-600"
              }`}
            >
              Host App
            </button>

          </div>

        </div>



        {/* ---------- CARDS ---------- */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {data.map((item, i) => (
            <div
              key={i}
              className="
                bg-[#e6f0f4]
                rounded-2xl
                p-5
                flex
                flex-col
                justify-between
                min-h-[230px]
              "
            >

              <div>

                <h3 className="text-sky-600 font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-700">
                  {item.text}
                </p>

              </div>


              {/* image */}
              <div className="flex justify-center mt-4">

                <img
                  src={item.img}
                  alt=""
                  className="h-28 object-contain"
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HowAppWorks;