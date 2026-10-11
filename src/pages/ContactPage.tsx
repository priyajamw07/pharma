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
      // 1. Post to Formspree endpoint targeting oneethicalpharmaceutical@gmail.com
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
          _subject: `New Contact Inquiry from ${formData.name} (${formData.mobile})`,
          company: COMPANY_INFO.name
        })
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback: Opens default email client with prefilled details directly to oneethicalpharmaceutical@gmail.com
        const subject = encodeURIComponent(`Contact Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nMessage: ${formData.comments}`);
        window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
        setSubmitted(true);
      }
    } catch (err) {
      // Direct mailto fallback so user request always reaches oneethicalpharmaceutical@gmail.com
      const subject = encodeURIComponent(`Contact Inquiry from ${formData.name}`);
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
          <div className="contact-grid">
            {/* Left: Contact Info */}
            <div className="address-box">
              <div className="small-title">Get In Touch</div>
              <h2 className="big-title" style={{ fontSize: '26px', marginBottom: '8px' }}>
                Corporate Contact Details
              </h2>
              <p className="common-des" style={{ marginBottom: '28px' }}>
                You can reach ONE ETHICAL PHARMACEUTICAL via Call, Official Email, or Direct Visit.
              </p>

              {/* Marketed By Address */}
              <div className="contact-info-item">
                <div className="contact-icon-bubble">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                    Marketed By Office
                  </h5>
                  <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: '1.5' }}>
                    <strong>{COMPANY_INFO.name}</strong><br />
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              {/* Manufacturing Facility */}
              <div className="contact-info-item">
                <div className="contact-icon-bubble">
                  <i className="fa-solid fa-industry"></i>
                </div>
                <div>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                    Manufacturing Plant
                  </h5>
                  <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: '1.5' }}>
                    {COMPANY_INFO.manufacturer}
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="contact-info-item">
                <div className="contact-icon-bubble">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                    Contact Numbers
                  </h5>
                  <p style={{ margin: 0, fontSize: '14px' }}>
                    <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: '#0047bb', display: 'block', fontWeight: 700 }}>
                      {COMPANY_INFO.phone}
                    </a>
                    <a href={`tel:${COMPANY_INFO.phoneAlt}`} style={{ color: '#475569', display: 'block', fontWeight: 600, marginTop: '4px' }}>
                      {COMPANY_INFO.phoneAlt}
                    </a>
                  </p>
                </div>
              </div>

              {/* Email Addresses */}
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

              {/* Social Channels */}
              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#64748b', marginBottom: '12px' }}>CONNECT WITH US</p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://facebook.com"
                    className="footer-social-btn"
                    style={{ background: '#0047bb', color: '#fff' }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com"
                    className="footer-social-btn"
                    style={{ background: '#0f172a', color: '#fff' }}
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="footer-social-btn"
                    style={{ background: '#25d366', color: '#fff' }}
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="form-card">
              <div className="small-title">Distribution & Inquiries</div>
              <h2 className="big-title" style={{ fontSize: '26px', marginBottom: '8px' }}>
                Send An Email Message
              </h2>
              <p className="common-des" style={{ marginBottom: '24px' }}>
                Messages submitted here are delivered directly to <strong>{COMPANY_INFO.email}</strong>.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', background: '#f0fdf4', borderRadius: '10px' }}>
                  <i className="fa-solid fa-circle-check" style={{ fontSize: '48px', color: '#16a34a', marginBottom: '16px' }}></i>
                  <h3 style={{ color: '#166534', fontWeight: 700 }}>Inquiry Sent Successfully!</h3>
                  <p style={{ color: '#15803d', marginTop: '8px' }}>
                    Thank you, {formData.name}. Your message has been routed to <strong>{COMPANY_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', mobile: '', email: '', comments: '' }); }}
                    className="custom-more-btn"
                    style={{ marginTop: '20px', fontSize: '13px', padding: '8px 20px' }}
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>
                      Name <span style={{ color: '#e11d48' }}>*</span>
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
                      Mobile <span style={{ color: '#e11d48' }}>*</span>
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
                      Your Email <span style={{ color: '#e11d48' }}>*</span>
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
                    <label>Requirements / Message</label>
                    <textarea
                      className="form-control"
                      placeholder="Inquire about C-ONE ENZYME stockist availability, orders, or dealership..."
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
                    className="custom-more-btn"
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={submitting}
                  >
                    <span>
                      {submitting ? 'Sending to oneethicalpharmaceutical@gmail.com...' : 'Send Email Message'}
                      <i className="fa-solid fa-paper-plane" style={{ marginLeft: '6px' }}></i>
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=Dsidc%20Industrial%20Complex,%20Himmat%20Puri,%20Delhi%20110091&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
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
