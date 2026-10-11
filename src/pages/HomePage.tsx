import React, { useState, useEffect } from 'react';
import { PRODUCTS, COMPANY_INFO } from '../data/products';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      line1: 'Experience And',
      line2Prefix: 'Expertise To ',
      highlightWord: 'Tackle',
      line3: 'Urgent Medical',
      line4: 'Needs.',
      highlightClass: 'text-crimson',
      badge: 'Certified Healthcare Supply',
      desc: 'Supplying and delivering verified, high-efficacy pharmaceutical formulations directly to clinics, chemists, and patients across Delhi NCR.',
      image: '/assets/images/banner-img4.png',
      alt: 'Experience and expertise to tackle urgent medical needs - One Ethical Pharmaceutical',
      ctaText: 'Contact Now',
      ctaLink: '/contact-us',
      secText: 'All Products',
      secLink: '/products',
      themeClass: 'theme-blush'
    },
    {
      id: 2,
      line1: 'Clinical Trust And',
      line2Prefix: 'Integrity To ',
      highlightWord: 'Deliver',
      line3: 'Essential Medical',
      line4: 'Solutions.',
      highlightClass: 'text-blue',
      badge: 'Verified Batch Purity & GMP Standards',
      desc: 'Authentic medicines sourced from top GMP-certified licensed partners, maintained under strict storage and dispatched with care.',
      image: '/assets/images/banner-img3.png',
      alt: 'Clinical trust and integrity in every delivered medicine',
      ctaText: 'Explore Products',
      ctaLink: '/products',
      secText: 'Contact Now',
      secLink: '/contact-us',
      themeClass: 'theme-ice-blue'
    },
    {
      id: 3,
      line1: 'Daily Vitality And',
      line2Prefix: 'Cellular Care For ',
      highlightWord: 'A',
      line3: 'Healthier & Stronger',
      line4: 'Tomorrow.',
      highlightClass: 'text-crimson',
      badge: 'Prompt Doorstep Delivery',
      desc: 'Empowering active lives with high-grade daily antioxidant enzymes, cellular multivitamins, and restorative nutritional therapies.',
      image: '/assets/images/banner-img.png',
      alt: 'Daily vitality and active lifestyle nutrition',
      ctaText: 'Contact Now',
      ctaLink: '/contact-us',
      secText: 'All Products',
      secLink: '/products',
      themeClass: 'theme-blush'
    }
  ];

  // Auto-advance hero slides every 6.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);



  return (
    <main className="page-home-wrapper">
      {/* =========================================================
          1. EXACT HERO SLIDER ? REPLICATING REFERENCE DESIGN
      ========================================================= */}
      <section className={`main-slider-section ${heroSlides[currentSlide].themeClass}`} aria-label="Hero Banner Slider">
        {/* Floating Top-Left Plus Icon from Reference */}
        <div className="slider-plus-icon-wrap" aria-hidden="true">
          <img
            src="/assets/images/plus-icon.svg"
            alt="Medical Plus Icon"
            className="plus-icon"
          />
        </div>

        <div className="container slider-container-relative">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`main-slide-item ${idx === currentSlide ? 'active' : ''}`}
              aria-hidden={idx !== currentSlide}
            >
              {/* Left Column: Two-Tone Bold Typography & Action Buttons */}
              <div className="slider-text-column">
                <div className="slider-eyebrow-pill">
                  <span className="pulse-beacon"></span>
                  <i className="fa-solid fa-truck-medical"></i>
                  <span>{slide.badge}</span>
                </div>

                <h1 className="slider-reference-heading">
                  <span className="heading-dark-line">{slide.line1}</span>
                  <span className="heading-mixed-line">
                    {slide.line2Prefix}
                    <span className={slide.highlightClass}>{slide.highlightWord}</span>
                  </span>
                  <span className={`heading-color-line ${slide.highlightClass}`}>{slide.line3}</span>
                  <span className={`heading-color-line ${slide.highlightClass}`}>{slide.line4}</span>
                </h1>

                <p className="slider-subtext-des">
                  {slide.desc}
                </p>

                <div className="slider-btn-div">
                  <a
                    href={slide.ctaLink}
                    onClick={(e) => { e.preventDefault(); onNavigate(slide.ctaLink); }}
                    className="slider-contact-btn"
                  >
                    <span>{slide.ctaText}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>

                  <a
                    href={slide.secLink}
                    onClick={(e) => { e.preventDefault(); onNavigate(slide.secLink); }}
                    className="slider-secondary-btn"
                  >
                    <span>{slide.secText}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>

                {/* Micro trust indicators */}
                <div className="slider-trust-chips">
                  <div className="trust-chip">
                    <i className="fa-solid fa-circle-check text-blue"></i>
                    <span>Authentic Formulations</span>
                  </div>
                  <div className="trust-chip">
                    <i className="fa-solid fa-shield-halved text-blue"></i>
                    <span>Delhi NCR Delivery</span>
                  </div>
                  <div className="trust-chip">
                    <i className="fa-solid fa-phone-volume text-crimson"></i>
                    <span>Direct Call Orders</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Person Cutout + Concentric Ripple Waves + Dot Matrix */}
              <div className="slider-visual-column">
                <div className="slider-visual-centerpiece">
                  {/* Concentric Animated Wave Ripples */}
                  <div className="slider-waves-container" aria-hidden="true">
                    <div className="waves1"></div>
                    <div className="waves2"></div>
                    <div className="waves3"></div>
                  </div>

                  {/* Cutout Hero Image */}
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="slider-subject-cutout-img"
                  />

                  {/* Dot Matrix Icon at Bottom-Left of Subject */}
                  <img
                    src="/assets/images/dots-icon.svg"
                    alt="Decorative Dots"
                    className="dots-icon"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Vertical Capsule Pill Navigation on the Right Edge (Matches Screenshot) */}
          <div className="slider-item-nav" aria-label="Slide indicators">
            <div className="vertical-capsule-track">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  className={`capsule-dot-item ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Jump to slide ${idx + 1}`}
                  title={`Slide ${idx + 1}`}
                >
                  <span className="dot-shape"></span>
                </button>
              ))}
            </div>
          </div>

          
        </div>
      </section>

      {/* =========================================================
          2. ABOUT US SECTION ? PRODUCT SOURCING & DOORSTEP DELIVERY FOCUS
      ========================================================= */}
      <section className="section-padding about-section-premium" id="about">
        <div className="container">
          <div className="about-split-layout">
            <div className="about-text-column">
              <span className="section-eyebrow">
                <i className="fa-solid fa-building-circle-check"></i> Sourcing & Doorstep Delivery
              </span>
              <h2 className="section-main-heading">
                Dedicated Healthcare Product Sourcing & Doorstep Delivery
              </h2>
              <p className="section-body-lead">
                <strong>{COMPANY_INFO.name}</strong> operates as an authorized distributor and delivery provider of essential healthcare formulations in Delhi NCR. We do not manufacture medicines; rather, we specialize in delivering high-grade, authentic pharmaceutical products directly to medical practitioners, retail chemists, and individuals.
              </p>
              <p className="section-body-text">
                Every product we deliver is sourced strictly from licensed, GMP-certified manufacturers with verified batch authentication. We ensure appropriate storage conditions, rapid dispatch, and transparent customer assistance so that essential medicines reach you safely and reliably.
              </p>

              <div className="about-metrics-row">
                <div className="metric-box">
                  <div className="metric-icon"><i className="fa-solid fa-capsules"></i></div>
                  <div className="metric-info">
                    <h4>Essential Formulations</h4>
                    <p>Curated portfolio of high-efficacy therapies</p>
                  </div>
                </div>

                <div className="metric-box">
                  <div className="metric-icon" style={{ background: '#eff6ff', color: '#0047bb' }}><i className="fa-solid fa-truck-fast"></i></div>
                  <div className="metric-info">
                    <h4>Prompt Delhi NCR Delivery</h4>
                    <p>Safe packaging with timely local dispatch</p>
                  </div>
                </div>

                <div className="metric-box">
                  <div className="metric-icon" style={{ background: '#fef2f2', color: '#dc2626' }}><i className="fa-solid fa-shield-check"></i></div>
                  <div className="metric-info">
                    <h4>100% Genuine Batches</h4>
                    <p>Strictly sourced from licensed GMP manufacturers</p>
                  </div>
                </div>
              </div>

              <div className="about-cta-bar">
                <a
                  href="/about-us"
                  onClick={(e) => { e.preventDefault(); onNavigate('/about-us'); }}
                  className="btn-primary-custom"
                >
                  <span>Learn More About Us</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="btn-call-desk"
                  title="Direct phone order desk"
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="about-visual-column">
              <div className="about-image-card">
                <img
                  src="/assets/images/about-facility.jpg"
                  alt="ONE Ethical Pharmaceutical Delivery Fleet & Sourcing"
                  className="about-hero-img"
                />
                <div className="about-floating-card">
                  <div className="floating-badge-icon"><i className="fa-solid fa-award"></i></div>
                  <div>
                    <strong>Direct Distributor</strong>
                    <p>Doorstep Delivery Partner in Delhi NCR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. ALL PRODUCTS SECTION
      ========================================================= */}
      <section className="section-padding bg-slate-subtle" id="products-range">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">
              <i className="fa-solid fa-pills"></i> Available for Immediate Order
            </span>
            <h2 className="section-main-heading">Our Healthcare Products</h2>
            <p className="section-sub-lead">
              We stock and deliver essential, scientifically formulated healthcare therapies. Each product is delivered in its original ethical packaging with full batch traceability.
            </p>
          </div>

          <div className="products-four-grid">
            {PRODUCTS.map((prod) => (
              <div key={prod.slug} className="product-card-elevated">
                <div className="product-card-badge-row">
                  <span className="badge-category">{prod.categoryName}</span>
                  <span className="badge-status-in-stock">
                    <i className="fa-solid fa-check"></i> In Stock
                  </span>
                </div>

                <div
                  className="product-img-frame"
                  onClick={() => onNavigate(`/products/${prod.slug}`)}
                  style={{ cursor: 'pointer' }}
                  title={`View details for ${prod.name}`}
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="product-uncropped-img"
                  />
                </div>

                <div className="product-card-body">
                  <h3 className="product-card-title">
                    <a
                      href={`/products/${prod.slug}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(`/products/${prod.slug}`); }}
                    >
                      {prod.name}
                    </a>
                  </h3>

                  <p className="product-card-short-desc">
                    {prod.shortDesc}
                  </p>

                  <div className="product-packaging-pill">
                    <i className="fa-solid fa-boxes-packing"></i>
                    <span>{prod.packaging}</span>
                  </div>

                  <div className="product-card-actions">
                    <a
                      href={`/products/${prod.slug}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(`/products/${prod.slug}`); }}
                      className="btn-card-view"
                    >
                      <span>View Details</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>

                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="btn-card-call-order"
                      title="Place direct telephone order"
                    >
                      <i className="fa-solid fa-phone"></i>
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="products-section-footer">
            <a
              href="/products"
              onClick={(e) => { e.preventDefault(); onNavigate('/products'); }}
              className="btn-all-products-banner"
            >
              <i className="fa-solid fa-boxes-stacked"></i>
              <span>View All Products & Formulations</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. HEALTHCARE SOLUTIONS SECTION
      ========================================================= */}
      <section className="section-padding solutions-section" id="solutions">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">
              <i className="fa-solid fa-stethoscope"></i> Targeted Health Benefits
            </span>
            <h2 className="section-main-heading">Healthcare Solutions We Deliver</h2>
            <p className="section-sub-lead">
              Our healthcare formulations address vital clinical needs, from cellular cardiovascular vitality and broad-spectrum bacterial treatment to dual infection defense and iron restorative care.
            </p>
          </div>

          <div className="solutions-four-grid">
            {/* Solution 1: C-ONE ENZYME */}
            <div className="solution-card">
              <div className="solution-icon-wrap" style={{ background: '#eff6ff', color: '#0047bb' }}>
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <div className="solution-product-tag">C-ONE ENZYME Tablet</div>
              <h3 className="solution-title">Cellular Energy & Cardiovascular Vitality</h3>
              <p className="solution-desc">
                High-potency CoQ10, Omega-3 fatty acids, L-Carnitine, and botanical antioxidants support heart health, cellular ATP production, and daily resilience against oxidative stress.
              </p>
              <a
                href="/products/c-one-enzyme"
                onClick={(e) => { e.preventDefault(); onNavigate('/products/c-one-enzyme'); }}
                className="solution-link"
              >
                <span>View Product Formulation</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            {/* Solution 2: AMOX ONE LB */}
            <div className="solution-card">
              <div className="solution-icon-wrap" style={{ background: '#fef2f2', color: '#dc2626' }}>
                <i className="fa-solid fa-shield-virus"></i>
              </div>
              <div className="solution-product-tag">AMOX ONE LB Tablet</div>
              <h3 className="solution-title">Antibacterial Defense with Probiotic Shield</h3>
              <p className="solution-desc">
                Potent Amoxicillin and Potassium Clavulanate combined with Lactic Acid Bacillus to eradicate bacterial infections while safeguarding healthy gastrointestinal flora.
              </p>
              <a
                href="/products/amox-one-lb"
                onClick={(e) => { e.preventDefault(); onNavigate('/products/amox-one-lb'); }}
                className="solution-link"
              >
                <span>View Product Formulation</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            {/* Solution 3: CEFIXOR-O */}
            <div className="solution-card">
              <div className="solution-icon-wrap" style={{ background: '#eff6ff', color: '#0047bb' }}>
                <i className="fa-solid fa-dna"></i>
              </div>
              <div className="solution-product-tag">CEFIXOR-O Tablet</div>
              <h3 className="solution-title">Dual-Action Synergy for Resistant Infections</h3>
              <p className="solution-desc">
                Synergistic combination of Cefixime (3rd gen cephalosporin) and Ofloxacin (fluoroquinolone) providing comprehensive bactericidal coverage for respiratory and systemic conditions.
              </p>
              <a
                href="/products/cefixor-o"
                onClick={(e) => { e.preventDefault(); onNavigate('/products/cefixor-o'); }}
                className="solution-link"
              >
                <span>View Product Formulation</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            {/* Solution 4: FERRIMAX IRON */}
            <div className="solution-card">
              <div className="solution-icon-wrap" style={{ background: '#fef2f2', color: '#dc2626' }}>
                <i className="fa-solid fa-droplet"></i>
              </div>
              <div className="solution-product-tag">FERRIMAX IRON Syrup</div>
              <h3 className="solution-title">Restorative Blood Formation & Iron Replenishment</h3>
              <p className="solution-desc">
                Bioavailable Ferrous Fumarate with Folic Acid, Zinc, and Vitamin B12 to actively replenish hemoglobin, counter anemia, and revitalize systemic oxygen delivery.
              </p>
              <a
                href="/products/ferrimax-iron-syrup"
                onClick={(e) => { e.preventDefault(); onNavigate('/products/ferrimax-iron-syrup'); }}
                className="solution-link"
              >
                <span>View Product Formulation</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. WHY CHOOSE US ? SOURCING, TIMELY DISPATCH & QUALITY
      ========================================================= */}
      <section className="section-padding bg-slate-subtle">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">
              <i className="fa-solid fa-truck-fast"></i> Safe & Rapid Supply
            </span>
            <h2 className="section-main-heading">Why Choose Us For Product Delivery?</h2>
            <p className="section-sub-lead">
              We prioritize product authenticity, secure temperature-controlled storage, and rapid doorstep delivery across Delhi NCR.
            </p>
          </div>

          <div className="why-choose-four-grid">
            <div className="why-card">
              <div className="why-icon" style={{ background: '#eff6ff', color: '#0047bb' }}>
                <i className="fa-solid fa-certificate"></i>
              </div>
              <h3>100% Genuine Batches</h3>
              <p>Direct supply sourced strictly from licensed GMP-standard manufacturers with batch documentation.</p>
            </div>

            <div className="why-card">
              <div className="why-icon" style={{ background: '#fef2f2', color: '#dc2626' }}>
                <i className="fa-solid fa-truck-ramp-box"></i>
              </div>
              <h3>Safe & Fast Delivery</h3>
              <p>Specialized protective packaging with priority dispatch across East Delhi and NCR locations.</p>
            </div>

            <div className="why-card">
              <div className="why-icon" style={{ background: '#eff6ff', color: '#0047bb' }}>
                <i className="fa-solid fa-boxes-packing"></i>
              </div>
              <h3>Original Packaging</h3>
              <p>Delivered strictly in authentic manufacturer blister strips and bottles with uncompromised seals.</p>
            </div>

            <div className="why-card">
              <div className="why-icon" style={{ background: '#fef2f2', color: '#dc2626' }}>
                <i className="fa-solid fa-headset"></i>
              </div>
              <h3>Responsive Order Support</h3>
              <p>Direct phone order desk with friendly staff ready to assist clinics, chemists, and patients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. IMMEDIATE ORDER DESK CALLOUT ? CONTRAST NAVY-BLACK LUXURY
      ========================================================= */}
      <section className="order-callout-section">
        <div className="container">
          <div className="order-callout-inner">
            <div className="callout-text">
              <div className="callout-badge">
                <span className="pulse-beacon"></span>
                <span>Immediate Delivery In Delhi NCR</span>
              </div>
              <h2>Need Any of Our Healthcare Formulations?</h2>
              <p>
                Place your order directly via phone or submit an order inquiry online. Our dispatch team is ready to deliver authentic healthcare products promptly to your doorstep.
              </p>
            </div>

            <div className="callout-actions">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-callout-phone"
                title="Direct call to order desk"
              >
                <i className="fa-solid fa-phone-volume"></i>
                <div className="btn-callout-text">
                  <span className="btn-label">Primary Order Line</span>
                  <span className="btn-phone">{COMPANY_INFO.phone}</span>
                </div>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneAlt}`}
                className="btn-callout-alt"
                title="Alternate order line"
              >
                <i className="fa-solid fa-phone"></i>
                <div className="btn-callout-text">
                  <span className="btn-label">Alternate Line</span>
                  <span className="btn-phone">{COMPANY_INFO.phoneAlt}</span>
                </div>
              </a>

              <a
                href="/contact-us"
                onClick={(e) => { e.preventDefault(); onNavigate('/contact-us'); }}
                className="btn-callout-contact"
              >
                <span>Online Order Desk</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
