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
    position: 'Medical Representative (Nutraceuticals)',
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
      await fetch(`https://formsubmit.co/ajax/oneethicalpharmaceutical@gmail.com`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Career Application: ${formData.position} - ${formData.name}`,
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          position: formData.position,
          experience: formData.experience,
          message: formData.message,
          targetEmail: COMPANY_INFO.email
        })
      });
      setSubmitted(true);
    } catch (err) {
      const subject = encodeURIComponent(`Career Application - ${formData.position} - ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nMobile: ${formData.mobile}\nRole: ${formData.position}\nExperience: ${formData.experience}\nNote: ${formData.message}`);
      window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <Breadcrumb title="Career" onNavigate={onNavigate} />

      <section className="section-padding common-bg">
        <div className="container">
          <div className="contact-grid">
            {/* Form Box */}
            <div className="form-card">
              <div className="small-title">Build Your Future</div>
              <h2 className="big-title" style={{ fontSize: '26px', marginBottom: '12px' }}>
                Join ONE ETHICAL PHARMACEUTICAL
              </h2>
              <p className="common-des" style={{ marginBottom: '24px' }}>
                Applications are delivered straight to <strong>{COMPANY_INFO.email}</strong>.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', background: '#f0fdf4', borderRadius: '10px' }}>
                  <i className="fa-solid fa-circle-check" style={{ fontSize: '48px', color: '#16a34a', marginBottom: '16px' }}></i>
                  <h3 style={{ color: '#166534', fontWeight: 700 }}>Application Submitted!</h3>
                  <p style={{ color: '#15803d' }}>
                    Thank you, {formData.name}. Your details have been sent to <strong>{COMPANY_INFO.email}</strong>.
                  </p>
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
                      placeholder="Enter your full name"
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
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Target Role</label>
                    <select
                      className="form-control"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    >
                      <option value="Medical Representative (Nutraceuticals)">Medical Representative (MR)</option>
                      <option value="Area Business Manager (ABM)">Area Business Manager (ABM)</option>
                      <option value="Regional Sales Manager (RSM)">Regional Sales Manager (RSM)</option>
                      <option value="Institutional Sales Executive">Institutional / Hospital Sales</option>
                      <option value="Supply Chain & Logistics">Supply Chain & Logistics Coordinator</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Relevant Experience</label>
                    <select
                      className="form-control"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    >
                      <option value="Fresher">Fresher (B.Pharm / B.Sc / Graduate)</option>
                      <option value="1-3 Years">1 - 3 Years</option>
                      <option value="3-5 Years">3 - 5 Years</option>
                      <option value="5+ Years">5+ Years Senior Manager</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Territory Experience / Brief Note</label>
                    <textarea
                      className="form-control"
                      placeholder="Mention your previous territories covered, key specialties (Cardio, Physician, Diabetology)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="custom-more-btn"
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={submitting}
                  >
                    <span>
                      {submitting ? 'Submitting Application...' : 'Submit Application'}
                      <i className="fa-solid fa-paper-plane" style={{ marginLeft: '6px' }}></i>
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Information Column */}
            <div>
              <div className="address-box" style={{ marginBottom: '30px' }}>
                <div style={{ fontSize: '40px', color: '#0047bb', marginBottom: '16px' }}>
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
                  Why Join ONE ETHICAL?
                </h3>
                <p className="common-des">
                  We value hard work, integrity, and clinical passion. When promoting formulations like C-ONE ENZYME, you represent products backed by certified GMP standards and tangible patient satisfaction.
                </p>

                <div style={{ marginTop: '20px' }}>
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: '#0047bb', marginTop: '4px' }}></i>
                    <p style={{ margin: 0, fontSize: '14px', color: '#334155' }}>
                      <strong>High Incentive Earning Model:</strong> Transparent, uncapped performance incentives for sales milestones.
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: '#0047bb', marginTop: '4px' }}></i>
                    <p style={{ margin: 0, fontSize: '14px', color: '#334155' }}>
                      <strong>Scientifically Sound Portfolio:</strong> Backed by robust product literature, detailing visual aids, and sample support.
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: '#0047bb', marginTop: '4px' }}></i>
                    <p style={{ margin: 0, fontSize: '14px', color: '#334155' }}>
                      <strong>Rapid Growth Track:</strong> Opportunities to progress rapidly to managerial and territory leadership roles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="address-box">
                <h4 style={{ fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Send Resume Directly</h4>
                <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '14px' }}>
                  Candidates may also email their updated CV directly with subject line <em>"Application - [Role] - [Territory]"</em> to:
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-regular fa-envelope" style={{ color: '#0047bb' }}></i>
                  <a href={`mailto:${COMPANY_INFO.email}`} style={{ fontWeight: 700, color: '#0047bb', wordBreak: 'break-all' }}>
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
