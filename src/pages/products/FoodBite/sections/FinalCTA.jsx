import { MessageCircle } from "lucide-react";
import React from 'react';

const FinalCTA = () => {
  return (
    <section className="final-cta">
      <div className="cta-container">
        <div className="cta-content">
          <div className="badge">
            <i className="fas fa-fire"></i> LIMITED TIME OFFER
          </div>

          <h2>
            Ready to Start Your Own <span>FoodBite</span> Business?
          </h2>

          <p className="description">
            Join thousands of successful restaurant owners using FoodBite.
            Launch your multi-restaurant food delivery platform in minutes.
          </p>

          <div className="btn-group">
            <a
              href="https://preview.codecanyon.net/item/foodbite-multi-restaurant-food-delivery-app-flutter/full_screen_preview/61762849"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-eye"></i> Live Demo
            </a>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>

            <a
              href="#"
              className="btn-secondary"
            >
              <i className="fas fa-cart-plus"></i> Buy Now – Only $59
            </a>
          </div>

          <div className="trust-features">
            <div>✅ Lifetime Updates</div>
            <div>✅ 6 Months Free Support</div>
            <div>✅ One-Time Payment</div>
            <div>✅ Full Source Code</div>
          </div>
        </div>
      </div>

      <style>{`
        .final-cta {
          width: 100%;
          background: linear-gradient(135deg, #fff5ed 0%, #fefaf5 100%);
          padding: 6rem 0 5rem;
          font-family: 'Inter', system-ui, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .cta-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
          text-align: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #ffecd8;
          color: #e67e22;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 0.55rem 1.4rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
          letter-spacing: 0.5px;
        }

        .cta-content h2 {
          font-size: 3.4rem;
          font-weight: 800;
          line-height: 1.15;
          color: #1a1a2e;
          margin-bottom: 1.2rem;
        }

        .cta-content h2 span {
          background: linear-gradient(135deg, #f97316, #faa729);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .description {
          font-size: 1.25rem;
          color: #555;
          max-width: 680px;
          margin: 0 auto 3rem;
          line-height: 1.65;
        }

        .btn-group {
          display: flex;
          gap: 1.4rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .btn-primary {
          background: #f97316;
          color: white;
          padding: 1.15rem 2.6rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.15rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          box-shadow: 0 10px 30px rgba(249, 115, 22, 0.35);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: #e05e00;
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(249, 115, 22, 0.45);
        }

        .btn-secondary {
          background: white;
          color: #1a1a2e;
          border: 2.5px solid #f97316;
          padding: 1.1rem 2.5rem;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.15rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: #fff5ed;
          border-color: #faa729;
          transform: translateY(-4px);
        }

        .trust-features {
          display: flex;
          flex-wrap: wrap;
          gap: 1.8rem;
          justify-content: center;
          font-size: 1.05rem;
          color: #666;
          font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .cta-content h2 {
            font-size: 2.7rem;
          }
          .btn-group {
            flex-direction: column;
            align-items: center;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            max-width: 340px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .final-cta {
            padding: 4rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;