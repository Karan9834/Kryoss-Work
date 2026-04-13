import { MessageCircle } from "lucide-react";
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="badge">
            <i className="fas fa-motorcycle"></i> FREE DELIVERY ON FIRST ORDER
          </div>
          <h1>
            Craving something? <br />
            <span>FoodBite</span> delivers <br />
            hot & fresh.
          </h1>
          <p className="description">
            Order from the best local restaurants. Fast delivery, sizzling deals,
            and a seamless experience from checkout to your doorstep.
          </p>

          <div className="features">
            <div className="feature">
              <i className="fas fa-clock"></i> 25–35 min delivery
            </div>
            <div className="feature">
              <i className="fas fa-tag"></i> Daily mega discounts
            </div>
            <div className="feature">
              <i className="fas fa-utensils"></i> 500+ restaurants
            </div>
          </div>

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
            <a href="#" className="btn-outline">
              <i className="fas fa-arrow-right"></i> Explore menu
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format"
              alt="Delicious FoodBite meal - burger and fries"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          width: 100%;
          background: linear-gradient(135deg, #fefaf5 0%, #fff5ed 100%);
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 4rem 5rem 4rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        }

        .hero-content {
          flex: 1 1 45%;
          min-width: 300px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffecd8;
          color: #e67e22;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 0.5rem 1.2rem;
          border-radius: 40px;
          margin-bottom: 1.8rem;
          letter-spacing: 0.3px;
        }

        .hero-content h1 {
          font-size: 3.8rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.2rem;
          color: #1a1a2e;
        }

        .hero-content h1 span {
          background: linear-gradient(135deg, #f97316, #faa729);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .description {
          font-size: 1.15rem;
          line-height: 1.6;
          color: #4a4a5a;
          margin-bottom: 2rem;
          max-width: 90%;
        }

        .features {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: white;
          padding: 0.6rem 1.2rem 0.6rem 1rem;
          border-radius: 50px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .feature i {
          color: #f97316;
          font-size: 1.1rem;
        }

        .btn-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1.2rem;
          align-items: center;
        }

        .btn-primary {
          background: #f97316;
          color: white;
          padding: 1rem 2.2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          box-shadow: 0 8px 20px rgba(249, 115, 22, 0.3);
        }

        .btn-primary:hover {
          background: #e05e00;
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(249, 115, 22, 0.4);
        }

        .btn-outline {
          background: transparent;
          border: 2px solid #e2e2e8;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          color: #1a1a2e;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }

        .btn-outline:hover {
          border-color: #f97316;
          background: #fff5ed;
          transform: translateY(-2px);
        }

        .hero-image {
          flex: 1 1 45%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-card {
          background: linear-gradient(145deg, #ffffff, #fff7f0);
          border-radius: 60px;
          padding: 1.2rem;
          box-shadow: 0 40px 50px -25px rgba(0, 0, 0, 0.25);
          transition: all 0.3s ease;
          max-width: 550px;
          width: 100%;
        }

        .image-card:hover {
          transform: scale(1.02);
          box-shadow: 0 45px 60px -25px rgba(0, 0, 0, 0.3);
        }

        .image-card img {
          width: 100%;
          height: auto;
          border-radius: 48px;
          display: block;
          object-fit: cover;
          aspect-ratio: 4 / 3;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        /* Responsive Design */
        @media (max-width: 1100px) {
          .hero-container {
            padding: 3rem 2rem;
          }
          .hero-content h1 {
            font-size: 3rem;
          }
        }

        @media (max-width: 900px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
            padding: 2.5rem 1.5rem;
            gap: 2rem;
          }
          .description {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
          .features {
            justify-content: center;
          }
          .btn-group {
            justify-content: center;
          }
          .hero-content h1 {
            font-size: 2.5rem;
          }
          .badge {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            padding: 2rem 1.2rem;
          }
          .hero-content h1 {
            font-size: 2rem;
          }
          .feature {
            font-size: 0.8rem;
            padding: 0.5rem 1rem;
          }
          .btn-primary, .btn-outline {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
          .image-card {
            padding: 0.8rem;
            border-radius: 40px;
          }
          .image-card img {
            border-radius: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;