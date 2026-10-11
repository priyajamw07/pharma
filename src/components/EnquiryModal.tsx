import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/products';

interface EnquiryModalProps {
  isOpen: boolean;
  productName?: string;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  productName = 'C-ONE ENZYME Tablet',
  onClose
}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState('10 Strips');
  const [city, setCity] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) {
      alert('Please fill out required fields: Name and Mobile Number.');
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
          _subject: `New Order Enquiry: ${productName} from ${name}`,
          product: productName,
          name,
          mobile,
          email,
          quantity,
          city,
          targetEmail: COMPANY_INFO.email
        })
      });
      setSubmitted(true);
    } catch (err) {
      // Fallback to mailto
      const subject = encodeURIComponent(`Order Enquiry: ${productName}`);
      const body = encodeURIComponent(`Product: ${productName}\nQuantity: ${quantity}\nName: ${name}\nMobile: ${mobile}\nCity: ${city}\nEmail: ${email}`);
      window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setMobile('');
        setEmail('');
        setCity('');
        onClose();
      }, 2500);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="fa-solid fa-pills" style={{ color: '#0047bb' }}></i>
            <h5 style={{ margin: 0 }}>Order / Inquire: {productName}</h5>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <i className="fa-solid fa-circle-check" style={{ fontSize: '48px', color: '#16a34a', marginBottom: '16px' }}></i>
              <h4 style={{ fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Thank You!</h4>
              <p style={{ color: '#475569' }}>
                Your order inquiry has been sent to <strong>{COMPANY_INFO.email}</strong>.
              </p>
              <p style={{ fontSize: '13px', color: '#64748b', marginTop: '8px' }}>
                Our team will contact you at <strong>{mobile}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ background: '#f1f5f9', padding: '10px 14px', borderRadius: '6px', marginBottom: '16px', fontSize: '13px', color: '#334155' }}>
                <strong>Formulation:</strong> {productName}
              </div>

              <div className="form-group">
                <label>
                  Full Name <span style={{ color: '#e11d48' }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label>Quantity / Pack</label>
                  <select
                    className="form-control"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  >
                    <option value="1 Strip (10 Tabs)">1 Strip (10 Tabs)</option>
                    <option value="5 Strips (50 Tabs)">5 Strips (50 Tabs)</option>
                    <option value="10 Strips (1 Box)">1 Box (10x10 Tabs)</option>
                    <option value="Bulk / Distributor Order">Bulk / Stockist Order</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Delivery City / State</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Delhi, Mumbai, etc."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <button
                  type="submit"
                  className="custom-more-btn"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={submitting}
                >
                  <span>
                    {submitting ? 'Sending Enquiry...' : 'Submit Order Inquiry'}
                    <i className="fa-solid fa-paper-plane" style={{ marginLeft: '6px' }}></i>
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
