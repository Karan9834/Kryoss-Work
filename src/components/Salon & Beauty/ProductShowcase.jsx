import React from "react";

const ProductShowcase = () => {
  const products = [
    {
      title: "Massage Therapy App",
      image: "https://images.unsplash.com/photo-1544161515-4ae6ce6ca8b8?w=200&q=80",
    },
    {
      title: "Laundry Service App",
      image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=200&q=80",
    },
    {
      title: "Tow-Truck Service App",
      image: "https://images.unsplash.com/photo-1586191582151-f73972d10737?w=200&q=80",
    },
    {
      title: "Dog Walking App",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=200&q=80",
    },
    {
      title: "Snow Removal App",
      image: "https://images.unsplash.com/photo-1517204324032-fb3012de9b59?w=200&q=80",
    },
    {
      title: "Pest Control App",
      image: "https://images.unsplash.com/photo-1587324438673-56c507c6f085?w=200&q=80",
    },
    {
      title: "Liquor Delivery App",
      image: "https://images.unsplash.com/photo-1569058242252-62324e68884c?w=200&q=80",
    },
    {
      title: "Cannabis Delivery App",
      image: "https://images.unsplash.com/photo-1548366086-7f1b76106622?w=200&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">

        {/* ===== BADGE + HEADING ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 border border-[#55D7FF] 
                          text-black px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
            Platform Gallery
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold">
            Examine our <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text"> Versatile On-Demand Framework Solutions</span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Audit our highest-performing on-demand architectures and identify the 
            ideal logical framework for your specific commercial requirements.
          </p>

        </div>

        {/* ===== PRODUCT CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md 
                         p-6 text-center 
                         border border-gray-100
                         hover:shadow-xl 
                         hover:-translate-y-2 
                         transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-contain mb-6"
              />

              <h3 className="text-lg font-semibold bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">
                {product.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;