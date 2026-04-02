import React, { useState } from "react";

const services = [
  {
    id: "01",
    title: "HRIS & HRMS Application Development",
    description:
      "Develop intuitive, responsive, and highly functional web & mobile applications that incorporate essential HRIS & HRMS functions, including business administration, personnel tracking, payroll management, and other core functions.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Learning Management System (LMS)",
    description:
      "Integrate learning management system software designed to track every employee's certifications, education levels, qualifications, and skills, connecting them with materials, resources, and courses to improve skill development.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Reporting & Analytics Software",
    description:
      "Develop custom reporting and analytics dashboards that enable HR professionals to create and share reports quickly, designed with powerful filters and role-based access controls (RBAC).",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Employee Self-Service Portals",
    description:
      "Engineer intelligent self-service portals with cognitive systems and conversational interfaces, allowing employees to find information, answer questions, and submit transactions without human assistance.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "ACA & Statutory Compliance Software",
    description:
      "Develop and integrate Affordable Care Act compliance management solutions to generate 1095-C and 1094-C forms, satisfying IRS sections 6055 and 6056 reporting requirements.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "HRIS & HRMS Software Development",
    description:
      "End-to-end human resource information system and management software built with robust features for data analytics, workflow automation, and employee engagement functions.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
  },
];

const ACCENT = "#E85D2F";

const HRISServices = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif", background: "#0A0A0F", minHeight: "100vh" }}
      className="py-20 px-6"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .service-card {
          background: #111118;
          border: 1px solid rgba(232,93,47,0.15);
          border-radius: 20px;
          padding: 28px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: radial-gradient(circle at top left, ${ACCENT}12 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .service-card:hover::before { opacity: 1; }
        .service-card:hover {
          border-color: ${ACCENT}40;
          background: #16161F;
          transform: translateY(-4px);
        }
        .service-card:hover .service-icon-wrap {
          background: ${ACCENT};
          color: #fff;
          transform: scale(1.05);
        }
        .service-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(232,93,47,0.12);
          color: ${ACCENT};
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          margin-bottom: 20px;
        }
        .service-num {
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: ${ACCENT};
          margin-bottom: 10px;
          opacity: 0.8;
        }
        .service-title {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #F0EEE8;
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .service-desc {
          font-size: 14px;
          font-weight: 400;
          color: rgba(240,238,232,0.55);
          line-height: 1.65;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(232,93,47,0.1);
          border: 1px solid rgba(232,93,47,0.25);
          border-radius: 40px;
          padding: 6px 16px;
          font-size: 13px;
          font-weight: 500;
          color: ${ACCENT};
          margin-bottom: 1.5rem;
        }
        .badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${ACCENT};
        }
        .divider-line {
          width: 50px;
          height: 2px;
          background: ${ACCENT};
          border-radius: 2px;
          margin: 1.2rem 0 1.5rem;
        }
        .grid-services {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .grid-services { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .grid-services { grid-template-columns: 1fr; }
        }
        .hero-tag {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 700;
          color: #F0EEE8;
          line-height: 1.15;
          margin: 0 0 0.5rem;
        }
        .hero-tag em {
          font-style: normal;
          background: linear-gradient(135deg, ${ACCENT}, #F59E0B);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hero-sub {
          font-size: 16px;
          font-weight: 400;
          color: rgba(240,238,232,0.55);
          max-width: 580px;
          line-height: 1.7;
        }
      `}</style>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div className="badge">
            <div className="badge-dot" />
            Kryoss Work · HR Technology
          </div>
          <h1 className="hero-tag">
            Hire Experienced<br />
            <em>HRIS & HRMS</em> Experts
          </h1>
          <div className="divider-line" />
          <p className="hero-sub">
            Kryoss Work helps companies build a unique culture, facilitate hiring & onboarding,
            prepare compensation packages, and establish practices that empower businesses to thrive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-services">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="service-icon-wrap">{s.icon}</div>
              <div className="service-num">{s.id}</div>
              <div className="service-title">{s.title}</div>
              <p className="service-desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HRISServices;