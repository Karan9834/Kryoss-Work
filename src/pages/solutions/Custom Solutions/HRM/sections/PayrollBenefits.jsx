import React from "react";
import sectionImage from "../../../../../assets/human-resources/payroll.png";

const PayrollBenefits = () => {
  return (
    <section className="py-24 px-6 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`

        .pb-section {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }

        @media (max-width: 860px) {
          .pb-section {
            grid-template-columns: 1fr;
          }
          .pb-img-col { order: -1; }
        }

        /* 🔥 IMAGE SIDE FIXED */
        .pb-img-col {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 560px; /* IMPORTANT */
        }

        .pb-img-bg {
          position: absolute;
          width: 120%;
          height: 120%;
          border-radius: 50%;
          background: linear-gradient(135deg, #FFF0EB, #FFE4D6);
          z-index: 0;
        }

        .pb-img-wrapper {
          position: relative;
          z-index: 1;
          transform: translateX(40px); /* push right */
        }

        .pb-main-img {
          width: 440px; /* 🔥 BIG FIX */
          max-width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 40px 80px rgba(0,0,0,0.18));
          transition: 0.4s ease;
        }

        .pb-main-img:hover {
          transform: scale(1.05);
        }

        /* 🔥 FLOATING PILLS FIXED */
        .pb-stat-pill {
          position: absolute;
          background: #fff;
          border-radius: 14px;
          padding: 14px 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.12);
          z-index: 2;
        }

        .pb-stat-pill-num {
          font-size: 20px;
          font-weight: 700;
          color: #E85D2F;
        }

        .pb-stat-pill-label {
          font-size: 12px;
          color: #888;
        }

        .pb-pill-top {
          top: 10%;
          right: -40px;
        }

        .pb-pill-bottom {
          bottom: 10%;
          left: -40px;
        }

        /* CONTENT SIDE */
        .pb-heading {
          font-size: 42px;
          font-weight: 700;
          color: #111;
        }

        .pb-heading em {
          color: #E85D2F;
        }

        .pb-lead {
          margin: 20px 0 40px;
          color: #666;
          max-width: 500px;
        }

        .pb-feature {
          display: flex;
          gap: 16px;
          padding: 20px;
          border-radius: 14px;
          border: 1px solid #eee;
          background: #fafafa;
          transition: 0.3s;
        }

        .pb-feature:hover {
          background: #fff;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .pb-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(232,93,47,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #E85D2F;
        }

      `}</style>

      <div className="pb-section">

        {/* LEFT */}
        <div>
          <h2 className="pb-heading text-[30px] md:text-[36px] font-bold leading-[1.2]">
            Payroll & Benefits <br />
            <em>Administration Software</em>
          </h2>

          <p className="pb-lead text-[14px] md:text-[16px] font-normal leading-[1.6]">
            KryossOne engineers payroll & benefits systems with employee self-service dashboards.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            <div className="pb-feature">
              <div className="pb-icon-wrap">💰</div>
              <div>
                <strong>Employee Payroll</strong>
                <p style={{ fontSize: "14px", color: "#777" }}>
                  Payroll automation including PTO, bonuses, tax deductions and more.
                </p>
              </div>
            </div>

            <div className="pb-feature">
              <div className="pb-icon-wrap">📊</div>
              <div>
                <strong>Compensation Management</strong>
                <p style={{ fontSize: "14px", color: "#777" }}>
                  Manage salaries, budgets and compensation structures effectively.
                </p>
              </div>
            </div>

            <div className="pb-feature">
              <div className="pb-icon-wrap">🏥</div>
              <div>
                <strong>Benefits Administration</strong>
                <p style={{ fontSize: "14px", color: "#777" }}>
                  Manage insurance, 401k, healthcare and employee benefits.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="pb-img-col">

          <div className="pb-img-bg"></div>

          <div className="pb-img-wrapper">
            <img src={sectionImage} alt="Payroll" className="pb-main-img" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default PayrollBenefits;