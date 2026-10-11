import React, { useState, useEffect } from 'react';
import { CATEGORIES, PRODUCTS, COMPANY_INFO } from '../data/products';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

// 1. Hero Slides matching the exact 3 slides from Jannocks Pharma
const HERO_SLIDES = [
  {
    badge: 'Clinical Excellence ? Better Medicine',
    heading: 'High Quality and Affordable Medicines To',
    highlight: 'Improve Quality Of Life.',
    description: 'ONE ETHICAL PHARMACEUTICAL provides high-efficacy ranges of pharmaceutical formulations, strict Good Manufacturing Practices (GMP), and quality patient care across India.',
    btnText: 'View Products',
    link: '/products',
    image: '/one_assets/doctor-hero1.jpg'
  },
  {
    badge: 'Human Values & Ethical Standards',
    heading: 'Maintaining Highest Standards and Human Values For',
    highlight: 'Customer Satisfaction.',
    description: 'We adhere to stringent international standards and analytical validations to ensure accurate bio-availability, purity, and clinical efficacy.',
    btnText: 'Know More',
    link: '/about-us',
    image: '/one_assets/doctor-hero2.jpg'
  },
  {
    badge: 'Expertise & Reliable Formulations',
    heading: 'Experience and Expertise to Tackle',
    highlight: 'Urgent Medical Needs.',
    description: 'Providing doctors, hospitals, and pharmacies with trusted therapeutic ranges like C-ONE ENZYME Tablet and AMOX ONE LB Tablet.',
    btnText: 'Contact Now',
    link: '/contact-us',
    image: '/one_assets/doctor-hero3.jpg'
  }
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <main>
      {/* =========================================================
          SECTION 1: HERO SLIDER (matching Jannocks main-slider-section)
      ========================================================= */}
      <section className="main-slider-section">
        <img
          src="/assets/images/plus-icon.svg"
          alt="Plus Icon"
          className="slider-bg-icon-plus"
        />
        <img
          src="/assets/images/dots-icon.svg"
          alt="Dots Icon"
          className="slider-bg-icon-dots"
        />

        <div className="container">
          <div className="hero-slide-grid">
            <div>
              <div className="hero-badge">
                <i className="fa-solid fa-user-doctor"></i> {slide.badge}
              </div>
              <h1 className="hero-heading">
                {slide.heading} <span className="primary-color">{slide.highlight}</span>
              </h1>
              <p className="common-des" style={{ fontSize: '15px', marginBottom: '28px' }}>
                {slide.description}
              </p>
              <div className="hero-btn-group">
                <a
                  href={slide.link}
                  onClick={(e) => { e.preventDefault(); onNavigate(slide.link); }}
                  className="custom-more-btn"
                >
                  <span>{slide.btnText} <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i></span>
                </a>
                <a
                  href="/contact-us"
                  onClick={(e) => { e.preventDefault(); onNavigate('/contact-us'); }}
                  className="custom-more-btn"
                  style={{ background: '#ffffff', color: '#0047bb', border: '2px solid #0047bb' }}
                >
                  <span>Contact Office <i className="fa-solid fa-phone" style={{ marginLeft: '6px' }}></i></span>
                </a>
              </div>
            </div>

            <div className="slider-img-container">
              <div className="waves1"></div>
              <div className="waves2"></div>
              <div className="waves3"></div>
              <img
                key={slide.image}
                src={slide.image}
                alt="Medical Care"
                className="slider-img"
                style={{ borderRadius: '14px', border: '3px solid #ffffff', boxShadow: '0 12px 35px rgba(0,71,187,0.2)' }}
              />
            </div>
          </div>
        </div>

        {/* Slider Indicator Dots */}
        <div className="slider-dots">
          {HERO_SLIDES.map((_, idx) => (
            <div
              key={idx}
              className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION 2: ABOUT COMPANY (matching Jannocks about-us-section)
      ========================================================= */}
      <section className="about-us-section section-padding common-bg">
        <div className="container">
          <div className="about-grid">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="/assets/images/about.png"
                alt="ONE ETHICAL PHARMACEUTICAL"
                className="about-img"
                style={{ maxHeight: '420px', objectFit: 'contain' }}
              />
            </div>

            <div>
              <div className="small-title">Corporate Profile</div>
              <h2 className="big-title" style={{ marginBottom: '18px' }}>
                {COMPANY_INFO.name}
              </h2>
              <p className="common-des">
                <strong>{COMPANY_INFO.name}</strong> is a reliable leading organization, which is engaged in providing highly effective ranges of Pharmaceutical Medicines. We have a wide range of healthcare products: Capsules, Tablets, and other Pharmaceutical Products. All these products are processed under the strict guidelines of international standards, following the rules of appropriate composition of compounds.
              </p>
              <p className="common-des">
                Based at Space No-48/17, First Floor, Dsidc Industrial Complex, Himmat Puri, Delhi 110091, we ensure that every formulation delivers uncompromised bio-availability, purity, and clinical efficacy to help patients lead active, healthier lives.
              </p>
              <a
                href="/about-us"
                onClick={(e) => { e.preventDefault(); onNavigate('/about-us'); }}
                className="custom-more-btn"
              >
                <span>Read More <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: OUR RANGE OF SOLUTIONS (matching Jannocks our-range)
      ========================================================= */}
      <section className="section-padding our-range common-section">
        <div className="container">
          <div className="common-left-title-div">
            <div>
              <h2 className="small-title">Explore & Trust</h2>
              <p className="big-title">Our Range of Solutions</p>
            </div>
            <a
              href="/products"
              onClick={(e) => { e.preventDefault(); onNavigate('/products'); }}
              className="common-left-title-btn"
            >
              View All <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="category-grid">
            {Object.values(CATEGORIES).map((cat) => (
              <a
                key={cat.id}
                href={`/products-list/${cat.id}`}
                onClick={(e) => { e.preventDefault(); onNavigate(`/products-list/${cat.id}`); }}
                className="category-card"
              >
                <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', borderRadius: '8px', overflow: 'hidden', marginBottom: '12px' }}>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="category-img"
                    style={{ maxHeight: '130px', width: '100%', objectFit: 'contain' }}
                  />
                </div>
                <h4 className="category-card-title">{cat.name}</h4>
                <p style={{ fontSize: '12px', color: '#64748b', marginTop: '6px', lineHeight: '1.4' }}>
                  {cat.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: OUR PRODUCTS (matching Jannocks products-section)
      ========================================================= */}
      <section className="section-padding products-section common-bg">
        <div className="container">
          <div className="common-left-title-div">
            <div>
              <h2 className="small-title">Quality & Reliable</h2>
              <p className="big-title">Our Products</p>
            </div>
            <a
              href="/products"
              onClick={(e) => { e.preventDefault(); onNavigate('/products'); }}
              className="common-left-title-btn"
            >
              View All <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="products-grid">
            {PRODUCTS.map((prod) => (
              <div key={prod.slug} className="product-card">
                <a
                  href={`/products/${prod.slug}`}
                  onClick={(e) => { e.preventDefault(); onNavigate(`/products/${prod.slug}`); }}
                >
                  <div className="product-img-wrap" style={{ height: '210px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', padding: '10px' }}>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="product-card-img"
                      style={{ maxHeight: '190px', width: '100%', objectFit: 'contain' }}
                    />
                    <div className="product-plus-badge">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </a>

                <div className="product-info-wrap">
                  <div>
                    <span className="product-category-tag">{prod.categoryName}</span>
                    <h5 className="product-card-name">
                      <a
                        href={`/products/${prod.slug}`}
                        onClick={(e) => { e.preventDefault(); onNavigate(`/products/${prod.slug}`); }}
                      >
                        {prod.name}
                      </a>
                    </h5>
                    {prod.packaging && (
                      <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', fontWeight: 500 }}>
                        <i className="fa-solid fa-boxes-packing" style={{ marginRight: '4px' }}></i> {prod.packaging}
                      </p>
                    )}
                  </div>

                  <div style={{ marginTop: '12px' }}>
                    <a
                      href={`/products/${prod.slug}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(`/products/${prod.slug}`); }}
                      className="product-read-more-btn"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      Read Details <i className="fa-solid fa-arrow-right" style={{ fontSize: '11px' }}></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: WHY CHOOSE US (matching Jannocks why-choose-us-section)
      ========================================================= */}
      <section className="section-padding why-choose-us-section">
        <div className="container">
          <div className="why-choose-grid">
            <div className="why-choose-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="/assets/images/why-choose-img.jpg"
                alt="Why Choose ONE Ethical"
                className="why-choose-img"
                style={{ borderRadius: '12px', width: '100%', boxShadow: '0 10px 30px rgba(0,71,187,0.08)' }}
              />
            </div>

            <div>
              <div className="small-title">Why Choose Us</div>
              <h2 className="big-title">What makes us better than Others.?</h2>
              <p className="common-des" style={{ marginTop: '10px' }}>
                We bridge clinical excellence with integrity, ensuring doctors, pharmacists, and patients receive world-class healthcare formulations.
              </p>

              <div className="why-choose-features">
                <div className="why-choose-box text-center">
                  <div className="why-chooose-icons" style={{ marginBottom: '12px' }}>
                    <img
                      src="/assets/images/quality-assurance.png"
                      alt="Quality Assurance"
                      className="why-choose-icon"
                    />
                  </div>
                  <h3 className="why-choose-title">Quality Assurance</h3>
                  <p className="common-des" style={{ fontSize: '13px', margin: 0 }}>
                    We Ensure that Development & Packaging of our products is done under hygienic environment.
                  </p>
                </div>

                <div className="why-choose-box text-center">
                  <div className="why-chooose-icons" style={{ marginBottom: '12px' }}>
                    <img
                      src="/assets/images/our-strengths.png"
                      alt="Our Strengths"
                      className="why-choose-icon"
                    />
                  </div>
                  <h3 className="why-choose-title">Our Strengths</h3>
                  <p className="common-des" style={{ fontSize: '13px', margin: 0 }}>
                    Our Business Ethics, Zero Tolerance Quality Policy and a Highly Qualified Team are Our Strengths.
                  </p>
                </div>

                <div className="why-choose-box text-center">
                  <div className="why-chooose-icons" style={{ marginBottom: '12px' }}>
                    <img
                      src="/assets/images/passion-excellence.png"
                      alt="Passion For Excellence"
                      className="why-choose-icon"
                    />
                  </div>
                  <h3 className="why-choose-title">Passion For Excellence</h3>
                  <p className="common-des" style={{ fontSize: '13px', margin: 0 }}>
                    We tenaciously chase excellence through continuous improvement in all our projects, processes and products.
                  </p>
                </div>

                <div className="why-choose-box text-center">
                  <div className="why-chooose-icons" style={{ marginBottom: '12px' }}>
                    <img
                      src="/assets/images/customer-focus.png"
                      alt="Customer Focus"
                      className="why-choose-icon"
                    />
                  </div>
                  <h3 className="why-choose-title">Customer Focus</h3>
                  <p className="common-des" style={{ fontSize: '13px', margin: 0 }}>
                    We believe in understanding and meeting customer needs in a professional and responsive manner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 6: QUICK CONTACT BANNER (matching Jannocks quick-contact-section)
      ========================================================= */}
      <section className="quick-contact-section">
        <div className="container">
          <div className="content">
            <div className="text-cnt">
              <h3 className="heading">Have Questions?</h3>
              <p className="text">
                Our measurement of success is our customers. We succeed when they succeed. We are committed to solving current and future needs with innovation.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="custom-more-btn call-now-btn"
                title="Call Now"
              >
                <span>Call Now <i className="fa-solid fa-phone" style={{ marginLeft: '6px' }}></i></span>
              </a>
              <a
                href="/contact-us"
                onClick={(e) => { e.preventDefault(); onNavigate('/contact-us'); }}
                className="custom-more-btn"
                style={{ background: 'transparent', border: '2px solid #ffffff', color: '#ffffff' }}
              >
                <span>Contact Us <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
