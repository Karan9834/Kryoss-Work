import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "fa-truck-fast",
      title: "Ultra-Fast Delivery",
      description: "Lightning-fast delivery within 30 minutes. Track your order in real-time from kitchen to doorstep.",
      number: "01"
    },
    {
      icon: "fa-medal",
      title: "Premium Quality",
      description: "Hand-picked restaurants with strict quality checks. Every meal meets our highest standards.",
      number: "02"
    },
    {
      icon: "fa-hand-holding-heart",
      title: "Best Price Guarantee",
      description: "Competitive prices with exclusive deals. Save more with our loyalty program and daily offers.",
      number: "03"
    },
    {
      icon: "fa-headset",
      title: "24/7 Customer Care",
      description: "Round-the-clock support for all your queries. We're here to make your experience seamless.",
      number: "04"
    },
    {
      icon: "fa-leaf",
      title: "Eco-Friendly Packaging",
      description: "100% biodegradable and sustainable packaging. We care about your health and the planet.",
      number: "05"
    },
    {
      icon: "fa-face-smile",
      title: "100% Satisfaction",
      description: "Love your meal or get it fixed. Your happiness is our top priority, guaranteed.",
      number: "06"
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <div className="badge">
            <i className="fas fa-heart"></i> WHY CHOOSE US
          </div>
          <h2>
            The <span>FoodBite</span> advantage
          </h2>
          <p className="subtitle">
            Experience the difference with our premium food delivery service
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div className="reason-card" key={index}>
              <div className="card-number">{reason.number}</div>
              <div className="icon-circle">
                <i className={`fas ${reason.icon}`}></i>
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
              <div className="card-overlay"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-choose-us {
          width: 100%;
          background: #ffffff;
          font-family: 'Inter', sans-serif;
          padding: 5rem 0;
          position: relative;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 4rem;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #fff5ed;
          color: #f97316;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 0.5rem 1.2rem;
          border-radius: 40px;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
        }

        .section-header h2 {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
          color: #1a1a2e;
        }

        .section-header h2 span {
          background: linear-gradient(135deg, #f97316, #faa729);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .subtitle {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Reasons Grid */
        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        /* Premium Card */
        .reason-card {
          background: white;
          border-radius: 28px;
          padding: 2rem 1.8rem;
          position: relative;
          transition: all 0.4s ease;
          border: 1px solid #f0f0f0;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.02);
          overflow: hidden;
          cursor: pointer;
        }

        /* Subtle hover effect - no aggressive shine */
        .reason-card:hover {
          transform: translateY(-8px);
          border-color: #ffe0cc;
          box-shadow: 0 20px 40px rgba(249, 115, 22, 0.08);
        }

        /* Card number styling */
        .card-number {
          position: absolute;
          top: 1.5rem;
          right: 1.8rem;
          font-size: 3rem;
          font-weight: 800;
          color: #fef0e6;
          line-height: 1;
          transition: all 0.3s ease;
          font-family: monospace;
        }

        .reason-card:hover .card-number {
          color: #ffe0cc;
          transform: scale(1.05);
        }

        /* Icon Circle */
        .icon-circle {
          width: 65px;
          height: 65px;
          background: linear-gradient(135deg, #fff5ed, #ffe8dc);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .reason-card:hover .icon-circle {
          transform: scale(1.02);
          background: linear-gradient(135deg, #fef0e6, #ffe0cc);
        }

        .icon-circle i {
          font-size: 1.8rem;
          color: #f97316;
        }

        /* Card Content */
        .reason-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          color: #1a1a2e;
        }

        .reason-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #666;
          margin: 0;
        }

        /* Subtle overlay on hover - no shine */
        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 0;
          background: linear-gradient(to top, rgba(249, 115, 22, 0.03), transparent);
          transition: height 0.4s ease;
          pointer-events: none;
        }

        .reason-card:hover .card-overlay {
          height: 100%;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .reasons-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 1024px) {
          .container {
            padding: 0 2rem;
          }
          .section-header h2 {
            font-size: 2.3rem;
          }
        }

        @media (max-width: 768px) {
          .why-choose-us {
            padding: 3rem 0;
          }
          .section-header h2 {
            font-size: 2rem;
          }
          .subtitle {
            font-size: 1rem;
            padding: 0 1rem;
          }
          .reasons-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
          .reason-card {
            padding: 1.5rem;
          }
          .card-number {
            font-size: 2.5rem;
            top: 1rem;
            right: 1.2rem;
          }
          .icon-circle {
            width: 55px;
            height: 55px;
          }
          .icon-circle i {
            font-size: 1.5rem;
          }
          .reason-card h3 {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1.2rem;
          }
          .section-header h2 {
            font-size: 1.6rem;
          }
          .badge {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;