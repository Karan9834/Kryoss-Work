import React from "react";

const EstablishBrand = () => {
  return (
    <section className="py-20 bg-white"
    style={{backgroundImage: "url(https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-launch-your-app-bg.webp)"}}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm bg-gray-100 rounded-full text-gray-700 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-[#003C52] to-[#01B49E] rounded-full"></span>
            Establish Your Brand
          </span>

          {/* Heading */}
          <h2 className="text-4xl font-bold mb-6 leading-snug text-white">
            Go Online Rapidly with Our  White Label{" "}
            <span className="bg-gradient-to-r from-[#003C52] to-[#01B49E] text-transparent bg-clip-text">
              Milk Delivery App Solution
            </span>
          </h2>

          {/* Paragraphs */}
          <p className="text-white mb-6 leading-relaxed">
            Our white label milk delivery app solution empowers you to enter the
            growing online milk delivery market quickly and efficiently. With a
            fully customizable platform, you can tailor every aspect of the app
            to match your brand's identity and business model, ensuring a
            seamless experience for your customers and drivers.
          </p>

          <p className="text-white mb-6 leading-relaxed">
            We offer a wide range of branding options, allowing you to create a
            unique presence in the competitive market. From logo integration to
            color schemes and design elements, you’ll have complete control over
            the look and feel of your app. This level of customization ensures
            your brand message resonates effectively with your target audience.
          </p>

          <p className="text-white leading-relaxed">
            With our solution, you can digitize your business in a matter of
            weeks, not months. Skip the long development cycles and launch a
            fully functional milk delivery service that’s ready to scale. Start
            offering efficient online deliveries right away and stay ahead of
            the competition.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://whitelabelfox.com/assets/images/daily-delivery-app/fox-daily-delivery-app-launch-your-app.webp"
            alt="Milk Delivery App"
            className="w-[420px] max-w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default EstablishBrand;