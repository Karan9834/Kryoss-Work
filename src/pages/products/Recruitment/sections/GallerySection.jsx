import React from "react";

const images = [
  {
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    title: "ATS Dashboard",
  },
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    title: "Team Collaboration",
  },
  {
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    title: "Candidate Tracking",
  },
  {
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    title: "Recruitment Process",
  },
  {
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    title: "Hiring Analytics",
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    title: "Workflow Automation",
  },
];

const ATSGallery = () => {
  return (
    <section className="bg-[#0A0A0F] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Platform in Action
          </h2>
          <p className="mt-4 text-gray-400">
            See how our ATS simplifies recruitment workflows.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl">

              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Title */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ATSGallery;