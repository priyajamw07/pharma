import React, { useState } from 'react';
import { CATEGORIES, PRODUCTS, COMPANY_INFO } from '../data/products';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenEnquiry: (productName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(false);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
      {/* Top Bar with New Logo and User's Official Contact Details */}
      <div className="nav-top">
        <div className="container nav-top-inner">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); handleNav('/'); }}
            className="navbar-logo"
            title={COMPANY_INFO.name}
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <img
              src={COMPANY_INFO.logo}
              alt={COMPANY_INFO.name}
              className="brand-logo-img"
              style={{ maxHeight: '58px', borderRadius: '4px' }}
            />
          </a>

          <div className="company-datalist">
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
        </div>
      </div>

      {/* Main Royal Blue Navigation Bar */}
      <nav className="nav-bottom">
        <div className="container nav-bottom-content">
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <i className={mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
          </button>

          <ul className={`navbar-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
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
                onClick={(e) => {
                  if (window.innerWidth <= 900) {
                    e.preventDefault();
                    setActiveMobileDropdown(!activeMobileDropdown);
                  } else {
                    e.preventDefault();
                    handleNav('/products');
                  }
                }}
              >
                Products <i className="fa-solid fa-angle-down" style={{ fontSize: '12px' }}></i>
              </a>

              <ul className={`dropdown-menu ${activeMobileDropdown ? 'show' : ''}`}>
                <li>
                  <a
                    className="dropdown-item"
                    href="/products"
                    onClick={(e) => { e.preventDefault(); handleNav('/products'); }}
                  >
                    <strong>All Products</strong>
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
    </header>
  );
};
