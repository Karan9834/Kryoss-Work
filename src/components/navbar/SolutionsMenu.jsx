import { Link, useLocation } from 'react-router-dom';

import React, { useState } from 'react';

import { ChevronDown, ArrowRight } from 'lucide-react';

/* ─────────────────────────────────────────────
   Data – 4 columns for Solutions
───────────────────────────────────────────── */
const megaMenuData = [
  {
    title: 'Application Solutions',
    icon: '📱',
    accent: '#f97316',
    href: '/solutions/application-solutions',
    items: [
      { label: 'Taxi Booking App', icon: '🚕', href: '/solutions/taxi-booking' },
      { label: 'Food Delivery App', icon: '🍔', href: '/solutions/food-delivery' },
      { label: 'Grocery Delivery App', icon: '🛒', href: '/solutions/grocery-delivery' },
      { label: 'Salon & Beauty App', icon: '💅', href: '/solutions/salon-beauty' },
      { label: 'OTT App Development', icon: '📺', href: '/solutions/ott-app' },
      { label: 'Matrimony App', icon: '💑', href: '/solutions/matrimony-app' },
      { label: 'Dating App Development', icon: '❤️', href: '/solutions/dating-app' },
      { label: 'Home Service App', icon: '🏠', href: '/solutions/home-service' },
      { label: 'E-Commerce App', icon: '🛍️', href: '/solutions/ecommerce-app' },
      { label: 'Business Directory App', icon: '📋', href: '/solutions/business-directory' },
      { label: 'Real Estate App', icon: '🏗️', href: '/solutions/real-estate-app' },
      { label: 'Hotel Booking App', icon: '🏨', href: '/solutions/hotel-booking' },
    ],
  },
  {
    title: 'Custom Software',
    icon: '⚙️',
    accent: '#f97316',
    href: '/solutions/custom-software',
    items: [
      { label: 'Job Portal & App', icon: '💼', href: '/solutions/job-portal' },
      { label: 'Human Resource Mgmt', icon: '👥', href: '/solutions/hrm' },
      { label: 'Customer Relationship', icon: '🤝', href: '/solutions/crm' },
      { label: 'Hotel Management', icon: '🏨', href: '/solutions/hotel-mgmt' },
      { label: 'News Management', icon: '📰', href: '/solutions/news-mgmt' },
      { label: 'Restaurant Mgmt', icon: '🍽️', href: '/solutions/restaurant-mgmt' },
      { label: 'Enterprise Planning (ERP)', icon: '⚙️', href: '/solutions/erp' },
      { label: 'Hospital Management', icon: '🏥', href: '/solutions/hospital-mgmt' },
      { label: 'School Management', icon: '🏫', href: '/solutions/school-mgmt' },
      { label: 'Learning Management', icon: '📚', href: '/solutions/lms' },
      { label: 'Pharmacy Management', icon: '💊', href: '/solutions/pharmacy-mgmt' },
      { label: 'Crypto & Exchange App', icon: '₿', href: '/solutions/crypto-exchange' },
    ],
  },
  {
    title: 'On Demand Solutions',
    icon: '⚡',
    accent: '#f97316',
    href: '/solutions/on-demand-solutions',
    items: [
      { label: 'Mechanics App', icon: '🔧', href: '/solutions/mechanics-app' },
      { label: 'Laundry App', icon: '🧺', href: '/solutions/laundry-app' },
      { label: 'Car Rental App', icon: '🔑', href: '/solutions/car-rental' },
      { label: 'Video Conferencing App', icon: '📹', href: '/solutions/video-conf' },
      { label: 'Medicine Delivery App', icon: '💊', href: '/solutions/medicine-delivery' },
      { label: 'Short Video App', icon: '🎥', href: '/solutions/short-video' },
      { label: 'E-Wallet App', icon: '💳', href: '/solutions/ewallet-app' },
      { label: 'Classified App', icon: '🏷️', href: '/solutions/classified-app' },
      { label: 'Fitness App', icon: '🏋️', href: '/solutions/fitness-app' },
      { label: 'Doctor Appointment App', icon: '📅', href: '/solutions/doctor-appointment' },
      { label: 'Courier Delivery App', icon: '📦', href: '/solutions/courier-delivery' },
      { label: 'Logistics App', icon: '🚚', href: '/solutions/logistics-app' },
    ],
  },
  {
    title: 'Industries',
    icon: '🏭',
    accent: '#f97316',
    href: '/solutions/industries',
    items: [
      { label: 'Healthcare', icon: '🏥', href: '/industries/healthcare' },
      { label: 'Education', icon: '🎓', href: '/industries/education' },
      { label: 'E-commerce', icon: '🛍️', href: '/industries/ecommerce' },
      { label: 'Real Estate', icon: '🏗️', href: '/industries/real-estate' },
      { label: 'Logistics', icon: '🚚', href: '/industries/logistics' },
      { label: 'Finance', icon: '🏦', href: '/industries/finance' },
      { label: 'Social Networking', icon: '💬', href: '/industries/social-networking' },
      { label: 'Entertainment', icon: '🎬', href: '/industries/entertainment' },
      { label: 'News & Media', icon: '📰', href: '/industries/news-media' },
      { label: 'Food & Restaurant', icon: '🍽️', href: '/industries/food-restaurant' },
      { label: 'Travel & Tourism', icon: '✈️', href: '/industries/travel-tourism' },
    ],
  },
];

