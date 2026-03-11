import React from "react";

const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Sarah Johnson",
    desc: "Working here has been an incredible journey. The collaborative culture and continuous learning opportunities help me grow professionally and personally.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Michael Lee",
    desc: "The team spirit here is amazing.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/60.jpg",
    name: "Emily Carter",
    desc: "I love the flexibility and innovation-driven environment that pushes everyone to think creatively and deliver the best results.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/28.jpg",
    name: "David Kim",
    desc: "From mentorship programs to exciting projects, every day here feels rewarding.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/52.jpg",
    name: "Sophia Miller",
    desc: "The culture encourages innovation.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "James Walker",
    desc: "A workplace where ideas are valued and collaboration drives success.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Olivia Brown",
    desc: "I have grown so much here thanks to supportive leadership and an amazing team culture.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Daniel Scott",
    desc: "Great people, exciting challenges, and lots of opportunities to learn.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/25.jpg",
    name: "Emma Wilson",
    desc: "The environment encourages creativity and professional growth every single day.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Robert Adams",
    desc: "A truly inspiring place to work.",
  },
];

const TeamVoices = () => {
  const firstRow = testimonials.slice(0, 5);
  const secondRow = testimonials.slice(5);

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
         

           <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 border px-4 py-1 rounded-full text-sm">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
          Words from our team
          </div>
        </div>

          <h2 className="text-5xl font-bold mb-4">
            Voices <span className="text-orange-400">of Our Team</span>
          </h2>

          <p className="text-gray-600 max-w-6xl mx-auto">
            Our team is the heart of our success. Hear directly from our
            passionate developers, designers, and strategists about their
            experiences and growth journey.
          </p>
        </div>

        {/* ROW 1 */}
        <div className="overflow-hidden group mb-8">
          <div className="flex gap-6 animate-scroll group-hover:[animation-play-state:paused]">

            {[...firstRow, ...firstRow].map((item, i) => (
              <div
                key={i}
                className="min-w-[300px] bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.img}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>

                <h3 className="text-center font-semibold text-lg mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm text-center">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* ROW 2 */}
        <div className="overflow-hidden group">
          <div className="flex gap-6 animate-scroll-reverse group-hover:[animation-play-state:paused]">

            {[...secondRow, ...secondRow].map((item, i) => (
              <div
                key={i}
                className="min-w-[300px] bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.img}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>

                <h3 className="text-center font-semibold text-lg mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm text-center">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamVoices;