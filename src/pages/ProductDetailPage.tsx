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

  return (
    <main>
      <Breadcrumb
        title={product.name}
        parentPath="/products"
        parentTitle="All Products"
        onNavigate={onNavigate}
      />

      <section className="section-padding">
        <div className="container">
          <div className="single-product-layout">
            {/* Left Column: Image & Order CTAs */}
            <div className="single-product-img-box">
              <div className="single-img-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="single-product-img"
                />
              </div>

              <div className="single-product-badges">
                <div className="badge-packaging">
                  <i className="fa-solid fa-boxes-packing"></i>
                  <span>{product.packaging || 'Standard Ethical Packaging'}</span>
                </div>
                <div className="badge-delivery-ready">
                  <i className="fa-solid fa-truck-fast"></i>
                  <span>Ready for Doorstep Delivery in Delhi NCR</span>
                </div>
              </div>

              <div className="single-product-cta-group">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="btn-product-order-call"
                  title="Direct phone call to place product order"
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>Call to Order: {COMPANY_INFO.phone}</span>
                </a>

                <a
                  href="/contact-us"
                  onClick={(e) => { e.preventDefault(); onNavigate('/contact-us'); }}
                  className="btn-product-enquire"
                >
                  <i className="fa-regular fa-envelope"></i>
                  <span>Enquire / Request Delivery</span>
                </a>
              </div>
            </div>

            {/* Right Column: Title, Therapeutic Indications, Composition */}
            <div className="single-details-content">
              <span className="product-category-tag">
                {product.categoryName} ? Genuine Batch Authenticated
              </span>
              <h1 className="single-product-title">{product.name}</h1>
              <p className="single-product-lead">{product.shortDesc}</p>

              {/* Highlights / Key Clinical Points */}
              {product.highlights && product.highlights.length > 0 && (
                <div className="single-highlights-box">
                  <h4 className="highlights-heading">
                    <i className="fa-solid fa-circle-check" style={{ color: '#0d9488', marginRight: '8px' }}></i>
                    Key Formulation Features & Benefits:
                  </h4>
                  <ul className="highlights-list">
                    {product.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Composition Table if present */}
              {product.composition && product.composition.length > 0 && (
                <div className="composition-section">
                  <h4 className="composition-heading">
                    <i className="fa-solid fa-table-cells" style={{ color: '#0047bb', marginRight: '8px' }}></i>
                    Active Ingredients Composition:
                  </h4>
                  <div className="table-responsive">
                    <table className="composition-table">
                      <thead>
                        <tr>
                          <th>Active Constituent</th>
                          <th>Strength / Per Serving</th>
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
                </div>
              )}

              {/* Nutritional Information if present */}
              {product.nutrition && product.nutrition.length > 0 && (
                <div className="nutrition-section">
                  <h4 className="nutrition-heading">Nutritional Values (Approx. per serving):</h4>
                  <div className="nutrition-pills-row">
                    {product.nutrition.map((n, i) => (
                      <div key={i} className="nutrition-pill">
                        <strong>{n.parameter}:</strong> {n.value}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Description Content */}
              <div
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                className="single-description-prose"
              />

              {/* Distribution & Contact Box */}
              <div className="single-distributor-info-box">
                <p>
                  <strong>Sourced & Distributed by:</strong> {COMPANY_INFO.name}<br />
                  <strong>Delhi Office:</strong> {COMPANY_INFO.address}<br />
                  <strong>Order & Delivery Desk:</strong> Call <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a> / <a href={`tel:${COMPANY_INFO.phoneAlt}`}>{COMPANY_INFO.phoneAlt}</a> or Email <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Product Banner / Education Section */}
      {product.bannerImage && (
        <section className="section-padding bg-light-neutral">
          <div className="container">
            <div className="section-header-center">
              <span className="section-eyebrow">
                <i className="fa-solid fa-image"></i> Visual Product Showcase
              </span>
              <h2 className="section-main-heading">Clinical Overview & Packaging Presentation</h2>
            </div>

            <div className="product-visual-banner-wrap">
              <img
                src={product.bannerImage}
                alt={`${product.name} Presentation`}
                className="product-banner-img"
              />
            </div>
          </div>
        </section>
      )}

      {/* Related Formulations from the 4-Product Portfolio */}
      {relatedProducts.length > 0 && (
        <section className="section-padding">
          <div className="container">
            <div className="section-header-split">
              <div>
                <span className="section-eyebrow">
                  <i className="fa-solid fa-capsules"></i> Complete Portfolio
                </span>
                <h2 className="section-main-heading">Other Available Formulations</h2>
              </div>
              <a
                href="/products"
                onClick={(e) => { e.preventDefault(); onNavigate('/products'); }}
                className="theme-link-btn"
              >
                <span>All Products</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="products-four-grid">
              {relatedProducts.map((rel) => (
                <div key={rel.slug} className="product-card-modern">
                  <div className="product-card-media">
                    <span className="product-category-badge">{rel.categoryName}</span>
                    <a
                      href={`/products/${rel.slug}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(`/products/${rel.slug}`); }}
                      className="product-card-img-link"
                    >
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="product-card-img-uncropped"
                      />
                    </a>
                  </div>

                  <div className="product-card-content">
                    <h3 className="product-card-title">
                      <a
                        href={`/products/${rel.slug}`}
                        onClick={(e) => { e.preventDefault(); onNavigate(`/products/${rel.slug}`); }}
                      >
                        {rel.name}
                      </a>
                    </h3>
                    <p className="product-card-desc">{rel.shortDesc}</p>

                    <div className="product-card-actions">
                      <a
                        href={`/products/${rel.slug}`}
                        onClick={(e) => { e.preventDefault(); onNavigate(`/products/${rel.slug}`); }}
                        className="btn-card-details"
                      >
                        <span>View Details</span>
                        <i className="fa-solid fa-arrow-right"></i>
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
