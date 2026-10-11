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
    role: 'Pharmaceutical Sales & Distribution Executive',
    experience: '1-3 Years',
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
          type: 'Career Application',
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          role: formData.role,
          experience: formData.experience,
          message: formData.message,
          _subject: `Career Application: ${formData.role} - ${formData.name}`,
          company: COMPANY_INFO.name
        })
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const subject = encodeURIComponent(`Career Application: ${formData.role} - ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nRole: ${formData.role}\nExperience: ${formData.experience}\nMessage: ${formData.message}`);
        window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
        setSubmitted(true);
      }
    } catch {
      const subject = encodeURIComponent(`Career Application: ${formData.role} - ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nRole: ${formData.role}\nExperience: ${formData.experience}\nMessage: ${formData.message}`);
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
            <h1 className="section-main-heading">Career Opportunities</h1>
            <p className="section-sub-lead">
              Join our growing healthcare product distribution network across Delhi NCR. We value integrity, dedication, and professional excellence.
            </p>
          </div>

          <div className="contact-grid">
            {/* Left: Open Roles & Office Info */}
            <div className="contact-info-card">
              <span className="section-eyebrow" style={{ color: '#0047bb' }}>Current Openings</span>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
                Join Our Supply & Distribution Team
              </h3>
              <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                We are actively looking for energetic professionals to strengthen our healthcare product outreach and delivery network in Delhi NCR.
              </p>

              {/* Role Card 1 */}
              <div className="career-role-box">
                <div className="role-header">
                  <h4 className="role-title">Sales & Distribution Executive</h4>
                  <span className="role-type-pill">Delhi NCR</span>
                </div>
                <p className="role-desc">
                  Build relationships with local pharmacies, stockists, and clinics for our 4 core formulations. Coordinate orders and ensure reliable fulfillment.
                </p>
                <div className="role-meta">
                  <span><i className="fa-solid fa-user-check"></i> Field Experience: 1-3 Yrs</span>
                  <span><i className="fa-solid fa-clock"></i> Full Time</span>
                </div>
              </div>

              {/* Role Card 2 */}
              <div className="career-role-box" style={{ marginTop: '16px' }}>
                <div className="role-header">
                  <h4 className="role-title">Operations & Delivery Coordinator</h4>
                  <span className="role-type-pill">Delhi 110091</span>
                </div>
                <p className="role-desc">
                  Manage inventory intake, temperature-controlled packaging, and dispatch routing for swift deliveries across the NCR region.
                </p>
                <div className="role-meta">
                  <span><i className="fa-solid fa-box-archive"></i> Logistics & Dispatch</span>
                  <span><i className="fa-solid fa-clock"></i> Full Time</span>
                </div>
              </div>

              {/* Direct Resume Submission Note */}
              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
                <h5 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                  Prefer to Email Your CV Directly?
                </h5>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '10px' }}>
                  Send your resume and profile directly to our recruitment desk at:
                </p>
                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=Job Application - ONE ETHICAL`}
                  style={{ color: '#0047bb', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}
                >
                  <i className="fa-regular fa-envelope" style={{ marginRight: '6px' }}></i>
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="form-card">
              <span className="section-eyebrow" style={{ color: '#0047bb' }}>Quick Application</span>
              <h2 className="big-title" style={{ fontSize: '24px', marginBottom: '8px' }}>
                Submit Your Profile
              </h2>
              <p className="common-des" style={{ marginBottom: '20px' }}>
                Fill out the application below. Submissions are delivered directly to <strong>{COMPANY_INFO.email}</strong>.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '36px 20px', background: '#f0fdf4', borderRadius: '10px' }}>
                  <i className="fa-solid fa-circle-check" style={{ fontSize: '44px', color: '#16a34a', marginBottom: '14px' }}></i>
                  <h3 style={{ color: '#166534', fontWeight: 700 }}>Application Received!</h3>
                  <p style={{ color: '#15803d', marginTop: '8px' }}>
                    Thank you, {formData.name}. Our recruitment team will review your application and connect with you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', mobile: '', email: '', role: 'Pharmaceutical Sales & Distribution Executive', experience: '1-3 Years', message: '' }); }}
                    className="hero-btn-primary"
                    style={{ marginTop: '18px', fontSize: '13px', padding: '8px 20px' }}
                  >
                    <span>Submit Another Application</span>
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
                      placeholder="Your Name"
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
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Role of Interest</label>
                    <select
                      className="form-control"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    >
                      <option value="Pharmaceutical Sales & Distribution Executive">Pharmaceutical Sales & Distribution Executive</option>
                      <option value="Operations & Delivery Coordinator">Operations & Delivery Coordinator</option>
                      <option value="General Healthcare Operations">General Healthcare Operations</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Experience Level</label>
                    <select
                      className="form-control"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    >
                      <option value="Fresher / < 1 Year">Fresher / &lt; 1 Year</option>
                      <option value="1-3 Years">1-3 Years</option>
                      <option value="3-5 Years">3-5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Brief Introduction / Notes</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Tell us about your background, previous pharmaceutical sales, or logistics experience..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="hero-btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={submitting}
                  >
                    <span>
                      {submitting ? 'Submitting Application...' : 'Send Application'}
                      <i className="fa-solid fa-paper-plane" style={{ marginLeft: '6px' }}></i>
                    </span>
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
