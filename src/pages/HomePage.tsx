import React, { useState, useEffect } from 'react';
import { PRODUCTS, COMPANY_INFO } from '../data/products';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      badge: 'Healthcare Products You Can Rely On',
      heading: 'Quality Healthcare Products, Delivered to You',
      desc: 'We supply and deliver 4 trusted healthcare formulations with verified quality, prompt dispatch, and dependable service across Delhi NCR.',
      image: '/one_assets/cartoon-doctors-hero1.jpg',
      alt: 'Professional healthcare doctors cartoon illustration'
    },
    {
      badge: 'Reliable Product Supply & Doorstep Delivery',
      heading: 'Prompt Healthcare Product Supply for Your Needs',
      desc: 'Partnering with licensed distribution channels to deliver genuine, high-standard medicines and wellness supplements right to your doorstep.',
      image: '/one_assets/cartoon-doctors-hero2.jpg',
      alt: 'Doctor and pharmacist healthcare delivery cartoon illustration'
    }
  ];

  // Auto-advance hero slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <main>
      {/* =========================================================
          1. HERO SLIDER ? 2D CARTOON DOCTORS ONLY
      ========================================================= */}
      <section className="hero-slider-section" aria-label="Hero Slider">
        <div className="container">
          <div className="hero-slider-wrapper">
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`hero-slide-item ${idx === currentSlide ? 'active' : ''}`}
                aria-hidden={idx !== currentSlide}
              >
                <div className="hero-content-col">
                  <span className="hero-kicker-badge">
                    <i className="fa-solid fa-truck-fast"></i> {slide.badge}
                  </span>
                  <h1 className="hero-main-title">{slide.heading}</h1>
                  <p className="hero-description-text">{slide.desc}</p>

                  <div className="hero-action-buttons">
                    <a
                      href="/products"
                      onClick={(e) => { e.preventDefault(); onNavigate('/products'); }}
                      className="hero-btn-primary"
                    >
                      <span>Explore All Products</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>

                    <a
                      href="/contact-us"
                      onClick={(e) => { e.preventDefault(); onNavigate('/contact-us'); }}
                      className="hero-btn-secondary"
                    >
                      <i className="fa-solid fa-phone"></i>
                      <span>Contact Us</span>
                    </a>
                  </div>

                  <div className="hero-features-strip">
                    <div className="hero-feature-pill">
                      <i className="fa-solid fa-circle-check"></i>
                      <span>4 Core Formulations</span>
                    </div>
                    <div className="hero-feature-pill">
                      <i className="fa-solid fa-shield-halved"></i>
                      <span>100% Genuine Batches</span>
                    </div>
                    <div className="hero-feature-pill">
                      <i className="fa-solid fa-clock"></i>
                      <span>Fast Local Delivery</span>
                    </div>
                  </div>
                </div>

                <div className="hero-image-col">
                  <div className="hero-image-frame">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="hero-cartoon-image"
                    />
                    <div className="hero-image-tag">
                      <i className="fa-solid fa-user-doctor"></i>
                      <span>Care You Can Trust</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Slider Navigation Controls */}
            <div className="slider-controls-wrap">
              <button
                className="slider-arrow-btn prev-btn"
                onClick={handlePrevSlide}
                aria-label="Previous Slide"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>

              <div className="slider-dots-container">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                className="slider-arrow-btn next-btn"
                onClick={handleNextSlide}
                aria-label="Next Slide"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. ABOUT US SECTION ? PRODUCT SELLING & DELIVERY FOCUS
      ========================================================= */}
      <section className="section-padding about-section-clean">
        <div className="container">
          <div className="about-split-layout">
            <div className="about-text-column">
              <span className="section-eyebrow">
                <i className="fa-solid fa-building-circle-check"></i> About Our Business
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
                    <h4>4 Essential Products</h4>
                    <p>Focused portfolio of high-demand therapies</p>
                  </div>
                </div>

                <div className="metric-box">
                  <div className="metric-icon"><i className="fa-solid fa-truck-ramp-box"></i></div>
                  <div className="metric-info">
                    <h4>Direct Doorstep Delivery</h4>
                    <p>Prompt dispatch across Delhi and NCR</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <a
                  href="/about-us"
                  onClick={(e) => { e.preventDefault(); onNavigate('/about-us'); }}
                  className="theme-link-btn"
                >
                  <span>Learn More About Our Operations</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="about-visual-column">
              <div className="about-card-stack">
                <div className="about-highlight-card">
                  <div className="card-badge-pill">Our Commitment</div>
                  <h3>Reliable Supply For Healthcare Needs</h3>
                  <p>
                    We bridge the gap between quality manufacturers and end customers, ensuring timely availability and seamless ordering.
                  </p>
                  <ul className="about-check-list">
                    <li><i className="fa-solid fa-circle-check"></i> Genuine products with proper batch records</li>
                    <li><i className="fa-solid fa-circle-check"></i> Direct phone and email order support</li>
                    <li><i className="fa-solid fa-circle-check"></i> Safe packaging and careful transport</li>
                    <li><i className="fa-solid fa-circle-check"></i> Verified office in Delhi 110091</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. OUR RANGE ? EXACTLY THE 4 PRODUCTS
      ========================================================= */}
      <section className="section-padding bg-light-neutral" id="products-range">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">
              <i className="fa-solid fa-boxes-stacked"></i> Explore Our Product Range
            </span>
            <h2 className="section-main-heading">Healthcare Products You Can Rely On</h2>
            <p className="section-sub-lead">
              We exclusively sell and deliver these four proven formulations. Click on any product to view its complete composition and clinical indications.
            </p>
          </div>

          <div className="products-four-grid">
            {PRODUCTS.map((product) => (
              <div key={product.slug} className="product-card-modern">
                <div className="product-card-media">
                  <span className="product-category-badge">{product.categoryName}</span>
                  <a
                    href={`/products/${product.slug}`}
                    onClick={(e) => { e.preventDefault(); onNavigate(`/products/${product.slug}`); }}
                    className="product-card-img-link"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-card-img-uncropped"
                    />
                  </a>
                  {product.packaging && (
                    <div className="product-packaging-tag">
                      <i className="fa-solid fa-box"></i> {product.packaging}
                    </div>
                  )}
                </div>

                <div className="product-card-content">
                  <h3 className="product-card-title">
                    <a
                      href={`/products/${product.slug}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(`/products/${product.slug}`); }}
                    >
                      {product.name}
                    </a>
                  </h3>
                  <p className="product-card-desc">{product.shortDesc}</p>

                  <div className="product-card-actions">
                    <a
                      href={`/products/${product.slug}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(`/products/${product.slug}`); }}
                      className="btn-card-details"
                    >
                      <span>View Details</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>

                    <a
                      href="/contact-us"
                      onClick={(e) => { e.preventDefault(); onNavigate('/contact-us'); }}
                      className="btn-card-order"
                      title="Enquire or order this product"
                    >
                      <i className="fa-solid fa-envelope"></i>
                      <span>Enquire Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-bottom-action">
            <a
              href="/products"
              onClick={(e) => { e.preventDefault(); onNavigate('/products'); }}
              className="btn-view-all-products"
            >
              <i className="fa-solid fa-table-cells"></i>
              <span>Open Complete All Products Catalog</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. SOLUTIONS SECTION ? ADDRESSING HEALTHCARE NEEDS
      ========================================================= */}
      <section className="section-padding solutions-section" id="solutions">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">
              <i className="fa-solid fa-stethoscope"></i> Targeted Therapeutic Needs
            </span>
            <h2 className="section-main-heading">Our Healthcare Solutions</h2>
            <p className="section-sub-lead">
              How our four core healthcare products support key treatment needs across infection control, nutritional stamina, and blood vitality.
            </p>
          </div>

          <div className="solutions-distinct-grid">
            {/* Solution 1: C-ONE */}
            <div className="solution-item-card">
              <div className="solution-card-header">
                <div className="solution-icon-wrap" style={{ background: '#ecfdf5', color: '#059669' }}>
                  <i className="fa-solid fa-heart-pulse"></i>
                </div>
                <div>
                  <span className="solution-kicker">Vitality & Metabolism</span>
                  <h3 className="solution-title">Daily Wellness & Cellular Energy</h3>
                </div>
              </div>
              <p className="solution-text">
                Comprehensive cellular protection addressing fatigue, oxidative strain, and cardiovascular demands with Coenzyme Q10, Omega-3 fatty acids, L-Carnitine, and botanical extracts.
              </p>
              <div className="solution-product-link">
                <strong>Supplied Formulation:</strong> C-ONE ENZYME Tablet
              </div>
              <a
                href="/products/c-one-enzyme"
                onClick={(e) => { e.preventDefault(); onNavigate('/products/c-one-enzyme'); }}
                className="solution-action-btn"
              >
                <span>View Product Details</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            {/* Solution 2: AMOX ONE */}
            <div className="solution-item-card">
              <div className="solution-card-header">
                <div className="solution-icon-wrap" style={{ background: '#eff6ff', color: '#2563eb' }}>
                  <i className="fa-solid fa-shield-virus"></i>
                </div>
                <div>
                  <span className="solution-kicker">Bacterial Infection Care</span>
                  <h3 className="solution-title">Broad-Spectrum Antibacterial Shield</h3>
                </div>
              </div>
              <p className="solution-text">
                Reliable clinical antibiotic therapy combining Amoxicillin 500mg and Clavulanate 125mg to combat resistant respiratory and ENT pathogens, backed with Lactic Acid Bacillus probiotic spores.
              </p>
              <div className="solution-product-link">
                <strong>Supplied Formulation:</strong> AMOX ONE LB Tablet
              </div>
              <a
                href="/products/amox-one-lb"
                onClick={(e) => { e.preventDefault(); onNavigate('/products/amox-one-lb'); }}
                className="solution-action-btn"
              >
                <span>View Product Details</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            {/* Solution 3: CEFIXOR-O */}
            <div className="solution-item-card">
              <div className="solution-card-header">
                <div className="solution-icon-wrap" style={{ background: '#f0fdfa', color: '#0d9488' }}>
                  <i className="fa-solid fa-bacteria"></i>
                </div>
                <div>
                  <span className="solution-kicker">Dual-Action Antimicrobial</span>
                  <h3 className="solution-title">Synergistic Infection Control</h3>
                </div>
              </div>
              <p className="solution-text">
                Potent dual-mechanism antibacterial action (Cefixime 200mg + Ofloxacin 200mg) designed for accelerated resolution of typhoid fever, gastrointestinal infections, and complex urinary tract conditions.
              </p>
              <div className="solution-product-link">
                <strong>Supplied Formulation:</strong> CEFIXOR-O Tablet
              </div>
              <a
                href="/products/cefixor-o"
                onClick={(e) => { e.preventDefault(); onNavigate('/products/cefixor-o'); }}
                className="solution-action-btn"
              >
                <span>View Product Details</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            {/* Solution 4: FERRIMAX */}
            <div className="solution-item-card">
              <div className="solution-card-header">
                <div className="solution-icon-wrap" style={{ background: '#fef2f2', color: '#dc2626' }}>
                  <i className="fa-solid fa-droplet"></i>
                </div>
                <div>
                  <span className="solution-kicker">Hematinic Therapy</span>
                  <h3 className="solution-title">Blood Formation & Iron Vitality</h3>
                </div>
              </div>
              <p className="solution-text">
                Enriched Ferrous Fumarate syrup fortified with Folic Acid, Zinc, and Vitamin B12 to actively replenish iron stores, support healthy red blood cells, and overcome chronic fatigue.
              </p>
              <div className="solution-product-link">
                <strong>Supplied Formulation:</strong> FERRIMAX IRON Syrup
              </div>
              <a
                href="/products/ferrimax-iron"
                onClick={(e) => { e.preventDefault(); onNavigate('/products/ferrimax-iron'); }}
                className="solution-action-btn"
              >
                <span>View Product Details</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. WHY CHOOSE US ? RELIABLE PRODUCT DELIVERY
      ========================================================= */}
      <section className="section-padding bg-light-neutral">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">
              <i className="fa-solid fa-award"></i> The Delivery Advantage
            </span>
            <h2 className="section-main-heading">Why Healthcare Buyers Rely On Us</h2>
            <p className="section-sub-lead">
              Four concrete reasons medical practitioners and pharmacies trust our supply channel.
            </p>
          </div>

          <div className="why-delivery-grid">
            <div className="why-delivery-box">
              <div className="why-icon-circle"><i className="fa-solid fa-certificate"></i></div>
              <h4>100% Genuine Certified Stock</h4>
              <p>Every box is strictly sourced from authorized, regulated manufacturers with intact tamper-evident packaging.</p>
            </div>

            <div className="why-delivery-box">
              <div className="why-icon-circle"><i className="fa-solid fa-truck-fast"></i></div>
              <h4>Prompt Delhi NCR Delivery</h4>
              <p>Timely delivery schedules to ensure clinics, stockists, and patients never face formulation shortages.</p>
            </div>

            <div className="why-delivery-box">
              <div className="why-icon-circle"><i className="fa-solid fa-temperature-arrow-down"></i></div>
              <h4>Proper Storage Assurance</h4>
              <p>All stock is stored in clean, temperature-regulated facilities below 25?C to preserve pharmaceutical potency.</p>
            </div>

            <div className="why-delivery-box">
              <div className="why-icon-circle"><i className="fa-solid fa-headset"></i></div>
              <h4>Direct Order Helpline</h4>
              <p>Speak directly to our verified Delhi office desk at 9211740315 or 7217681647 for order confirmation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          6. QUICK CONTACT & ORDER BANNER
      ========================================================= */}
      <section className="order-callout-section">
        <div className="container">
          <div className="order-callout-inner">
            <div className="order-callout-text">
              <span className="callout-tag">Prompt Service</span>
              <h2>Have Questions or Need to Place an Order?</h2>
              <p>
                Our order desk is ready to assist you with stock availability, dispatch timelines, and delivery across Delhi NCR.
              </p>
            </div>

            <div className="order-callout-buttons">
              <a href={`tel:${COMPANY_INFO.phone}`} className="callout-phone-btn">
                <i className="fa-solid fa-phone"></i>
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <a
                href="/contact-us"
                onClick={(e) => { e.preventDefault(); onNavigate('/contact-us'); }}
                className="callout-contact-btn"
              >
                <i className="fa-regular fa-envelope"></i>
                <span>Send An Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
