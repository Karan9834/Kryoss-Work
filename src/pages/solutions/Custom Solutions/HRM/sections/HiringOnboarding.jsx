import React from "react";
import sectionImage from "../../../../../assets/human-resources/hiring.png";

const features = [
  {
    id: "01",
    title: "Mobile Hiring & Recruiting App",
    description:
      "Engineer customizable & responsive mobile apps, designed with e-signature capabilities, that allow HR personnel to hire applicants directly from the mobile application.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="2" width="14" height="20" rx="2" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Onboarding & Offboarding",
    description:
      "Onboarding software manages new employees with background checks, while offboarding prevents access to critical data.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Applicant Tracking Systems (ATS)",
    description:
      "Centralizes candidate info, job postings, screening, interviews, and recruitment workflows.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="8" />
      </svg>
    ),
  },
];

const ACCENT = "#E85D2F";

const HiringOnboarding = () => {
  return (
    <section className="py-24 px-6 bg-[#FFF6F2]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`

        .ho-section {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }

        @media (max-width: 860px) {
          .ho-section {
            grid-template-columns: 1fr;
          }
        }

        /* 🔥 IMAGE SIDE */
        .ho-img-col {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 550px; /* 🔥 increased */
        }

        .ho-img-bg {
          position: absolute;
          width: 120%;
          height: 120%;
          border-radius: 50%;
          background: linear-gradient(145deg, #FFE0D0, #FFCFB8);
          z-index: 0;
        }

        .ho-phone-img {
          position: relative;
          z-index: 1;
          width: 420px;   /* 🔥 BIG FIX */
          max-width: 100%;
          object-fit: contain;
          filter: drop-shadow(0 40px 80px rgba(232,93,47,0.25));
          transition: 0.4s ease;
        }

        .ho-phone-img:hover {
          transform: scale(1.05);
        }

        /* 🔥 FLOATING PILLS */
        .ho-pill {
          position: absolute;
          background: #fff;
          border-radius: 14px;
          padding: 14px 20px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.12);
          z-index: 2;
        }

        .ho-pill-num {
          font-size: 20px;
          font-weight: 700;
          color: ${ACCENT};
        }

        .ho-pill-label {
          font-size: 12px;
          color: #888;
        }

        .ho-pill-tr {
          top: 10%;
          right: -40px;
        }

        .ho-pill-bl {
          bottom: 10%;
          left: -40px;
        }

        /* 🔥 CONTENT SIDE */
        .ho-heading {
          font-size: 42px;
          font-weight: 800;
          color: #1A1210;
        }

        .ho-heading em {
          color: ${ACCENT};
        }

        .ho-lead {
          margin: 20px 0 40px;
          color: #7A6A64;
          max-width: 500px;
        }

        .ho-feature {
          display: flex;
          gap: 16px;
          padding: 20px;
          border-radius: 14px;
          background: white;
          border: 1px solid #eee;
          transition: 0.3s;
        }

        .ho-feature:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .ho-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(232,93,47,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${ACCENT};
        }

      `}</style>

      <div className="ho-section">

        {/* LEFT IMAGE */}
        <div className="ho-img-col">

          <div className="ho-img-bg"></div>

          <div className="ho-pill ho-pill-tr">
            <div className="ho-pill-num">3x</div>
            <div className="ho-pill-label">Faster Hiring</div>
          </div>

          <div className="ho-pill ho-pill-bl">
            <div className="ho-pill-num">98%</div>
            <div className="ho-pill-label">Compliance</div>
          </div>

          <img src={sectionImage} alt="Hiring" className="ho-phone-img" />

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2 className="ho-heading">
            Employee Hiring & <br />
            <em>Onboarding Solutions</em>
          </h2>

          <p className="ho-lead">
            Kryoss builds custom onboarding software to streamline hiring and employee lifecycle management.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {features.map((f) => (
              <div className="ho-feature" key={f.id}>
                <div className="ho-icon-wrap">{f.icon}</div>
                <div>
                  <strong>{f.title}</strong>
                  <p style={{ fontSize: "14px", color: "#777" }}>{f.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HiringOnboarding;