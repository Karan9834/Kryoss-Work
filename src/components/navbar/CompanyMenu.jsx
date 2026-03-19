import React from 'react';
import { navigationData } from './navbar.data';
import { Link } from 'react-router-dom';

/* ── Icons matched to each Company item ── */
const ITEM_ICONS = {
  'About Us':              '🏢',
  'Contact Us':            '📞',
  'Client Testimonial':    '⭐',
  'Life @ KryossWork':     '🌟',
  'Our Team':              '👥',
  'Careers':               '💼',
  'User Rights & Policies':'📜',
  'Sitemap':               '🗺️',
};

const COMPANY_CSS = `
  /* Spring entrance animation */
  @keyframes cmSpringIn {
    0%   { opacity: 0; transform: translateX(-50%) translateY(-10px) scale(0.97); }
    60%  { opacity: 1; transform: translateX(-50%) translateY(2px)  scale(1.005); }
    100% { opacity: 1; transform: translateX(-50%) translateY(0)    scale(1); }
  }

  /* ── Container ── */
  .cm-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    min-width: 240px;
    max-width: 340px;
    background: #ffffff;
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 18px;
    box-shadow:
      0 0 0 1px rgba(249,115,22,0.05),
      0 4px 6px -2px rgba(0,0,0,0.04),
      0 12px 24px -6px rgba(0,0,0,0.09),
      0 28px 56px -10px rgba(0,0,0,0.11);
    overflow: hidden;
    padding: 0;
    animation: cmSpringIn 0.26s cubic-bezier(0.22,1,0.36,1) forwards;
  }
  /* Orange top stripe */
  .cm-dropdown::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, #f97316 0%, #fb923c 60%, #f97316 100%);
    border-radius: 18px 18px 0 0;
    z-index: 10;
  }

  /* Caret */
  .cm-caret {
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 12px;
    height: 12px;
    background: #ffffff;
    border-top: 1px solid rgba(0,0,0,0.08);
    border-left: 1px solid rgba(0,0,0,0.08);
    border-radius: 2px;
    z-index: 11;
  }

  /* ── Header ── */
  .cm-header {
    padding: 16px 18px 0;
  }
  .cm-header-row {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .cm-header-icon { font-size: 17px; line-height: 1; }
  .cm-title {
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #f97316;
    margin: 0;
    line-height: 1;
  }
  .cm-accent-bar {
    height: 2.5px;
    width: 100%;
    border-radius: 99px;
    background: linear-gradient(90deg, #f97316 0%, #fdba74 80%, transparent 100%);
    margin: 7px 0 4px;
    opacity: 0.75;
  }
  .cm-desc {
    font-size: 11.5px;
    color: #94a3b8;
    font-weight: 500;
    margin: 0 0 10px;
    line-height: 1.4;
  }

  /* ── Links ── */
  .cm-links {
    padding: 4px 10px 12px;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }
  .cm-link {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 7px 9px;
    border-radius: 9px;
    font-size: 16px;
    font-weight: 600;
    color: #374151;
    text-decoration: none;
    transition: background 0.13s, color 0.13s, transform 0.13s, box-shadow 0.13s;
  }
  .cm-link:hover {
    background: rgba(249,115,22,0.09);
    color: #ea580c;
    transform: translateX(3px);
    box-shadow: inset 3px 0 0 #f97316;
  }
  .cm-link-icon {
    font-size: 16px;
    flex-shrink: 0;
    width: 22px;
    text-align: center;
    transition: transform 0.18s cubic-bezier(0.34,1.56,0.64,1);
  }
  .cm-link:hover .cm-link-icon { transform: scale(1.22) rotate(-4deg); }
`;

const CompanyMenu = () => {
  const data = navigationData.company;
  return (
    <>
      <style>{COMPANY_CSS}</style>
      <div className="cm-dropdown">
        <div className="cm-caret" />

        <div className="cm-header">
          <div className="cm-header-row">
            <span className="cm-header-icon">🏢</span>
            <h3 className="cm-title">{data.title}</h3>
          </div>
          <div className="cm-accent-bar" />
          <p className="cm-desc">{data.description}</p>
        </div>

        <div className="cm-links">
          {data.items.map((item, idx) => (
            <Link key={idx} to={item.href} className="cm-link">
              <span className="cm-link-icon">{ITEM_ICONS[item.label] || '→'}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompanyMenu;
