import React from "react";

const clients = [
  {
    name: "Mr. Stan",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Shares his seamless journey with our taxi app solution."
  },
  {
    name: "Mr. Labeeb",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Praises our team for delivering high quality booking app."
  },
  {
    name: "Oliveira Osman",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Highly impressed with delivery and support."
  },
  {
    name: "Alfanzo",
    img: "https://randomuser.me/api/portraits/men/64.jpg",
    text: "Company growth from zero to hero in one week."
  },
];

const ClientFeedbackSection = () => {
  return (
    <section
      className="
        py-20
        bg-gradient-to-r
        from-[#cfd9df]
        via-[#e2ebf0]
        to-[#f6d5c3]
      "
    >
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* pill */}

        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border px-4 py-1 rounded-full bg-white">

            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>

            <span>Client Feedback</span>

          </div>
        </div>


        {/* title */}

        <h2 className="text-3xl md:text-4xl font-bold mb-12">

          What Clients Say About Working With Our Taxi App Solutions

        </h2>



        {/* cards */}

        <div className="grid md:grid-cols-4 gap-6">

          {clients.map((c, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-2xl
                p-5
                shadow-md
                hover:shadow-xl
                transition
              "
            >

              {/* image */}

              <div className="relative">

                <img
                  src={c.img}
                  className="
                    w-full
                    h-[160px]
                    object-cover
                    rounded-xl
                  "
                />

                {/* play button */}

                <div
                  className="
                    absolute
                    bottom-[-15px]
                    left-1/2
                    -translate-x-1/2
                    w-10
                    h-10
                    bg-blue-500
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow
                  "
                >
                  ▶
                </div>

              </div>


              <div className="mt-6">

                <h3 className="font-semibold text-lg">
                  {c.name}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {c.text}
                </p>

              </div>

            </div>
          ))}

        </div>



        {/* button */}

        <div className="mt-10">

          <button
            className="
              px-6
              py-3
              rounded-full
              bg-blue-500
              text-white
              hover:bg-blue-600
            "
          >
            Watch Client Reviews
          </button>

        </div>

      </div>
    </section>
  );
};

export default ClientFeedbackSection;