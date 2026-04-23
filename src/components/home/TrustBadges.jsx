import img1 from "../../assets/Awards/1.png";
import img2 from "../../assets/Awards/2.png";
import img3 from "../../assets/Awards/3.png";
import img4 from "../../assets/Awards/4.png";
import img5 from "../../assets/Awards/5.png";
import img6 from "../../assets/Awards/6.png";
import img7 from "../../assets/Awards/7.png";
import img8 from "../../assets/Awards/8.png";

const badges = [
  { name: "Top Fastest Growing Web Development Company in India", image: img1 },
  { name: "Top Mobile App Development Company in India", image: img2 },
  { name: "Best User Engagement in 2025", image: img3 },
  { name: "Top 10 PHP Development Company in India", image: img4 },
  { name: "The Champions – Zen Suggest", image: img5 },
  { name: "Best Value software Foodstar in 2022", image: img6 },
  { name: "Award 7", image: img7 },
  { name: "Award 8", image: img8 },
];

export default function TrustBadges() {
  return (
    <section id="awards" className="py-20 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Awards & Recognition
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            Recognized Excellence in{" "}
            <span className="text-primary italic">App Development</span> & IT
            Solutions
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const scales = [
              "scale-130",
              "scale-140",
              "scale-140",
              "scale-150",
              "scale-130",
              "scale-140",
              "scale-135",
              "scale-135",
            ];

            return (
              <div
                key={index}
                className="flex items-center justify-center bg-white border border-gray-200 rounded-2xl p-6 h-52 hover:shadow-xl hover:border-primary/30 transition-all"
              >
                <img
                  src={badge.image}
                  alt={badge.name}
                  className={`max-h-full max-w-full object-contain ${scales[index]}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
