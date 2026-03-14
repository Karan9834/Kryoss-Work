import React from "react";

const data = [
  {
    title: "1. Gathering Requirements",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    text:
      "We understand your business requirements and plan the features needed for your car rental app.",
  },
  {
    title: "2. Design & Development",
    img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    text:
      "Our team designs UI and develops the application using latest technologies.",
  },
  {
    title: "3. Collect Third-Party Accounts",
    img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    text:
      "We integrate payment gateways, maps, authentication, and other third-party services.",
  },
  {
    title: "4. Test and Launch",
    img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    text:
      "We test the application carefully and launch it after quality check.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-6xl mx-auto px-4">

        {/* pill */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border rounded-full px-4 py-1 bg-white">
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
            <span>Development Process</span>
          </div>
        </div>

        {/* title */}
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-3">
          Our Car Rental{" "}
          <span className="text-sky-600">
            App Development Process
          </span>
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          We follow a structured and efficient process.
        </p>


        {/* cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {data.map((item, i) => (
            <div key={i} className="flip-card">

              <div className="flip-card-inner">

                {/* FRONT */}
                <div className="flip-card-front">

                  <h3 className="text-sky-600 font-semibold mb-4 text-center">
                    {item.title}
                  </h3>

                  <img
                    src={item.img}
                    className="w-40 mx-auto"
                  />

                </div>


                {/* BACK */}
                <div className="flip-card-back">

                  <h3 className="font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p>{item.text}</p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProcessSection;