import React from "react";
import Dogcustomer from "../../assets/DogWalking/Cutomer-benefits.webp"

const CustomerBenefits = () => {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border border-green-600 rounded-full px-4 py-1 text-sm text-green-700">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            Customer Benefits
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center mb-6 leading-snug">
          How Uber-Like <span className="text-green-700">Dog Walking App Development</span> Benefit Your Customers?
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Make the most out of different pet care services, including dog walking,
          dog sitting, dog training, etc., to grow your business
        </p>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">

            {/* Paw Background */}
            <div className="absolute w-[420px] h-[420px] bg-green-200 rounded-[120px] blur-xl opacity-60"></div>

            {/* Image */}
            <img
              src={Dogcustomer}
              alt="Dog Walking App"
              className="relative w-[420px] object-contain"
            />

          </div>

          {/* RIGHT TEXT */}
          <div className="text-gray-700 space-y-6 leading-relaxed">

            <p>
              Everything has become easy to manage, search for, and book in the
              digitally connected world. Moreover, people lack the time and
              energy to care for their pets. Hence, they are looking for quick
              and smart solutions, such as Uber for dog-walking apps, to manage
              pet-related activities without disturbing their tight schedules.
            </p>

            <p>
              With the increasing number of pet owners and busy lifestyles,
              the demand for reliable dog-walking services is rapidly growing.
              Entrepreneurs can seize this opportunity by launching their own
              dog-walking apps, providing pet owners with peace of mind knowing
              their pets are well taken care of.
            </p>

            <p>
              Therefore, dog-walking app development has become a game-changer
              for budding entrepreneurs who want to enter the market to earn
              substantial income. The pet tech care market is booming, and
              leveraging this market trend, one can tap into this lucrative
              field. On the other hand, users can be connected with professional
              service providers who can take care of their pets.
            </p>

            <p>
              The pet care industry continues to expand, creating opportunities
              for business owners to build a strong presence and generate
              revenue through innovative solutions. The key to success is
              offering a seamless experience for both users and service
              providers while maintaining a flexible, easy-to-use platform.
            </p>

            <p>
              So, it is a win-win situation for both parties, entrepreneurs and
              customers. So what are you waiting for? Be the next player in the
              dog-walking market and thrive in the virtual community for dogs.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CustomerBenefits;