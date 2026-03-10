import React from "react";

const apps = [
  {
    title: "Gojek Clone App",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Uber Clone App",
    img: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
  },
  {
    title: "Food Delivery App",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    title: "Medicine Delivery App",
    img: "https://images.unsplash.com/photo-1585435557343-3b092031a831",
  },
  {
    title: "Handyman Service App",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
  {
    title: "Carpool Ride App",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  },
  {
    title: "Indrive Clone App",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  },
  {
    title: "Delivery Anything App",
    img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59",
  },
];

const OnDemandSolutions = () => {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* badge */}
        <div className="text-center mb-4">
          <span className="inline-block border px-4 py-1 rounded-full text-sm">
            Product Showcase
          </span>
        </div>

        {/* heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-3">
          Explore Our <span className="text-pink-500">On-Demand App</span> Solutions
        </h2>

        {/* subtitle */}
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Check out our best-selling on-demand solutions and find the perfect fit for your unique business needs.
        </p>

        {/* grid */}
        <div className="grid md:grid-cols-4 gap-6">

          {apps.map((app, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >

              <img
                src={app.img}
                alt=""
                className="w-full h-[170px] object-cover"
              />

              <div className="p-4">
                <h3 className="font-medium text-gray-800 text-sm">
                  {app.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default OnDemandSolutions;