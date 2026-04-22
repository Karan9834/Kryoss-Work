import React from 'react';
import aboutimg from "../../../../assets/Food-Delivery_product/about.png"
const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image order-2 lg:order-1">
          <div className="image-wrapper">
            <img
              src={aboutimg}
              alt="FoodBite chefs preparing delicious food"
              className='w-full h-full object-contain'
              loading="lazy"
            />
          </div>
        </div>

        <div className="about-content order-1 lg:order-2">
          <div className="section-badge">
            <i className="fas fa-heart"></i> ABOUT US
          </div>
          <h2>
            We deliver <span>happiness</span> <br />
            with every bite
          </h2>
          <p className="about-description">
            At FoodBite, we're more than just a food delivery platform. We're a team of food
            enthusiasts dedicated to bringing the best culinary experiences right to your doorstep.
            Since our founding, we've partnered with top-rated restaurants and passionate chefs
            to ensure every meal is an unforgettable experience.
          </p>
          <p className="about-description second">
            Our mission is simple: to make great food accessible to everyone, with lightning-fast
            delivery, zero compromises on quality, and a seamless ordering experience that keeps
            you coming back for more.
          </p>
        </div>
      </div>

      <style>{`
        .about {
          width: 100%;
          background: linear-gradient(135deg, #ffffff 0%, #fefaf5 100%);
          font-family: 'Inter', sans-serif;
          padding: 5rem 0;
          overflow-x: hidden;
        }

        .about-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 4rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 4rem;
        }

        /* Left Image Section */
        .about-image {
          flex: 1 1 45%;
          position: relative;
        }

        .image-wrapper {
          position: relative;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 25px 40px -20px rgba(0, 0, 0, 0.3);
        }

        .image-wrapper img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 40px;
          transition: transform 0.5s ease;
          aspect-ratio: 4 / 3;
          object-fit: cover;
        }

        .image-wrapper:hover img {
          transform: scale(1.05);
        }

        /* Floating Rating Card */
        .floating-card {
          position: absolute;
          bottom: 30px;
          right: -20px;
          background: white;
          padding: 0.8rem 1.2rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
          animation: float 3s ease-in-out infinite;
        }

        .floating-card i {
          color: #ffc107;
          font-size: 1.5rem;
        }

        .floating-card span {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1a1a2e;
        }

        .floating-card small {
          font-size: 0.8rem;
          color: #666;
          font-weight: 500;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        /* Right Content Section */
        .about-content {
          flex: 1 1 45%;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #ffecd8;
          color: #f97316;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 0.5rem 1.2rem;
          border-radius: 40px;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
        }

        .about-content h2 {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #1a1a2e;
        }

        .about-content h2 span {
          background: linear-gradient(135deg, #f97316, #faa729);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .about-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #555;
          margin-bottom: 1.2rem;
        }

        .second {
          margin-bottom: 2rem;
        }

        /* Stats Container */
        .stats-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 2rem 0;
          margin: 1rem 0;
          border-top: 2px solid #ffe5d0;
          border-bottom: 2px solid #ffe5d0;
        }

        .stat-item {
          text-align: center;
          flex: 1;
        }

        .stat-number {
          font-size: 2.2rem;
          font-weight: 800;
          color: #f97316;
          margin-bottom: 0.5rem;
        }

        .counter, .plus, .k-plus, .min {
          display: inline-block;
        }

        .plus, .k-plus {
          font-size: 1.5rem;
          margin-left: 0.1rem;
        }

        .min {
          font-size: 1.3rem;
          margin-left: 0.1rem;
        }

        .stat-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #666;
          letter-spacing: 0.5px;
        }

        .stat-divider {
          width: 2px;
          height: 40px;
          background: linear-gradient(to bottom, #ffe5d0, #f97316, #ffe5d0);
        }

        /* Trust Badge */
        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #f0f9ff;
          padding: 0.7rem 1.3rem;
          border-radius: 50px;
          margin-top: 0.5rem;
        }

        .trust-badge i {
          color: #f97316;
          font-size: 1rem;
        }

        .trust-badge span {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1a1a2e;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .about-container {
            padding: 0 2rem;
            gap: 3rem;
          }
          .about-content h2 {
            font-size: 2.3rem;
          }
          .stat-number {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 900px) {
          .about {
            padding: 3rem 0;
          }
          .about-container {
            flex-direction: column;
            text-align: center;
          }
          .about-content h2 {
            font-size: 2rem;
          }
          .stats-container {
            justify-content: center;
            gap: 1.5rem;
          }
          .floating-card {
            right: 10px;
            bottom: 20px;
            padding: 0.6rem 1rem;
          }
          .floating-card span {
            font-size: 1.2rem;
          }
          .section-badge {
            margin-left: auto;
            margin-right: auto;
          }
          .trust-badge {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 600px) {
          .about-container {
            padding: 0 1.2rem;
          }
          .stats-container {
            flex-direction: column;
            gap: 1rem;
          }
          .stat-divider {
            width: 80px;
            height: 2px;
          }
          .about-content h2 {
            font-size: 1.8rem;
          }
          .stat-number {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;