/* ─────────────────────────────────────────────
   MegaMenuColumn
───────────────────────────────────────────── */
const MegaMenuColumn = ({ col }) => {
  const location = useLocation();
  return (
    <div className="pmm-col">
      <div className="pmm-col-heading-wrap">
        {col.href ? (
          <Link to={col.href} className={`pmm-col-heading-row ${location.pathname === col.href ? 'active' : ''}`} style={{ textDecoration: 'none' }}>
            <span className="pmm-cat-icon">{col.icon}</span>
            <h3 className="pmm-col-title" style={{ transition: 'color 0.2s' }}>{col.title}</h3>
          </Link>
        ) : (
          <div className="pmm-col-heading-row">
            <span className="pmm-cat-icon">{col.icon}</span>
            <h3 className="pmm-col-title">{col.title}</h3>
          </div>
        )}
        <div className="pmm-col-accent-bar" />
      </div>

      <ul className="pmm-link-list">
        {col.items.map((item, i) => (
          <li key={i}>
            <Link to={item.href} className={`pmm-link ${location.pathname === item.href ? 'active' : ''}`}>
              <span className="pmm-item-icon">{item.icon}</span>
              <span className="pmm-item-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MobileAccordionSection
───────────────────────────────────────────── */
const MobileAccordionSection = ({ col, onLinkClick }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="pmm-mob-section">
      <button
        className="pmm-mob-header"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={(e) => { 
          if(col.href) {
            e.stopPropagation();
          } 
        }}>
          <span className="pmm-mob-cat-icon">{col.icon}</span>
          {col.href ? (
            <Link to={col.href} className={`pmm-mob-title ${location.pathname === col.href ? 'active' : ''}`} onClick={onLinkClick} style={{ textDecoration: 'none' }}>
              {col.title}
            </Link>
          ) : (
            <span className="pmm-mob-title">{col.title}</span>
          )}
        </span>
        <ChevronDown
          size={16}
          style={{
            transition: 'transform 0.25s',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            color: '#f97316',
            flexShrink: 0,
          }}
        />
      </button>

      {open && (
        <div className="pmm-mob-body">
          {col.items.map((item, i) => (
            <Link key={i} to={item.href} className={`pmm-mob-link ${location.pathname === item.href ? 'active' : ''}`} onClick={onLinkClick}>
              <span className="pmm-mob-item-icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────
   Scoped CSS (Same as Products)
───────────────────────────────────────────── */
const PMM_CSS = `
  .pmm-desktop {
    width: min(1240px, 96vw);
    background: #ffffff;
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 22px;
    box-shadow:
      0 0 0 1px rgba(249,115,22,0.05),
      0 4px 6px -2px rgba(0,0,0,0.04),
      0 12px 24px -6px rgba(0,0,0,0.08),
      0 32px 64px -12px rgba(0,0,0,0.12);
    padding: 0;
    z-index: 1000;
    overflow: hidden;
    max-height: 88vh;
    overflow-y: auto;
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-60%) translateY(0);
    animation: pmmSpringIn 0.28s cubic-bezier(0.22,1,0.36,1) forwards;
    transform-origin: top center;
  }
  .pmm-desktop::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #f97316 0%, #fb923c 50%, #f97316 100%);
    border-radius: 22px 22px 0 0;
    z-index: 10;
  }
  .pmm-caret {
    position: absolute;
    top: -6px;
    left: 60%;
    transform: translateX(-50%) rotate(45deg);
    width: 12px;
    height: 12px;
    background: #ffffff;
    border-top: 1px solid rgba(0,0,0,0.08);
    border-left: 1px solid rgba(0,0,0,0.08);
    border-radius: 2px;
    z-index: 11;
  }
  .pmm-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    position: relative;
    z-index: 2;
    padding: 24px 0 20px;
  }
  .pmm-col {
    padding: 0 24px;
    border-right: 1px solid #e2e8f0;
    position: relative;
  }
  .pmm-col:last-child { border-right: none; }
  .pmm-col-heading-wrap {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
  }
  .pmm-col-heading-row {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .pmm-col-accent-bar {
    height: 2.5px;
    width: 100%;
    border-radius: 99px;
    background: linear-gradient(90deg, #f97316 0%, #fdba74 80%, transparent 100%);
    margin-bottom: 10px;
    opacity: 0.75;
  }
  .pmm-cat-icon { font-size: 16px; line-height: 1; flex-shrink: 0; }
  .pmm-col-title {
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #f97316;
    margin: 0;
    white-space: nowrap;
  }
  .pmm-link-list { list-style: none; margin: 0; padding: 0; }
  .pmm-link {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 5px 7px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    color: #374151;
    text-decoration: none;
    transition: background 0.13s ease, color 0.13s ease, transform 0.13s ease, box-shadow 0.13s ease;
    line-height: 1.42;
  }
  .pmm-link:hover,
  .pmm-link.active {
    background: rgba(249,115,22,0.09);
    color: #ea580c;
    transform: translateX(3px);
    box-shadow: inset 3px 0 0 #f97316;
  }
  .pmm-link.active {
    background: rgba(249,115,22,0.14);
    font-weight: 700;
  }
  .pmm-item-icon {
    font-size: 16px;
    line-height: 1;
    flex-shrink: 0;
    width: 20px;
    text-align: center;
    transition: transform 0.18s cubic-bezier(0.34,1.56,0.64,1);
  }
  .pmm-link:hover .pmm-item-icon,
  .pmm-link.active .pmm-item-icon { transform: scale(1.25) rotate(-4deg); }
  .pmm-item-label { flex: 1; min-width: 0; }

  .pmm-footer {
    margin-top: 0;
    padding: 14px 24px;
    background: linear-gradient(135deg, #fff7ed 0%, #fef3e8 100%);
    border-top: 1px solid #fed7aa;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    position: relative;
    z-index: 2;
  }
  .pmm-footer-left { display: flex; flex-direction: column; gap: 2px; }
  .pmm-footer-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #f97316;
  }
  .pmm-footer-badge::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #f97316;
    animation: pmmPulse 2s ease infinite;
  }
  .pmm-footer-text { font-size: 12px; color: #6b7280; font-weight: 500; }
  .pmm-footer-cta {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: #f97316;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    padding: 9px 22px;
    border-radius: 50px;
    text-decoration: none;
    letter-spacing: 0.03em;
    transition: background 0.18s, box-shadow 0.18s, transform 0.15s;
    box-shadow: 0 4px 14px rgba(249,115,22,0.35);
  }
  .pmm-footer-cta:hover {
    background: #ea580c;
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 24px rgba(249,115,22,0.45);
    color: #fff;
  }
  .pmm-footer-cta svg { transition: transform 0.18s cubic-bezier(0.34,1.56,0.64,1); }
  .pmm-footer-cta:hover svg { transform: translateX(4px); }

  @keyframes pmmSpringIn {
    0%   { opacity: 0; transform: translateX(-60%) translateY(-10px) scale(0.97); }
    60%  { opacity: 1; transform: translateX(-60%) translateY(2px) scale(1.005); }
    100% { opacity: 1; transform: translateX(-60%) translateY(0) scale(1); }
  }
  @keyframes pmmSpringInFixed {
    0%   { opacity: 0; transform: translateX(-50%) translateY(-8px) scale(0.97); }
    60%  { opacity: 1; transform: translateX(-50%) translateY(1px) scale(1.003); }
    100% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
  }
  @keyframes pmmPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

  .pmm-mobile {
    background: #fff;
    border-radius: 14px;
    border: 1px solid rgba(0,0,0,0.07);
    overflow: hidden;
    margin: 0 2px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  }
  .pmm-mob-section { border-bottom: 1px solid #f1f5f9; }
  .pmm-mob-section:last-child { border-bottom: none; }
  .pmm-mob-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 16px;
    background: transparent;
    border: none;
    cursor: pointer;
    gap: 8px;
    transition: background 0.15s;
  }
  .pmm-mob-header:hover { background: rgba(249,115,22,0.04); }
  .pmm-mob-cat-icon { font-size: 17px; line-height: 1; flex-shrink: 0; }
  .pmm-mob-title {
    font-size: 17px;
    font-weight: 700;
    color: #1e293b;
    text-align: left;
  }
  .pmm-mob-title.active {
    color: #f97316;
  }
  .pmm-mob-body { padding: 4px 12px 14px 16px; display: flex; flex-direction: column; gap: 1px; }
  .pmm-mob-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border-radius: 7px;
    font-size: 16px;
    font-weight: 600;
    color: #475569;
    text-decoration: none;
    transition: background 0.12s, color 0.12s;
  }
  .pmm-mob-link:hover,
  .pmm-mob-link.active { background: rgba(249,115,22,0.07); color: #ea580c; }
  .pmm-mob-link.active {
    background: rgba(249,115,22,0.12);
    font-weight: 700;
  }
  .pmm-mob-item-icon { font-size: 14px; flex-shrink: 0; width: 18px; text-align: center; }

  @media (max-width: 1300px) {
    .pmm-desktop {
      position: fixed;
      top: 64px;
      left: 50%;
      transform: translateX(-50%);
      width: min(1100px, 96vw);
      max-height: 82vh;
      border-radius: 20px;
      animation: pmmSpringInFixed 0.28s cubic-bezier(0.22,1,0.36,1) forwards;
    }
    .pmm-caret { display: none; }
    .pmm-grid  { grid-template-columns: repeat(4, 1fr); }
    .pmm-col   { padding: 0 18px; }
  }

  @media (max-width: 1199px) {
    .pmm-desktop { width: min(860px, 96vw); }
    .pmm-grid    { grid-template-columns: repeat(3, 1fr); }
    .pmm-col     { padding: 0 16px; }
  }

  @media (max-width: 767px) {
    .pmm-desktop { width: min(560px, 94vw); max-height: 80vh; }
    .pmm-col:nth-child(even) { border-right: none !important; }
    .pmm-col:not(:nth-last-child(-n+2)) { border-bottom: 1px solid #f1f5f9; }
    .pmm-link    { font-size: 14.5px; }
    .pmm-item-icon { font-size: 15px; }
    .pmm-footer  { flex-direction: column; align-items: flex-start; }
    .pmm-footer-cta { width: 100%; justify-content: center; }
  }

  @media (max-width: 479px) {
    .pmm-desktop { width: 92vw; padding: 18px 0 14px; }
    .pmm-grid    { grid-template-columns: 1fr; }
    .pmm-col     { padding: 12px 14px; border-right: none !important; border-bottom: 1px solid #f1f5f9; }
    .pmm-col:last-child { border-bottom: none; }
    .pmm-col-title { white-space: normal; }
    .pmm-link    { font-size: 15px; padding: 6px 8px; }
  }
`;

const SolutionsMenu = ({ onLinkClick }) => (
  <>
    <style>{PMM_CSS}</style>
    <div className="pmm-desktop">
      <div className="pmm-caret" />
      <div className="pmm-grid">
        {megaMenuData.map((col, i) => (
          <MegaMenuColumn key={i} col={col} />
        ))}
      </div>
      <div className="pmm-footer">
        <div className="pmm-footer-left">
          <span className="pmm-footer-badge">Innovative Tech Solutions</span>
          <span className="pmm-footer-text">Helping businesses scale with robust application and industries expertise</span>
        </div>
      </div>
    </div>
  </>
);

export const SolutionsMobileAccordion = ({ onLinkClick }) => (
  <div className="pmm-mobile">
    <style>{PMM_CSS}</style>
    {megaMenuData.map((col, i) => (
      <MobileAccordionSection key={i} col={col} onLinkClick={onLinkClick} />
    ))}
  </div>
);

export default SolutionsMenu;
