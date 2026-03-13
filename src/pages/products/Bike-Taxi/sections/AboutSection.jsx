import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            About the App
          </h2>

          <h3 className="text-2xl text-gray-700 mt-3">
            Launch Your Own Bike Taxi App for Maximum Growth
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="w-full">
            <img
              src="http://localhost:5173/src/assets/transport-bikeride-img/aboutapp.webp"
              alt="Bike Taxi App"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-6 text-gray-600 text-lg leading-relaxed">

            <p>
              Our Bike Taxi App Development solution helps businesses meet the
              rising demand for quick, affordable, and hassle-free
              transportation. Designed for urban commuters, it offers a
              feature-rich, user-friendly platform to tap into the growing
              on-demand bike taxi market.
            </p>

            <p>
              The On-Demand Bike Taxi App allows users to book rides instantly,
              track drivers in real-time, and enjoy cashless payments — all
              from their smartphones. It’s not just about convenience for
              riders; it’s also a powerful tool for businesses to manage
              operations efficiently with advanced analytics and admin
              controls.
            </p>

            <p>
              Whether you're a startup or an established business looking to
              expand, our Bike Taxi Booking App Development service offers a
              scalable and customizable solution. We ensure that the app fits
              your brand identity, operational needs, and business goals while
              delivering a smooth experience for both riders and drivers.
            </p>

            <p>
              With our Bike Ride Booking App, you can offer reliable,
              eco-friendly, and cost-effective transportation options. It’s the
              perfect solution for entrepreneurs who want to enter the booming
              bike taxi market.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;