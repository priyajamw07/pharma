import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { COMPANY_INFO } from '../data/products';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    comments: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert('Please fill out required fields: Name and Mobile.');
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch(`https://formsubmit.co/ajax/oneethicalpharmaceutical@gmail.com`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          message: formData.comments,
          _subject: `Product Order / Message from ${formData.name} (${formData.mobile})`,
          company: COMPANY_INFO.name
        })
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const subject = encodeURIComponent(`Product Order / Message from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nMessage: ${formData.comments}`);
        window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
        setSubmitted(true);
      }
    } catch {
      const subject = encodeURIComponent(`Product Order / Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nMessage: ${formData.comments}`);
      window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <Breadcrumb title="Contact Us" onNavigate={onNavigate} />

      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">
              <i className="fa-solid fa-headset"></i> Order & Support Desk
            </span>
            <h1 className="section-main-heading">Get in Touch With Us</h1>
            <p className="section-sub-lead">
              Reach our corporate office in Delhi 110091 for product orders, stockist supply, and delivery confirmation across Delhi NCR.
            </p>
          </div>

          <div className="contact-grid">
            {/* Left: Contact Information Cards */}
            <div className="contact-info-card">
              <span className="section-eyebrow" style={{ color: '#0047bb' }}>Office Details</span>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '18px' }}>
                Corporate Order & Delivery Office
              </h3>
              <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                {COMPANY_INFO.name} delivers 4 trusted healthcare formulations to clinics, nursing homes, chemist shops, and patients.
              </p>

              {/* Physical Office Address */}
              <div className="contact-info-item">
                <div className="contact-icon-bubble">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                    Office Address
                  </h5>
                  <p style={{ margin: 0, color: '#475569', fontSize: '14px', lineHeight: '1.5' }}>
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              {/* Verified Phone Numbers */}
              <div className="contact-info-item">
                <div className="contact-icon-bubble">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                    Order Helplines
                  </h5>
                  <p style={{ margin: 0, fontSize: '14px' }}>
                    <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: '#0047bb', fontWeight: 700, display: 'block' }}>
                      {COMPANY_INFO.phone}
                    </a>
                    <a href={`tel:${COMPANY_INFO.phoneAlt}`} style={{ color: '#475569', display: 'block', fontWeight: 600, marginTop: '4px' }}>
                      {COMPANY_INFO.phoneAlt}
                    </a>
                  </p>
                </div>
              </div>

              {/* Official Email */}
              <div className="contact-info-item">
                <div className="contact-icon-bubble">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                    Official Email
                  </h5>
                  <p style={{ margin: 0, fontSize: '14px' }}>
                    <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#0047bb', display: 'block', fontWeight: 700, wordBreak: 'break-all' }}>
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="contact-info-item">
                <div className="contact-icon-bubble">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                    Business Hours
                  </h5>
                  <p style={{ margin: 0, color: '#475569', fontSize: '14px' }}>
                    Monday - Saturday: 9:30 AM to 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Message & Order Form */}
            <div className="form-card">
              <span className="section-eyebrow" style={{ color: '#0047bb' }}>Send An Email</span>
              <h2 className="big-title" style={{ fontSize: '24px', marginBottom: '8px' }}>
                Send A Message or Order Request
              </h2>
              <p className="common-des" style={{ marginBottom: '24px' }}>
                Your message is sent directly to <strong>{COMPANY_INFO.email}</strong>.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', background: '#f0fdf4', borderRadius: '10px' }}>
                  <i className="fa-solid fa-circle-check" style={{ fontSize: '48px', color: '#16a34a', marginBottom: '16px' }}></i>
                  <h3 style={{ color: '#166534', fontWeight: 700 }}>Message Delivered!</h3>
                  <p style={{ color: '#15803d', marginTop: '8px' }}>
                    Thank you, {formData.name}. Your details have been sent to <strong>{COMPANY_INFO.email}</strong>. Our order desk will contact you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', mobile: '', email: '', comments: '' }); }}
                    className="hero-btn-primary"
                    style={{ marginTop: '20px', fontSize: '13px', padding: '8px 20px' }}
                  >
                    <span>Send Another Message</span>
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
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
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
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Product Requirement / Message</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Specify required products (C-ONE ENZYME, AMOX ONE LB, CEFIXOR-O, FERRIMAX IRON), quantity, or delivery location..."
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <p style={{ color: '#e11d48', fontSize: '13px', marginBottom: '12px' }}>{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    className="hero-btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={submitting}
                  >
                    <span>
                      {submitting ? 'Sending Message...' : 'Send Message'}
                      <i className="fa-solid fa-paper-plane" style={{ marginLeft: '6px' }}></i>
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="map-container" style={{ marginTop: '48px' }}>
            <iframe
              src="https://maps.google.com/maps?q=Dsidc%20Industrial%20Complex,%20Himmat%20Puri,%20Delhi%20110091&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ONE ETHICAL PHARMACEUTICAL Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};
