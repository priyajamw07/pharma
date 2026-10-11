import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { COMPANY_INFO, PRODUCTS } from '../data/products';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Breadcrumb title="About Us" onNavigate={onNavigate} />

      {/* Main Company Intro - Split Layout */}
      <section className="section-padding">
        <div className="container">
          <div className="about-split-layout">
            <div className="about-visual-column">
              <div className="hero-image-frame">
                <img
                  src="/one_assets/pro-doctors-hero1.jpg"
                  alt="ONE ETHICAL PHARMACEUTICAL Healthcare Team"
                  className="hero-real-doctor-image"
                />
                <div className="hero-image-tag">
                  <i className="fa-solid fa-truck-medical"></i>
                  <span>Product Supply & Doorstep Delivery</span>
                </div>
              </div>
            </div>

            <div className="about-text-column">
              <span className="section-eyebrow">
                <i className="fa-solid fa-building-circle-check"></i> Sourcing & Delivery Provider
              </span>
              <h1 className="section-main-heading">
                About {COMPANY_INFO.name}
              </h1>
              <p className="section-body-lead">
                <strong>{COMPANY_INFO.name}</strong> is a dedicated healthcare product distribution and doorstep delivery enterprise based in Delhi NCR, operating under the principle of <em>"{COMPANY_INFO.tagline}"</em>.
              </p>
              <p className="section-body-text">
                We are <strong>not manufacturers</strong>; our core specialty is the rigorous sourcing, stock keeping, and prompt delivery of proven healthcare formulations. We bridge the critical gap between certified pharmaceutical producers and local healthcare providers, retail chemists, and end patients.
              </p>
              <p className="section-body-text">
                Every consignment we distribute is authenticated through licensed distribution channels with full batch traceability, tamper-evident seals, and climate-conscious handling.
              </p>

              <div className="about-metrics-row">
                <div className="metric-box">
                  <div className="metric-icon"><i className="fa-solid fa-box-open"></i></div>
                  <div className="metric-info">
                    <h4>Proven Formulations</h4>
                    <p>Curated portfolio meeting high clinical standards</p>
                  </div>
                </div>

                <div className="metric-box">
                  <div className="metric-icon"><i className="fa-solid fa-shield-halved"></i></div>
                  <div className="metric-info">
                    <h4>100% Genuine Batches</h4>
                    <p>Direct sourcing with complete batch documentation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing & Delivery Standards */}
      <section className="section-padding bg-light-neutral">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">
              <i className="fa-solid fa-clipboard-check"></i> Operational Principles
            </span>
            <h2 className="section-main-heading">How We Serve Healthcare Providers</h2>
            <p className="section-sub-lead">
              Our business is built around reliability, proper medicine handling, and attentive customer service.
            </p>
          </div>

          <div className="why-delivery-grid">
            <div className="why-delivery-box">
              <div className="why-icon-circle"><i className="fa-solid fa-handshake-simple"></i></div>
              <h4>Licensed Channel Sourcing</h4>
              <p>We work exclusively with authorized pharmaceutical suppliers and licensed distribution hubs to ensure uncompromised quality.</p>
            </div>

            <div className="why-delivery-box">
              <div className="why-icon-circle"><i className="fa-solid fa-temperature-low"></i></div>
              <h4>Temperature Monitored Storage</h4>
              <p>Stock is housed in temperature-controlled spaces below 25?C in Delhi to protect delicate active ingredients like CoQ10 and probiotics.</p>
            </div>

            <div className="why-delivery-box">
              <div className="why-icon-circle"><i className="fa-solid fa-motorcycle"></i></div>
              <h4>Prompt Local Dispatch</h4>
              <p>Fast logistics network covering Delhi, Noida, Ghaziabad, and surrounding NCR hubs for rapid order fulfillment.</p>
            </div>

            <div className="why-delivery-box">
              <div className="why-icon-circle"><i className="fa-solid fa-file-invoice"></i></div>
              <h4>Transparent Invoicing</h4>
              <p>Accurate GST billing, transparent stock updates, and dedicated phone support for every healthcare order.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase on About Page */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">
              <i className="fa-solid fa-capsules"></i> Our Healthcare Products
            </span>
            <h2 className="section-main-heading">Our Healthcare Products</h2>
            <p className="section-sub-lead">
              Click any product to view its complete composition, usage guidance, and delivery availability.
            </p>
          </div>

          <div className="products-four-grid">
            {PRODUCTS.map(p => (
              <div key={p.slug} className="product-card-modern">
                <div className="product-card-media">
                  <span className="product-category-badge">{p.categoryName}</span>
                  <a
                    href={`/products/${p.slug}`}
                    onClick={(e) => { e.preventDefault(); onNavigate(`/products/${p.slug}`); }}
                    className="product-card-img-link"
                  >
                    <img src={p.image} alt={p.name} className="product-card-img-uncropped" />
                  </a>
                </div>
                <div className="product-card-content">
                  <h3 className="product-card-title">
                    <a
                      href={`/products/${p.slug}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(`/products/${p.slug}`); }}
                    >
                      {p.name}
                    </a>
                  </h3>
                  <p className="product-card-desc">{p.shortDesc}</p>
                  <div className="product-card-actions">
                    <a
                      href={`/products/${p.slug}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(`/products/${p.slug}`); }}
                      className="btn-card-details"
                    >
                      <span>View Details</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a
              href="/contact-us"
              onClick={(e) => { e.preventDefault(); onNavigate('/contact-us'); }}
              className="hero-btn-primary"
              style={{ display: 'inline-flex' }}
            >
              <span>Contact Our Order Desk</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
