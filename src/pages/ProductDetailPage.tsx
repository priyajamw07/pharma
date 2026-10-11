import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { PRODUCTS, COMPANY_INFO } from '../data/products';

interface ProductDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  slug,
  onNavigate
}) => {
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug);

  const isAmox = product.slug === 'amox-one-lb';

  return (
    <main>
      <Breadcrumb
        title={product.name}
        parentPath="/products"
        parentTitle="Products"
        onNavigate={onNavigate}
      />

      <section className="section-padding">
        <div className="container">
          <div className="single-product-layout">
            {/* Left Column: Image & Order CTA */}
            <div className="single-product-img-box">
              <img
                src={product.image}
                alt={product.name}
                className="single-product-img"
              />
              <div style={{ textAlign: 'center', marginBottom: '18px', width: '100%' }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#0047bb', marginBottom: '4px' }}>
                  <i className="fa-solid fa-boxes-packing" style={{ marginRight: '6px' }}></i> {product.packaging || 'Standard Ethical Packaging'}
                </div>
                <div style={{ fontSize: '13px', color: '#16a34a', fontWeight: 600 }}>
                  Direct Doctor & Ethical Supply
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="custom-more-btn"
                  style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
                >
                  <i className="fa-solid fa-phone" style={{ marginRight: '6px' }}></i>
                  <span>Call: {COMPANY_INFO.phone}</span>
                </a>
                <a
                  href="/contact-us"
                  onClick={(e) => { e.preventDefault(); onNavigate('/contact-us'); }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    background: '#f8fafc',
                    color: '#0047bb',
                    border: '1.5px solid #cbd5e1',
                    fontWeight: 600,
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                >
                  <i className="fa-solid fa-envelope"></i>
                  <span>Contact Corporate Office</span>
                </a>
              </div>
            </div>

            {/* Right Column: Title & Detailed Indications */}
            <div className="single-details-content">
              <span className="product-category-tag" style={{ fontSize: '13px' }}>
                {product.categoryName} ? GMP Certified Formulation
              </span>
              <h2>{product.name}</h2>

              {/* Composition Table if present */}
              {product.composition && product.composition.length > 0 && (
                <div style={{ margin: '20px 0' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                    <i className="fa-solid fa-table-cells" style={{ color: '#0047bb', marginRight: '6px' }}></i>
                    Active Ingredients Composition:
                  </h4>
                  <div className="table-responsive">
                    <table className="composition-table">
                      <thead>
                        <tr>
                          <th>Each Tablet Contains</th>
                          <th>Strength</th>
                          <th>% RDA</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.composition.map((item, i) => (
                          <tr key={i}>
                            <td style={{ fontWeight: 600, color: '#1e293b' }}>{item.name}</td>
                            <td>{item.amount}</td>
                            <td>{item.rda}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p style={{ fontSize: '12px', color: '#64748b', fontStyle: 'italic', marginTop: '6px' }}>
                    **Daily Value not established. (% RDA calculated basis ICMR guidelines. Appropriate overages of vitamins added to compensate for loss on storage.)
                  </p>
                </div>
              )}

              {/* Nutritional Information */}
              {product.nutrition && product.nutrition.length > 0 && (
                <div style={{ margin: '20px 0' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                    Nutritional Information (Approx. values per serving):
                  </h4>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {product.nutrition.map((n, i) => (
                      <div
                        key={i}
                        style={{
                          background: '#f1f5f9',
                          padding: '8px 16px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          border: '1px solid #e2e8f0'
                        }}
                      >
                        <strong>{n.parameter}:</strong> {n.value}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                style={{ fontSize: '15px', color: '#334155', marginTop: '20px' }}
              />

              <div style={{ marginTop: '30px', padding: '20px', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0047bb' }}>
                <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                  <strong>Marketed by:</strong> {COMPANY_INFO.name}<br />
                  <strong>Corporate Address:</strong> {COMPANY_INFO.address}<br />
                  <strong>Corporate Trade Desk:</strong> Call <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: '#0047bb', fontWeight: 700 }}>{COMPANY_INFO.phone}</a> / <a href={`tel:${COMPANY_INFO.phoneAlt}`} style={{ color: '#0047bb', fontWeight: 700 }}>{COMPANY_INFO.phoneAlt}</a> or Email <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#0047bb', fontWeight: 700 }}>{COMPANY_INFO.email}</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Poster Banner */}
      <section className="section-padding common-bg">
        <div className="container">
          <div className="common-left-title-div">
            <div>
              <div className="small-title">Visual Product Education</div>
              <h2 className="big-title">Clinical & Formulation Overview</h2>
            </div>
          </div>

          <div className="infographics-grid">
            {isAmox ? (
              <>
                <div style={{ background: '#fff', borderRadius: '12px', padding: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                  <img
                    src="/one_assets/amox-one-banner.jpg"
                    alt="AMOX ONE LB Tablet"
                    style={{ width: '100%', borderRadius: '8px', objectFit: 'contain' }}
                  />
                  <h4 style={{ marginTop: '12px', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>
                    AMOX ONE LB: Broad-Spectrum Antibiotic Protection
                  </h4>
                </div>

                <div style={{ background: '#fff', borderRadius: '12px', padding: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                  <img
                    src="/one_assets/amox-one-infographic.jpg"
                    alt="AMOX ONE LB Probiotic Protection"
                    style={{ width: '100%', borderRadius: '8px', objectFit: 'contain' }}
                  />
                  <h4 style={{ marginTop: '12px', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>
                    Dual Action Formula with Probiotic Shield
                  </h4>
                </div>
              </>
            ) : (
              <>
                <div style={{ background: '#fff', borderRadius: '12px', padding: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                  <img
                    src="/one_assets/c-one-banner.jpg"
                    alt="C-ONE Daily Wellness"
                    style={{ width: '100%', borderRadius: '8px', objectFit: 'contain' }}
                  />
                  <h4 style={{ marginTop: '12px', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>
                    C-ONE ENZYME: Daily Wellness Support
                  </h4>
                </div>

                <div style={{ background: '#fff', borderRadius: '12px', padding: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                  <img
                    src="/one_assets/c-one-poster.jpg"
                    alt="C-ONE Complete Nutritional Support"
                    style={{ width: '100%', borderRadius: '8px', objectFit: 'contain' }}
                  />
                  <h4 style={{ marginTop: '12px', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>
                    Energy ? Immunity ? Active Life
                  </h4>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Related Formulations */}
      {relatedProducts.length > 0 && (
        <section className="section-padding">
          <div className="container">
            <div className="common-left-title-div">
              <div>
                <div className="small-title">Portfolio Formulations</div>
                <h2 className="big-title">Related Therapies</h2>
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
              {relatedProducts.map((rel) => (
                <div key={rel.slug} className="product-card">
                  <a
                    href={`/products/${rel.slug}`}
                    onClick={(e) => { e.preventDefault(); onNavigate(`/products/${rel.slug}`); }}
                  >
                    <div className="product-img-wrap">
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="product-card-img"
                      />
                      <div className="product-plus-badge">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                  </a>

                  <div className="product-info-wrap">
                    <div>
                      <span className="product-category-tag">{rel.categoryName}</span>
                      <h5 className="product-card-name">
                        <a
                          href={`/products/${rel.slug}`}
                          onClick={(e) => { e.preventDefault(); onNavigate(`/products/${rel.slug}`); }}
                        >
                          {rel.name}
                        </a>
                      </h5>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <a
                        href={`/products/${rel.slug}`}
                        onClick={(e) => { e.preventDefault(); onNavigate(`/products/${rel.slug}`); }}
                        className="product-read-more-btn"
                      >
                        Details <i className="fa-solid fa-arrow-right" style={{ fontSize: '11px' }}></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
