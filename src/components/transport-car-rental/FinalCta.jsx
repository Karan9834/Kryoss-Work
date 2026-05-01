import React from "react";

const UpdatesSubscribeSection = () => {
  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-4xl mx-auto text-center px-4">


        {/* pill */}

        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border px-4 py-1 rounded-full bg-white">

            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>

            Get Updates

          </div>
        </div>



        {/* title */}

        <h2 className="text-3xl md:text-4xl font-bold">

          Stay Ahead with Our{" "}
          <span className="text-sky-600">
            Latest Updates
          </span>

        </h2>



        {/* text */}

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">

          Subscribe to our newsletter for exclusive updates, and tips
          on the latest trends in app development solutions.
          Stay informed and never miss out on important updates!

        </p>



        {/* input */}

        <div className="mt-8 flex justify-center">

          <div
            className="
              flex
              w-full
              max-w-xl
              bg-white
              border
              rounded-full
              overflow-hidden
            "
          >

            <input
              type="email"
              placeholder="Enter your email here"
              className="
                flex-1
                px-5
                py-3
                outline-none
              "
            />

            <button
              className="
                bg-sky-500
                text-white
                px-6
                py-3
                rounded-full
                m-1
                hover:bg-sky-600
                transition
              "
            >
              Subscribe
            </button>

          </div>

        </div>



      </div>

    </section>
  );
};

export default UpdatesSubscribeSection;