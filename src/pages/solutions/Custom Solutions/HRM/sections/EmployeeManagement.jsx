import React from "react";
import sectionImage from "../../../../../assets/Human resources mgt/3...jpg";

const features = [
  {
    id: "01",
    title: "HRMS Employee Database Design",
    description:
      "Manage personnel records, tasks, documents, data analysis, data entry, data modification, data retrieval, data sharing, and custom fields, forms, tables, files, and more.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "HRIS Identity Access Management (IAM)",
    description:
      "IAM platforms incorporate access request management, single sign-on (SSO) functions, user activity monitoring, and digital identity account management.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "HRMS Device Provisioning",
    description:
      "Engineer support for bring-your-own-device (BYOD) policies, including onboarding, provisioning, and status verification to enhance business productivity.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
];

const ACCENT = "#E85D2F";

const EmployeeManagement = () => {
  return (
    <section className="py-24 px-6 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        .em-section {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 860px) {
          .em-section {
            grid-template-columns: 1fr;
          }
          .em-img-col { order: -1; }
        }

        .em-heading {
          font-size: 44px;
          font-weight: 700;
          color: #111;
        }

        .em-heading em {
          background: linear-gradient(135deg, ${ACCENT}, #F59E0B);
          -webkit-background-clip: text;
          color: transparent;
        }

        .em-lead {
          color: #666;
          margin: 20px 0 40px;
          max-width: 500px;
        }

        .em-feature {
          display: flex;
          gap: 16px;
          padding: 20px;
          border-radius: 14px;
          border: 1px solid #eee;
          background: #fafafa;
          transition: 0.3s;
        }

        .em-feature:hover {
          background: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .em-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(232,93,47,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${ACCENT};
        }

        /* RIGHT SIDE */
        .em-img-col {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 520px;
        }

        .em-img-bg {
          position: absolute;
          width: 110%;
          height: 110%;
          border-radius: 50%;
          background: linear-gradient(135deg, #FFF0EB, #FFE4D6);
          z-index: 0;
        }

        .em-img-wrapper {
          position: relative;
          z-index: 1;
          transform: translateX(30px);
        }

        .em-phone-img {
          width: 420px;
          max-width: 100%;
          filter: drop-shadow(0 30px 60px rgba(0,0,0,0.2));
          transition: 0.4s;
        }

        .em-phone-img:hover {
          transform: scale(1.04);
        }

        .em-stat-pill {
          position: absolute;
          background: white;
          padding: 14px 20px;
          border-radius: 14px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.1);
          z-index: 2;
        }

        .em-pill-top {
          top: 8%;
          right: -30px;
        }

        .em-pill-bottom {
          bottom: 8%;
          left: -30px;
        }
      `}</style>

      <div className="em-section">

        {/* LEFT */}
        <div>
          <h2 className="em-heading text-[30px] md:text-[36px] font-bold leading-[1.2]">
            Employee Management <br />
            <em>Software Solutions</em>
          </h2>

          <p className="em-lead text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Kryoss Work develops employee management software solutions designed as a centralized database.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {features.map((f) => (
              <div className="em-feature" key={f.id}>
                <div className="em-icon-wrap">{f.icon}</div>
                <div>
                  <strong>{f.title}</strong>
                  <p style={{ fontSize: "14px", color: "#777" }}>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="em-img-col">
          <div className="em-img-bg"></div>

          <div className="em-img-wrapper">
            <img src={sectionImage} alt="Employee" className="em-phone-img" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default EmployeeManagement;