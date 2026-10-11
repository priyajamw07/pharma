import React from 'react';
import { COMPANY_INFO, PRODUCTS } from '../data/products';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content-grid">
          {/* Column 1: Company Profile & Mission */}
          <div className="footer-col">
            <div className="footer-brand">
              <img
                src={COMPANY_INFO.logo}
                alt={COMPANY_INFO.name}
                className="footer-logo-img"
              />
              <h4 className="footer-company-name">{COMPANY_INFO.name}</h4>
            </div>
            <p className="footer-desc">
              Your dependable partner for genuine healthcare product supply and prompt doorstep delivery across Delhi NCR. We distribute trusted, clinically proven formulations to clinics, pharmacies, and families.
            </p>
            <div className="footer-business-badge">
              <i className="fa-solid fa-truck-fast" style={{ color: '#0047bb', marginRight: '6px' }}></i>
              <span>Healthcare Product Sourcing & Doorstep Delivery</span>
            </div>
          </div>

          {/* Column 2: All Products */}
          <div className="footer-col">
            <h4 className="footer-heading">All Products</h4>
            <ul className="footer-links-list">
              {PRODUCTS.map(p => (
                <li key={p.slug}>
                  <a
                    href={`/products/${p.slug}`}
                    onClick={(e) => { e.preventDefault(); handleNav(`/products/${p.slug}`); }}
                  >
                    <i className="fa-solid fa-angle-right" style={{ fontSize: '11px', color: '#0d9488', marginRight: '6px' }}></i>
                    {p.name}
                  </a>
                </li>
              ))}
              <li style={{ marginTop: '8px' }}>
                <a
                  href="/products"
                  onClick={(e) => { e.preventDefault(); handleNav('/products'); }}
                  style={{ color: '#0047bb', fontWeight: 700 }}
                >
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: '11px', marginRight: '6px' }}></i>
                  View All Products Catalog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="/" onClick={(e) => { e.preventDefault(); handleNav('/'); }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" onClick={(e) => { e.preventDefault(); handleNav('/about-us'); }}>
                  About Our Company
                </a>
              </li>
              <li>
                <a href="/products" onClick={(e) => { e.preventDefault(); handleNav('/products'); }}>
                  All Products
                </a>
              </li>
              <li>
                <a href="/career" onClick={(e) => { e.preventDefault(); handleNav('/career'); }}>
                  Career Opportunities
                </a>
              </li>
              <li>
                <a href="/contact-us" onClick={(e) => { e.preventDefault(); handleNav('/contact-us'); }}>
                  Contact & Order Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Delhi Office */}
          <div className="footer-col">
            <h4 className="footer-heading">Order & Delivery Office</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <p>
                  <strong>Delhi Office:</strong><br />
                  {COMPANY_INFO.address}
                </p>
              </div>

              <div className="footer-contact-item">
                <i className="fa-solid fa-phone"></i>
                <p>
                  <strong>Call Helpline:</strong><br />
                  <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a><br />
                  <a href={`tel:${COMPANY_INFO.phoneAlt}`}>{COMPANY_INFO.phoneAlt}</a>
                </p>
              </div>

              <div className="footer-contact-item">
                <i className="fa-regular fa-envelope"></i>
                <p>
                  <strong>Email Desk:</strong><br />
                  <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Footer Copyright */}
        <div className="sub-footer-bar">
          <p className="copyright-text">
            {'\u00A9'} {new Date().getFullYear()} <strong>{COMPANY_INFO.name}</strong>. All Rights Reserved. Healthcare Product Distribution & Doorstep Delivery.
          </p>

        </div>
      </div>
    </footer>
  );
};
