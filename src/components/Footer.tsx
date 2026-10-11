import React from 'react';
import { COMPANY_INFO } from '../data/products';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-content-grid">
          {/* Col 1: About */}
          <div className="logo-about-footer">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); handleNav('/'); }}
              className="navbar-logo"
            >
              <img
                src={COMPANY_INFO.logo}
                alt={COMPANY_INFO.name}
                className="footer-logo"
              />
            </a>
            <p style={{ fontWeight: 700, color: '#ffffff', fontSize: '15px', marginBottom: '8px' }}>
              {COMPANY_INFO.tagline}
            </p>
            <p className="about-content" style={{ lineHeight: '1.7', color: '#94a3b8' }}>
              {COMPANY_INFO.name} is dedicated to providing superior nutritional health supplements, vital micronutrients, and therapeutic formulations manufactured under strict GMP standards to improve everyday health and vitality.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="quick-links-footer">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links-list">
              <li>
                <a href="/" onClick={(e) => { e.preventDefault(); handleNav('/'); }}>
                  <i className="fa-solid fa-angles-right" style={{ fontSize: '11px', color: '#60a5fa' }}></i> Home
                </a>
              </li>
              <li>
                <a href="/about-us" onClick={(e) => { e.preventDefault(); handleNav('/about-us'); }}>
                  <i className="fa-solid fa-angles-right" style={{ fontSize: '11px', color: '#60a5fa' }}></i> About Us
                </a>
              </li>
              <li>
                <a href="/products" onClick={(e) => { e.preventDefault(); handleNav('/products'); }}>
                  <i className="fa-solid fa-angles-right" style={{ fontSize: '11px', color: '#60a5fa' }}></i> Products (C-ONE)
                </a>
              </li>
              <li>
                <a href="/career" onClick={(e) => { e.preventDefault(); handleNav('/career'); }}>
                  <i className="fa-solid fa-angles-right" style={{ fontSize: '11px', color: '#60a5fa' }}></i> Career
                </a>
              </li>
              <li>
                <a href="/contact-us" onClick={(e) => { e.preventDefault(); handleNav('/contact-us'); }}>
                  <i className="fa-solid fa-angles-right" style={{ fontSize: '11px', color: '#60a5fa' }}></i> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Location */}
          <div className="our-location-footer">
            <h3 className="footer-heading">Our Location</h3>
            <div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <p style={{ fontWeight: 600, color: '#ffffff', marginBottom: '2px' }}>Marketed By Office</p>
                  <p style={{ fontSize: '13px', lineHeight: '1.5' }}>{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="footer-contact-item">
                <i className="fa-solid fa-industry"></i>
                <div>
                  <p style={{ fontWeight: 600, color: '#ffffff', marginBottom: '2px' }}>Manufacturing Unit</p>
                  <p style={{ fontSize: '12px', lineHeight: '1.4', color: '#94a3b8' }}>{COMPANY_INFO.manufacturer}</p>
                </div>
              </div>

              <div className="footer-contact-item">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: '#cbd5e1', display: 'block' }}>
                    {COMPANY_INFO.phone}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phoneAlt}`} style={{ color: '#cbd5e1', display: 'block', fontSize: '12px' }}>
                    {COMPANY_INFO.phoneAlt}
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#cbd5e1', display: 'block', wordBreak: 'break-all' }}>
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-social-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://facebook.com"
                className="footer-social-btn"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com"
                className="footer-social-btn"
                aria-label="Twitter / X"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="footer-social-btn"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-footer">
        <div className="container sub-footer-content">
          <p>© {new Date().getFullYear()} - {COMPANY_INFO.name}. All Rights Reserved.</p>
          <p>
            {COMPANY_INFO.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};
