import React from "react";

const reviews = [
  {
    name: "Mr. Sene",
    date: "13 Jan 2026 | Rating 4.0",
    title: "Mr. Sene on Choosing White Label Fox for His Uber Clone Project",
    logo: "https://whitelabelfox.com/assets/images/testimonial/HSI.webp",
    desc: "I worked with White Label Fox Pvt. Ltd on a ride-hailing project in Africa. The team is very serious, professional, and always attentive. They take the time to understand the project's needs and are constantly available to provide solutions and move things forward. Communication is clear and follow-up is rigorous. I recommend them without hesitation.",
  },
  {
    name: "Mr. Stan",
    date: "14 May 2025",
    title: "Mr. Stan shares his experience with White Label Fox for his Fox-Drive (inDriver Clone App)",
    logo: "https://whitelabelfox.com/assets/images/testimonial/mr-stan-icon.webp",
    desc: "Working with White Label Fox Pvt. Ltd to develop our ride-hailing system has been one of the best decisions we've ever made. From day one, their team went above and beyond to understand our vision, guide us through every step, and deliver a platform that exceeded our expectations. The level of support, professionalism, and dedication they showed throughout the entire process was simply unmatched.They didn’t just build a system — they became true partners in our journey. Their technical expertise, attention to detail, and commitment to quality helped bring our vision to life in ways we couldn’t have imagined. Even when challenges arose, WLF was right there with quick solutions and a positive attitude.If you’re looking for a team that genuinely cares about your success and delivers results, look no further than White Label Fox Pvt. Ltd. We are beyond grateful for their work and proud to have collaborated with such an exceptional company.Highly, highly recommended!",
  },
  {
    name: "Mr. Jacques Rocca Serra",
    date: "25 April 2025",
    title: "Exceptional Service, Creative Team & No Hidden Costs – Truly Appreciated to WLF Team",
    logo: "https://whitelabelfox.com/assets/images/testimonial/jacques-rocca-serra-icon.webp",
    desc: "Professionnels à l’écoute et réactif , compétences et créativité , tarif raisonnable sans surprise . Mérite les 5 étoiles. !! Entreprise à taille humaine avec un excellent service client qui réagi et suit les clients au quotidien. Avec cette équipe on a l’impressd’etrecleurs seul client privilégié. C’est très rassurant et super agréable pour accompagner un développement d’applications comme nous avons fait. Merci ne changez rien.",
  },
  {
    name: "Calvin Mnisi",
    date: "3 September 2023",
    title: "WLF is invaluable! Viral & Samarth made our project a success-don’t hesitate to work with them!",
    logo: "https://whitelabelfox.com/assets/images/testimonial/Calvin-Mnisi.webp",
    desc: "I can not say enough great things about WLF. They are absolutely amazing. Viral and Samarth were beyond incredible with our project. I cannot recommend them enough. If you’re considering working with them, don’t hesitate, it would be the best thing you do for your company. Absolutely, invaluably amazing !",
  },
  {
    name: "Dridi Melek",
    date: "3 September 2023",
    title: "Top-notch mobile app, professional team, and excellent support! A truly satisfying experience.",
    logo: "https://whitelabelfox.com/assets/images/testimonial/Dridi-Melek.webp",
    desc: "I want to express my utmost satisfaction with this company and their mobile application. The app is outstanding in terms of design and functionality, perfectly meeting my professional needs. The team I worked with stood out for their professionalism, responsiveness, and dedication to customer satisfaction. I highly recommend their services. Thank you for this exceptional experience !",
  },
  {
    name: "Developer EagleSouq",
    date: "3 September 2023",
    title: "Reliable, responsive, and committed-White Label Fox is the best choice for any project!",
    logo: "https://whitelabelfox.com/assets/images/testimonial/Developer-EagleSouq.webp",
    desc: "White Label Fox one of the best companies that I dealt with from my location here in the Middle East, full commitment at the time of project delivery, very fast maintenance for any new requirements, a support team and immediate communication with the appropriate methods of communication.I would recommend anyone to work with this White Label Fox.",
  },
   {
    name: "Eric Eric",
    date: "3 September 2023",
    title: "Great support for custom app development! Rapid delivery and a highly reliable team.",
    logo: "https://whitelabelfox.com/assets/images/testimonial/Eric-Eric.webp",
    desc: "This team has helped me with my new project. I would recommend them for a custom app development project. Because they have helped many clients including me to develop an app rapidly. Thanks to our project manager and the rest of the team I was able to launch my project on time. They are honest and transparent team.",
  },
   {
    name: "from hom",
    date: "3 September 2023",
    title: "Professional team, quick problem-solving, and top-notch designs. A pleasure working with them!",
    logo: "https://whitelabelfox.com/assets/images/testimonial/from-hom.webp",
    desc: "White Label Fox, the best team and service! It was a pleasure to have them handling our project, it was so smooth, the team is professional and experts. They easily solve any obstacle or problem within hours it will be solved. They got awesome products with great UI and UX designs. Thank you so much for the effort you made to make this project alive.",
  },
];

const GoogleReviews = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 border border-gray-300 px-4 py-1.5 rounded-full text-sm">
            <span className="w-2.5 h-2.5 bg-orange-400 rounded-full"></span>
            Words of Appreciation
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Real Reviews <span className="text-orange-400"> from Google</span>
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-center max-w-5xl mx-auto mb-16">
          Discover what our clients say about us! These genuine Google reviews
          reflect our commitment to delivering top-notch solutions and
          exceptional support.
        </p>

        {/* Masonry Cards */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            >

              {/* Logo */}
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                  <img
                    src={review.logo}
                    alt="logo"
                    className="w-15"
                  />
                </div>
              </div>

              {/* Name */}
              <h4 className="text-center font-semibold">
                {review.name}
              </h4>

              {/* Date */}
              <p className="text-center text-sm text-gray-500 mb-4">
                {review.date}
              </p>

              {/* Title */}
              <h3 className="font-semibold mb-2">
                {review.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {review.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default GoogleReviews;