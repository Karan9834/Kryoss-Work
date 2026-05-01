import React from "react";
import sectionImage from "../../../../../assets/human-resources/performance.png";

const ACCENT = "#FF6B4A"; // softer orange

const EmployeePerformance = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-[#FFF8F5] via-[#FFF3EE] to-[#FFE9E0]">

      {/* 🔥 subtle orange glow */}
      <div className="absolute top-[-100px] left-[20%] w-[400px] h-[400px] bg-[#FF6B4A]/10 rounded-full blur-3xl"></div>

      <style>{`

        .ep-section {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }

        @media (max-width: 860px) {
          .ep-section {
            grid-template-columns: 1fr;
          }
          .ep-img-col { order: -1; }
        }

        /* 🔥 IMAGE SIDE FIXED */
        .ep-img-col {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 560px;
        }

        .ep-img-bg {
          position: absolute;
          width: 120%;
          height: 120%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,107,74,0.15), transparent 70%);
          z-index: 0;
        }

        .ep-img-wrapper {
          position: relative;
          z-index: 1;
          transform: translateX(40px);
        }

        .ep-main-img {
          width: 440px;  /* 🔥 FIXED SIZE */
          max-width: 100%;
          object-fit: contain;
          filter: drop-shadow(0 40px 80px rgba(0,0,0,0.15));
          transition: 0.4s ease;
        }

        .ep-main-img:hover {
          transform: scale(1.05);
        }

        /* 🔥 FLOATING PILLS */
        .ep-stat-pill {
          position: absolute;
          background: #fff;
          border-radius: 14px;
          padding: 14px 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          z-index: 2;
        }

        .ep-stat-pill-num {
          font-size: 20px;
          font-weight: 700;
          color: ${ACCENT};
        }

        .ep-stat-pill-label {
          font-size: 12px;
          color: #888;
        }

        .ep-pill-top {
          top: 10%;
          right: -40px;
        }

        .ep-pill-bottom {
          bottom: 10%;
          left: -40px;
        }

        /* 🔥 CONTENT SIDE */
        .ep-heading {
          font-size: 42px;
          font-weight: 800;
          color: #1A1210;
        }

        .ep-heading em {
          color: ${ACCENT};
        }

        .ep-lead {
          margin: 20px 0 40px;
          color: #6B6B6B;
          max-width: 500px;
        }

        .ep-feature {
          display: flex;
          gap: 16px;
          padding: 20px;
          border-radius: 14px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,107,74,0.15);
          backdrop-filter: blur(6px);
          transition: 0.3s;
        }

        .ep-feature:hover {
          background: #fff;
          box-shadow: 0 10px 30px rgba(255,107,74,0.15);
        }

        .ep-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255,107,74,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${ACCENT};
        }

      `}</style>

      <div className="ep-section">

        {/* LEFT IMAGE */}
        <div className="ep-img-col">

          <div className="ep-img-bg"></div>

          <div className="ep-img-wrapper">
            <img src={sectionImage} alt="Performance" className="ep-main-img" />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2 className="ep-heading text-[30px] md:text-[36px] font-bold leading-[1.2]">
            Employee Performance <br />
            <em>Management Software</em>
          </h2>

          <p className="ep-lead text-[14px] md:text-[16px] font-normal leading-[1.6]">
            KryossOne builds performance management systems with analytics, feedback, and employee insights.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            <div className="ep-feature">
              <div className="ep-icon-wrap">📊</div>
              <div>
                <strong>Performance Analytics</strong>
                <p style={{ fontSize: "14px", color: "#777" }}>
                  Dashboard-driven performance tracking and insights.
                </p>
              </div>
            </div>

            <div className="ep-feature">
              <div className="ep-icon-wrap">⭐</div>
              <div>
                <strong>Employee Recognition</strong>
                <p style={{ fontSize: "14px", color: "#777" }}>
                  Reward systems and achievement tracking.
                </p>
              </div>
            </div>

            <div className="ep-feature">
              <div className="ep-icon-wrap">💬</div>
              <div>
                <strong>360° Feedback</strong>
                <p style={{ fontSize: "14px", color: "#777" }}>
                  Multi-level feedback and review system.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EmployeePerformance;