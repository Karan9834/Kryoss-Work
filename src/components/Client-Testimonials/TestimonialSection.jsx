import React from "react";

const testimonials = [
  {
    name: "Mr. Medyan Shares His Experience with White Label Fox | Food Delivery App",
    role: "CEO, Tech Startup",
    image: "https://whitelabelfox.com/assets/images/testimonial/Mr-Medyan.webp",
    text: "Mr. Medyan from Jordan shares his experience working with White Label Fox after purchasing our food delivery application (Fox-Food) for his business. After collaborating with multiple development companies in the past, he found our approach to be more structured, responsive, and dependable.  He highlights our quick response time and clear communication throughout the project. Every request, update, and change was handled efficiently, allowing the development process to move forward without delays or confusion. Managing a large logistics-focused operation required a stable and professionally built mobile application. Our team delivered a solution that met his operational needs while maintaining strong performance, usability, and technical reliability. He also appreciated the ongoing support and commitment from our team beyond delivery. This level of consistency and reliability helped establish White Label Fox as a long-term technology partner rather than just a development service provider.",
  },
  {
    name: "Ms. Emilie Shares Her Experience with White Label Fox | Carpool App",
    role: "Product Manager",
    image: "https://whitelabelfox.com/assets/images/testimonial/Ms-Emilie.webp",
    text: "Ms. Emilie from Costa Rica shares her honest and positive experience working with White Label Fox for her Carpool App project. She mentions that our pricing was far more competitive compared to other providers, which made it the right choice for launching her carpooling idea in her region. She appreciated how smoothly the entire project was managed — from understanding her requirements to delivering a high-quality, ready-to-launch solution. Our team communicated with her on a daily basis, responded quickly to her questions, and ensured every feature aligned with her expectations. The Carpool app was delivered with all the essential features she needed, including a clean user experience, stable performance, and full white-label customization. This allowed her to test her carpool concept in Costa Rica with confidence and without any development hassle. We sincerely thank Ms. Emilie for her trust and kind words. Her feedback reflects our commitment to providing high-quality, reliable, and scalable on-demand app solutions to clients around the world.",
  },
  {
    name: "Mr. Tapiwa Shares His Experience with White Label Fox | inDrive Clone App (Fox-Drive)",
    role: "Founder",
    image: "https://whitelabelfox.com/assets/images/testimonial/Mr-Tapiwa.webp",
    text: "Mr. Tapiwa from Zimbabwe shares his positive experience collaborating with White Label Fox for his Fox-Drive (inDrive Clone App) project. He highlights the team’s professionalism, clear communication, and commitment to timely delivery. He appreciated how smoothly the project was handled — from initial setup to final deployment. Our team ensured every feature met his business requirements with full customization and white-label branding. The Fox-Drive app was delivered with essential features like real-time tracking, wallet integration, and driver-rider communication tools. This helped him launch a reliable and user-friendly ride-hailing platform in his region. We sincerely thank Mr. Tapiwa for his trust and kind words. His testimonial reflects our focus on delivering high-quality, ready-to-launch on-demand app solutions worldwide.",
  },
  {
    name: "Mr. Jacques Rocca Serra Shares His Honest Experience with White Label Fox | Gojek Clone App",
    role: "Operations Head",
    image: "https://whitelabelfox.com/assets/images/testimonial/jacques-rocca-serra.webp",
    text: "In this testimonial, Mr. Jacques Rocca Serra shares his smooth and successful experience working with White Label Fox for his Fox-Jek (Gojek Clone App) project. What makes this testimonial even more special is that Mr. Jacques personally visited our office, giving him direct insight into our development process, team collaboration, and project transparency. He highlights the team's professionalism, responsiveness, and ability to deliver a feature-rich, multi-service super app on time. The Fox-Jek solution included services such as taxi booking, food delivery, parcel delivery, and more – all managed under a single platform, fully white-labeled for his business. Mr. Jacques appreciated our structured process, budget-friendly customization options, and continuous support throughout the project. He also commends our commitment to quality and timely delivery that helped him take his business live faster than expected. We sincerely thank Mr. Jacques Rocca Serra for his visit, trust, and kind words. If you're looking for a ready-made Gojek Clone App with fast deployment and enterprise-grade quality – this video is a must-watch.",
  },

];

const TestimonialSection = () => {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 border border-gray-300 px-4 py-1.5 rounded-full text-sm">
            <span className="w-2.5 h-2.5 bg-orange-400 rounded-full"></span>
            Testimonial
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-3">
          WHAT OUR <span className="text-orange-400"> CLIENT SAYS</span>
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16">
          Hear from our clients about their journey with White Label Fox.
          Real experiences, real success stories!
        </p>

        {/* Testimonials */}
        <div className="space-y-24">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* Image */}
              <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>

              {/* Content */}
              <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                <h3 className="text-2xl font-semibold mb-4">{item.name}</h3>

                <p className="text-sm text-indigo-600 mb-4">{item.role}</p>

                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;