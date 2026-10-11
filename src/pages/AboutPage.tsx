import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { COMPANY_INFO } from '../data/products';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <main>
      <Breadcrumb title="About Us" onNavigate={onNavigate} />

      {/* Main Company Intro */}
      <section className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div>
              <img
                src="/one_assets/doctor-hero2.jpg"
                alt="About ONE ETHICAL PHARMACEUTICAL"
                className="about-img"
              />
            </div>
            <div>
              <div className="small-title">About The Company</div>
              <h2 className="big-title" style={{ marginBottom: '20px' }}>
                {COMPANY_INFO.name}
              </h2>
              <p className="common-des">
                <strong>{COMPANY_INFO.name}</strong> is a dedicated pharmaceutical and nutraceutical marketing organization committed to its founding principle: <em>"{COMPANY_INFO.tagline}"</em>.
              </p>
              <p className="common-des">
                We specialize in scientifically validated dietary health supplements, therapeutic micronutrients, and high-potency antioxidant enzymes. Every product is developed in state-of-the-art GMP-certified facilities adhering to strict regulatory protocols and ICMR guidelines.
              </p>
              <p className="common-des">
                Our flagship formulation, <strong>C-ONE ENZYME Tablet</strong>, represents our commitment to synergistic nutritional therapeutics—combining CoQ10, Omega 3, L-Carnitine, and herbal extracts into a single comprehensive daily tablet for cardiac stamina, metabolism, and longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding common-bg">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
            <div className="small-title">Guiding Purpose</div>
            <h2 className="big-title">Mission & Vision</h2>
          </div>

          <div className="mission-vision-grid">
            <div className="mission-box">
              <div style={{ fontSize: '38px', color: '#0047bb', flexShrink: 0 }}>
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <div>
                <h3 className="mission-title">Our Mission</h3>
                <p className="common-des" style={{ margin: 0 }}>
                  To deliver ethically formulated, accessible, and scientifically superior healthcare medicines that improve clinical outcomes, restore vitality, and build a healthier tomorrow for every family.
                </p>
              </div>
            </div>

            <div className="mission-box">
              <div style={{ fontSize: '38px', color: '#0047bb', flexShrink: 0 }}>
                <i className="fa-solid fa-eye"></i>
              </div>
              <div>
                <h3 className="mission-title">Our Vision</h3>
                <p className="common-des" style={{ margin: 0 }}>
                  To be recognized as India's most trusted ethical pharmaceutical brand in preventive nutrition and specialized healthcare therapies, renowned for unmatched quality and physician trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 30px auto' }}>
            <div className="small-title">Our Ethical Foundations</div>
            <h2 className="big-title">Core Principles</h2>
            <p className="common-des">
              Ethics, scientific transparency, and genuine patient wellbeing are the cornerstones of {COMPANY_INFO.shortName}.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div style={{ fontSize: '32px', color: '#0047bb', marginBottom: '14px' }}>
                <i className="fa-solid fa-certificate"></i>
              </div>
              <h4 className="value-title">Uncompromising Quality</h4>
              <p className="common-des" style={{ fontSize: '13px', margin: 0 }}>
                Rigorous testing of raw active pharmaceutical ingredients (APIs) and finished tablets in GMP compliant facilities.
              </p>
            </div>

            <div className="value-card">
              <div style={{ fontSize: '32px', color: '#0047bb', marginBottom: '14px' }}>
                <i className="fa-solid fa-scale-balanced"></i>
              </div>
              <h4 className="value-title">Ethical Transparency</h4>
              <p className="common-des" style={{ fontSize: '13px', margin: 0 }}>
                Clear labeling, verifiable compositional percentages (%RDA), and honest relationships with doctors and patients.
              </p>
            </div>

            <div className="value-card">
              <div style={{ fontSize: '32px', color: '#0047bb', marginBottom: '14px' }}>
                <i className="fa-solid fa-dna"></i>
              </div>
              <h4 className="value-title">Scientific Synergism</h4>
              <p className="common-des" style={{ fontSize: '13px', margin: 0 }}>
                Formulations built around synergistic clinical mechanisms—like pairing CoQ10 with L-Carnitine for cellular ATP synthesis.
              </p>
            </div>

            <div className="value-card">
              <div style={{ fontSize: '32px', color: '#0047bb', marginBottom: '14px' }}>
                <i className="fa-solid fa-hand-holding-heart"></i>
              </div>
              <h4 className="value-title">Patient-First Pricing</h4>
              <p className="common-des" style={{ fontSize: '13px', margin: 0 }}>
                Delivering premium international-standard nutraceuticals at fair, affordable price points across Indian healthcare.
              </p>
            </div>

            <div className="value-card">
              <div style={{ fontSize: '32px', color: '#0047bb', marginBottom: '14px' }}>
                <i className="fa-solid fa-users-gear"></i>
              </div>
              <h4 className="value-title">Distributor Partnership</h4>
              <p className="common-des" style={{ fontSize: '13px', margin: 0 }}>
                Empowering trade partners and medical representatives with comprehensive scientific literature and reliable supply.
              </p>
            </div>

            <div className="value-card">
              <div style={{ fontSize: '32px', color: '#0047bb', marginBottom: '14px' }}>
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h4 className="value-title">Regulatory Vigilance</h4>
              <p className="common-des" style={{ fontSize: '13px', margin: 0 }}>
                Full compliance with national health authorities and stringent quality testing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
