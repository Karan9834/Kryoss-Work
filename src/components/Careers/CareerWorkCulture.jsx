import react from 'react';
import Careerwork1 from "../../assets/company-career-img/Careerwork1.webp";
import Careerwork2 from "../../assets/company-career-img/Careerwork2.webp";
import Careerwork3 from "../../assets/company-career-img/Careerwork3.webp";
import Careerwork4 from "../../assets/company-career-img/Careerwork4.webp";
import Careerwork5 from "../../assets/company-career-img/Careerwork5.webp";
import Careerwork6 from "../../assets/company-career-img/Careerwork6.webp";
const CareerWorkCulture = () => {

    const images = [
        Careerwork1,
        Careerwork2,
        Careerwork3,
        Careerwork4,
        Careerwork5,
        Careerwork6,
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm text-gray-600 mb-4">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Work Culture
                    </div>

                    <h2 className="text-4xl font-semibold mb-4">
                        Life at <span className="text-orange-500">Kryoss Work</span>
                    </h2>

                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Experience the vibrant work culture at Kryoss Work! From office
                        moments to festival celebrations, our team thrives in a dynamic and
                        joyful environment.
                    </p>

                </div>

            </div>

            {/* ROW 1 */}

            <div className="overflow-hidden mb-6">

                <div
                    className="flex gap-6 w-max hover:[animation-play-state:paused]"
                    style={{ animation: "scrollLeft 35s linear infinite" }}
                >

                    {[...images, ...images].map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            className={`h-56 object-cover rounded-2xl ${i % 3 === 0
                                ? "w-96"
                                : i % 2 === 0
                                    ? "w-80"
                                    : "w-60"
                                }`}
                        />
                    ))}

                </div>

            </div>

            {/* ROW 2 */}

            <div className="overflow-hidden">

                <div
                    className="flex gap-6 w-max hover:[animation-play-state:paused]"
                    style={{ animation: "scrollRight 40s linear infinite" }}
                >

                    {[...images, ...images].map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            className={`h-56 object-cover rounded-2xl ${i % 2 === 0
                                ? "w-80"
                                : i % 3 === 0
                                    ? "w-96"
                                    : "w-60"
                                }`}
                        />
                    ))}

                </div>

            </div>

            {/* CSS for animation */}

            <style>
                {`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        `}
            </style>

        </section>
    );
};

export default CareerWorkCulture;