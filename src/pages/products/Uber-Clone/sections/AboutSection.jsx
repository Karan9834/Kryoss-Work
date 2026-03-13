import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              AI-Driven Uber Clone – A Smart Move for Modern Mobility Businesses
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Building a ride-hailing app from scratch is costly and time-consuming. 
              An AI-powered Uber clone removes that burden completely. With simple 
              customization based on your business requirements, you can launch 
              your ride-hailing platform quickly and efficiently.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              As a trusted taxi app development company, we provide a ready-to-use 
              platform with all the core modules similar to Uber. It is tested for 
              real-world operations and designed to help you attract more users 
              and grow your mobility business faster.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              What Makes the Uber Clone Script Perfect for Startups?
            </h3>

            <ul className="space-y-3 text-gray-600">

              <li>✔ Faster launch without core technology development delays.</li>

              <li>✔ AI-powered dispatch reduces operational workload from day one.</li>

              <li>✔ White-label solution gives full flexibility to run your brand.</li>

              <li>✔ Scalable architecture allows expansion to multiple cities.</li>

              <li>✔ Pre-integrated tools simplify operations for startups.</li>

            </ul>

          </div>


          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src="http://localhost:5173/src/assets/transport-uber-img/uberclonebusiness.webp"
              alt="Uber Clone Platform"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;