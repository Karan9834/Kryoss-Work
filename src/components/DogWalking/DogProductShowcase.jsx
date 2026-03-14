import React from "react";

const products = [
  {
    title: "Gojek Clone App",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  },
  {
    title: "Uber Clone App",
    img: "https://images.unsplash.com/photo-1556122071-e404eaedb77f"
  },
  {
    title: "Food Delivery App",
    img: "https://images.unsplash.com/photo-1526367790999-0150786686a2"
  },
  {
    title: "Medicine Delivery App",
    img: "https://images.unsplash.com/photo-1585435557343-3b092031a831"
  },
  {
    title: "Handyman Service App",
    img: "https://whitelabelfox.com/assets/images/our-other-product/Fox-Handyman.webp"
  },
  {
    title: "Carpool Ride App",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
  },
  {
    title: "Indrive Clone App",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
  },
  {
    title: "Delivery Anything App",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center border border-gray-300 rounded-full px-4 py-1 text-sm mb-6">
          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
          Product Showcase
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-4">
          Explore Our <span className="text-green-600">On-Demand App</span> Solutions
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Check out our best-selling on-demand solutions and find the perfect fit
          for your unique business needs.
        </p>


        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >

              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />

              {/* Title */}
              <div className="p-4 text-left">
                <h3 className="font-medium text-gray-800">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProductShowcase;