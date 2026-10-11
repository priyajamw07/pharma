import React, { useState, useEffect } from 'react';
import { CATEGORIES, PRODUCTS, COMPANY_INFO } from '../data/products';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenEnquiry: (productName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(false);

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
    setMobileProductsExpanded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cleanPhone = COMPANY_INFO.phone.replace(/[^0-9]/g, '');

  return (
    <header className="site-header">
      {/* 1. TOP BAR (DESKTOP & MOBILE HEADER BAR) */}
      <div className="nav-top">
        <div className="container nav-top-inner">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); handleNav('/'); }}
            className="navbar-logo"
            title={COMPANY_INFO.name}
          >
            <img
              src={COMPANY_INFO.logo}
              alt={COMPANY_INFO.name}
              className="brand-logo-img"
            />
          </a>

          {/* Desktop Direct Contact Items */}
          <div className="company-datalist desktop-only">
            <div className="media-call">
              <div className="media-icon-circle">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div>
                <a href={`tel:${COMPANY_INFO.phone}`} className="details-heading">
                  {COMPANY_INFO.phone}
                </a>
                <p className="media-body-text">Call Us (Delhi)</p>
              </div>
            </div>

            <div className="media-call">
              <div className="media-icon-circle">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="details-heading">
                  {COMPANY_INFO.email}
                </a>
                <p className="media-body-text">Official Mail</p>
              </div>
            </div>
          </div>

          {/* Mobile Header Quick Actions */}
          <div className="mobile-header-actions mobile-only">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="mobile-action-icon mobile-call-btn"
              aria-label="Call Helpline"
              title="Call Helpline"
            >
              <i className="fa-solid fa-phone"></i>
            </a>

            <a
              href={`https://api.whatsapp.com/send?phone=${cleanPhone}`}
              target="_blank"
              rel="noreferrer"
              className="mobile-action-icon mobile-wa-btn"
              aria-label="Chat on WhatsApp"
              title="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>

            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <i className={mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
            </button>
          </div>
        </div>
      </div>

      {/* 2. DESKTOP MAIN NAVIGATION BAR */}
      <nav className="nav-bottom desktop-only">
        <div className="container nav-bottom-content">
          <ul className="navbar-nav">
            <li className={`nav-item ${currentPath === '/' ? 'active' : ''}`}>
              <a
                className="nav-link"
                href="/"
                onClick={(e) => { e.preventDefault(); handleNav('/'); }}
              >
                Home
              </a>
            </li>

            <li className={`nav-item ${currentPath === '/about-us' ? 'active' : ''}`}>
              <a
                className="nav-link"
                href="/about-us"
                onClick={(e) => { e.preventDefault(); handleNav('/about-us'); }}
              >
                About Us
              </a>
            </li>

            <li className={`nav-item dropdown ${currentPath.startsWith('/products') ? 'active' : ''}`}>
              <a
                className="nav-link"
                href="/products"
                onClick={(e) => { e.preventDefault(); handleNav('/products'); }}
              >
                Products <i className="fa-solid fa-angle-down" style={{ fontSize: '12px' }}></i>
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="/products"
                    onClick={(e) => { e.preventDefault(); handleNav('/products'); }}
                  >
                    <strong>All Formulations</strong>
                  </a>
                </li>
                {Object.values(CATEGORIES).map((cat) => (
                  <li key={cat.id} className="dropdown-submenu">
                    <a
                      className="dropdown-item"
                      href={`/products-list/${cat.id}`}
                      onClick={(e) => { e.preventDefault(); handleNav(`/products-list/${cat.id}`); }}
                    >
                      <span>{cat.name}</span>
                      <i className="fa-solid fa-angle-right" style={{ fontSize: '11px' }}></i>
                    </a>
                    <ul className="dropdown-sub-menu">
                      {PRODUCTS.filter(p => p.categoryId === cat.id || cat.id === 'nutritional-support').map((prod) => (
                        <li key={prod.slug}>
                          <a
                            className="dropdown-item"
                            href={`/products/${prod.slug}`}
                            onClick={(e) => { e.preventDefault(); handleNav(`/products/${prod.slug}`); }}
                          >
                            {prod.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>

            <li className={`nav-item ${currentPath === '/career' ? 'active' : ''}`}>
              <a
                className="nav-link"
                href="/career"
                onClick={(e) => { e.preventDefault(); handleNav('/career'); }}
              >
                Career
              </a>
            </li>

            <li className={`nav-item ${currentPath === '/contact-us' ? 'active' : ''}`}>
              <a
                className="nav-link"
                href="/contact-us"
                onClick={(e) => { e.preventDefault(); handleNav('/contact-us'); }}
              >
                Contact Us
              </a>
            </li>
          </ul>

          <button
            className="enquiry-btn"
            onClick={() => onOpenEnquiry('C-ONE ENZYME Tablet')}
          >
            Order C-ONE
          </button>
        </div>
      </nav>

      {/* 3. MOBILE OFF-CANVAS SLIDE-IN DRAWER */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <aside className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src={COMPANY_INFO.logo}
              alt={COMPANY_INFO.name}
              style={{ maxHeight: '38px', borderRadius: '4px' }}
            />
          </div>
          <button
            className="mobile-drawer-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="mobile-drawer-actions">
          <button
            className="custom-more-btn"
            style={{ width: '100%', justifyContent: 'center', padding: '11px 16px', fontSize: '13px' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquiry('C-ONE ENZYME Tablet');
            }}
          >
            <span><i className="fa-solid fa-pills" style={{ marginRight: '6px' }}></i> Order C-ONE Tablet</span>
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
                <span className="mobile-nav-icon"><i className="fa-solid fa-house"></i></span>
                <span>Home</span>
              </a>
            </li>

            <li>
              <a
                href="/about-us"
                className={`mobile-nav-link ${currentPath === '/about-us' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav('/about-us'); }}
              >
                <span className="mobile-nav-icon"><i className="fa-solid fa-hospital"></i></span>
                <span>About Us</span>
              </a>
            </li>

            <li className="mobile-nav-accordion">
              <div
                className={`mobile-nav-link accordion-toggle ${currentPath.startsWith('/products') ? 'active' : ''}`}
                onClick={() => setMobileProductsExpanded(!mobileProductsExpanded)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="mobile-nav-icon"><i className="fa-solid fa-capsules"></i></span>
                  <span>Products & Formulations</span>
                </div>
                <i className={`fa-solid fa-chevron-down accordion-arrow ${mobileProductsExpanded ? 'rotated' : ''}`}></i>
              </div>

              <div className={`mobile-accordion-content ${mobileProductsExpanded ? 'expanded' : ''}`}>
                <a
                  href="/products"
                  className="mobile-subnav-link main-link"
                  onClick={(e) => { e.preventDefault(); handleNav('/products'); }}
                >
                  <i className="fa-solid fa-boxes-stacked" style={{ color: '#0047bb' }}></i>
                  <span>All Formulations</span>
                </a>
                {Object.values(CATEGORIES).map((cat) => (
                  <a
                    key={cat.id}
                    href={`/products-list/${cat.id}`}
                    className="mobile-subnav-link"
                    onClick={(e) => { e.preventDefault(); handleNav(`/products-list/${cat.id}`); }}
                  >
                    <i className="fa-solid fa-angle-right" style={{ fontSize: '11px', color: '#0047bb' }}></i>
                    <span>{cat.name}</span>
                  </a>
                ))}
              </div>
            </li>

            <li>
              <a
                href="/career"
                className={`mobile-nav-link ${currentPath === '/career' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav('/career'); }}
              >
                <span className="mobile-nav-icon"><i className="fa-solid fa-briefcase"></i></span>
                <span>Career</span>
              </a>
            </li>

            <li>
              <a
                href="/contact-us"
                className={`mobile-nav-link ${currentPath === '/contact-us' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav('/contact-us'); }}
              >
                <span className="mobile-nav-icon"><i className="fa-solid fa-envelope"></i></span>
                <span>Contact Us</span>
              </a>
            </li>
          </ul>

          <div className="mobile-drawer-contact-card">
            <div className="drawer-contact-header">Helpline & Trade Desk</div>
            <a href={`tel:${COMPANY_INFO.phone}`} className="drawer-contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a href={`tel:${COMPANY_INFO.phoneAlt}`} className="drawer-contact-item">
              <i className="fa-solid fa-mobile-screen-button"></i>
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
