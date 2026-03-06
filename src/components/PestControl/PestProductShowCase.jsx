import React from "react";

const apps = [
  {
    title: "Gojek Clone App",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  },
  {
    title: "Uber Clone App",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
  },
  {
    title: "Food Delivery App",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
  },
  {
    title: "Medicine Delivery App",
    image: "https://images.unsplash.com/photo-1580281657527-47a6d3c5e5b5"
  },
  {
    title: "Handyman Service App",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
  },
  {
    title: "Carpool Ride App",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
  },
  {
    title: "Indrive Clone App",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027"
  },
  {
    title: "Delivery Anything App",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db"
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="inline-block border border-gray-300 px-4 py-1 rounded-full text-sm mb-4">
          Product Showcase
        </span>

        {/* Heading */}
        <h2 className="text-4xl font-semibold">
          Explore Our{" "}
          <span className="text-orange-500">
            On-Demand App Solutions
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 mt-4 mb-14 max-w-2xl mx-auto">
          Check out our best-selling on-demand solutions and find the perfect fit
          for your unique business needs.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8">

          {apps.map((app, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-4 text-left font-medium text-gray-800">
                {app.title}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}