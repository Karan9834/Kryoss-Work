import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "fa-bolt",
      title: "Lightning Fast Delivery",
      description: "Hot & fresh food delivered to your doorstep in 30 minutes or less. Real-time tracking available.",
      color: "#f97316"
    },
    {
      icon: "fa-shield-alt",
      title: "Secure Payments",
      description: "Multiple payment options with bank-grade encryption. Cash on delivery also available.",
      color: "#10b981"
    },
    {
      icon: "fa-utensils",
      title: "Top Restaurants",
      description: "Curated list of 500+ premium restaurants and local gems. Quality guaranteed.",
      color: "#8b5cf6"
    },
    {
      icon: "fa-tag",
      title: "Best Deals & Offers",
      description: "Daily discounts, combo offers, and loyalty rewards. Save more with every order.",
      color: "#ef4444"
    },
    {
      icon: "fa-headset",
      title: "24/7 Support",
      description: "Dedicated customer support team available round the clock to assist you.",
      color: "#06b6d4"
    },
    {
      icon: "fa-gem",
      title: "Premium Quality",
      description: "Strict quality checks and hygiene standards for every restaurant partner.",
      color: "#f59e0b"
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-star"></i> WHY CHOOSE US
          </div>
          <h2>
            What makes <span>FoodBite</span> <br />
            your perfect choice
          </h2>
          <p className="section-subtitle">
            We combine technology, passion, and reliability to deliver the best food experience
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-wrapper" style={{ background: `${feature.color}15` }}>
                <i className={`fas ${feature.icon}`} style={{ color: feature.color }}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="card-shine"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-section {
          width: 100%;
          background: linear-gradient(135deg, #2d2d2d 0%, #4a4a4a 50%, #f97316 100%);
          font-family: 'Inter', sans-serif;
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
        }

        /* Animated background shapes */
        .features-section::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 70%);
          top: -100px;
          right: -100px;
          border-radius: 50%;
          animation: floatBg 8s ease-in-out infinite;
        }

        .features-section::after {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(45,45,45,0.4) 0%, transparent 70%);
          bottom: -150px;
          left: -150px;
          border-radius: 50%;
          animation: floatBg 10s ease-in-out infinite reverse;
        }

        @keyframes floatBg {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 20px); }
        }

        .features-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 4rem;
          position: relative;
          z-index: 2;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          color: white;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 0.5rem 1.2rem;
          border-radius: 40px;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .section-header h2 {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
          color: white;
        }

        .section-header h2 span {
          background: linear-gradient(135deg, #ffd89b, #f97316);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.85);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        /* Glassmorphism Card */
        .feature-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          padding: 2rem 1.8rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .feature-card:hover {
          transform: translateY(-10px) scale(1.02);
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .card-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.6s ease;
        }

        .feature-card:hover .card-shine {
          left: 100%;
        }

        /* Icon Wrapper */
        .icon-wrapper {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .icon-wrapper i {
          font-size: 2rem;
        }

        /* Card Content */
        .feature-card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          color: white;
        }

        .feature-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .features-container {
            padding: 0 2rem;
          }
          .section-header h2 {
            font-size: 2.3rem;
          }
          .features-grid {
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .features-section {
            padding: 3rem 0;
          }
          .section-header h2 {
            font-size: 2rem;
          }
          .section-subtitle {
            font-size: 1rem;
            padding: 0 1rem;
          }
          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
          .feature-card {
            padding: 1.5rem;
          }
          .icon-wrapper {
            width: 55px;
            height: 55px;
          }
          .icon-wrapper i {
            font-size: 1.5rem;
          }
          .feature-card h3 {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .features-container {
            padding: 0 1.2rem;
          }
          .section-header h2 {
            font-size: 1.6rem;
          }
          .section-badge {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;