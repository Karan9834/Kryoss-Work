import React from "react";

const BusinessSupport = () => {
  const cardsTop = [
    {
      title: "Dog walking app",
      desc: "Launch a dog walking service with ease, offering pet owners an efficient platform to book walks for their pets.",
      img: "https://whitelabelfox.com/assets/images/bento-grid/dog-walking-app.webp",
      bg: "bg-[#efe8d6]",
    },
    {
      title: "Food Delivery App",
      desc: "Create a seamless food delivery experience, allowing restaurants and customers to connect instantly.",
      img: "https://whitelabelfox.com/assets/images/bento-grid/food-delivery-app.webp",
      bg: "bg-[#f3e3d6]",
    },
  ];

  const cardsBottom = [
    {
      title: "Grocery Delivery App",
      desc: "Provide an easy way for users to shop for groceries and have them delivered to their doorstep.",
      img: "https://whitelabelfox.com/assets/images/bento-grid/grocery-delivery-app.webp",
      bg: "bg-[#e1f1e4]",
    },
    {
      title: "Home Cleaning Service",
      desc: "Offer a reliable platform for booking home cleaning services, connecting users with skilled cleaners.",
      img: "https://whitelabelfox.com/assets/images/bento-grid/home-cleaning-service.webp",
      bg: "bg-[#e4edf6]",
    },
    {
      title: "Uber tutor",
      desc: "Revolutionize tutoring services by offering students an easy way to book professional tutors.",
      img: "https://whitelabelfox.com/assets/images/bento-grid/uber-tutor.webp",
      bg: "bg-[#ece4f6]",
    },
    {
      title: "Uber Beauty",
      desc: "Set up a beauty service booking platform, allowing users to book at-home beauty treatments and services.",
      img: "https://whitelabelfox.com/assets/images/bento-grid/uber-beauty.webp",
      bg: "bg-[#e6f5f9]",
    },
    {
      title: "Uber for Taxi",
      desc: "Launch a taxi-hailing service with a powerful app, providing users with a convenient and reliable way to book rides.",
      img: "https://whitelabelfox.com/assets/images/bento-grid/uber-for-taxi.webp",
      bg: "bg-[#fbe4ef]",
    },
    {
      title: "Uber for electicians",
      desc: "Provide customers with a quick and easy way to book electricians for their home or office needs.",
      img: "https://whitelabelfox.com/assets/images/bento-grid/uber-for-electrician.webp",
      bg: "bg-[#e8f4ff]",
    },
  ];

  return (
    <section className="py-20 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-sm text-gray-700 bg-white">
            <span className="w-2.5 h-2.5 bg-pink-500 rounded-full"></span>
            Adaptive Enterprise Solutions
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
          Examine our <span className="text-pink-500">Extensive Portfolio</span> of
          Platform Architecture
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          We provide a versatile collection of deployable, adaptable on-demand 
          frameworks tailored for enterprise growth. Spanning from Canine 
          Logistics to Essential Fulfillment and Aesthetic Services.
        </p>

        {/* FIRST ROW */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {cardsTop.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-3xl p-8 flex items-center justify-between`}
            >
              <div className="max-w-[60%]">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>

              <img
                src={item.img}
                alt={item.title}
                className="w-36 object-contain"
              />
            </div>
          ))}
        </div>

        {/* SECOND + THIRD ROW */}
        <div className="grid md:grid-cols-3 gap-8">
          {cardsBottom.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-3xl p-8 flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>

              <img
                src={item.img}
                alt={item.title}
                className="w-full mt-1 object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BusinessSupport;