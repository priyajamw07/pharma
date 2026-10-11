import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { COMPANY_INFO } from '../data/products';

interface CareerPageProps {
  onNavigate: (path: string) => void;
}

export const CareerPage: React.FC<CareerPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert('Please fill out required fields: Name and Mobile.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/oneethicalpharmaceutical@gmail.com`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          type: 'Career / Talent Network Profile',
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          message: formData.message,
          _subject: `Career Profile Submission: ${formData.name} (${formData.mobile})`,
          company: COMPANY_INFO.name
        })
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const subject = encodeURIComponent(`Career Profile Submission: ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
        window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
        setSubmitted(true);
      }
    } catch {
      const subject = encodeURIComponent(`Career Profile Submission: ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
      window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <Breadcrumb title="Careers" onNavigate={onNavigate} />

      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">
              <i className="fa-solid fa-briefcase"></i> Work With Us
            </span>
            <h1 className="section-main-heading">Career & Partner Opportunities</h1>
            <p className="section-sub-lead">
              Connect with our healthcare product distribution team in Delhi NCR. We welcome skilled individuals for future operational and sales opportunities.
            </p>
          </div>

          <div className="contact-grid">
            {/* Left: Future Opportunities & Talent Network */}
            <div className="contact-info-card">
              <span className="section-eyebrow" style={{ color: '#0047bb' }}>Talent Network</span>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
                Future Opportunities
              </h3>
              <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.65', marginBottom: '20px' }}>
                There are currently no active job vacancies. However, we are continuously expanding our healthcare distribution and delivery coverage across Delhi NCR.
              </p>
              <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                We invite prospective candidates and field executives to submit their profiles. When relevant opportunities open in pharmaceutical distribution, field relations, or logistics, our team will reach out directly.
              </p>

              {/* Office & Direct Contact Details */}
              <div style={{ background: '#f8fafc', padding: '18px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '22px' }}>
                <h5 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  <i className="fa-solid fa-location-dot" style={{ color: '#0047bb', marginRight: '6px' }}></i> Office Location
                </h5>
                <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: '1.5' }}>
                  {COMPANY_INFO.address}
                </p>
              </div>

              <div style={{ background: '#f8fafc', padding: '18px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <h5 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  <i className="fa-solid fa-envelope" style={{ color: '#0047bb', marginRight: '6px' }}></i> Direct CV Submission
                </h5>
                <p style={{ fontSize: '13px', color: '#475569', marginBottom: '8px' }}>
                  You may also email your resume directly to our recruitment desk:
                </p>
                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=Resume Submission - ONE ETHICAL`}
                  style={{ color: '#0047bb', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Right: Profile Submission Form */}
            <div className="form-card">
              <span className="section-eyebrow" style={{ color: '#0047bb' }}>Submit Profile</span>
              <h2 className="big-title" style={{ fontSize: '24px', marginBottom: '8px' }}>
                Share Your Details
              </h2>
              <p className="common-des" style={{ marginBottom: '20px' }}>
                Submit your profile for upcoming openings. Delivered directly to <strong>{COMPANY_INFO.email}</strong>.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '36px 20px', background: '#f0fdf4', borderRadius: '10px' }}>
                  <i className="fa-solid fa-circle-check" style={{ fontSize: '44px', color: '#16a34a', marginBottom: '14px' }}></i>
                  <h3 style={{ color: '#166534', fontWeight: 700 }}>Profile Submitted Successfully!</h3>
                  <p style={{ color: '#15803d', marginTop: '8px' }}>
                    Thank you, {formData.name}. Your details have been received at <strong>{COMPANY_INFO.email}</strong>. We will contact you when suitable opportunities arise.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', mobile: '', email: '', message: '' }); }}
                    className="hero-btn-primary"
                    style={{ marginTop: '18px', fontSize: '13px', padding: '8px 20px' }}
                  >
                    <span>Submit Another Profile</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>
                      Full Name <span style={{ color: '#e11d48' }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Mobile Number <span style={{ color: '#e11d48' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your 10-digit Mobile Number"
                      maxLength={10}
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\\D/g, '') })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Email Address <span style={{ color: '#e11d48' }}>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Brief Introduction / Notes</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Share brief notes on your background or field experience..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="hero-btn-primary"
                    disabled={submitting}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {submitting ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin"></i> Submitting...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-paper-plane"></i> Submit Application Profile
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
