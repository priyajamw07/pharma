import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, PRODUCTS } from '../data/products';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for sticky navbar shadow/elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSolutionsNav = () => {
    setMobileMenuOpen(false);
    if (currentPath === '/' || currentPath === '') {
      const el = document.getElementById('solutions');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    onNavigate('/#solutions');
    setTimeout(() => {
      const el = document.getElementById('solutions');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <header className={`sticky-site-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Utility Contact Strip */}
      <div className="header-top-bar">
        <div className="container header-top-inner">
          <div className="top-badge">
            <i className="fa-solid fa-truck-medical" style={{ marginRight: '6px', color: '#0d9488' }}></i>
            <span>Authorized Healthcare Product Distributor & Prompt Delivery Across Delhi NCR</span>
          </div>
          <div className="top-contacts">
            <a href={`tel:${COMPANY_INFO.phone}`} className="top-contact-link">
              <i className="fa-solid fa-phone"></i>
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="contact-divider">?</span>
            <a href={`mailto:${COMPANY_INFO.email}`} className="top-contact-link">
              <i className="fa-regular fa-envelope"></i>
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <div className="navbar-main">
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); handleNav('/'); }}
            className="navbar-brand-link"
            title={COMPANY_INFO.name}
          >
            <img
              src={COMPANY_INFO.logo}
              alt={COMPANY_INFO.name}
              className="navbar-logo-img"
            />
            <div className="navbar-brand-text">
              <span className="brand-title">{COMPANY_INFO.name}</span>
              <span className="brand-subtitle">{COMPANY_INFO.tagline}</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-menu">
              <li className={`nav-item ${currentPath === '/' ? 'active' : ''}`}>
                <a
                  href="/"
                  className="nav-link"
                  onClick={(e) => { e.preventDefault(); handleNav('/'); }}
                >
                  Home
                </a>
              </li>

              <li className={`nav-item ${currentPath === '/about-us' ? 'active' : ''}`}>
                <a
                  href="/about-us"
                  className="nav-link"
                  onClick={(e) => { e.preventDefault(); handleNav('/about-us'); }}
                >
                  About Us
                </a>
              </li>

              <li className={`nav-item ${currentPath === '/products' || currentPath.startsWith('/products/') ? 'active' : ''}`}>
                <a
                  href="/products"
                  className="nav-link highlight-link"
                  onClick={(e) => { e.preventDefault(); handleNav('/products'); }}
                >
                  <i className="fa-solid fa-capsules" style={{ marginRight: '5px', color: '#0047bb' }}></i>
                  All Products
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#solutions"
                  className="nav-link"
                  onClick={(e) => { e.preventDefault(); handleSolutionsNav(); }}
                >
                  Solutions
                </a>
              </li>

              <li className={`nav-item ${currentPath === '/career' ? 'active' : ''}`}>
                <a
                  href="/career"
                  className="nav-link"
                  onClick={(e) => { e.preventDefault(); handleNav('/career'); }}
                >
                  Careers
                </a>
              </li>

              <li className={`nav-item ${currentPath === '/contact-us' ? 'active' : ''}`}>
                <a
                  href="/contact-us"
                  className="nav-link"
                  onClick={(e) => { e.preventDefault(); handleNav('/contact-us'); }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Action: Call to Order button */}
          <div className="header-right-actions">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="header-order-call-btn"
              title="Call for product order and delivery"
            >
              <i className="fa-solid fa-phone-volume"></i>
              <div className="btn-call-text">
                <span className="btn-label">Order & Delivery</span>
                <span className="btn-phone">{COMPANY_INFO.phone}</span>
              </div>
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Off-Canvas Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Slide-in Drawer */}
      <aside className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src={COMPANY_INFO.logo}
              alt={COMPANY_INFO.name}
              style={{ maxHeight: '38px', borderRadius: '4px' }}
            />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#0047bb' }}>ONE ETHICAL</span>
          </div>
          <button
            className="mobile-drawer-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="mobile-drawer-body">
          <ul className="mobile-drawer-nav">
            <li>
              <a
                href="/"
                className={`mobile-nav-link ${currentPath === '/' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav('/'); }}
              >
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
              </a>
            </li>

            <li>
              <a
                href="/about-us"
                className={`mobile-nav-link ${currentPath === '/about-us' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav('/about-us'); }}
              >
                <i className="fa-solid fa-hospital-user"></i>
                <span>About Us</span>
              </a>
            </li>

            <li>
              <a
                href="/products"
                className={`mobile-nav-link ${currentPath === '/products' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav('/products'); }}
                style={{ fontWeight: 700, color: '#0047bb' }}
              >
                <i className="fa-solid fa-capsules"></i>
                <span>All Products (4 Formulations)</span>
              </a>
            </li>

            <li>
              <a
                href="#solutions"
                className="mobile-nav-link"
                onClick={(e) => { e.preventDefault(); handleSolutionsNav(); }}
              >
                <i className="fa-solid fa-kit-medical"></i>
                <span>Healthcare Solutions</span>
              </a>
            </li>

            <li>
              <a
                href="/career"
                className={`mobile-nav-link ${currentPath === '/career' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav('/career'); }}
              >
                <i className="fa-solid fa-briefcase"></i>
                <span>Careers</span>
              </a>
            </li>

            <li>
              <a
                href="/contact-us"
                className={`mobile-nav-link ${currentPath === '/contact-us' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav('/contact-us'); }}
              >
                <i className="fa-solid fa-envelope"></i>
                <span>Contact Us</span>
              </a>
            </li>
          </ul>

          {/* Quick Product Links in Drawer */}
          <div style={{ padding: '16px 20px', borderTop: '1px solid #f1f5f9' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px', color: '#64748b', fontWeight: 700, marginBottom: '10px' }}>
              Direct Product Quicklinks:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {PRODUCTS.map(p => (
                <a
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  onClick={(e) => { e.preventDefault(); handleNav(`/products/${p.slug}`); }}
                  style={{ fontSize: '13px', color: '#1e293b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '10px', color: '#0047bb' }}></i>
                  <span>{p.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Delivery & Ordering Desk in Drawer */}
          <div className="mobile-drawer-contact-card">
            <div className="drawer-contact-header">Product Order & Delivery Desk</div>
            <a href={`tel:${COMPANY_INFO.phone}`} className="drawer-contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a href={`tel:${COMPANY_INFO.phoneAlt}`} className="drawer-contact-item">
              <i className="fa-solid fa-mobile-screen"></i>
              <span>{COMPANY_INFO.phoneAlt}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="drawer-contact-item">
              <i className="fa-solid fa-envelope"></i>
              <span style={{ wordBreak: 'break-all' }}>{COMPANY_INFO.email}</span>
            </a>
            <div className="drawer-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Delhi 110091, India</span>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
};
