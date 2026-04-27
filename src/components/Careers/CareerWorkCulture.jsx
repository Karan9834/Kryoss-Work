import react from 'react';
import img1 from "../../assets/company-career-img/work-culture-img/KRYOSS@ LIFE.png";
import img2 from "../../assets/company-career-img/work-culture-img/aniversary1.png";
import img3 from "../../assets/company-career-img/work-culture-img/aniversary2.png";
import img4 from "../../assets/company-career-img/work-culture-img/aniversary3.png";
import img5 from "../../assets/company-career-img/work-culture-img/christmas1.png";
import img6 from "../../assets/company-career-img/work-culture-img/christmas2.png";
import img7 from "../../assets/company-career-img/work-culture-img/christmas3.png";
import img8 from "../../assets/company-career-img/work-culture-img/dewali1.png";
import img9 from "../../assets/company-career-img/work-culture-img/dewali2.png";
import img10 from "../../assets/company-career-img/work-culture-img/dewali3.png";
import img11 from "../../assets/company-career-img/work-culture-img/holi1.png";
import img12 from "../../assets/company-career-img/work-culture-img/holi2.png";
import img13 from "../../assets/company-career-img/work-culture-img/holi3.png";
import img14 from "../../assets/company-career-img/work-culture-img/image1.png";
import img15 from "../../assets/company-career-img/work-culture-img/image10.png";
import img16 from "../../assets/company-career-img/work-culture-img/image11.png";
import img17 from "../../assets/company-career-img/work-culture-img/image12.png";
import img18 from "../../assets/company-career-img/work-culture-img/image13.png";
import img19 from "../../assets/company-career-img/work-culture-img/image14.png";
import img20 from "../../assets/company-career-img/work-culture-img/image15.png";
import img21 from "../../assets/company-career-img/work-culture-img/image2.png";
import img22 from "../../assets/company-career-img/work-culture-img/image3.png";
import img23 from "../../assets/company-career-img/work-culture-img/image4.png";
import img24 from "../../assets/company-career-img/work-culture-img/image5.png";
import img25 from "../../assets/company-career-img/work-culture-img/image6.png";
import img26 from "../../assets/company-career-img/work-culture-img/image7.png";
import img27 from "../../assets/company-career-img/work-culture-img/image8.png";
import img28 from "../../assets/company-career-img/work-culture-img/image9.png";
import img29 from "../../assets/company-career-img/work-culture-img/meeting1.png";
import img30 from "../../assets/company-career-img/work-culture-img/meeting2.png";
import img31 from "../../assets/company-career-img/work-culture-img/meeting3.png";
import img32 from "../../assets/company-career-img/work-culture-img/off site1.png";
import img33 from "../../assets/company-career-img/work-culture-img/off site2.png";
import img34 from "../../assets/company-career-img/work-culture-img/off site3.png";

const CareerWorkCulture = () => {

    const row1Images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17
    ];

    const row2Images = [
        img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34
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
                        Life at <span className="text-orange-500">KryossOne</span>
                    </h2>

                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Experience the vibrant work culture at KryossOne! From office
                        moments to festival celebrations, our team thrives in a dynamic and
                        joyful environment.
                    </p>

                </div>

            </div>

            {/* ROW 1 */}

            <div className="overflow-hidden mb-6">

                <div
                    className="flex gap-6 w-max animate-scroll-left"
                >

                    {[...row1Images, ...row1Images].map((img, i) => (
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
                    className="flex gap-6 w-max animate-scroll-right"
                >

                    {[...row2Images, ...row2Images].map((img, i) => (
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

        .animate-scroll-left {
          animation: scrollLeft 60s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }

        .animate-scroll-right {
          animation: scrollRight 70s linear infinite;
        }
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
        `}
            </style>

        </section>
    );
};

export default CareerWorkCulture;