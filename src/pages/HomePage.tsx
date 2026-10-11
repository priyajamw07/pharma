import React, { useState, useEffect } from 'react';
import { CATEGORIES, COMPANY_INFO } from '../data/products';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenEnquiry: (productName?: string) => void;
}

const HERO_SLIDES = [
  {
    badge: 'Clinical Excellence • Doctor Endorsed Care',
    heading: 'Expert Medical Guidance For A',
    highlight: 'Healthier, Vibrant Tomorrow.',
    description: 'ONE ETHICAL PHARMACEUTICAL collaborates with medical specialists, physicians, and researchers across India to deliver proven therapeutic formulations and nutritional care.',
    btnText: 'Consult Our Formulations',
    link: '/products',
    image: '/one_assets/doctor-hero1.jpg'
  },
  {
    badge: 'Dedicated Healthcare & Research Team',
    heading: 'Physician Driven Science,',
    highlight: 'Uncompromising Patient Outcomes.',
    description: 'Our team of experienced medical professionals and pharmaceutical scientists uphold strict ethical guidelines to ensure high-potency healthcare delivery.',
    btnText: 'About Our Medical Vision',
    link: '/about-us',
    image: '/one_assets/doctor-hero2.jpg'
  },
  {
    badge: 'Senior Consultant & Patient Care',
    heading: 'Compassionate Care Paired With',
    highlight: 'Evidence-Based Medicine.',
    description: 'Providing doctors and patients with reliable daily wellness support, high-purity enzymes, and cardiovascular health solutions.',
    btnText: 'Connect With Our Team',
    link: '/contact-us',
    image: '/one_assets/doctor-hero3.jpg'
  }
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnquiry }) => {
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
      {/* 1. HERO SLIDER WITH DOCTORS / HEALTHCARE PROFESSIONALS */}
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
              <p className="common-des" style={{ fontSize: '16px', marginBottom: '28px' }}>
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
                <button
                  onClick={() => onOpenEnquiry('Doctor Consultation & Product Inquiry')}
                  className="enquiry-btn"
                  style={{ border: '2px solid #0047bb' }}
                >
                  Doctor / Trade Inquiry
                </button>
              </div>
            </div>

            <div className="slider-img-container">
              <div className="waves1"></div>
              <div className="waves2"></div>
              <div className="waves3"></div>
              <img
                key={slide.image}
                src={slide.image}
                alt="Medical Specialist Consultation"
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

      {/* 2. FLAGSHIP PRODUCT SPOTLIGHT - C-ONE ENZYME */}
      <section className="section-padding">
        <div className="container">
          <div className="common-left-title-div">
            <div>
              <div className="small-title">Daily Nutrition For Better Health</div>
              <h2 className="big-title">C-ONE ENZYME Tablet</h2>
            </div>
            <a
              href="/products/c-one-enzyme-tablet"
              onClick={(e) => { e.preventDefault(); onNavigate('/products/c-one-enzyme-tablet'); }}
              className="common-left-title-btn"
            >
              Full Product Page <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="single-product-layout">
            <div className="single-product-img-box">
              <img
                src="/one_assets/c-one-box.jpg"
                alt="C-ONE ENZYME Box"
                className="single-product-img"
              />
              <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '20px', fontWeight: 800, color: '#0047bb' }}>M.R.P. Rs. 750.00</span>
                <span style={{ fontSize: '13px', color: '#64748b', display: 'block' }}>Per 10 Tablets (U.S.P. Rs. 75.00 / Tablet)</span>
              </div>
              <button
                className="custom-more-btn"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => onOpenEnquiry('C-ONE ENZYME Tablet')}
              >
                <span>Place Order <i className="fa-solid fa-cart-shopping" style={{ marginLeft: '6px' }}></i></span>
              </button>
            </div>

            <div className="single-details-content">
              <span className="product-category-tag" style={{ fontSize: '13px' }}>
                Complete Nutritional Support • 10x1x10 Tablet
              </span>
              <h2>Co-enzyme Q10, Omega 3, L-Carnitine & Antioxidant Multi-Nutrients</h2>
              <p className="common-des">
                Formulated to replenish vital bio-cofactors, boost cellular adenosine triphosphate (ATP) production, and defend cardiovascular pathways against free radical degradation.
              </p>

              {/* 6 Key Benefits Highlights */}
              <div className="benefits-grid">
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <i className="fa-solid fa-heart-pulse" style={{ color: '#e11d48', marginTop: '4px', fontSize: '18px' }}></i>
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', color: '#0f172a' }}>CoQ10 (100mg)</strong>
                    <span style={{ fontSize: '13px', color: '#64748b' }}>Supports heart health & energy production</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <i className="fa-solid fa-brain" style={{ color: '#0047bb', marginTop: '4px', fontSize: '18px' }}></i>
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', color: '#0f172a' }}>Omega-3 (100mg)</strong>
                    <span style={{ fontSize: '13px', color: '#64748b' }}>Good for heart, brain & eye health</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <i className="fa-solid fa-person-running" style={{ color: '#10b981', marginTop: '4px', fontSize: '18px' }}></i>
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', color: '#0f172a' }}>L-Carnitine (500mg)</strong>
                    <span style={{ fontSize: '13px', color: '#64748b' }}>Energy metabolism & fat utilization</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <i className="fa-solid fa-shield-virus" style={{ color: '#f59e0b', marginTop: '4px', fontSize: '18px' }}></i>
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', color: '#0f172a' }}>Vitamins & Antioxidants</strong>
                    <span style={{ fontSize: '13px', color: '#64748b' }}>Boost immunity & protect cells</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <i className="fa-solid fa-leaf" style={{ color: '#16a34a', marginTop: '4px', fontSize: '18px' }}></i>
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', color: '#0f172a' }}>Green Tea & Grape Seed</strong>
                    <span style={{ fontSize: '13px', color: '#64748b' }}>Natural botanical antioxidants</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <i className="fa-solid fa-dna" style={{ color: '#8b5cf6', marginTop: '4px', fontSize: '18px' }}></i>
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', color: '#0f172a' }}>Vitamins B1, B6 & E</strong>
                    <span style={{ fontSize: '13px', color: '#64748b' }}>Nerve, skin & metabolic wellness</span>
                  </div>
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #0047bb', fontSize: '13px' }}>
                <strong>Quality Assurance:</strong> Manufactured in a GMP Certified facility • Marketed by {COMPANY_INFO.name}.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT ONE ETHICAL PHARMACEUTICAL */}
      <section className="about-us-section section-padding common-bg">
        <div className="container">
          <div className="about-grid">
            <div>
              <img
                src="/one_assets/doctor-hero2.jpg"
                alt="ONE Ethical Medical Specialists"
                className="about-img"
              />
            </div>
            <div>
              <div className="small-title">Corporate Profile</div>
              <h2 className="big-title" style={{ marginBottom: '18px' }}>
                {COMPANY_INFO.name}
              </h2>
              <p className="common-des">
                <strong>{COMPANY_INFO.name}</strong> is committed to the founding motto <em>"{COMPANY_INFO.tagline}"</em>. Based in Delhi at Dsidc Industrial Complex, Himmat Puri, we specialize in high-efficacy nutraceuticals, advanced enzymes, and cardioprotective healthcare formulations.
              </p>
              <p className="common-des">
                Partnered with GMP-certified manufacturing units like Merit Healthcare, every batch undergoes stringent analytical validation to ensure accurate active compound delivery, bio-availability, and patient compliance.
              </p>
              <a
                href="/about-us"
                onClick={(e) => { e.preventDefault(); onNavigate('/about-us'); }}
                className="custom-more-btn"
              >
                <span>Read Corporate Overview <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }}></i></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPLORE OUR PORTFOLIO */}
      <section className="section-padding">
        <div className="container">
          <div className="common-left-title-div">
            <div>
              <div className="small-title">Therapeutic Ranges</div>
              <h2 className="big-title">Our Solutions</h2>
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
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="category-img"
                />
                <h4 className="category-card-title">{cat.name}</h4>
                <p style={{ fontSize: '12px', color: '#64748b', marginTop: '8px', lineHeight: '1.4' }}>
                  {cat.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE ONE ETHICAL PHARMACEUTICAL */}
      <section className="section-padding common-bg">
        <div className="container">
          <div className="why-choose-grid">
            <div className="why-choose-image">
              <img
                src="/one_assets/doctor-hero3.jpg"
                alt="ONE Ethical Consultation"
                style={{ borderRadius: '12px', width: '100%', boxShadow: '0 10px 30px rgba(0,71,187,0.08)' }}
              />
            </div>

            <div>
              <div className="small-title">Why Partner With Us</div>
              <h2 className="big-title">What Makes ONE Ethical Different?</h2>
              <p className="common-des" style={{ marginTop: '10px' }}>
                We bridge clinical excellence with integrity, ensuring doctors, pharmacists, and patients receive world-class healthcare formulations.
              </p>

              <div className="why-choose-features">
                <div className="why-choose-box">
                  <div style={{ fontSize: '32px', color: '#0047bb', marginBottom: '10px' }}>
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <h3 className="why-choose-title">GMP Certified Quality</h3>
                  <p className="common-des" style={{ fontSize: '13px', margin: 0 }}>
                    Formulations produced under strict Good Manufacturing Practices and hygienic compliance.
                  </p>
                </div>

                <div className="why-choose-box">
                  <div style={{ fontSize: '32px', color: '#0047bb', marginBottom: '10px' }}>
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  <h3 className="why-choose-title">Ethical Business</h3>
                  <p className="common-des" style={{ fontSize: '13px', margin: 0 }}>
                    Zero tolerance on ingredient purity, accurate label claims, and fair partnership pricing.
                  </p>
                </div>

                <div className="why-choose-box">
                  <div style={{ fontSize: '32px', color: '#0047bb', marginBottom: '10px' }}>
                    <i className="fa-solid fa-flask-vial"></i>
                  </div>
                  <h3 className="why-choose-title">Bio-Availability</h3>
                  <p className="common-des" style={{ fontSize: '13px', margin: 0 }}>
                    Standardized extracts ensuring optimal absorption and physiological impact.
                  </p>
                </div>

                <div className="why-choose-box">
                  <div style={{ fontSize: '32px', color: '#0047bb', marginBottom: '10px' }}>
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <h3 className="why-choose-title">Customer Support</h3>
                  <p className="common-des" style={{ fontSize: '13px', margin: 0 }}>
                    Dedicated distributor support and rapid order dispatch from Delhi industrial hub.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
